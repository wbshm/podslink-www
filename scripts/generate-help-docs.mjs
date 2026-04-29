import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { marked } from 'marked'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const contentDir = path.join(rootDir, 'content', 'help')
const generatedDir = path.join(rootDir, 'src', 'generated')
const generatedTsPath = path.join(generatedDir, 'help-docs.ts')
const generatedRoutesPath = path.join(generatedDir, 'help-routes.json')
const menuPath = path.join(contentDir, 'menu.md')
const publicHelpAssetsDir = path.join(rootDir, 'public', 'help-assets')

const docRoutes = new Map([
  ['home.md', '/help'],
  ['privacy.md', '/privacy'],
  ['agreement.md', '/agreement'],
  ['account-deletion.md', '/account-deletion'],
])

function normalizeSlashes(value) {
  return value.split(path.sep).join('/')
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return { attributes: {}, body: raw.trim() }
  }

  const lines = raw.split(/\r?\n/)
  if (lines[0] !== '---') {
    return { attributes: {}, body: raw.trim() }
  }

  let index = 1
  const attributes = {}

  while (index < lines.length && lines[index] !== '---') {
    const line = lines[index]
    const separator = line.indexOf(':')

    if (separator !== -1) {
      const key = line.slice(0, separator).trim()
      const value = line.slice(separator + 1).trim()
      attributes[key] = value
    }

    index += 1
  }

  const body = lines.slice(index + 1).join('\n').trim()
  return { attributes, body }
}

function buildPublicAssetBase(route) {
  return `/help-assets${route}`
}

function rewriteAssetPath(assetPath, docName, publicAssetBase) {
  if (
    !assetPath ||
    assetPath.startsWith('/') ||
    assetPath.startsWith('http://') ||
    assetPath.startsWith('https://') ||
    assetPath.startsWith('data:') ||
    assetPath.startsWith('#')
  ) {
    return assetPath
  }

  if (assetPath.startsWith('./')) {
    return `${publicAssetBase}/${assetPath.slice(2)}`
  }

  if (assetPath.startsWith(`${docName}/`)) {
    return `${publicAssetBase}/${assetPath.slice(docName.length + 1)}`
  }

  return `${publicAssetBase}/${assetPath}`
}

function rewriteAssetReferences(markdown, docName, publicAssetBase) {
  const normalizedMarkdown = markdown
    .replace(/<image\b/gi, '<img')
    .replace(/<\/image>/gi, '')

  const rewriteMatcher = (_, quote, assetPath) => {
    return `src=${quote}${rewriteAssetPath(assetPath, docName, publicAssetBase)}${quote}`
  }

  const rewriteMarkdownImage = (_, alt, assetPath) => {
    return `![${alt}](${rewriteAssetPath(assetPath, docName, publicAssetBase)})`
  }

  return normalizedMarkdown
    .replace(/src=(['"])([^'"]+)\1/g, rewriteMatcher)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, rewriteMarkdownImage)
}

async function walkMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await walkMarkdownFiles(fullPath)))
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'menu.md') {
      files.push(fullPath)
    }
  }

  return files
}

async function removeDirectoryContents(dir) {
  await fs.rm(dir, { recursive: true, force: true })
  await fs.mkdir(dir, { recursive: true })
}

async function copyDirectory(sourceDir, targetDir) {
  await fs.mkdir(targetDir, { recursive: true })
  const entries = await fs.readdir(sourceDir, { withFileTypes: true })

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name)
    const targetPath = path.join(targetDir, entry.name)

    if (entry.isDirectory()) {
      await copyDirectory(sourcePath, targetPath)
      continue
    }

    await fs.copyFile(sourcePath, targetPath)
  }
}

async function detectAssetDirectory(filePath) {
  const docName = path.basename(filePath, '.md')
  const assetDir = path.join(path.dirname(filePath), docName)

  try {
    const stat = await fs.stat(assetDir)
    return stat.isDirectory() ? assetDir : null
  } catch {
    return null
  }
}

function buildRoute(relativePath) {
  const normalized = normalizeSlashes(relativePath)

  if (docRoutes.has(normalized)) {
    return docRoutes.get(normalized)
  }

  const parsed = path.posix.parse(normalized)
  return `/${parsed.dir}/${parsed.name}`
}

function buildSectionKey(route) {
  if (route === '/help') {
    return 'help'
  }

  const segments = route.split('/').filter(Boolean)
  return segments[0] ?? 'help'
}

function parseMenu(menuSource) {
  const sections = []
  const lines = menuSource.split(/\r?\n/)
  let currentSection = null

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+(.+)$/)
    if (headingMatch) {
      currentSection = { title: headingMatch[1].trim(), items: [] }
      sections.push(currentSection)
      continue
    }

    const itemMatch = line.match(/^- \[(.+?)\]\((\/[^)]+)\)$/)
    if (itemMatch && currentSection) {
      currentSection.items.push({
        label: itemMatch[1].trim(),
        href: itemMatch[2].trim(),
      })
    }
  }

  return sections
}

function serializeTs(value) {
  return JSON.stringify(value, null, 2)
}

async function main() {
  await fs.mkdir(generatedDir, { recursive: true })
  await removeDirectoryContents(publicHelpAssetsDir)

  const markdownFiles = await walkMarkdownFiles(contentDir)
  const docs = []

  for (const filePath of markdownFiles) {
    const relativePath = normalizeSlashes(path.relative(contentDir, filePath))
    const route = buildRoute(relativePath)
    const raw = await fs.readFile(filePath, 'utf8')
    const { attributes, body } = parseFrontmatter(raw)
    const docName = path.basename(filePath, '.md')
    const assetDirectory = await detectAssetDirectory(filePath)
    const publicAssetBase = buildPublicAssetBase(route)
    const rewrittenBody = rewriteAssetReferences(body, docName, publicAssetBase)
    const html = marked.parse(rewrittenBody)

    if (assetDirectory) {
      const publicAssetDir = path.join(publicHelpAssetsDir, route.replace(/^\//, ''))
      await copyDirectory(assetDirectory, publicAssetDir)
    }

    docs.push({
      route,
      title: attributes.title || docName,
      section: buildSectionKey(route),
      sourcePath: relativePath,
      html,
      assetDirectory: assetDirectory ? normalizeSlashes(path.relative(rootDir, assetDirectory)) : null,
    })
  }

  docs.sort((left, right) => left.route.localeCompare(right.route))

  const menuSource = await fs.readFile(menuPath, 'utf8')
  const helpSections = parseMenu(menuSource)
  const helpDocsByRoute = Object.fromEntries(
    docs.map((doc) => [doc.route, {
      route: doc.route,
      title: doc.title,
      section: doc.section,
      sourcePath: doc.sourcePath,
      html: doc.html,
    }]),
  )

  const tsFile = `export interface HelpNavItem {\n  label: string;\n  href: string;\n}\n\nexport interface HelpNavSection {\n  title: string;\n  items: HelpNavItem[];\n}\n\nexport interface HelpDoc {\n  route: string;\n  title: string;\n  section: string;\n  sourcePath: string;\n  html: string;\n}\n\nexport const helpSections: HelpNavSection[] = ${serializeTs(helpSections)};\n\nexport const helpDocs: HelpDoc[] = ${serializeTs(docs.map(({ assetDirectory, ...doc }) => doc))};\n\nexport const helpDocsByRoute: Record<string, HelpDoc> = ${serializeTs(helpDocsByRoute)};\n\nexport const helpRoutes = helpDocs.map((doc) => doc.route);\n`

  await fs.writeFile(generatedTsPath, tsFile, 'utf8')
  await fs.writeFile(generatedRoutesPath, serializeTs(docs.map((doc) => ({
    route: doc.route,
    assetDirectory: doc.assetDirectory,
  }))), 'utf8')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
