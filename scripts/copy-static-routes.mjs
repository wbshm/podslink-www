import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const generatedRoutesPath = path.join(rootDir, 'src', 'generated', 'help-routes.json')

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath)
    return true
  } catch {
    return false
  }
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

async function main() {
  const indexPath = path.join(distDir, 'index.html')
  const notFoundPath = path.join(distDir, '404.html')
  const routes = JSON.parse(await fs.readFile(generatedRoutesPath, 'utf8'))

  await fs.copyFile(indexPath, notFoundPath)

  for (const routeEntry of routes) {
    const targetDir = path.join(distDir, routeEntry.route.replace(/^\//, ''))
    await fs.mkdir(targetDir, { recursive: true })
    await fs.copyFile(indexPath, path.join(targetDir, 'index.html'))

    if (routeEntry.assetDirectory) {
      const sourceAssetDir = path.join(rootDir, routeEntry.assetDirectory)
      if (await pathExists(sourceAssetDir)) {
        await copyDirectory(sourceAssetDir, targetDir)
      }
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
