export interface HelpNavItem {
  label: string;
  href: string;
}

export interface HelpNavSection {
  title: string;
  items: HelpNavItem[];
}

export interface HelpDoc {
  route: string;
  title: string;
  section: string;
  sourcePath: string;
  html: string;
}

export const helpSections: HelpNavSection[] = [
  {
    "title": "Basic introduction",
    "items": [
      {
        "label": "Product introduction",
        "href": "/basic/intro"
      },
      {
        "label": "Supported earbuds models",
        "href": "/basic/headset_models"
      },
      {
        "label": "Battery display",
        "href": "/basic/battery_display"
      },
      {
        "label": "Pop-up window that automatically connects",
        "href": "/basic/auto_pop_up"
      },
      {
        "label": "Matters needing attention",
        "href": "/basic/attention"
      }
    ]
  },
  {
    "title": "Advanced Function",
    "items": [
      {
        "label": "The AirPods feature an exclusive dynamic popup window",
        "href": "/func/dynamic_pop"
      },
      {
        "label": "Simple theme making",
        "href": "/func/theme"
      },
      {
        "label": "Advanced theme making",
        "href": "/func/advaced_theme"
      },
      {
        "label": "Gesture control",
        "href": "/func/gesture_control"
      },
      {
        "label": "Voice broadcast",
        "href": "/func/broadcast"
      },
      {
        "label": "Find earbuds",
        "href": "/func/find_device"
      },
      {
        "label": "Audio control",
        "href": "/func/audio_control"
      },
      {
        "label": "Desktop widget",
        "href": "/func/widget"
      },
      {
        "label": "Notification bar Settings",
        "href": "/func/notification_bar"
      }
    ]
  },
  {
    "title": "APP-FAQ",
    "items": [
      {
        "label": "Call noise",
        "href": "/faq/call_noise"
      },
      {
        "label": "How do I turn on and off noise reduction on AirPods Pro",
        "href": "/faq/noise_reduction"
      },
      {
        "label": "Earbuds stealing connection",
        "href": "/faq/stealing"
      },
      {
        "label": "There is no sound in the earbuds",
        "href": "/faq/no_sound"
      },
      {
        "label": "Repair earbuds",
        "href": "/faq/repaire"
      },
      {
        "label": "Earbuds noise cancellation",
        "href": "/faq/noise_cancellation"
      },
      {
        "label": "Application power consumption problem",
        "href": "/faq/power_consumption"
      },
      {
        "label": "How to add desktop widgets",
        "href": "/faq/add_widgets"
      },
      {
        "label": "Non-automatic recognition",
        "href": "/faq/recognition"
      },
      {
        "label": "The earbuds cover does not connect automatically",
        "href": "/faq/connect"
      },
      {
        "label": "Spatial audio",
        "href": "/faq/spatial_audio"
      },
      {
        "label": "Earbuds name setting",
        "href": "/faq/headset_name"
      },
      {
        "label": "The earbuds volume is relatively light",
        "href": "/faq/volume_light"
      },
      {
        "label": "The notification bar is not displayed",
        "href": "/faq/notification_bar"
      },
      {
        "label": "Status bar ICONS are not displayed",
        "href": "/faq/status_bar"
      },
      {
        "label": "Guide to in-ear detection",
        "href": "/faq/in_ear_detection"
      },
      {
        "label": "Applications do not pop up",
        "href": "/faq/not_pop_up"
      },
      {
        "label": "Battery access times out or does not update",
        "href": "/faq/battery_not_update"
      },
      {
        "label": "Charging capacity is not displayed",
        "href": "/faq/charging_not_displayed"
      },
      {
        "label": "How to display accurate power - to 1%",
        "href": "/faq/cacurate_power"
      }
    ]
  },
  {
    "title": "Relevant Considerations",
    "items": [
      {
        "label": "XIAOMI - Background resident Settings",
        "href": "/rel/xiaomi_back"
      },
      {
        "label": "OPPO - Background resident Settings",
        "href": "/rel/oppo_back"
      },
      {
        "label": "VIVO-Widget addition Guide",
        "href": "/rel/vivo_widget"
      },
      {
        "label": "VIVO - Background resident Settings",
        "href": "/rel/vivo_back"
      },
      {
        "label": "HUAWEI - Background resident Settings",
        "href": "/rel/huawei_back"
      },
      {
        "label": "Others - Background resident Settings",
        "href": "/rel/other_back"
      },
      {
        "label": "XIAOMI-Widget addition Guide",
        "href": "/rel/xiaomi_widget"
      },
      {
        "label": "HUAWEI - Widget addition Guide",
        "href": "/rel/huawei_widget"
      },
      {
        "label": "OPPO-Widget addition Guide",
        "href": "/rel/oppo_widget"
      },
      {
        "label": "Privacy Policy",
        "href": "/privacy"
      },
      {
        "label": "Terms of Service",
        "href": "/agreement"
      },
      {
        "label": "Account deletion",
        "href": "/account-deletion"
      },
      {
        "label": "Update description",
        "href": "/rel/update"
      }
    ]
  }
];

export const helpDocs: HelpDoc[] = [
  {
    "route": "/account-deletion",
    "title": "PodsLink Account & Data Deletion Request",
    "section": "account-deletion",
    "sourcePath": "account-deletion.md",
    "html": "<p>If you would like to delete your account and membership information related to this app, please follow the steps below:</p>\n<ol>\n<li>Send an email from the Google account you used to sign in, to <a href=\"mailto:xialongonly@gmail.com\">xialongonly@gmail.com</a> Use the subject line: &quot;Account Deletion Request - [PodsLink]&quot;</li>\n<li>We will verify your identity and delete your account and membership information within 7 business days.</li>\n</ol>\n<h2>Data Deletion Scope</h2>\n<ul>\n<li>Data that will be deleted: Account information, membership information</li>\n<li>No other personal data is stored</li>\n<li>Data that may be retained: Payment records may be retained for up to 180 days to comply with legal requirements</li>\n</ul>\n"
  },
  {
    "route": "/agreement",
    "title": "PodsLink Terms of Service",
    "section": "agreement",
    "sourcePath": "agreement.md",
    "html": "<p>Last Updated: 2025-04-01\nPlease read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the mobile application (the &quot;Service&quot;) operated by the PodsLink team (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;).\nYour access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.\nBy accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access or use the Service.</p>\n<h2>1. One-Time Payment</h2>\n<p>   The Service operates on a one-time payment model. Users will pay a one-time fee at the time of purchase, granting access to the corresponding features of the Service. We do not offer subscription-based or recurring payment options.</p>\n<h2>2. Content</h2>\n<p>Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material (&quot;Content&quot;). You are responsible for the Content that you post through the Service, including its legality, reliability, and appropriateness.</p>\n<p>By posting Content on or through the Service, you represent and warrant that: </p>\n<ul>\n<li>the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms;</li>\n<li>and the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity.</li>\n</ul>\n<p>We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>\n<p>You retain all of your rights to any Content you submit, post, or display on or through the Service and are responsible for protecting those rights. We take no responsibility for and assume no liability for Content you or any third party posts on or through the Service. However, by posting Content using the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content through the Service.</p>\n<h2>3. Accounts</h2>\n<p>   When you create an account, you guarantee that you are over the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account.\n   You are responsible for maintaining the confidentiality of your account and password, including but not limited to restricting access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether or not your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>\n<h2>4. Intellectual Property</h2>\n<p>   The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of the PodsLink team and its licensors. The Service is protected by copyright, trademark, and other laws of both the People&#39;s Republic of China and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the PodsLink team.</p>\n<h2>5. Termination</h2>\n<p>   We may terminate or suspend your account and block access to the Service immediately, without prior notice or liability, at our sole discretion, for any reason whatsoever, including but not limited to a breach of these Terms.\n   If you wish to terminate your account, you may simply stop using the Service.\n   All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>\n<h2>6. Indemnification</h2>\n<p>You agree to defend, indemnify, and hold harmless the PodsLink team and its licensees, licensors, employees, agents, officers, directors, contractors, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debts, and expenses (including but not limited to attorney’s fees) resulting from or arising out of: </p>\n<ul>\n<li>your use and access of the Service, by you or any person using your account and password; </li>\n<li>a breach of these Terms; </li>\n<li>or Content posted on the Service.</li>\n</ul>\n<h2>7. Limitation of Liability</h2>\n<p>In no event shall the PodsLink team, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>\n<ul>\n<li>your access to or use of or inability to access or use the Service; </li>\n<li>any conduct or Content of any third party on the Service; </li>\n<li>any Content obtained from the Service; </li>\n<li>and  unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</li>\n</ul>\n<h2>8. Disclaimer</h2>\n<p>Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. \nThe PodsLink team, its subsidiaries, affiliates, and licensors do not warrant that:</p>\n<ul>\n<li>the Service will function uninterrupted, secure, or available at any particular time or location; </li>\n<li>any errors or defects will be corrected;</li>\n<li>the Service is free of viruses or other harmful components; </li>\n<li>or the results of using the Service will meet your requirements.</li>\n</ul>\n<h2>9. Governing Law and Dispute Resolution</h2>\n<p>Applicable Law:\nThese Terms shall be governed and construed in accordance with the laws of the People’s Republic of China.</p>\n<p>Dispute Resolution:\nAny disputes arising from or related to these Terms shall first be resolved through friendly negotiation. If negotiation fails, the dispute shall be submitted to the China International Economic and Trade Arbitration Commission (CIETAC) for arbitration. The arbitration will take place in Beijing, and the language of arbitration shall be Chinese.</p>\n<p>Court Jurisdiction:\nIf the dispute cannot be resolved through arbitration, either party may submit the dispute to the competent courts in Beijing, China.</p>\n<h2>10. Modifications</h2>\n<p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&#39; notice before the new terms take effect. \nBy continuing to access or use the Service after any revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you are no longer authorized to use the Service.</p>\n<h2>11. Contact Us</h2>\n<p>If you have any questions about these Terms, please contact us at Email: <a href=\"mailto:xiaolongonly@gmail.com\">xiaolongonly@gmail.com</a></p>\n<p>Last Updated: 2025-04-01</p>\n"
  },
  {
    "route": "/basic/attention",
    "title": "Matters needing attention",
    "section": "basic",
    "sourcePath": "basic/attention.md",
    "html": "<blockquote>\n<p>Here are the important things to keep in mind when using PodsLink software:</p>\n</blockquote>\n<h4>1. Background Stay Guide</h4>\n<ul>\n<li>The software needs to run in the background to ensure that functions such as pop-up windows and displaying battery level are working properly. The background resident operation varies for different phone models as follows:<ul>\n<li><a href=\"/rel/xiaomi_back\">XIAOMI - Background resident Settings</a></li>\n<li><a href=\"/rel/oppo_back\">OPPO - Background resident Settings</a></li>\n<li><a href=\"/rel/vivo_back\">VIVO - Background resident Settings</a></li>\n<li><a href=\"/rel/huawei_back\">HUAWEI - Background resident Settings</a></li>\n<li><a href=\"/rel/other_back\">Others - Background resident Settings</a></li>\n</ul>\n</li>\n</ul>\n<h4>2. Desktop Widget Addition Tutorial</h4>\n<ul>\n<li>There are many types of mobile phones, and the way to add widgets to different mobile phone models is different. For more details, please refer to:<ul>\n<li><a href=\"/rel/xiaomi_widget\">XIAOMI-Widget addition Guide</a></li>\n<li><a href=\"/rel/vivo_widget\">VIVO-Widget addition Guide</a></li>\n<li><a href=\"/rel/huawei_widget\">HUAWEI - Widget addition Guide</a></li>\n<li><a href=\"/rel/oppo_widget\">OPPO-Widget addition Guide</a></li>\n</ul>\n</li>\n</ul>\n<h4>3. Service Agreement and Privacy Policy regarding the software</h4>\n<ul>\n<li><a href=\"/privacy\">Service Agreement and Privacy Policy</a></li>\n</ul>\n"
  },
  {
    "route": "/basic/auto_pop_up",
    "title": "Pop-up window that automatically connects",
    "section": "basic",
    "sourcePath": "basic/auto_pop_up.md",
    "html": "<h4>1. Function Introduction</h4>\n<ul>\n<li>When the earbuds are connected, a pop-up window will automatically appear on the desktop to show the battery level effect. This function needs to be enabled in the pop-up window settings after the earbuds are added.  </li>\n<li><img src=\"https://github.com/PodsLink/podslink-help/assets/14847146/1d4b9487-b102-415d-a8d3-f6ec634e9afe\" width=\"70%\" alt=\"\"></li>\n<li>Note: It is necessary to enable the background persistent setting to ensure that the application is not cleaned by the system.</li>\n</ul>\n<h4>2. Common Problems</h4>\n<ul>\n<li><a href=\"/faq/not_pop_up\">Applications do not pop up</a></li>\n</ul>\n<h4>3 More Fun</h4>\n<ul>\n<li><a href=\"/func/dynamic_pop\">The AirPods feature an exclusive dynamic popup window</a></li>\n<li><a href=\"/func/theme\">Simple theme making</a></li>\n</ul>\n"
  },
  {
    "route": "/basic/battery_display",
    "title": "Battery display",
    "section": "basic",
    "sourcePath": "basic/battery_display.md",
    "html": "<h4>1. Function Description</h4>\n<ul>\n<li>Once the earbuds have been added and connected, you can view the battery level display within the software.</li>\n</ul>\n<img src=\"/help-assets/basic/battery_display/img.png\" width=\"70%\" alt=\"\">\n\n<h4>2. FAQ</h4>\n<ul>\n<li><a href=\"/faq/battery_not_update\">Battery access times out or does not update</a></li>\n<li><a href=\"/faq/cacurate_power\">How to display accurate power - to 1%</a></li>\n<li><a href=\"/faq/charging_not_displayed\">Charging capacity is not displayed</a></li>\n</ul>\n<h4>3. More Fun</h4>\n<ul>\n<li><a href=\"/basic/auto_pop_up\">Pop-up window that automatically connects</a></li>\n<li><a href=\"/func/widget\">Power level display in widgets</a></li>\n<li><a href=\"/func/notification_bar\">Power level display in notification bar/status bar</a></li>\n</ul>\n"
  },
  {
    "route": "/basic/headset_models",
    "title": "Supported earbuds models",
    "section": "basic",
    "sourcePath": "basic/headset_models.md",
    "html": "<ul>\n<li>Currently, supported earbuds models include: AirPods, Beats, Huaqiangbei earbuds models, specific models can be searched and viewed within the software.</li>\n<li>When you first use the software, you can add your earbuds to it. The software supports automatic scanning for adding earbuds and manual selection of models.</li>\n</ul>\n"
  },
  {
    "route": "/basic/intro",
    "title": "Product introduction",
    "section": "basic",
    "sourcePath": "basic/intro.md",
    "html": "<p>The PodsLink APP is a specialized tool software designed for &quot;smart headsets&quot; on Android (earbuds assistant), enabling users to access features such as power monitoring and earbuds pop-up on the Android platform, and enjoy more personalized services for their earbuds (voice prompts, gesture settings, location search, etc.). Currently, PodsLink primarily supports AirPods, Beats, Huaqiangbei and other earbuds brands.&quot;</p>\n"
  },
  {
    "route": "/faq/add_widgets",
    "title": "How to add desktop widgets",
    "section": "faq",
    "sourcePath": "faq/add_widgets.md",
    "html": "<img src=\"/help-assets/faq/add_widgets/img.png\" alt=\"\" width=\"70%\">\n\n<ol>\n<li>Press the blank section of the desktop and select &quot;Add Widget&quot;.</li>\n<li>Find the PodsLink widget in the list, drag it and drop it on your desktop</li>\n<li>Click widget and select a widget from the list.</li>\n</ol>\n<p>Different phones have different ways to add widgets</p>\n<ul>\n<li><a href=\"/rel/xiaomi_widget\">XIAOMI-Widget addition Guide</a></li>\n<li><a href=\"/rel/vivo_widget\">VIVO-Widget addition Guide</a></li>\n<li><a href=\"/rel/huawei_widget\">HUAWEI - Widget addition Guide</a></li>\n<li><a href=\"/rel/oppo_widget\">OPPO-Widget addition Guide</a></li>\n</ul>\n"
  },
  {
    "route": "/faq/battery_not_update",
    "title": "Battery access times out or does not update",
    "section": "faq",
    "sourcePath": "faq/battery_not_update.md",
    "html": "<ol>\n<li>Permissions are not set properly<ul>\n<li>On the Earbuds Settings screen - Permission Settings, you can view required permissions and set required permissions and background resident to ensure stable functions</li>\n</ul>\n</li>\n<li>The earbud is not added or the earbuds model is wrong<ul>\n<li>In the earbuds Settings screen - more options in the upper left corner - select Add Earbuds and add the earbuds again.</li>\n</ul>\n</li>\n</ol>\n"
  },
  {
    "route": "/faq/cacurate_power",
    "title": "How to display accurate power - to 1%",
    "section": "faq",
    "sourcePath": "faq/cacurate_power.md",
    "html": "<p>Only applicable to AirPods Beats series earbuds.</p>\n<ol>\n<li>Connect the earbuds to the phone.</li>\n<li>Place the earbuds in the box with the lid open.</li>\n<li>Press and hold the small dot on the back cover to make the earbuds enter the pairing state (the box indicator flashes white).</li>\n<li>Wait for app battery update (Accurate battery only works in earbuds pairing mode)</li>\n</ol>\n<blockquote>\n<p>Finally, if you still can&#39;t check the charging capacity, it may be that the earbuds itself cannot support.</p>\n</blockquote>\n"
  },
  {
    "route": "/faq/call_noise",
    "title": "Call noise",
    "section": "faq",
    "sourcePath": "faq/call_noise.md",
    "html": "<p>The earbud microphone is on the bottom of the earbuds. It is recommended that you tilt the bottom of the microphone forward to avoid the surrounding environment.</p>\n"
  },
  {
    "route": "/faq/charging_not_displayed",
    "title": "Charging capacity is not displayed",
    "section": "faq",
    "sourcePath": "faq/charging_not_displayed.md",
    "html": "<ul>\n<li><p>Proper posture</p>\n</li>\n<li><p>Charging bay power requires more than one earbud placed in the charging bay, and keep the cover open to display.</p>\n<blockquote>\n<p>Tips: Note on Huaqiangbei earbuds using app</p>\n</blockquote>\n</li>\n<li><p>Since there are many types of Huaqiangbei earbuds on the market, and the chip schemes of different categories of Huaqiangbei earbuds are different, the functional effects presented on the APP will be different.</p>\n</li>\n<li><p>Some Huaqiangbei earbuds may not support the charging bin power display, if you have not shown the charging bin power you can try to view through the accurate power scheme.</p>\n<ol>\n<li>Connect the earbuds to the phone.</li>\n<li>Place the earbuds in the box with the lid open.</li>\n<li>Press and hold the small dot on the back cover to make the earbuds enter the pairing state (the box indicator flashes white).</li>\n<li>Wait for app battery update (Accurate battery only works in earbuds pairing mode)</li>\n</ol>\n<blockquote>\n<p>Finally, if you still can&#39;t check the charging capacity, it may be that the earbuds itself cannot support.</p>\n</blockquote>\n</li>\n</ul>\n"
  },
  {
    "route": "/faq/connect",
    "title": "The earbuds cover does not connect automatically",
    "section": "faq",
    "sourcePath": "faq/connect.md",
    "html": "<ol>\n<li>In the phone&#39;s system setting - Bluetooth - cancel the earbuds pairing first, and then re-pair it.</li>\n<li>The ear phone will automatically connect to the most recently connected phone</li>\n</ol>\n"
  },
  {
    "route": "/faq/headset_name",
    "title": "Earbuds name setting",
    "section": "faq",
    "sourcePath": "faq/headset_name.md",
    "html": "<p>You can rename the earbuds name through the phone&#39;s system Settings - Bluetooth\nIt is an alias and takes effect only on the current phone</p>\n"
  },
  {
    "route": "/faq/in_ear_detection",
    "title": "Guide to in-ear detection",
    "section": "faq",
    "sourcePath": "faq/in_ear_detection.md",
    "html": "<ul>\n<li>Check the status of the small ear icon in the wearing state</li>\n<li>When worn, there is a small ear icon. Remove the earbuds and the small ear icon disappears. This is the reflection of light ear detection. When the small ear icon disappears, the music will be paused and the music will be displayed. (There is a 3-5 second delay in ear detection due to protocol acquisition)</li>\n</ul>\n<img src=\"/help-assets/faq/in_ear_detection/img.png\" width=\"70%\" alt=\"\">\n\n<ul>\n<li>If it is a specific music player can not be detected in the ear</li>\n<li>You can check whether the &quot;Line control&quot; function of music players such as NetEase Cloud/Kugou is turned on or not.</li>\n<li>If you can&#39;t do ear detection when the app isn&#39;t open, Maybe the application background is cleaned up, and you can set up the background resident according to the guidelines to solve the problem.</li>\n</ul>\n"
  },
  {
    "route": "/faq/no_sound",
    "title": "There is no sound in the earbuds",
    "section": "faq",
    "sourcePath": "faq/no_sound.md",
    "html": "<p>There is no sound in the earbuds, which belongs to the problem of the earbud hardware. You can try to reconnect or contact the earbuds after-sales ~</p>\n"
  },
  {
    "route": "/faq/noise_cancellation",
    "title": "Earbuds noise cancellation",
    "section": "faq",
    "sourcePath": "faq/noise_cancellation.md",
    "html": "<p>Hello, at present, the noise reduction control scheme is limited and cannot be implemented. We will add suitable schemes in the future.</p>\n"
  },
  {
    "route": "/faq/noise_reduction",
    "title": "How do I turn on and off noise reduction on AirPods Pro",
    "section": "faq",
    "sourcePath": "faq/noise_reduction.md",
    "html": "<p>AirPods Pro earbuds, you can long press the ear handle while wearing state to switch the noise reduction transparent.</p>\n"
  },
  {
    "route": "/faq/not_pop_up",
    "title": "Applications do not pop up",
    "section": "faq",
    "sourcePath": "faq/not_pop_up.md",
    "html": "<ol>\n<li>Make sure the auto pop-up is enabled in the app<ul>\n<li>The application will pop up when the earbud is connected. You can put the earbuds in the charging bin, close the lid, and open the lid again after the Bluetooth disconnects.<img src=\"/help-assets/faq/not_pop_up/img.png\" width=\"70%\" alt=\"\"></li>\n</ul>\n</li>\n<li>The background resident is not set properly, resulting in the application background being killed.\nClick to view the background permanent setting, set the background permanent to ensure stable function</li>\n</ol>\n"
  },
  {
    "route": "/faq/notification_bar",
    "title": "The notification bar is not displayed",
    "section": "faq",
    "sourcePath": "faq/notification_bar.md",
    "html": "<ol>\n<li><p>You can check your phone&#39;s system Settings - Notification Management - PodsLink - AirPods Battery Status to see if the app is disabled and the notification display is enabled.</p>\n<img src=\"/help-assets/faq/notification_bar/img.png\" width=\"70%\" alt=\"\">\n</li>\n<li><p>The notification bar is displayed as follows: If the status bar icon is not displayed, please move to the status bar icon</p>\n<img src=\"/help-assets/faq/notification_bar/img_1.png\" width=\"70%\" alt=\"\"></li>\n</ol>\n"
  },
  {
    "route": "/faq/power_consumption",
    "title": "Application power consumption problem",
    "section": "faq",
    "sourcePath": "faq/power_consumption.md",
    "html": "<ol>\n<li>Continuous Bluetooth low power scanning is required when the earbud is connected.</li>\n<li>it is inevitable that the software will increase the power consumption, but the power consumption of this software is very small.</li>\n</ol>\n"
  },
  {
    "route": "/faq/recognition",
    "title": "Non-automatic recognition",
    "section": "faq",
    "sourcePath": "faq/recognition.md",
    "html": "<ul>\n<li>If your earbuds is not recognized by the app,</li>\n<li>You can click Add Earbuds in the app - manually select the earbuds model - select your earbuds according to the earbuds type, you can add to the app ~</li>\n</ul>\n"
  },
  {
    "route": "/faq/repaire",
    "title": "Repair earbuds",
    "section": "faq",
    "sourcePath": "faq/repaire.md",
    "html": "<ol>\n<li><ol>\n<li>Smart connection earbuds</li>\n</ol>\n<ul>\n<li>On the Settings screen of the application - Add earbuds - intelligently add an identification earbuds as prompted.</li>\n</ul>\n</li>\n<li><ol start=\"2\">\n<li>Manually connect the earbuds</li>\n<li>First you need to put two earbuds into the earbuds case, keeping the lid open.</li>\n<li>Press and hold the small dot on the back of the box for about 3 seconds to make the AirPods enter the pairing state.</li>\n<li>The indicator light in the middle of the paired earbuds box will display white light and blink.</li>\n<li>Then enter the Bluetooth function list of the Android phone, you can see the AirPods device, click Connect, and you can use AirPods if the connection is successful.</li>\n</ol>\n</li>\n</ol>\n"
  },
  {
    "route": "/faq/spatial_audio",
    "title": "Spatial audio",
    "section": "faq",
    "sourcePath": "faq/spatial_audio.md",
    "html": "<ul>\n<li>At present, the application does not support spatial audio Settings, and spatial audio is multi-track audio music. Currently, only Spatial Audio Music on Apple Music supports spatial audio.</li>\n<li>Spatial stereo is a new feature in IOS15.1 that converts two-channel audio into multi-track audio and then outputs it to the earbuds.</li>\n<li>PodsLink does not support spatial audio switch control. Although it is useless to open it now, there may be supportive music on Android later, and we will follow up on this program.</li>\n</ul>\n"
  },
  {
    "route": "/faq/status_bar",
    "title": "Status bar ICONS are not displayed",
    "section": "faq",
    "sourcePath": "faq/status_bar.md",
    "html": "<ol>\n<li>The status bar icon belongs to the notification icon. The status bar icon is displayed only when the notification is displayed</li>\n<li>Make sure that the battery can be displayed in the popup window of the application, and the notification bar can be displayed normally<img src=\"/help-assets/faq/status_bar/img.png\" width=\"70%\" alt=\"\"></li>\n<li>If you are the following models, you can check the status bar of the relevant models.</li>\n</ol>\n<h4>Huawei：</h4>\n<ul>\n<li>If the system is before Hongmeng 3.0<ol>\n<li>In the phone&#39;s system Settings - Notification - More Notification Settings - enable notifications when the icon is displayed.</li>\n<li>In the phone&#39;s system Settings - Notifications - PodsLink - AirPods Battery Status - Turn off silent notification.</li>\n</ol>\n</li>\n<li>Hongmeng 4.0 and above systems are forced to use APP icon display. We have submitted feedback on this issue at the Pollen Club and there is currently no solution.</li>\n</ul>\n<h4>XIAOMI</h4>\n<ul>\n<li>If it is a system before MIUI12.5.3, you can modify the style to the native style in the system Settings - Notification and Control Center - Notification Management - Notification display Settings of the phone.</li>\n<li>The MIUI of MIUI12.5.3 and above mandatory use of APP icon display. We have reported this problem to the MIUI team, and there is no solution for the time being.</li>\n</ul>\n<h4>Meizu</h4>\n<ul>\n<li>Meizu does not support the status bar display on Flyme UI customization.</li>\n</ul>\n<h4>VIVO</h4>\n<ul>\n<li>In the phone&#39;s system Settings - Notification and status bar there is an icon beautification, you can change the icon beautification to the original</li>\n</ul>\n"
  },
  {
    "route": "/faq/stealing",
    "title": "Earbuds stealing connection",
    "section": "faq",
    "sourcePath": "faq/stealing.md",
    "html": "<ul>\n<li>This application does not affect the connection of the earbuds. If the earbuds is secretly connected, it is recommended that you switch the charging bin again to see if it is not properly covered.</li>\n<li>You can also connect an IOS device to update the earbud firmware to improve functional stability</li>\n</ul>\n"
  },
  {
    "route": "/faq/volume_light",
    "title": "The earbuds volume is relatively light",
    "section": "faq",
    "sourcePath": "faq/volume_light.md",
    "html": "<ol>\n<li>if you find that the volume of the Bluetooth earbuds is very light, you can turn on and off the absolute volume of the Bluetooth in the developer option of the phone, and then reconnect the earbuds.</li>\n<li>so that the volume of the earbuds and the phone will be synchronized, you can use the phone&#39;s volume control to control the volume of the earbuds. </li>\n<li>On Hongmeng and some systems, the developer option is not Bluetooth absolute volume option. Sync media volume can be turned on in your phone&#39;s Bluetooth - Earbuds Name - Settings</li>\n</ol>\n"
  },
  {
    "route": "/func/advaced_theme",
    "title": "Advanced theme Settings",
    "section": "func",
    "sourcePath": "func/advaced_theme.md",
    "html": "<h3>Function introduction:</h3>\n<ul>\n<li>Basic popup production: including the replacement function of the popup background, suitable for new users to make a simple popup theme.</li>\n<li>Advanced pop-up production: On the basis of the new [earbuds map] replacement and [screen effect] function, suitable for professional users to use, to produce a more sophisticated, integrated theme.</li>\n</ul>\n<h3>Enable functions:</h3>\n<p>In the upper right corner of my page, set the button --&gt; Enable Advanced production mode</p>\n<img width=\"809\" alt=\"image\" src=\"https://github.com/PodsLink/podslink-help/assets/14847146/39a2c09e-cc70-4c4a-b4f2-7c9ae2aa573c\">\n\n<h3>Functional effects:</h3>\n<p>When you return to the pop-up creation page, you will have new functional Settings.</p>\n<img width=\"307\" alt=\"image\" src=\"https://github.com/PodsLink/podslink-help/assets/14847146/ec20cbd3-7034-44f1-894a-3bb84a0e8f07\">"
  },
  {
    "route": "/func/audio_control",
    "title": "Audio control",
    "section": "func",
    "sourcePath": "func/audio_control.md",
    "html": "<h4>1. Automatically adjust the music volume</h4>\n<ul>\n<li>Earbuds automatically adjust the volume after connection, protect the ear hearing ~</li>\n</ul>\n<h4>2. Automatic in-ear detection</h4>\n<ul>\n<li>Function Introduction<ul>\n<li>Take off earbuds to pause music, put on earbuds to play music automatically</li>\n<li>This membership feature is only available for genuine AirPods 1 / 2 / 3 and AirPods Pro1.</li>\n</ul>\n</li>\n<li>AirPods Pro2 is currently not supported due to limitations in the earbud firmware. Support will be added after the earbud firmware is updated.</li>\n<li>Notes<ul>\n<li>In-ear detection is affected by the Apple earbuds protocol itself, and there is a 3 to 5-second delay.</li>\n</ul>\n</li>\n<li>What if in-ear detection doesn&#39;t work?</li>\n</ul>\n<h4>3. In-ear detection shield (Huaqiangbei earbuds)</h4>\n<ul>\n<li>It supports setting the in-ear detection shield for Huaqiangbei earbuds with unstable in-ear detection.</li>\n</ul>\n"
  },
  {
    "route": "/func/broadcast",
    "title": "Voice broadcast",
    "section": "func",
    "sourcePath": "func/broadcast.md",
    "html": "<h2>Function description</h2>\n<ul>\n<li>The voice broadcast function of the smart earbud means that the earbuds can automatically identify and play information from the mobile phone, such as incoming reminder, low battery notification, wechat notification, QQ message notification, custom broadcast content, etc. Users only need to wear earbuds to get the information they need anytime, anywhere, without having to check their phones frequently.</li>\n</ul>\n<h2>Functional renderings</h2>\n<img src=\"/help-assets/func/broadcast/img.png\" width=\"70%\" alt=\"\">"
  },
  {
    "route": "/func/dynamic_pop",
    "title": "The AirPods feature an exclusive dynamic popup window",
    "section": "func",
    "sourcePath": "func/dynamic_pop.md",
    "html": "<h4>1. Function description:</h4>\n<ul>\n<li>Dynamic popup: earbuds rotation animation, enhanced fruit restoration effect, dynamic popup effect.</li>\n<li>Supported models:<ul>\n<li>AirPods series (excluding Max)</li>\n<li>Huaqiangbei series</li>\n<li>PowerBeats Pro</li>\n</ul>\n</li>\n</ul>\n<h4>2. Functional effect:</h4>\n<img src=\"/help-assets/func/dynamic_pop/img.png\" width=\"70%\" alt=\"\">"
  },
  {
    "route": "/func/find_device",
    "title": "Find earbuds",
    "section": "func",
    "sourcePath": "func/find_device.md",
    "html": "<h4>Function Introduction</h4>\n<p>For member users to provide auxiliary search earbuds function</p>\n<ul>\n<li>The app records the geo-location of the last earbud connection (the app needs to be running in the background) to help you locate the approximate range of the earbuds;</li>\n<li>If earbuds are nearby, try connecting them and playing a sound to help locate them;</li>\n<li>If you only lose one earbud, try to close the left/right channel to help confirm;</li>\n<li>If none of the above helps you, try the attached earbud device.</li>\n</ul>\n<h4>Screenshot effect</h4>\n<img src=\"/help-assets/func/find_device/img.png\" width=\"70%\" alt=\"\">\n\n<h4>Note:</h4>\n<p>When playing the sound, the sound will be adjusted to the maximum, and play, remember not to look for earbuds while wearing.</p>\n"
  },
  {
    "route": "/func/gesture_control",
    "title": "Gesture control",
    "section": "func",
    "sourcePath": "func/gesture_control.md",
    "html": "<ol>\n<li>AirPods 3, Pro, Max, Beats series earbuds button setting<ul>\n<li>The default functions can be set to play/pause, cut songs, pop-up window, broadcast battery, voice assistant (only supports some mobile phones), etc</li>\n</ul>\n</li>\n<li>AirPods 1,  2 earphones Tap to set <ul>\n<li>When wearing the earbuds, tapping the earbuds takes effect, and you can set the default tap function to other shortcut commands</li>\n</ul>\n</li>\n<li>Universal earbuds gesture Settings <ul>\n<li>Customize the default gesture/button function of the earbuds to other shortcut functions</li>\n</ul>\n</li>\n</ol>\n"
  },
  {
    "route": "/func/notification_bar",
    "title": "Notification bar Settings",
    "section": "func",
    "sourcePath": "func/notification_bar.md",
    "html": "<h4>Function introduction:</h4>\n<p>For member users to provide personalized quick view of power, including drop-down/lock screen notification bar, status bar quick view of power, and support a variety of style effects for you to choose.</p>\n<h4>Screenshot effect:</h4>\n<img src=\"/help-assets/func/notification_bar/img.png\" width=\"70%\" alt=\"\">\n\n<h2>Note:</h2>\n<ul>\n<li>Some mobile phone systems on the status bar icon display will have restrictions do not display, detailed solutions see</li>\n<li><a href=\"/faq/notification_bar\">The notification or status bar is not displayed</a></li>\n</ul>\n"
  },
  {
    "route": "/func/theme",
    "title": "Simple theme making",
    "section": "func",
    "sourcePath": "func/theme.md",
    "html": "<h4>1. Function description:</h4>\n<ul>\n<li>Create your own personalized pop-up skin, the specific support for custom functional elements are as follows<ul>\n<li>Text color: Support bright color system, dark color system</li>\n<li>Pop-up background: Support to set image resources (free), dynamic resources (GIF, video, VIP exclusive)</li>\n</ul>\n</li>\n</ul>\n<h4>2. Effect display:</h4>\n<ul>\n<li>Below are some excellent pop-ups made by users, and more popup themes can be viewed in the square.</li>\n</ul>\n<img src=\"/help-assets/func/theme/img.png\" width=\"70%\" alt=\"\">"
  },
  {
    "route": "/func/widget",
    "title": "Desktop widget",
    "section": "func",
    "sourcePath": "func/widget.md",
    "html": "<h4>Function description</h4>\n<p>Provide classic and popular desktop widgets for member users, so that you can easily check the power supply</p>\n<ul>\n<li>Classic: A widget that restores the apple effect as much as possible;</li>\n<li>Popular: A popular widget that can customize the background image</li>\n</ul>\n<h4>Screenshot effect</h4>\n<img src=\"/help-assets/func/widget/img.png\" width=\"70%\" alt=\"\">\n\n<ul>\n<li><a href=\"/rel/xiaomi_widget\">Widget adding tutorial - Xiaomi</a></li>\n<li><a href=\"/rel/oppo_widget\">Widget adding tutorial -OPPO</a></li>\n<li><a href=\"/rel/vivo_widget\">Widget adding tutorial -VIVO</a></li>\n<li><a href=\"/rel/huawei_widget\">Widget adding tutorial - Huawei</a></li>\n</ul>\n"
  },
  {
    "route": "/help",
    "title": "Home page",
    "section": "help",
    "sourcePath": "home.md",
    "html": "<h1>Welcome！</h1>\n<p>Welcome to the PodsLink Documentation Center</p>\n<p>PodsLink product documentation is all here, including the basic introduction, advanced features, FAQ, precautions four parts.\nHope you enjoy using!</p>\n<h2>Basic introduction</h2>\n<ul>\n<li><a href=\"/basic/intro\">Product introduction</a></li>\n<li><a href=\"/basic/headset_models\">Supported earbuds models</a></li>\n<li><a href=\"/basic/battery_display\">Battery display</a></li>\n<li><a href=\"/basic/auto_pop_up\">Pop-up window that automatically connects</a></li>\n<li><a href=\"/basic/attention\">Matters needing attention</a></li>\n</ul>\n<h2>Advanced Function</h2>\n<ul>\n<li><a href=\"/func/dynamic_pop\">The AirPods feature an exclusive dynamic popup window</a></li>\n<li><a href=\"/func/theme\">Simple theme making</a></li>\n<li><a href=\"/func/advaced_theme\">Advanced theme making</a></li>\n<li><a href=\"/func/gesture_control\">Gesture control</a></li>\n<li><a href=\"/func/broadcast\">Voice broadcast</a></li>\n<li><a href=\"/func/find_device\">Find earbuds</a></li>\n<li><a href=\"/func/audio_control\">Audio control</a></li>\n<li><a href=\"/func/widget\">Desktop widget</a></li>\n<li><a href=\"/func/notification_bar\">Notification bar Settings</a></li>\n</ul>\n<h2>APP-FAQ</h2>\n<ul>\n<li><a href=\"/faq/call_noise\">Call noise</a></li>\n<li><a href=\"/faq/noise_reduction\">How do I turn on and off noise reduction on AirPods Pro</a></li>\n<li><a href=\"/faq/stealing\">Earbuds stealing</a></li>\n<li><a href=\"/faq/no_sound\">There is no sound in the earbuds</a></li>\n<li><a href=\"/faq/repaire\">Repair earbuds</a></li>\n<li><a href=\"/faq/noise_cancellation\">Earbuds noise cancellation</a></li>\n<li><a href=\"/faq/power_consumption\">Application power consumption problem</a></li>\n<li><a href=\"/faq/add_widgets\">How to add desktop widgets</a></li>\n<li><a href=\"/faq/recognition\">Non-automatic recognition</a></li>\n<li><a href=\"/faq/connect\">The earbuds cover does not connect automatically</a></li>\n<li><a href=\"/faq/spatial_audio\">Spatial audio</a></li>\n<li><a href=\"/faq/headset_name\">Earbuds name setting</a></li>\n<li><a href=\"/faq/volume_light\">The earbuds volume is relatively light</a></li>\n<li><a href=\"/faq/notification_bar\">The notification bar is not displayed</a></li>\n<li><a href=\"/faq/status_bar\">Status bar ICONS are not displayed</a></li>\n<li><a href=\"/faq/in_ear_detection\">Guide to in-ear detection</a></li>\n<li><a href=\"/faq/not_pop_up\">Applications do not pop up</a></li>\n<li><a href=\"/faq/battery_not_update\">Battery access times out or does not update</a></li>\n<li><a href=\"/faq/charging_not_displayed\">Charging capacity is not displayed</a></li>\n<li><a href=\"/faq/cacurate_power\">How to display accurate power - to 1%</a></li>\n</ul>\n<h2>Relevant Considerations</h2>\n<ul>\n<li><a href=\"/rel/xiaomi_back\">XIAOMI - Background resident Settings</a></li>\n<li><a href=\"/rel/oppo_back\">OPPO - Background resident Settings</a></li>\n<li><a href=\"/rel/vivo_widget\">VIVO-Widget addition Guide</a></li>\n<li><a href=\"/rel/vivo_back\">VIVO - Background resident Settings</a></li>\n<li><a href=\"/rel/huawei_back\">HUAWEI - Background resident Settings</a></li>\n<li><a href=\"/rel/other_back\">Others - Background resident Settings</a></li>\n<li><a href=\"/rel/xiaomi_widget\">XIAOMI-Widget addition Guide</a></li>\n<li><a href=\"/rel/huawei_widget\">HUAWEI - Widget addition Guide</a></li>\n<li><a href=\"/rel/oppo_widget\">OPPO-Widget addition Guide</a></li>\n<li><a href=\"/privacy\">Privacy Policy</a></li>\n<li><a href=\"/agreement\">Terms of Service</a></li>\n<li><a href=\"/account-deletion\">Account deletion</a></li>\n<li><a href=\"/rel/update\">Update description</a></li>\n</ul>\n"
  },
  {
    "route": "/privacy",
    "title": "PodsLink Privacy Policy",
    "section": "privacy",
    "sourcePath": "privacy.md",
    "html": "<p>Welcome to the products and services provided by 「PodsLink」! 「PodsLink」 (or simply &quot;we&quot;) understands the importance of personal information to you, and we solemnly commit to protecting the personal information and privacy of users (hereinafter referred to as &quot;users&quot; or &quot;you&quot;) who use our products and services (collectively referred to as &quot;PodsLink services&quot;). When you use PodsLink services, we may collect and use your relevant personal information. We hope that this &quot;PodsLink Privacy Policy&quot; (hereinafter referred to as &quot;this policy&quot;) will explain the rules for processing your personal information when we collect and use it, as well as the ways we provide for you to access, correct, delete, and protect this personal information, to better safeguard your rights and interests.\nThis &quot;PodsLink Privacy Policy&quot; (hereinafter referred to as &quot;this Privacy Policy&quot;) applies to all PodsLink services we provide.</p>\n<ul>\n<li>We will describe each of the types of personal information we collect about you and the purposes for which we collect it so that you can understand the specific types of personal information we collect for a particular function, why we use it and how we collect it.</li>\n<li>When you use some functions, we will collect some sensitive information from you with your consent, unless it is required by relevant laws and regulations.</li>\n<li>At present, 「PodsLink」 will not actively share or transfer your personal information to any third party, if there is any other sharing or transfer of your personal information, we will obtain your express consent.</li>\n<li>Currently, 「PodsLink」 will not actively obtain your personal information from third parties. If it is necessary to obtain your personal information indirectly from a third party in the future for business development, we will specify the source, type and scope of use of your personal information before acquisition. We will strictly comply with the relevant laws and regulations and will ask third parties to guarantee the legality of the information they provide.</li>\n<li>We will try our best to protect your personal information rationally and legitimately by taking the secure measures.</li>\n</ul>\n<p>If you start it without agreeing this Privacy Policy, we would only collect the necessary information to maintain the fundamental function of 「PodsLink」. Therefore, we could not provide you with the complete product and services. However, your information would be protected by the same secure measures.</p>\n<p>We attach great importance to protect your personal information, dealing it with diligence and caution as our obligation. We suggest you read the whole terms of this Privacy Policy seriously and completely, expecting to introduce how we would deal with your personal information. Please pay more attention to the bold contents relating to your information and your rights. And now please read the appropriate sections according to the following index.</p>\n<ol>\n<li>How we collect and use your personal information</li>\n<li>The use of Cookie</li>\n<li>How we store and protect your personal information</li>\n<li>How we share, transfer and publicly disclose your personal information</li>\n<li>Your rights</li>\n<li>How we handle minors&#39; personal information</li>\n<li>How this Privacy Policy is updated</li>\n<li>How to contact us</li>\n<li>How we collect and use your personal information</li>\n</ol>\n<p>When you use the Service, the Service will collect information that you provide or generate when you use the Service in the following ways in order to maintain the correct operation of the application, provide and optimize our service, ensure the security of your account and follow to the laws and the standard stipulations. </p>\n<h2>1. How we collect and use your personal information</h2>\n<h3>1.1 The personal information we collect and use actively</h3>\n<ul>\n<li>To maintain 「PodsLink」 operating normally\nWhen you use 「PodsLink」, we would collect your device model, OS version, IMEI ( International Mobile Equipment Identity ), IP address, software version, network type, operating log, etc. Please understand these are the necessary and fundamental information for us to provide services and maintain the application operating normally. </li>\n<li>Information you upload or provide while using the services\nWhen you use the 「PodsLink」 service for feedback and subscription, we will collect a variety of information, including the feedback you submit, email information. We will use this information to fulfill your requests, to provide related products or services, or for anti-fraud purposes. </li>\n<li>Ensure the safety of products, services and users\nTo help us better understand the operation of 「PodsLink」 and related services and to ensure the safety of the operation and provision of the services, we will record web log information, as well as the frequency of use of the software and related services, crash data, overall installation, usage, performance data and other information.</li>\n</ul>\n<h3>1.2 How we deal with the change of the purpose of collecting and using of your personal information</h3>\n<p>Please understand that as our business evolves, there may be adjustments and changes to the functions and services offered by 「PodsLink」. In principle, when new functions or services are related to scenarios such as old functions, the personal information collected and used will be directly or reasonably related to the original purpose of processing. In scenarios that are not directly or reasonably related to the original purpose, we will collect and use your personal information and will again inform you and obtain your consent.</p>\n<h3>1.3 Personal information collected and used by consent is exempted by law</h3>\n<p>Please understand that under the following circumstances, in accordance with laws, regulations and/or relevant national standards, we do not need to obtain your authorized consent to collect and use your personal information.</p>\n<ul>\n<li>Directly related to national security and national defense security </li>\n<li>Directly related to public security, public health or major public interests</li>\n<li>Directly related to criminal investigation, prosecution, trial and execution of judgment, etc</li>\n<li>For the purpose of safeguarding the life, property and other important legitimate rights and interests of the subject of personal information or other individuals, but it is difficult to obtain consent from the individual</li>\n<li>The personal information collected by you is disclosed to the public by you</li>\n<li>Collection of your personal information from legally publicly disclosed information, such as legal news reports, government information disclosure and other channels</li>\n<li>Necessary for signing and performing the contract according to your requirements</li>\n<li>Necessary to maintain the safe and stable operation of software and related services, such as finding and resolving faults of software and related services</li>\n<li>Other circumstances provided for by laws and regulations\n   Particularly, if the information cannot be identified to your personal identity individually or in combination with other information, it does not belong to your personal information in the legal sense; When your information can be identified to your personal identity alone or in combination with other information, or when we use the data which cannot be associated with any specific personal information in combination with other your personal information, during the combined use, such information will be treated and protected as your personal information in accordance with this Privacy Policy.</li>\n</ul>\n<h2>2. The use of Cookie</h2>\n<p>   Cookies and similar technologies are ubiquitous on the Internet. When you use 「PodsLink」 and related services, we may use relevant technologies to send one or more cookies or anonymous identifiers to your device to collect and store information about your access to and use of the product. We will set cookies or anonymous identifiers for authentication and security to ensure the safe and efficient operation of our products and services, and help us improve service efficiency and response.</p>\n<h2>3. How we store and protect your personal information</h2>\n<h3>3.1 How we store your personal information</h3>\n<ul>\n<li>Location of information storage\nWe will store the collected personal information in China or in the country/region where the user is located in accordance with laws and regulations.</li>\n<li>Period of information storage\nIn general, we retain your personal information only for as long as necessary to achieve the purpose, for example, the email address you fill in when you submit your feedback.\nIn the event that our products or services cease to operate, we will notify you by push notification, announcement, etc. and delete or anonymize your personal information within a reasonable period of time.</li>\n</ul>\n<h3>3.2 How we protect your personal information</h3>\n<ul>\n<li>We attach great importance to your safety of personal information, and try our best to take appropriate measures to protect it from accessing, disclosing  publicly, use, tamper, damage, loss and leak without your authorization.</li>\n<li>We will use effective and appropriate measures such as industry-standard encryption and anonymizing technology to protect your personal information. Also, we use safety protection system to prevent your personal information from malware attack.</li>\n<li>We will build up technical safety department, administration regulation of safety, process of data safety to protect your personal information. We will use a strict system, ensure only authorized person can access your personal information. And we will set up safety audit at the appropriate time about data and technology.</li>\n<li>Please understand that because of the limit of technology and all kinds of malicious methods, in the internet industry we can’t ensure for 100% about the safety of information, even though we take the effective and rational measures above, abide relevant laws and regulations to be up to the standard and try our best to improve the safety measures. Please understand the possibility of matter because of the factors beyond our control, accessing the system and communication network that our services using. Therefore, we highly suggest you take active and effective measures to protect your safety of information. Including but not limited to using strong password and modify it regularly, and do not disclose your personal information such as your account number and password to others.</li>\n<li>We have emergency plans which would be activated in the event of security incident in order to prevent the negative effect from spreading. Once the event of security incident happens, such as the information leaked or lost, we would abide to the laws and regulations, informing you the basic situation and potential effect, the measures we have and would take, the suggestion for you to defend and decrease the risk on your own, the re mediation measure for you, etc. We would inform you the relevant situation on time through the information push, email, message, etc. And we would use effective announcement if we could not inform all the users in turn. Meanwhile, we will report the disposal situation according to the demand of supervision department.</li>\n<li>We remind you particularly that the measure of protecting personal information provided by this Privacy Policy only apply to 「PodsLink」 and the relevant services. Once you get away from 「PodsLink」 to browse or use service, resource from other website, then we are unable and without obligation to protect your any personal information you submit on other application, software, and website. No matter whether the application, software, and website above are from the link or guidance from 「PodsLink」 or not.</li>\n</ul>\n<h2>4. How we share, transfer and publicly disclose your personal information</h2>\n<h3>4.1 Sharing</h3>\n<p>We would not share your personal information to any other company, organization, individual, except in the following circumstances.</p>\n<ul>\n<li>Acquiring your consent clearly</li>\n<li>According to the laws and regulations, or the mandatory demand from the competent government authority</li>\n<li>Share with our associated companies. Your necessary personal information would be share with our associated companies, and still be restrained by this Privacy Policy. Associated companies must obtain your permission if they need to change the purpose of using your personal information.</li>\n<li>Share with our cooperative partner. Certain of our services will be provided by authorized partners only for the purposes stated in this Privacy Policy. We may share some of your personal information with our partners to provide better customer service and user experience. For example, the company we employ to provide third-party data statistics and analysis services may need to collect and access personal data for data statistics and analysis. In such cases, these companies must comply with our data privacy and security requirements. We will only share your Personal Information for lawful, legitimate, necessary, specific and explicit purposes, and will only share such Personal Information as is necessary to provide the Services</li>\n<li>We will carefully evaluate the purposes for which third parties are using the shared information, conduct a comprehensive assessment of the security capabilities of these partners, and require them to comply with the legal agreements for cooperation. We will strictly monitor the software tool development kit (SDK) and application program interface (API) for partners to obtain information, so as to protect data security\nAs for the information about the third-party SDK from the partners that we access, please refer the Catalogue of Third-Party SDK Accessed attached at the end of this policy.</li>\n</ul>\n<h3>4.2 Transfers</h3>\n<p>We will not transfer your personal information to any company, organization or individual except in the following circumstances.</p>\n<ul>\n<li>Transfer with explicit consent: we will transfer your personal information to other parties after obtaining your explicit consent.</li>\n<li>In the event of a merger, acquisition, or liquidation involving the transfer of personal information, we will ask the new company or organization holding your personal information to remain bound by this Privacy Policy before we ask that company or organization to seek authorization from you again.</li>\n</ul>\n<h3>4.3 Public Disclosure</h3>\n<p>We will only publicly disclose your personal information in the following circumstances.</p>\n<ul>\n<li>With your express consent.</li>\n<li>Disclosure Based on Law: We may disclose your personal information publicly where we are required to do so by law, legal process, litigation, or mandatory governmental authority.</li>\n</ul>\n<h2>5. Your rights</h2>\n<p>   In accordance with international common practices, we guarantee that you exercise the following rights to your personal information.</p>\n<h3>5.1 Withdrawal of authorization consent</h3>\n<p>You can change the authorization consent for 「PodsLink」 in system Settings at any time. When you withdraw your consent, we will no longer process the corresponding personal information. However, your decision to withdraw your consent will not affect the processing of personal information previously carried out based on your authorization.</p>\n<h3>5.2 In response to your request above</h3>\n<p>When you access, modify or delete relevant information, we may require you to verify your identity to protect the security of your account. Please understand that due to technical limitations, legal or regulatory requirements, we may not be able to meet all of your requirements, and we will respond to your request within a reasonable period of time.</p>\n<h3>5.3 Access Privacy Policy</h3>\n<p>You can enter &quot;Settings&quot; - &quot;Privacy Policy&quot; in the app to view the full content of this privacy policy.</p>\n<h3>5.4 Inform you of the right if we cease operation</h3>\n<p>If we cease operation, we will stop collecting your personal information in a timely manner, notify you of the notice of cessation of operation in the form of one-by-one service or announcement, and delete or anonymize your personal information held by us.</p>\n<h2>6. How we handle minors&#39; personal information</h2>\n<p>   We attach great importance to the protection of minors&#39; personal information. In accordance with relevant laws and regulations, if you are a minor under the age of 18, prior written consent of your parents or legal guardian should be obtained before using the 「PodsLink」 Service. We will protect the personal information of minors in accordance with relevant national laws and regulations, and will only collect, use, share or disclose the personal information of minors when permitted by law, with the express consent of parents or other guardians or when necessary for the protection of minors; If we find that personal information about minors has been collected without prior verifiable parental consent, we will seek to remove the information as soon as possible.</p>\n<h2>7. How this Privacy Policy is updated</h2>\n<p>   We may revise this Privacy Policy in due course. When the terms of this privacy policy change, we will show you the changed privacy policy in the form of push notification and pop-up window when you log in and update the version. Please note that we will collect, use and store your personal information in accordance with the updated Privacy Policy only after you click the &quot;Agree&quot; button in the pop-up window.</p>\n<h2>8. Contact Us</h2>\n<p>   If you have any complaints or reports regarding personal information security, or if you have any questions, comments, or suggestions about this Privacy Policy or your personal information, or any issues regarding this Privacy Policy or privacy measures, please contact us at the following email address: <a href=\"mailto:xiaolongonly@gmail.com\">xiaolongonly@gmail.com</a>\n   In general, we will respond to your questions, comments, or suggestions within fifteen working days after receiving your inquiry and verifying your user identity.</p>\n<ul>\n<li>Application and Use of Permission</li>\n<li>In order to ensure the safe and stable operation of love records, we will apply for or use the relevant permissions of the operating system according to the actual circumstances. </li>\n<li>In order to protect your right to know, we show the relevant operating system permissions that the product may apply for and use through the following list. You can manage the relevant permissions according to your actual needs.</li>\n<li>According to the product upgrade, the application, the type and the purpose of the permission to use will change according to the product functions. We will adjust the list according to these changes in time to ensure that you are informed of the application and use of the permission in time.</li>\n<li>Please understanding that for the function and security needs of our business and products, we will consider using a third party SDK based on actual business consideration, and these third parties will also apply for or use relevant operating system permissions.</li>\n<li>In the process of using the product, if you use the H5 interface or applet developed by the third party, the plug-ins or applet developed by the third party will apply for or use the relevant operating system permissions according to the function of actual business circumstances.</li>\n</ul>\n<p>Catalogue of Third-Party SDK Accessed\nIn order to ensure the operation of the functions related to Love Days Counter and the safe and stable operation of the application, we will access the software development kit (SDK) provided by the third party to achieve relevant purposes according to the needs of actual business scenarios.\nWe will carry out strict security monitoring on the software tool development kit (SDK) for partners to obtain information, so as to protect data security. The relevant third party SDKs we access are listed in the directory.\nPlease note that the third party SDK may have some changes in data processing types due to its version upgrade, policy adjustment and other reasons. Please refer to the official explanation.</p>\n<p>• Google Play In-App Payments\nTheir privacy policy can be viewed at <a href=\"https://www.google.com/policies/privacy/\">https://www.google.com/policies/privacy/</a>\n• PayPal\nTheir privacy policy can be viewed at<a href=\"https://www.paypal.com/webapps/mpp/ua/privacy-full\">https://www.paypal.com/webapps/mpp/ua/privacy-full</a></p>\n"
  },
  {
    "route": "/rel/huawei_back",
    "title": "HUAWEI - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/huawei_back.md",
    "html": "<ul>\n<li>This article takes [Huawei HarmonyOS 4.0] as an example to teach you how to make popup and other functions &quot;more stable&quot; and &quot;more durable&quot;.</li>\n</ul>\n<h4>Step 1: Allow the app to start itself</h4>\n   <img src=\"/help-assets/rel/huawei_back/img.png\" width=\"70%\">\n   <img src=\"/help-assets/rel/huawei_back/img_1.png\" width=\"70%\">\n   <img src=\"/help-assets/rel/huawei_back/img_2.png\" width=\"70%\">\n   <img src=\"/help-assets/rel/huawei_back/img_3.png\" width=\"70%\">\n\n<h4>Step 2: Put a lock on the app</h4>\n   <img src=\"/help-assets/rel/huawei_back/img_4.png\" width=\"70%\">\n\n<ul>\n<li>After locking, you can avoid cleaning yourself off by mistake should be applied</li>\n<li>Well, after the setup is complete, try the pop-up window</li>\n</ul>\n"
  },
  {
    "route": "/rel/huawei_widget",
    "title": "HUAWEI - Widget addition Guide",
    "section": "rel",
    "sourcePath": "rel/huawei_widget.md",
    "html": "<ol>\n<li>Press in the desktop blank and select [Window gadget]</li>\n<li>In the list, swipe right to find the PodsLink widget and drag it to the desktop</li>\n<li>Click on the widget and select a widget from the list.</li>\n</ol>\n"
  },
  {
    "route": "/rel/oppo_back",
    "title": "OPPO - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/oppo_back.md",
    "html": "<ul>\n<li>This article takes [OPPO mobile ColorOS 11.1] as an example to teach you how to make popup and other functions &quot;more stable&quot; and &quot;more durable&quot;.</li>\n</ul>\n<h4>Step 1: Allow background behavior and self-boot</h4>\n<img src=\"/help-assets/rel/oppo_back/img.png\" width=\"70%\">\n<img src=\"/help-assets/rel/oppo_back/img_1.png\" width=\"70%\">\n<img src=\"/help-assets/rel/oppo_back/img_2.png\" width=\"70%\">\n\n<h4>Step 2: Put a lock on the app</h4>\n<img src=\"/help-assets/rel/oppo_back/img_3.png\" width=\"70%\">\n\n<blockquote>\n<p>After locking, you can avoid cleaning yourself off by mistake should be applied</p>\n</blockquote>\n"
  },
  {
    "route": "/rel/oppo_widget",
    "title": "OPPO-Widget addition Guide",
    "section": "rel",
    "sourcePath": "rel/oppo_widget.md",
    "html": "<ol>\n<li>Press in the desktop blank and select 【 Widgets 】</li>\n<li>Slide down the list to find the PodsLink widget, drag and place it on the desktop</li>\n<li>Click on the widget and select a widget from the list.</li>\n</ol>\n"
  },
  {
    "route": "/rel/other_back",
    "title": "Others - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/other_back.md",
    "html": "<ul>\n<li>This article contains guides on how to set up your phone with Realme, OnePlus, Samsung, Meizu, and Black Shark, teaching you how to make the pop-up and other functions &quot;more stable&quot; and &quot;more enduring&quot;.</li>\n</ul>\n<h4>Realme:</h4>\n<ul>\n<li>Realme devices can be referenced in the following guide: &quot;Background Apps Stay Running - OPPO Edition&quot;</li>\n</ul>\n<h4>One plus:</h4>\n<ul>\n<li>The phone&#39;s system Settings - Battery - Battery Optimization - PodsLink - are set to not optimize. </li>\n<li>You can add a lock to your app in the recent tasks list. </li>\n<li>If your phone is ColorOS, see: Background Resident Guide -OPPO article for details</li>\n</ul>\n<h4>Samsung:</h4>\n<ul>\n<li>The phone&#39;s system Settings - apps - PodsLink - battery - allow for background activity. </li>\n<li>The phone&#39;s system Settings - Apps - PodsLink - Battery - off optimize battery usage.</li>\n</ul>\n<h4>Meizu:</h4>\n<ul>\n<li>You can add a lock to the app in the recent task list.</li>\n<li>The system Settings of the mobile phone - Power management - Power consumption details - Mobile standby - Background management - PodsLink - allow background operation.</li>\n</ul>\n<h4>Black Shark:</h4>\n<ul>\n<li>The phone&#39;s system Settings - battery - Background Intelligent Management - allow applications to run in the background.</li>\n<li>Can refer to: Background resident guide - millet chapter</li>\n</ul>\n<h3>MOTOROLA Edge:</h3>\n<ul>\n<li>The phone&#39;s phone manager - background running - PodsLink - allows background running.</li>\n<li>Well, after the setup is complete, try the pop-up window</li>\n</ul>\n<blockquote>\n<p>PS: If the model is not in the above list, or there are problems with the use of configuration, you can leave a message and feedback to us on the community home page</p>\n</blockquote>\n"
  },
  {
    "route": "/rel/update",
    "title": "update description",
    "section": "rel",
    "sourcePath": "rel/update.md",
    "html": "<h3>V1.1</h3>\n<p>New communication community function.</p>\n<p>Support for more languages:\nChinese, Traditional Chinese, French, German, Japanese,\nKorean, Spanish, Portuguese, Russian, Hindi, Italian, Turkish,Vietnamese, Arabic.</p>\n<p>More models supported:\nAirPods 4\nAirPods Max (USB-C)</p>\n<p>(Translation is machine translation, if you have problems with the meaning of words or have a better translation, you can contact me by email)</p>\n<h3>V1.0</h3>\n<p>PodsLink first version of this application is online, currently supported models are AirPods series, Beats series, etc., including software functions such as power display, connection pop-up window, automatic audio, gesture Settings, locate, desktop widgets, notification Settings, welcome to give us more feedback</p>\n"
  },
  {
    "route": "/rel/vivo_back",
    "title": "VIVO - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/vivo_back.md",
    "html": "<ul>\n<li>This article takes [VIVO Mobile phone OriginOS] as an example to teach you how to make popup and other functions &quot;more\nstable&quot; and &quot;more durable&quot;.</li>\n</ul>\n<h4>Step 1: Allow the app to start itself</h4>\n<img src=\"/help-assets/rel/vivo_back/img.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_1.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_2.png\" width=\"70%\">\n\n<h4>Step 2: Allow high power consumption in the background</h4>\n<ul>\n<li>Avoid applications being cleaned up by system battery optimization strategies</li>\n</ul>\n<img src=\"/help-assets/rel/vivo_back/img_3.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_4.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_5.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_6.png\" width=\"70%\">\n\n<h4>Step 3: Put a lock on the app to avoid manual cleaning</h4>\n<ul>\n<li>Swipe up from the bottom of the phone to enter the list of background tasks</li>\n<li>Select the PodsLink app task, hold down and slide</li>\n<li>Lock is complete</li>\n</ul>\n"
  },
  {
    "route": "/rel/vivo_widget",
    "title": "VIVO-Widget addition Guide",
    "section": "rel",
    "sourcePath": "rel/vivo_widget.md",
    "html": "<ol>\n<li>Please ensure that the system is in [Android mode] first. </li>\n<li>Press in the desktop blank and select [Atomic component]</li>\n<li>Swipe right in the list to find the PodsLink widget, drag and place it on the desktop </li>\n<li>Click on the widget and select a widget from the list.</li>\n</ol>\n<blockquote>\n<p>Note: Currently, widgets in Origin mode are not open to third-party software. When the system has an open interface for third-party software adaptation, we will follow up and support it.</p>\n</blockquote>\n"
  },
  {
    "route": "/rel/xiaomi_back",
    "title": "XIAOMI - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/xiaomi_back.md",
    "html": "<p>This article takes [XIAOMI HyperOS] as an example to teach you how to make functions such as pop-ups &quot;more stable&quot; and &quot;more durable&quot;.</p>\n<h4>Step 1: Allow the application to self-start with power-saving optimization</h4>\n<img src=\"/help-assets/rel/xiaomi_back/img.png\" width=\"70%\" alt=\"\"/>\n<img src=\"/help-assets/rel/xiaomi_back/img_1.png\" width=\"70%\" alt=\"\"/>\n<img src=\"/help-assets/rel/xiaomi_back/img_2.png\" width=\"70%\" alt=\"\"/>\n\n<h4>Step 2: Put a lock on the app</h4>\n<ul>\n<li>After locking, you can avoid cleaning yourself off by mistake should be applied</li>\n</ul>\n<img src=\"/help-assets/rel/xiaomi_back/img_3.png\" width=\"70%\" alt=\"\"/>\n<img src=\"/help-assets/rel/xiaomi_back/img_4.png\" width=\"70%\" alt=\"\"/>\n\n\n<ul>\n<li>Well, after the setup is complete, try the pop-up window</li>\n</ul>\n"
  },
  {
    "route": "/rel/xiaomi_widget",
    "title": "XIAOMI-Widget addition Guide",
    "section": "rel",
    "sourcePath": "rel/xiaomi_widget.md",
    "html": "<p>Note: The operation guide for different MIUI system versions is different</p>\n<h4>HyperOS/MIUI14</h4>\n<ol>\n<li>Press in the desktop blank and select Add widget; </li>\n<li>click the search button on the top right, click the bottom [Android widgets]</li>\n<li>Find the PodsLink widget in the list and drag it to your desktop</li>\n<li>Click and select a widget</li>\n</ol>\n<h4>MIUI13 System Guide:</h4>\n<ol>\n<li>Press in the desktop blank and select Add widget;</li>\n<li>click the search box at the top, drop the input method, click the bottom [Android widget]</li>\n<li>Find the PodsLink widget in the list and drag it to your desktop</li>\n<li>Click and select a widget</li>\n</ol>\n<h4>The following system guide for MIUI13</h4>\n<ol>\n<li>Click in the desktop blank and select [Add Tool]</li>\n<li>slide down the list to find the PodsLink widget, drag it to the desktop</li>\n<li>Click on the widget and select a widget from the list.</li>\n</ol>\n"
  }
];

export const helpDocsByRoute: Record<string, HelpDoc> = {
  "/account-deletion": {
    "route": "/account-deletion",
    "title": "PodsLink Account & Data Deletion Request",
    "section": "account-deletion",
    "sourcePath": "account-deletion.md",
    "html": "<p>If you would like to delete your account and membership information related to this app, please follow the steps below:</p>\n<ol>\n<li>Send an email from the Google account you used to sign in, to <a href=\"mailto:xialongonly@gmail.com\">xialongonly@gmail.com</a> Use the subject line: &quot;Account Deletion Request - [PodsLink]&quot;</li>\n<li>We will verify your identity and delete your account and membership information within 7 business days.</li>\n</ol>\n<h2>Data Deletion Scope</h2>\n<ul>\n<li>Data that will be deleted: Account information, membership information</li>\n<li>No other personal data is stored</li>\n<li>Data that may be retained: Payment records may be retained for up to 180 days to comply with legal requirements</li>\n</ul>\n"
  },
  "/agreement": {
    "route": "/agreement",
    "title": "PodsLink Terms of Service",
    "section": "agreement",
    "sourcePath": "agreement.md",
    "html": "<p>Last Updated: 2025-04-01\nPlease read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the mobile application (the &quot;Service&quot;) operated by the PodsLink team (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;).\nYour access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.\nBy accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access or use the Service.</p>\n<h2>1. One-Time Payment</h2>\n<p>   The Service operates on a one-time payment model. Users will pay a one-time fee at the time of purchase, granting access to the corresponding features of the Service. We do not offer subscription-based or recurring payment options.</p>\n<h2>2. Content</h2>\n<p>Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material (&quot;Content&quot;). You are responsible for the Content that you post through the Service, including its legality, reliability, and appropriateness.</p>\n<p>By posting Content on or through the Service, you represent and warrant that: </p>\n<ul>\n<li>the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms;</li>\n<li>and the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity.</li>\n</ul>\n<p>We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>\n<p>You retain all of your rights to any Content you submit, post, or display on or through the Service and are responsible for protecting those rights. We take no responsibility for and assume no liability for Content you or any third party posts on or through the Service. However, by posting Content using the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content through the Service.</p>\n<h2>3. Accounts</h2>\n<p>   When you create an account, you guarantee that you are over the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account.\n   You are responsible for maintaining the confidentiality of your account and password, including but not limited to restricting access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether or not your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>\n<h2>4. Intellectual Property</h2>\n<p>   The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of the PodsLink team and its licensors. The Service is protected by copyright, trademark, and other laws of both the People&#39;s Republic of China and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the PodsLink team.</p>\n<h2>5. Termination</h2>\n<p>   We may terminate or suspend your account and block access to the Service immediately, without prior notice or liability, at our sole discretion, for any reason whatsoever, including but not limited to a breach of these Terms.\n   If you wish to terminate your account, you may simply stop using the Service.\n   All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>\n<h2>6. Indemnification</h2>\n<p>You agree to defend, indemnify, and hold harmless the PodsLink team and its licensees, licensors, employees, agents, officers, directors, contractors, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debts, and expenses (including but not limited to attorney’s fees) resulting from or arising out of: </p>\n<ul>\n<li>your use and access of the Service, by you or any person using your account and password; </li>\n<li>a breach of these Terms; </li>\n<li>or Content posted on the Service.</li>\n</ul>\n<h2>7. Limitation of Liability</h2>\n<p>In no event shall the PodsLink team, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>\n<ul>\n<li>your access to or use of or inability to access or use the Service; </li>\n<li>any conduct or Content of any third party on the Service; </li>\n<li>any Content obtained from the Service; </li>\n<li>and  unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</li>\n</ul>\n<h2>8. Disclaimer</h2>\n<p>Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. \nThe PodsLink team, its subsidiaries, affiliates, and licensors do not warrant that:</p>\n<ul>\n<li>the Service will function uninterrupted, secure, or available at any particular time or location; </li>\n<li>any errors or defects will be corrected;</li>\n<li>the Service is free of viruses or other harmful components; </li>\n<li>or the results of using the Service will meet your requirements.</li>\n</ul>\n<h2>9. Governing Law and Dispute Resolution</h2>\n<p>Applicable Law:\nThese Terms shall be governed and construed in accordance with the laws of the People’s Republic of China.</p>\n<p>Dispute Resolution:\nAny disputes arising from or related to these Terms shall first be resolved through friendly negotiation. If negotiation fails, the dispute shall be submitted to the China International Economic and Trade Arbitration Commission (CIETAC) for arbitration. The arbitration will take place in Beijing, and the language of arbitration shall be Chinese.</p>\n<p>Court Jurisdiction:\nIf the dispute cannot be resolved through arbitration, either party may submit the dispute to the competent courts in Beijing, China.</p>\n<h2>10. Modifications</h2>\n<p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&#39; notice before the new terms take effect. \nBy continuing to access or use the Service after any revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you are no longer authorized to use the Service.</p>\n<h2>11. Contact Us</h2>\n<p>If you have any questions about these Terms, please contact us at Email: <a href=\"mailto:xiaolongonly@gmail.com\">xiaolongonly@gmail.com</a></p>\n<p>Last Updated: 2025-04-01</p>\n"
  },
  "/basic/attention": {
    "route": "/basic/attention",
    "title": "Matters needing attention",
    "section": "basic",
    "sourcePath": "basic/attention.md",
    "html": "<blockquote>\n<p>Here are the important things to keep in mind when using PodsLink software:</p>\n</blockquote>\n<h4>1. Background Stay Guide</h4>\n<ul>\n<li>The software needs to run in the background to ensure that functions such as pop-up windows and displaying battery level are working properly. The background resident operation varies for different phone models as follows:<ul>\n<li><a href=\"/rel/xiaomi_back\">XIAOMI - Background resident Settings</a></li>\n<li><a href=\"/rel/oppo_back\">OPPO - Background resident Settings</a></li>\n<li><a href=\"/rel/vivo_back\">VIVO - Background resident Settings</a></li>\n<li><a href=\"/rel/huawei_back\">HUAWEI - Background resident Settings</a></li>\n<li><a href=\"/rel/other_back\">Others - Background resident Settings</a></li>\n</ul>\n</li>\n</ul>\n<h4>2. Desktop Widget Addition Tutorial</h4>\n<ul>\n<li>There are many types of mobile phones, and the way to add widgets to different mobile phone models is different. For more details, please refer to:<ul>\n<li><a href=\"/rel/xiaomi_widget\">XIAOMI-Widget addition Guide</a></li>\n<li><a href=\"/rel/vivo_widget\">VIVO-Widget addition Guide</a></li>\n<li><a href=\"/rel/huawei_widget\">HUAWEI - Widget addition Guide</a></li>\n<li><a href=\"/rel/oppo_widget\">OPPO-Widget addition Guide</a></li>\n</ul>\n</li>\n</ul>\n<h4>3. Service Agreement and Privacy Policy regarding the software</h4>\n<ul>\n<li><a href=\"/privacy\">Service Agreement and Privacy Policy</a></li>\n</ul>\n"
  },
  "/basic/auto_pop_up": {
    "route": "/basic/auto_pop_up",
    "title": "Pop-up window that automatically connects",
    "section": "basic",
    "sourcePath": "basic/auto_pop_up.md",
    "html": "<h4>1. Function Introduction</h4>\n<ul>\n<li>When the earbuds are connected, a pop-up window will automatically appear on the desktop to show the battery level effect. This function needs to be enabled in the pop-up window settings after the earbuds are added.  </li>\n<li><img src=\"https://github.com/PodsLink/podslink-help/assets/14847146/1d4b9487-b102-415d-a8d3-f6ec634e9afe\" width=\"70%\" alt=\"\"></li>\n<li>Note: It is necessary to enable the background persistent setting to ensure that the application is not cleaned by the system.</li>\n</ul>\n<h4>2. Common Problems</h4>\n<ul>\n<li><a href=\"/faq/not_pop_up\">Applications do not pop up</a></li>\n</ul>\n<h4>3 More Fun</h4>\n<ul>\n<li><a href=\"/func/dynamic_pop\">The AirPods feature an exclusive dynamic popup window</a></li>\n<li><a href=\"/func/theme\">Simple theme making</a></li>\n</ul>\n"
  },
  "/basic/battery_display": {
    "route": "/basic/battery_display",
    "title": "Battery display",
    "section": "basic",
    "sourcePath": "basic/battery_display.md",
    "html": "<h4>1. Function Description</h4>\n<ul>\n<li>Once the earbuds have been added and connected, you can view the battery level display within the software.</li>\n</ul>\n<img src=\"/help-assets/basic/battery_display/img.png\" width=\"70%\" alt=\"\">\n\n<h4>2. FAQ</h4>\n<ul>\n<li><a href=\"/faq/battery_not_update\">Battery access times out or does not update</a></li>\n<li><a href=\"/faq/cacurate_power\">How to display accurate power - to 1%</a></li>\n<li><a href=\"/faq/charging_not_displayed\">Charging capacity is not displayed</a></li>\n</ul>\n<h4>3. More Fun</h4>\n<ul>\n<li><a href=\"/basic/auto_pop_up\">Pop-up window that automatically connects</a></li>\n<li><a href=\"/func/widget\">Power level display in widgets</a></li>\n<li><a href=\"/func/notification_bar\">Power level display in notification bar/status bar</a></li>\n</ul>\n"
  },
  "/basic/headset_models": {
    "route": "/basic/headset_models",
    "title": "Supported earbuds models",
    "section": "basic",
    "sourcePath": "basic/headset_models.md",
    "html": "<ul>\n<li>Currently, supported earbuds models include: AirPods, Beats, Huaqiangbei earbuds models, specific models can be searched and viewed within the software.</li>\n<li>When you first use the software, you can add your earbuds to it. The software supports automatic scanning for adding earbuds and manual selection of models.</li>\n</ul>\n"
  },
  "/basic/intro": {
    "route": "/basic/intro",
    "title": "Product introduction",
    "section": "basic",
    "sourcePath": "basic/intro.md",
    "html": "<p>The PodsLink APP is a specialized tool software designed for &quot;smart headsets&quot; on Android (earbuds assistant), enabling users to access features such as power monitoring and earbuds pop-up on the Android platform, and enjoy more personalized services for their earbuds (voice prompts, gesture settings, location search, etc.). Currently, PodsLink primarily supports AirPods, Beats, Huaqiangbei and other earbuds brands.&quot;</p>\n"
  },
  "/faq/add_widgets": {
    "route": "/faq/add_widgets",
    "title": "How to add desktop widgets",
    "section": "faq",
    "sourcePath": "faq/add_widgets.md",
    "html": "<img src=\"/help-assets/faq/add_widgets/img.png\" alt=\"\" width=\"70%\">\n\n<ol>\n<li>Press the blank section of the desktop and select &quot;Add Widget&quot;.</li>\n<li>Find the PodsLink widget in the list, drag it and drop it on your desktop</li>\n<li>Click widget and select a widget from the list.</li>\n</ol>\n<p>Different phones have different ways to add widgets</p>\n<ul>\n<li><a href=\"/rel/xiaomi_widget\">XIAOMI-Widget addition Guide</a></li>\n<li><a href=\"/rel/vivo_widget\">VIVO-Widget addition Guide</a></li>\n<li><a href=\"/rel/huawei_widget\">HUAWEI - Widget addition Guide</a></li>\n<li><a href=\"/rel/oppo_widget\">OPPO-Widget addition Guide</a></li>\n</ul>\n"
  },
  "/faq/battery_not_update": {
    "route": "/faq/battery_not_update",
    "title": "Battery access times out or does not update",
    "section": "faq",
    "sourcePath": "faq/battery_not_update.md",
    "html": "<ol>\n<li>Permissions are not set properly<ul>\n<li>On the Earbuds Settings screen - Permission Settings, you can view required permissions and set required permissions and background resident to ensure stable functions</li>\n</ul>\n</li>\n<li>The earbud is not added or the earbuds model is wrong<ul>\n<li>In the earbuds Settings screen - more options in the upper left corner - select Add Earbuds and add the earbuds again.</li>\n</ul>\n</li>\n</ol>\n"
  },
  "/faq/cacurate_power": {
    "route": "/faq/cacurate_power",
    "title": "How to display accurate power - to 1%",
    "section": "faq",
    "sourcePath": "faq/cacurate_power.md",
    "html": "<p>Only applicable to AirPods Beats series earbuds.</p>\n<ol>\n<li>Connect the earbuds to the phone.</li>\n<li>Place the earbuds in the box with the lid open.</li>\n<li>Press and hold the small dot on the back cover to make the earbuds enter the pairing state (the box indicator flashes white).</li>\n<li>Wait for app battery update (Accurate battery only works in earbuds pairing mode)</li>\n</ol>\n<blockquote>\n<p>Finally, if you still can&#39;t check the charging capacity, it may be that the earbuds itself cannot support.</p>\n</blockquote>\n"
  },
  "/faq/call_noise": {
    "route": "/faq/call_noise",
    "title": "Call noise",
    "section": "faq",
    "sourcePath": "faq/call_noise.md",
    "html": "<p>The earbud microphone is on the bottom of the earbuds. It is recommended that you tilt the bottom of the microphone forward to avoid the surrounding environment.</p>\n"
  },
  "/faq/charging_not_displayed": {
    "route": "/faq/charging_not_displayed",
    "title": "Charging capacity is not displayed",
    "section": "faq",
    "sourcePath": "faq/charging_not_displayed.md",
    "html": "<ul>\n<li><p>Proper posture</p>\n</li>\n<li><p>Charging bay power requires more than one earbud placed in the charging bay, and keep the cover open to display.</p>\n<blockquote>\n<p>Tips: Note on Huaqiangbei earbuds using app</p>\n</blockquote>\n</li>\n<li><p>Since there are many types of Huaqiangbei earbuds on the market, and the chip schemes of different categories of Huaqiangbei earbuds are different, the functional effects presented on the APP will be different.</p>\n</li>\n<li><p>Some Huaqiangbei earbuds may not support the charging bin power display, if you have not shown the charging bin power you can try to view through the accurate power scheme.</p>\n<ol>\n<li>Connect the earbuds to the phone.</li>\n<li>Place the earbuds in the box with the lid open.</li>\n<li>Press and hold the small dot on the back cover to make the earbuds enter the pairing state (the box indicator flashes white).</li>\n<li>Wait for app battery update (Accurate battery only works in earbuds pairing mode)</li>\n</ol>\n<blockquote>\n<p>Finally, if you still can&#39;t check the charging capacity, it may be that the earbuds itself cannot support.</p>\n</blockquote>\n</li>\n</ul>\n"
  },
  "/faq/connect": {
    "route": "/faq/connect",
    "title": "The earbuds cover does not connect automatically",
    "section": "faq",
    "sourcePath": "faq/connect.md",
    "html": "<ol>\n<li>In the phone&#39;s system setting - Bluetooth - cancel the earbuds pairing first, and then re-pair it.</li>\n<li>The ear phone will automatically connect to the most recently connected phone</li>\n</ol>\n"
  },
  "/faq/headset_name": {
    "route": "/faq/headset_name",
    "title": "Earbuds name setting",
    "section": "faq",
    "sourcePath": "faq/headset_name.md",
    "html": "<p>You can rename the earbuds name through the phone&#39;s system Settings - Bluetooth\nIt is an alias and takes effect only on the current phone</p>\n"
  },
  "/faq/in_ear_detection": {
    "route": "/faq/in_ear_detection",
    "title": "Guide to in-ear detection",
    "section": "faq",
    "sourcePath": "faq/in_ear_detection.md",
    "html": "<ul>\n<li>Check the status of the small ear icon in the wearing state</li>\n<li>When worn, there is a small ear icon. Remove the earbuds and the small ear icon disappears. This is the reflection of light ear detection. When the small ear icon disappears, the music will be paused and the music will be displayed. (There is a 3-5 second delay in ear detection due to protocol acquisition)</li>\n</ul>\n<img src=\"/help-assets/faq/in_ear_detection/img.png\" width=\"70%\" alt=\"\">\n\n<ul>\n<li>If it is a specific music player can not be detected in the ear</li>\n<li>You can check whether the &quot;Line control&quot; function of music players such as NetEase Cloud/Kugou is turned on or not.</li>\n<li>If you can&#39;t do ear detection when the app isn&#39;t open, Maybe the application background is cleaned up, and you can set up the background resident according to the guidelines to solve the problem.</li>\n</ul>\n"
  },
  "/faq/no_sound": {
    "route": "/faq/no_sound",
    "title": "There is no sound in the earbuds",
    "section": "faq",
    "sourcePath": "faq/no_sound.md",
    "html": "<p>There is no sound in the earbuds, which belongs to the problem of the earbud hardware. You can try to reconnect or contact the earbuds after-sales ~</p>\n"
  },
  "/faq/noise_cancellation": {
    "route": "/faq/noise_cancellation",
    "title": "Earbuds noise cancellation",
    "section": "faq",
    "sourcePath": "faq/noise_cancellation.md",
    "html": "<p>Hello, at present, the noise reduction control scheme is limited and cannot be implemented. We will add suitable schemes in the future.</p>\n"
  },
  "/faq/noise_reduction": {
    "route": "/faq/noise_reduction",
    "title": "How do I turn on and off noise reduction on AirPods Pro",
    "section": "faq",
    "sourcePath": "faq/noise_reduction.md",
    "html": "<p>AirPods Pro earbuds, you can long press the ear handle while wearing state to switch the noise reduction transparent.</p>\n"
  },
  "/faq/not_pop_up": {
    "route": "/faq/not_pop_up",
    "title": "Applications do not pop up",
    "section": "faq",
    "sourcePath": "faq/not_pop_up.md",
    "html": "<ol>\n<li>Make sure the auto pop-up is enabled in the app<ul>\n<li>The application will pop up when the earbud is connected. You can put the earbuds in the charging bin, close the lid, and open the lid again after the Bluetooth disconnects.<img src=\"/help-assets/faq/not_pop_up/img.png\" width=\"70%\" alt=\"\"></li>\n</ul>\n</li>\n<li>The background resident is not set properly, resulting in the application background being killed.\nClick to view the background permanent setting, set the background permanent to ensure stable function</li>\n</ol>\n"
  },
  "/faq/notification_bar": {
    "route": "/faq/notification_bar",
    "title": "The notification bar is not displayed",
    "section": "faq",
    "sourcePath": "faq/notification_bar.md",
    "html": "<ol>\n<li><p>You can check your phone&#39;s system Settings - Notification Management - PodsLink - AirPods Battery Status to see if the app is disabled and the notification display is enabled.</p>\n<img src=\"/help-assets/faq/notification_bar/img.png\" width=\"70%\" alt=\"\">\n</li>\n<li><p>The notification bar is displayed as follows: If the status bar icon is not displayed, please move to the status bar icon</p>\n<img src=\"/help-assets/faq/notification_bar/img_1.png\" width=\"70%\" alt=\"\"></li>\n</ol>\n"
  },
  "/faq/power_consumption": {
    "route": "/faq/power_consumption",
    "title": "Application power consumption problem",
    "section": "faq",
    "sourcePath": "faq/power_consumption.md",
    "html": "<ol>\n<li>Continuous Bluetooth low power scanning is required when the earbud is connected.</li>\n<li>it is inevitable that the software will increase the power consumption, but the power consumption of this software is very small.</li>\n</ol>\n"
  },
  "/faq/recognition": {
    "route": "/faq/recognition",
    "title": "Non-automatic recognition",
    "section": "faq",
    "sourcePath": "faq/recognition.md",
    "html": "<ul>\n<li>If your earbuds is not recognized by the app,</li>\n<li>You can click Add Earbuds in the app - manually select the earbuds model - select your earbuds according to the earbuds type, you can add to the app ~</li>\n</ul>\n"
  },
  "/faq/repaire": {
    "route": "/faq/repaire",
    "title": "Repair earbuds",
    "section": "faq",
    "sourcePath": "faq/repaire.md",
    "html": "<ol>\n<li><ol>\n<li>Smart connection earbuds</li>\n</ol>\n<ul>\n<li>On the Settings screen of the application - Add earbuds - intelligently add an identification earbuds as prompted.</li>\n</ul>\n</li>\n<li><ol start=\"2\">\n<li>Manually connect the earbuds</li>\n<li>First you need to put two earbuds into the earbuds case, keeping the lid open.</li>\n<li>Press and hold the small dot on the back of the box for about 3 seconds to make the AirPods enter the pairing state.</li>\n<li>The indicator light in the middle of the paired earbuds box will display white light and blink.</li>\n<li>Then enter the Bluetooth function list of the Android phone, you can see the AirPods device, click Connect, and you can use AirPods if the connection is successful.</li>\n</ol>\n</li>\n</ol>\n"
  },
  "/faq/spatial_audio": {
    "route": "/faq/spatial_audio",
    "title": "Spatial audio",
    "section": "faq",
    "sourcePath": "faq/spatial_audio.md",
    "html": "<ul>\n<li>At present, the application does not support spatial audio Settings, and spatial audio is multi-track audio music. Currently, only Spatial Audio Music on Apple Music supports spatial audio.</li>\n<li>Spatial stereo is a new feature in IOS15.1 that converts two-channel audio into multi-track audio and then outputs it to the earbuds.</li>\n<li>PodsLink does not support spatial audio switch control. Although it is useless to open it now, there may be supportive music on Android later, and we will follow up on this program.</li>\n</ul>\n"
  },
  "/faq/status_bar": {
    "route": "/faq/status_bar",
    "title": "Status bar ICONS are not displayed",
    "section": "faq",
    "sourcePath": "faq/status_bar.md",
    "html": "<ol>\n<li>The status bar icon belongs to the notification icon. The status bar icon is displayed only when the notification is displayed</li>\n<li>Make sure that the battery can be displayed in the popup window of the application, and the notification bar can be displayed normally<img src=\"/help-assets/faq/status_bar/img.png\" width=\"70%\" alt=\"\"></li>\n<li>If you are the following models, you can check the status bar of the relevant models.</li>\n</ol>\n<h4>Huawei：</h4>\n<ul>\n<li>If the system is before Hongmeng 3.0<ol>\n<li>In the phone&#39;s system Settings - Notification - More Notification Settings - enable notifications when the icon is displayed.</li>\n<li>In the phone&#39;s system Settings - Notifications - PodsLink - AirPods Battery Status - Turn off silent notification.</li>\n</ol>\n</li>\n<li>Hongmeng 4.0 and above systems are forced to use APP icon display. We have submitted feedback on this issue at the Pollen Club and there is currently no solution.</li>\n</ul>\n<h4>XIAOMI</h4>\n<ul>\n<li>If it is a system before MIUI12.5.3, you can modify the style to the native style in the system Settings - Notification and Control Center - Notification Management - Notification display Settings of the phone.</li>\n<li>The MIUI of MIUI12.5.3 and above mandatory use of APP icon display. We have reported this problem to the MIUI team, and there is no solution for the time being.</li>\n</ul>\n<h4>Meizu</h4>\n<ul>\n<li>Meizu does not support the status bar display on Flyme UI customization.</li>\n</ul>\n<h4>VIVO</h4>\n<ul>\n<li>In the phone&#39;s system Settings - Notification and status bar there is an icon beautification, you can change the icon beautification to the original</li>\n</ul>\n"
  },
  "/faq/stealing": {
    "route": "/faq/stealing",
    "title": "Earbuds stealing connection",
    "section": "faq",
    "sourcePath": "faq/stealing.md",
    "html": "<ul>\n<li>This application does not affect the connection of the earbuds. If the earbuds is secretly connected, it is recommended that you switch the charging bin again to see if it is not properly covered.</li>\n<li>You can also connect an IOS device to update the earbud firmware to improve functional stability</li>\n</ul>\n"
  },
  "/faq/volume_light": {
    "route": "/faq/volume_light",
    "title": "The earbuds volume is relatively light",
    "section": "faq",
    "sourcePath": "faq/volume_light.md",
    "html": "<ol>\n<li>if you find that the volume of the Bluetooth earbuds is very light, you can turn on and off the absolute volume of the Bluetooth in the developer option of the phone, and then reconnect the earbuds.</li>\n<li>so that the volume of the earbuds and the phone will be synchronized, you can use the phone&#39;s volume control to control the volume of the earbuds. </li>\n<li>On Hongmeng and some systems, the developer option is not Bluetooth absolute volume option. Sync media volume can be turned on in your phone&#39;s Bluetooth - Earbuds Name - Settings</li>\n</ol>\n"
  },
  "/func/advaced_theme": {
    "route": "/func/advaced_theme",
    "title": "Advanced theme Settings",
    "section": "func",
    "sourcePath": "func/advaced_theme.md",
    "html": "<h3>Function introduction:</h3>\n<ul>\n<li>Basic popup production: including the replacement function of the popup background, suitable for new users to make a simple popup theme.</li>\n<li>Advanced pop-up production: On the basis of the new [earbuds map] replacement and [screen effect] function, suitable for professional users to use, to produce a more sophisticated, integrated theme.</li>\n</ul>\n<h3>Enable functions:</h3>\n<p>In the upper right corner of my page, set the button --&gt; Enable Advanced production mode</p>\n<img width=\"809\" alt=\"image\" src=\"https://github.com/PodsLink/podslink-help/assets/14847146/39a2c09e-cc70-4c4a-b4f2-7c9ae2aa573c\">\n\n<h3>Functional effects:</h3>\n<p>When you return to the pop-up creation page, you will have new functional Settings.</p>\n<img width=\"307\" alt=\"image\" src=\"https://github.com/PodsLink/podslink-help/assets/14847146/ec20cbd3-7034-44f1-894a-3bb84a0e8f07\">"
  },
  "/func/audio_control": {
    "route": "/func/audio_control",
    "title": "Audio control",
    "section": "func",
    "sourcePath": "func/audio_control.md",
    "html": "<h4>1. Automatically adjust the music volume</h4>\n<ul>\n<li>Earbuds automatically adjust the volume after connection, protect the ear hearing ~</li>\n</ul>\n<h4>2. Automatic in-ear detection</h4>\n<ul>\n<li>Function Introduction<ul>\n<li>Take off earbuds to pause music, put on earbuds to play music automatically</li>\n<li>This membership feature is only available for genuine AirPods 1 / 2 / 3 and AirPods Pro1.</li>\n</ul>\n</li>\n<li>AirPods Pro2 is currently not supported due to limitations in the earbud firmware. Support will be added after the earbud firmware is updated.</li>\n<li>Notes<ul>\n<li>In-ear detection is affected by the Apple earbuds protocol itself, and there is a 3 to 5-second delay.</li>\n</ul>\n</li>\n<li>What if in-ear detection doesn&#39;t work?</li>\n</ul>\n<h4>3. In-ear detection shield (Huaqiangbei earbuds)</h4>\n<ul>\n<li>It supports setting the in-ear detection shield for Huaqiangbei earbuds with unstable in-ear detection.</li>\n</ul>\n"
  },
  "/func/broadcast": {
    "route": "/func/broadcast",
    "title": "Voice broadcast",
    "section": "func",
    "sourcePath": "func/broadcast.md",
    "html": "<h2>Function description</h2>\n<ul>\n<li>The voice broadcast function of the smart earbud means that the earbuds can automatically identify and play information from the mobile phone, such as incoming reminder, low battery notification, wechat notification, QQ message notification, custom broadcast content, etc. Users only need to wear earbuds to get the information they need anytime, anywhere, without having to check their phones frequently.</li>\n</ul>\n<h2>Functional renderings</h2>\n<img src=\"/help-assets/func/broadcast/img.png\" width=\"70%\" alt=\"\">"
  },
  "/func/dynamic_pop": {
    "route": "/func/dynamic_pop",
    "title": "The AirPods feature an exclusive dynamic popup window",
    "section": "func",
    "sourcePath": "func/dynamic_pop.md",
    "html": "<h4>1. Function description:</h4>\n<ul>\n<li>Dynamic popup: earbuds rotation animation, enhanced fruit restoration effect, dynamic popup effect.</li>\n<li>Supported models:<ul>\n<li>AirPods series (excluding Max)</li>\n<li>Huaqiangbei series</li>\n<li>PowerBeats Pro</li>\n</ul>\n</li>\n</ul>\n<h4>2. Functional effect:</h4>\n<img src=\"/help-assets/func/dynamic_pop/img.png\" width=\"70%\" alt=\"\">"
  },
  "/func/find_device": {
    "route": "/func/find_device",
    "title": "Find earbuds",
    "section": "func",
    "sourcePath": "func/find_device.md",
    "html": "<h4>Function Introduction</h4>\n<p>For member users to provide auxiliary search earbuds function</p>\n<ul>\n<li>The app records the geo-location of the last earbud connection (the app needs to be running in the background) to help you locate the approximate range of the earbuds;</li>\n<li>If earbuds are nearby, try connecting them and playing a sound to help locate them;</li>\n<li>If you only lose one earbud, try to close the left/right channel to help confirm;</li>\n<li>If none of the above helps you, try the attached earbud device.</li>\n</ul>\n<h4>Screenshot effect</h4>\n<img src=\"/help-assets/func/find_device/img.png\" width=\"70%\" alt=\"\">\n\n<h4>Note:</h4>\n<p>When playing the sound, the sound will be adjusted to the maximum, and play, remember not to look for earbuds while wearing.</p>\n"
  },
  "/func/gesture_control": {
    "route": "/func/gesture_control",
    "title": "Gesture control",
    "section": "func",
    "sourcePath": "func/gesture_control.md",
    "html": "<ol>\n<li>AirPods 3, Pro, Max, Beats series earbuds button setting<ul>\n<li>The default functions can be set to play/pause, cut songs, pop-up window, broadcast battery, voice assistant (only supports some mobile phones), etc</li>\n</ul>\n</li>\n<li>AirPods 1,  2 earphones Tap to set <ul>\n<li>When wearing the earbuds, tapping the earbuds takes effect, and you can set the default tap function to other shortcut commands</li>\n</ul>\n</li>\n<li>Universal earbuds gesture Settings <ul>\n<li>Customize the default gesture/button function of the earbuds to other shortcut functions</li>\n</ul>\n</li>\n</ol>\n"
  },
  "/func/notification_bar": {
    "route": "/func/notification_bar",
    "title": "Notification bar Settings",
    "section": "func",
    "sourcePath": "func/notification_bar.md",
    "html": "<h4>Function introduction:</h4>\n<p>For member users to provide personalized quick view of power, including drop-down/lock screen notification bar, status bar quick view of power, and support a variety of style effects for you to choose.</p>\n<h4>Screenshot effect:</h4>\n<img src=\"/help-assets/func/notification_bar/img.png\" width=\"70%\" alt=\"\">\n\n<h2>Note:</h2>\n<ul>\n<li>Some mobile phone systems on the status bar icon display will have restrictions do not display, detailed solutions see</li>\n<li><a href=\"/faq/notification_bar\">The notification or status bar is not displayed</a></li>\n</ul>\n"
  },
  "/func/theme": {
    "route": "/func/theme",
    "title": "Simple theme making",
    "section": "func",
    "sourcePath": "func/theme.md",
    "html": "<h4>1. Function description:</h4>\n<ul>\n<li>Create your own personalized pop-up skin, the specific support for custom functional elements are as follows<ul>\n<li>Text color: Support bright color system, dark color system</li>\n<li>Pop-up background: Support to set image resources (free), dynamic resources (GIF, video, VIP exclusive)</li>\n</ul>\n</li>\n</ul>\n<h4>2. Effect display:</h4>\n<ul>\n<li>Below are some excellent pop-ups made by users, and more popup themes can be viewed in the square.</li>\n</ul>\n<img src=\"/help-assets/func/theme/img.png\" width=\"70%\" alt=\"\">"
  },
  "/func/widget": {
    "route": "/func/widget",
    "title": "Desktop widget",
    "section": "func",
    "sourcePath": "func/widget.md",
    "html": "<h4>Function description</h4>\n<p>Provide classic and popular desktop widgets for member users, so that you can easily check the power supply</p>\n<ul>\n<li>Classic: A widget that restores the apple effect as much as possible;</li>\n<li>Popular: A popular widget that can customize the background image</li>\n</ul>\n<h4>Screenshot effect</h4>\n<img src=\"/help-assets/func/widget/img.png\" width=\"70%\" alt=\"\">\n\n<ul>\n<li><a href=\"/rel/xiaomi_widget\">Widget adding tutorial - Xiaomi</a></li>\n<li><a href=\"/rel/oppo_widget\">Widget adding tutorial -OPPO</a></li>\n<li><a href=\"/rel/vivo_widget\">Widget adding tutorial -VIVO</a></li>\n<li><a href=\"/rel/huawei_widget\">Widget adding tutorial - Huawei</a></li>\n</ul>\n"
  },
  "/help": {
    "route": "/help",
    "title": "Home page",
    "section": "help",
    "sourcePath": "home.md",
    "html": "<h1>Welcome！</h1>\n<p>Welcome to the PodsLink Documentation Center</p>\n<p>PodsLink product documentation is all here, including the basic introduction, advanced features, FAQ, precautions four parts.\nHope you enjoy using!</p>\n<h2>Basic introduction</h2>\n<ul>\n<li><a href=\"/basic/intro\">Product introduction</a></li>\n<li><a href=\"/basic/headset_models\">Supported earbuds models</a></li>\n<li><a href=\"/basic/battery_display\">Battery display</a></li>\n<li><a href=\"/basic/auto_pop_up\">Pop-up window that automatically connects</a></li>\n<li><a href=\"/basic/attention\">Matters needing attention</a></li>\n</ul>\n<h2>Advanced Function</h2>\n<ul>\n<li><a href=\"/func/dynamic_pop\">The AirPods feature an exclusive dynamic popup window</a></li>\n<li><a href=\"/func/theme\">Simple theme making</a></li>\n<li><a href=\"/func/advaced_theme\">Advanced theme making</a></li>\n<li><a href=\"/func/gesture_control\">Gesture control</a></li>\n<li><a href=\"/func/broadcast\">Voice broadcast</a></li>\n<li><a href=\"/func/find_device\">Find earbuds</a></li>\n<li><a href=\"/func/audio_control\">Audio control</a></li>\n<li><a href=\"/func/widget\">Desktop widget</a></li>\n<li><a href=\"/func/notification_bar\">Notification bar Settings</a></li>\n</ul>\n<h2>APP-FAQ</h2>\n<ul>\n<li><a href=\"/faq/call_noise\">Call noise</a></li>\n<li><a href=\"/faq/noise_reduction\">How do I turn on and off noise reduction on AirPods Pro</a></li>\n<li><a href=\"/faq/stealing\">Earbuds stealing</a></li>\n<li><a href=\"/faq/no_sound\">There is no sound in the earbuds</a></li>\n<li><a href=\"/faq/repaire\">Repair earbuds</a></li>\n<li><a href=\"/faq/noise_cancellation\">Earbuds noise cancellation</a></li>\n<li><a href=\"/faq/power_consumption\">Application power consumption problem</a></li>\n<li><a href=\"/faq/add_widgets\">How to add desktop widgets</a></li>\n<li><a href=\"/faq/recognition\">Non-automatic recognition</a></li>\n<li><a href=\"/faq/connect\">The earbuds cover does not connect automatically</a></li>\n<li><a href=\"/faq/spatial_audio\">Spatial audio</a></li>\n<li><a href=\"/faq/headset_name\">Earbuds name setting</a></li>\n<li><a href=\"/faq/volume_light\">The earbuds volume is relatively light</a></li>\n<li><a href=\"/faq/notification_bar\">The notification bar is not displayed</a></li>\n<li><a href=\"/faq/status_bar\">Status bar ICONS are not displayed</a></li>\n<li><a href=\"/faq/in_ear_detection\">Guide to in-ear detection</a></li>\n<li><a href=\"/faq/not_pop_up\">Applications do not pop up</a></li>\n<li><a href=\"/faq/battery_not_update\">Battery access times out or does not update</a></li>\n<li><a href=\"/faq/charging_not_displayed\">Charging capacity is not displayed</a></li>\n<li><a href=\"/faq/cacurate_power\">How to display accurate power - to 1%</a></li>\n</ul>\n<h2>Relevant Considerations</h2>\n<ul>\n<li><a href=\"/rel/xiaomi_back\">XIAOMI - Background resident Settings</a></li>\n<li><a href=\"/rel/oppo_back\">OPPO - Background resident Settings</a></li>\n<li><a href=\"/rel/vivo_widget\">VIVO-Widget addition Guide</a></li>\n<li><a href=\"/rel/vivo_back\">VIVO - Background resident Settings</a></li>\n<li><a href=\"/rel/huawei_back\">HUAWEI - Background resident Settings</a></li>\n<li><a href=\"/rel/other_back\">Others - Background resident Settings</a></li>\n<li><a href=\"/rel/xiaomi_widget\">XIAOMI-Widget addition Guide</a></li>\n<li><a href=\"/rel/huawei_widget\">HUAWEI - Widget addition Guide</a></li>\n<li><a href=\"/rel/oppo_widget\">OPPO-Widget addition Guide</a></li>\n<li><a href=\"/privacy\">Privacy Policy</a></li>\n<li><a href=\"/agreement\">Terms of Service</a></li>\n<li><a href=\"/account-deletion\">Account deletion</a></li>\n<li><a href=\"/rel/update\">Update description</a></li>\n</ul>\n"
  },
  "/privacy": {
    "route": "/privacy",
    "title": "PodsLink Privacy Policy",
    "section": "privacy",
    "sourcePath": "privacy.md",
    "html": "<p>Welcome to the products and services provided by 「PodsLink」! 「PodsLink」 (or simply &quot;we&quot;) understands the importance of personal information to you, and we solemnly commit to protecting the personal information and privacy of users (hereinafter referred to as &quot;users&quot; or &quot;you&quot;) who use our products and services (collectively referred to as &quot;PodsLink services&quot;). When you use PodsLink services, we may collect and use your relevant personal information. We hope that this &quot;PodsLink Privacy Policy&quot; (hereinafter referred to as &quot;this policy&quot;) will explain the rules for processing your personal information when we collect and use it, as well as the ways we provide for you to access, correct, delete, and protect this personal information, to better safeguard your rights and interests.\nThis &quot;PodsLink Privacy Policy&quot; (hereinafter referred to as &quot;this Privacy Policy&quot;) applies to all PodsLink services we provide.</p>\n<ul>\n<li>We will describe each of the types of personal information we collect about you and the purposes for which we collect it so that you can understand the specific types of personal information we collect for a particular function, why we use it and how we collect it.</li>\n<li>When you use some functions, we will collect some sensitive information from you with your consent, unless it is required by relevant laws and regulations.</li>\n<li>At present, 「PodsLink」 will not actively share or transfer your personal information to any third party, if there is any other sharing or transfer of your personal information, we will obtain your express consent.</li>\n<li>Currently, 「PodsLink」 will not actively obtain your personal information from third parties. If it is necessary to obtain your personal information indirectly from a third party in the future for business development, we will specify the source, type and scope of use of your personal information before acquisition. We will strictly comply with the relevant laws and regulations and will ask third parties to guarantee the legality of the information they provide.</li>\n<li>We will try our best to protect your personal information rationally and legitimately by taking the secure measures.</li>\n</ul>\n<p>If you start it without agreeing this Privacy Policy, we would only collect the necessary information to maintain the fundamental function of 「PodsLink」. Therefore, we could not provide you with the complete product and services. However, your information would be protected by the same secure measures.</p>\n<p>We attach great importance to protect your personal information, dealing it with diligence and caution as our obligation. We suggest you read the whole terms of this Privacy Policy seriously and completely, expecting to introduce how we would deal with your personal information. Please pay more attention to the bold contents relating to your information and your rights. And now please read the appropriate sections according to the following index.</p>\n<ol>\n<li>How we collect and use your personal information</li>\n<li>The use of Cookie</li>\n<li>How we store and protect your personal information</li>\n<li>How we share, transfer and publicly disclose your personal information</li>\n<li>Your rights</li>\n<li>How we handle minors&#39; personal information</li>\n<li>How this Privacy Policy is updated</li>\n<li>How to contact us</li>\n<li>How we collect and use your personal information</li>\n</ol>\n<p>When you use the Service, the Service will collect information that you provide or generate when you use the Service in the following ways in order to maintain the correct operation of the application, provide and optimize our service, ensure the security of your account and follow to the laws and the standard stipulations. </p>\n<h2>1. How we collect and use your personal information</h2>\n<h3>1.1 The personal information we collect and use actively</h3>\n<ul>\n<li>To maintain 「PodsLink」 operating normally\nWhen you use 「PodsLink」, we would collect your device model, OS version, IMEI ( International Mobile Equipment Identity ), IP address, software version, network type, operating log, etc. Please understand these are the necessary and fundamental information for us to provide services and maintain the application operating normally. </li>\n<li>Information you upload or provide while using the services\nWhen you use the 「PodsLink」 service for feedback and subscription, we will collect a variety of information, including the feedback you submit, email information. We will use this information to fulfill your requests, to provide related products or services, or for anti-fraud purposes. </li>\n<li>Ensure the safety of products, services and users\nTo help us better understand the operation of 「PodsLink」 and related services and to ensure the safety of the operation and provision of the services, we will record web log information, as well as the frequency of use of the software and related services, crash data, overall installation, usage, performance data and other information.</li>\n</ul>\n<h3>1.2 How we deal with the change of the purpose of collecting and using of your personal information</h3>\n<p>Please understand that as our business evolves, there may be adjustments and changes to the functions and services offered by 「PodsLink」. In principle, when new functions or services are related to scenarios such as old functions, the personal information collected and used will be directly or reasonably related to the original purpose of processing. In scenarios that are not directly or reasonably related to the original purpose, we will collect and use your personal information and will again inform you and obtain your consent.</p>\n<h3>1.3 Personal information collected and used by consent is exempted by law</h3>\n<p>Please understand that under the following circumstances, in accordance with laws, regulations and/or relevant national standards, we do not need to obtain your authorized consent to collect and use your personal information.</p>\n<ul>\n<li>Directly related to national security and national defense security </li>\n<li>Directly related to public security, public health or major public interests</li>\n<li>Directly related to criminal investigation, prosecution, trial and execution of judgment, etc</li>\n<li>For the purpose of safeguarding the life, property and other important legitimate rights and interests of the subject of personal information or other individuals, but it is difficult to obtain consent from the individual</li>\n<li>The personal information collected by you is disclosed to the public by you</li>\n<li>Collection of your personal information from legally publicly disclosed information, such as legal news reports, government information disclosure and other channels</li>\n<li>Necessary for signing and performing the contract according to your requirements</li>\n<li>Necessary to maintain the safe and stable operation of software and related services, such as finding and resolving faults of software and related services</li>\n<li>Other circumstances provided for by laws and regulations\n   Particularly, if the information cannot be identified to your personal identity individually or in combination with other information, it does not belong to your personal information in the legal sense; When your information can be identified to your personal identity alone or in combination with other information, or when we use the data which cannot be associated with any specific personal information in combination with other your personal information, during the combined use, such information will be treated and protected as your personal information in accordance with this Privacy Policy.</li>\n</ul>\n<h2>2. The use of Cookie</h2>\n<p>   Cookies and similar technologies are ubiquitous on the Internet. When you use 「PodsLink」 and related services, we may use relevant technologies to send one or more cookies or anonymous identifiers to your device to collect and store information about your access to and use of the product. We will set cookies or anonymous identifiers for authentication and security to ensure the safe and efficient operation of our products and services, and help us improve service efficiency and response.</p>\n<h2>3. How we store and protect your personal information</h2>\n<h3>3.1 How we store your personal information</h3>\n<ul>\n<li>Location of information storage\nWe will store the collected personal information in China or in the country/region where the user is located in accordance with laws and regulations.</li>\n<li>Period of information storage\nIn general, we retain your personal information only for as long as necessary to achieve the purpose, for example, the email address you fill in when you submit your feedback.\nIn the event that our products or services cease to operate, we will notify you by push notification, announcement, etc. and delete or anonymize your personal information within a reasonable period of time.</li>\n</ul>\n<h3>3.2 How we protect your personal information</h3>\n<ul>\n<li>We attach great importance to your safety of personal information, and try our best to take appropriate measures to protect it from accessing, disclosing  publicly, use, tamper, damage, loss and leak without your authorization.</li>\n<li>We will use effective and appropriate measures such as industry-standard encryption and anonymizing technology to protect your personal information. Also, we use safety protection system to prevent your personal information from malware attack.</li>\n<li>We will build up technical safety department, administration regulation of safety, process of data safety to protect your personal information. We will use a strict system, ensure only authorized person can access your personal information. And we will set up safety audit at the appropriate time about data and technology.</li>\n<li>Please understand that because of the limit of technology and all kinds of malicious methods, in the internet industry we can’t ensure for 100% about the safety of information, even though we take the effective and rational measures above, abide relevant laws and regulations to be up to the standard and try our best to improve the safety measures. Please understand the possibility of matter because of the factors beyond our control, accessing the system and communication network that our services using. Therefore, we highly suggest you take active and effective measures to protect your safety of information. Including but not limited to using strong password and modify it regularly, and do not disclose your personal information such as your account number and password to others.</li>\n<li>We have emergency plans which would be activated in the event of security incident in order to prevent the negative effect from spreading. Once the event of security incident happens, such as the information leaked or lost, we would abide to the laws and regulations, informing you the basic situation and potential effect, the measures we have and would take, the suggestion for you to defend and decrease the risk on your own, the re mediation measure for you, etc. We would inform you the relevant situation on time through the information push, email, message, etc. And we would use effective announcement if we could not inform all the users in turn. Meanwhile, we will report the disposal situation according to the demand of supervision department.</li>\n<li>We remind you particularly that the measure of protecting personal information provided by this Privacy Policy only apply to 「PodsLink」 and the relevant services. Once you get away from 「PodsLink」 to browse or use service, resource from other website, then we are unable and without obligation to protect your any personal information you submit on other application, software, and website. No matter whether the application, software, and website above are from the link or guidance from 「PodsLink」 or not.</li>\n</ul>\n<h2>4. How we share, transfer and publicly disclose your personal information</h2>\n<h3>4.1 Sharing</h3>\n<p>We would not share your personal information to any other company, organization, individual, except in the following circumstances.</p>\n<ul>\n<li>Acquiring your consent clearly</li>\n<li>According to the laws and regulations, or the mandatory demand from the competent government authority</li>\n<li>Share with our associated companies. Your necessary personal information would be share with our associated companies, and still be restrained by this Privacy Policy. Associated companies must obtain your permission if they need to change the purpose of using your personal information.</li>\n<li>Share with our cooperative partner. Certain of our services will be provided by authorized partners only for the purposes stated in this Privacy Policy. We may share some of your personal information with our partners to provide better customer service and user experience. For example, the company we employ to provide third-party data statistics and analysis services may need to collect and access personal data for data statistics and analysis. In such cases, these companies must comply with our data privacy and security requirements. We will only share your Personal Information for lawful, legitimate, necessary, specific and explicit purposes, and will only share such Personal Information as is necessary to provide the Services</li>\n<li>We will carefully evaluate the purposes for which third parties are using the shared information, conduct a comprehensive assessment of the security capabilities of these partners, and require them to comply with the legal agreements for cooperation. We will strictly monitor the software tool development kit (SDK) and application program interface (API) for partners to obtain information, so as to protect data security\nAs for the information about the third-party SDK from the partners that we access, please refer the Catalogue of Third-Party SDK Accessed attached at the end of this policy.</li>\n</ul>\n<h3>4.2 Transfers</h3>\n<p>We will not transfer your personal information to any company, organization or individual except in the following circumstances.</p>\n<ul>\n<li>Transfer with explicit consent: we will transfer your personal information to other parties after obtaining your explicit consent.</li>\n<li>In the event of a merger, acquisition, or liquidation involving the transfer of personal information, we will ask the new company or organization holding your personal information to remain bound by this Privacy Policy before we ask that company or organization to seek authorization from you again.</li>\n</ul>\n<h3>4.3 Public Disclosure</h3>\n<p>We will only publicly disclose your personal information in the following circumstances.</p>\n<ul>\n<li>With your express consent.</li>\n<li>Disclosure Based on Law: We may disclose your personal information publicly where we are required to do so by law, legal process, litigation, or mandatory governmental authority.</li>\n</ul>\n<h2>5. Your rights</h2>\n<p>   In accordance with international common practices, we guarantee that you exercise the following rights to your personal information.</p>\n<h3>5.1 Withdrawal of authorization consent</h3>\n<p>You can change the authorization consent for 「PodsLink」 in system Settings at any time. When you withdraw your consent, we will no longer process the corresponding personal information. However, your decision to withdraw your consent will not affect the processing of personal information previously carried out based on your authorization.</p>\n<h3>5.2 In response to your request above</h3>\n<p>When you access, modify or delete relevant information, we may require you to verify your identity to protect the security of your account. Please understand that due to technical limitations, legal or regulatory requirements, we may not be able to meet all of your requirements, and we will respond to your request within a reasonable period of time.</p>\n<h3>5.3 Access Privacy Policy</h3>\n<p>You can enter &quot;Settings&quot; - &quot;Privacy Policy&quot; in the app to view the full content of this privacy policy.</p>\n<h3>5.4 Inform you of the right if we cease operation</h3>\n<p>If we cease operation, we will stop collecting your personal information in a timely manner, notify you of the notice of cessation of operation in the form of one-by-one service or announcement, and delete or anonymize your personal information held by us.</p>\n<h2>6. How we handle minors&#39; personal information</h2>\n<p>   We attach great importance to the protection of minors&#39; personal information. In accordance with relevant laws and regulations, if you are a minor under the age of 18, prior written consent of your parents or legal guardian should be obtained before using the 「PodsLink」 Service. We will protect the personal information of minors in accordance with relevant national laws and regulations, and will only collect, use, share or disclose the personal information of minors when permitted by law, with the express consent of parents or other guardians or when necessary for the protection of minors; If we find that personal information about minors has been collected without prior verifiable parental consent, we will seek to remove the information as soon as possible.</p>\n<h2>7. How this Privacy Policy is updated</h2>\n<p>   We may revise this Privacy Policy in due course. When the terms of this privacy policy change, we will show you the changed privacy policy in the form of push notification and pop-up window when you log in and update the version. Please note that we will collect, use and store your personal information in accordance with the updated Privacy Policy only after you click the &quot;Agree&quot; button in the pop-up window.</p>\n<h2>8. Contact Us</h2>\n<p>   If you have any complaints or reports regarding personal information security, or if you have any questions, comments, or suggestions about this Privacy Policy or your personal information, or any issues regarding this Privacy Policy or privacy measures, please contact us at the following email address: <a href=\"mailto:xiaolongonly@gmail.com\">xiaolongonly@gmail.com</a>\n   In general, we will respond to your questions, comments, or suggestions within fifteen working days after receiving your inquiry and verifying your user identity.</p>\n<ul>\n<li>Application and Use of Permission</li>\n<li>In order to ensure the safe and stable operation of love records, we will apply for or use the relevant permissions of the operating system according to the actual circumstances. </li>\n<li>In order to protect your right to know, we show the relevant operating system permissions that the product may apply for and use through the following list. You can manage the relevant permissions according to your actual needs.</li>\n<li>According to the product upgrade, the application, the type and the purpose of the permission to use will change according to the product functions. We will adjust the list according to these changes in time to ensure that you are informed of the application and use of the permission in time.</li>\n<li>Please understanding that for the function and security needs of our business and products, we will consider using a third party SDK based on actual business consideration, and these third parties will also apply for or use relevant operating system permissions.</li>\n<li>In the process of using the product, if you use the H5 interface or applet developed by the third party, the plug-ins or applet developed by the third party will apply for or use the relevant operating system permissions according to the function of actual business circumstances.</li>\n</ul>\n<p>Catalogue of Third-Party SDK Accessed\nIn order to ensure the operation of the functions related to Love Days Counter and the safe and stable operation of the application, we will access the software development kit (SDK) provided by the third party to achieve relevant purposes according to the needs of actual business scenarios.\nWe will carry out strict security monitoring on the software tool development kit (SDK) for partners to obtain information, so as to protect data security. The relevant third party SDKs we access are listed in the directory.\nPlease note that the third party SDK may have some changes in data processing types due to its version upgrade, policy adjustment and other reasons. Please refer to the official explanation.</p>\n<p>• Google Play In-App Payments\nTheir privacy policy can be viewed at <a href=\"https://www.google.com/policies/privacy/\">https://www.google.com/policies/privacy/</a>\n• PayPal\nTheir privacy policy can be viewed at<a href=\"https://www.paypal.com/webapps/mpp/ua/privacy-full\">https://www.paypal.com/webapps/mpp/ua/privacy-full</a></p>\n"
  },
  "/rel/huawei_back": {
    "route": "/rel/huawei_back",
    "title": "HUAWEI - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/huawei_back.md",
    "html": "<ul>\n<li>This article takes [Huawei HarmonyOS 4.0] as an example to teach you how to make popup and other functions &quot;more stable&quot; and &quot;more durable&quot;.</li>\n</ul>\n<h4>Step 1: Allow the app to start itself</h4>\n   <img src=\"/help-assets/rel/huawei_back/img.png\" width=\"70%\">\n   <img src=\"/help-assets/rel/huawei_back/img_1.png\" width=\"70%\">\n   <img src=\"/help-assets/rel/huawei_back/img_2.png\" width=\"70%\">\n   <img src=\"/help-assets/rel/huawei_back/img_3.png\" width=\"70%\">\n\n<h4>Step 2: Put a lock on the app</h4>\n   <img src=\"/help-assets/rel/huawei_back/img_4.png\" width=\"70%\">\n\n<ul>\n<li>After locking, you can avoid cleaning yourself off by mistake should be applied</li>\n<li>Well, after the setup is complete, try the pop-up window</li>\n</ul>\n"
  },
  "/rel/huawei_widget": {
    "route": "/rel/huawei_widget",
    "title": "HUAWEI - Widget addition Guide",
    "section": "rel",
    "sourcePath": "rel/huawei_widget.md",
    "html": "<ol>\n<li>Press in the desktop blank and select [Window gadget]</li>\n<li>In the list, swipe right to find the PodsLink widget and drag it to the desktop</li>\n<li>Click on the widget and select a widget from the list.</li>\n</ol>\n"
  },
  "/rel/oppo_back": {
    "route": "/rel/oppo_back",
    "title": "OPPO - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/oppo_back.md",
    "html": "<ul>\n<li>This article takes [OPPO mobile ColorOS 11.1] as an example to teach you how to make popup and other functions &quot;more stable&quot; and &quot;more durable&quot;.</li>\n</ul>\n<h4>Step 1: Allow background behavior and self-boot</h4>\n<img src=\"/help-assets/rel/oppo_back/img.png\" width=\"70%\">\n<img src=\"/help-assets/rel/oppo_back/img_1.png\" width=\"70%\">\n<img src=\"/help-assets/rel/oppo_back/img_2.png\" width=\"70%\">\n\n<h4>Step 2: Put a lock on the app</h4>\n<img src=\"/help-assets/rel/oppo_back/img_3.png\" width=\"70%\">\n\n<blockquote>\n<p>After locking, you can avoid cleaning yourself off by mistake should be applied</p>\n</blockquote>\n"
  },
  "/rel/oppo_widget": {
    "route": "/rel/oppo_widget",
    "title": "OPPO-Widget addition Guide",
    "section": "rel",
    "sourcePath": "rel/oppo_widget.md",
    "html": "<ol>\n<li>Press in the desktop blank and select 【 Widgets 】</li>\n<li>Slide down the list to find the PodsLink widget, drag and place it on the desktop</li>\n<li>Click on the widget and select a widget from the list.</li>\n</ol>\n"
  },
  "/rel/other_back": {
    "route": "/rel/other_back",
    "title": "Others - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/other_back.md",
    "html": "<ul>\n<li>This article contains guides on how to set up your phone with Realme, OnePlus, Samsung, Meizu, and Black Shark, teaching you how to make the pop-up and other functions &quot;more stable&quot; and &quot;more enduring&quot;.</li>\n</ul>\n<h4>Realme:</h4>\n<ul>\n<li>Realme devices can be referenced in the following guide: &quot;Background Apps Stay Running - OPPO Edition&quot;</li>\n</ul>\n<h4>One plus:</h4>\n<ul>\n<li>The phone&#39;s system Settings - Battery - Battery Optimization - PodsLink - are set to not optimize. </li>\n<li>You can add a lock to your app in the recent tasks list. </li>\n<li>If your phone is ColorOS, see: Background Resident Guide -OPPO article for details</li>\n</ul>\n<h4>Samsung:</h4>\n<ul>\n<li>The phone&#39;s system Settings - apps - PodsLink - battery - allow for background activity. </li>\n<li>The phone&#39;s system Settings - Apps - PodsLink - Battery - off optimize battery usage.</li>\n</ul>\n<h4>Meizu:</h4>\n<ul>\n<li>You can add a lock to the app in the recent task list.</li>\n<li>The system Settings of the mobile phone - Power management - Power consumption details - Mobile standby - Background management - PodsLink - allow background operation.</li>\n</ul>\n<h4>Black Shark:</h4>\n<ul>\n<li>The phone&#39;s system Settings - battery - Background Intelligent Management - allow applications to run in the background.</li>\n<li>Can refer to: Background resident guide - millet chapter</li>\n</ul>\n<h3>MOTOROLA Edge:</h3>\n<ul>\n<li>The phone&#39;s phone manager - background running - PodsLink - allows background running.</li>\n<li>Well, after the setup is complete, try the pop-up window</li>\n</ul>\n<blockquote>\n<p>PS: If the model is not in the above list, or there are problems with the use of configuration, you can leave a message and feedback to us on the community home page</p>\n</blockquote>\n"
  },
  "/rel/update": {
    "route": "/rel/update",
    "title": "update description",
    "section": "rel",
    "sourcePath": "rel/update.md",
    "html": "<h3>V1.1</h3>\n<p>New communication community function.</p>\n<p>Support for more languages:\nChinese, Traditional Chinese, French, German, Japanese,\nKorean, Spanish, Portuguese, Russian, Hindi, Italian, Turkish,Vietnamese, Arabic.</p>\n<p>More models supported:\nAirPods 4\nAirPods Max (USB-C)</p>\n<p>(Translation is machine translation, if you have problems with the meaning of words or have a better translation, you can contact me by email)</p>\n<h3>V1.0</h3>\n<p>PodsLink first version of this application is online, currently supported models are AirPods series, Beats series, etc., including software functions such as power display, connection pop-up window, automatic audio, gesture Settings, locate, desktop widgets, notification Settings, welcome to give us more feedback</p>\n"
  },
  "/rel/vivo_back": {
    "route": "/rel/vivo_back",
    "title": "VIVO - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/vivo_back.md",
    "html": "<ul>\n<li>This article takes [VIVO Mobile phone OriginOS] as an example to teach you how to make popup and other functions &quot;more\nstable&quot; and &quot;more durable&quot;.</li>\n</ul>\n<h4>Step 1: Allow the app to start itself</h4>\n<img src=\"/help-assets/rel/vivo_back/img.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_1.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_2.png\" width=\"70%\">\n\n<h4>Step 2: Allow high power consumption in the background</h4>\n<ul>\n<li>Avoid applications being cleaned up by system battery optimization strategies</li>\n</ul>\n<img src=\"/help-assets/rel/vivo_back/img_3.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_4.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_5.png\" width=\"70%\">\n<img src=\"/help-assets/rel/vivo_back/img_6.png\" width=\"70%\">\n\n<h4>Step 3: Put a lock on the app to avoid manual cleaning</h4>\n<ul>\n<li>Swipe up from the bottom of the phone to enter the list of background tasks</li>\n<li>Select the PodsLink app task, hold down and slide</li>\n<li>Lock is complete</li>\n</ul>\n"
  },
  "/rel/vivo_widget": {
    "route": "/rel/vivo_widget",
    "title": "VIVO-Widget addition Guide",
    "section": "rel",
    "sourcePath": "rel/vivo_widget.md",
    "html": "<ol>\n<li>Please ensure that the system is in [Android mode] first. </li>\n<li>Press in the desktop blank and select [Atomic component]</li>\n<li>Swipe right in the list to find the PodsLink widget, drag and place it on the desktop </li>\n<li>Click on the widget and select a widget from the list.</li>\n</ol>\n<blockquote>\n<p>Note: Currently, widgets in Origin mode are not open to third-party software. When the system has an open interface for third-party software adaptation, we will follow up and support it.</p>\n</blockquote>\n"
  },
  "/rel/xiaomi_back": {
    "route": "/rel/xiaomi_back",
    "title": "XIAOMI - Background resident Settings",
    "section": "rel",
    "sourcePath": "rel/xiaomi_back.md",
    "html": "<p>This article takes [XIAOMI HyperOS] as an example to teach you how to make functions such as pop-ups &quot;more stable&quot; and &quot;more durable&quot;.</p>\n<h4>Step 1: Allow the application to self-start with power-saving optimization</h4>\n<img src=\"/help-assets/rel/xiaomi_back/img.png\" width=\"70%\" alt=\"\"/>\n<img src=\"/help-assets/rel/xiaomi_back/img_1.png\" width=\"70%\" alt=\"\"/>\n<img src=\"/help-assets/rel/xiaomi_back/img_2.png\" width=\"70%\" alt=\"\"/>\n\n<h4>Step 2: Put a lock on the app</h4>\n<ul>\n<li>After locking, you can avoid cleaning yourself off by mistake should be applied</li>\n</ul>\n<img src=\"/help-assets/rel/xiaomi_back/img_3.png\" width=\"70%\" alt=\"\"/>\n<img src=\"/help-assets/rel/xiaomi_back/img_4.png\" width=\"70%\" alt=\"\"/>\n\n\n<ul>\n<li>Well, after the setup is complete, try the pop-up window</li>\n</ul>\n"
  },
  "/rel/xiaomi_widget": {
    "route": "/rel/xiaomi_widget",
    "title": "XIAOMI-Widget addition Guide",
    "section": "rel",
    "sourcePath": "rel/xiaomi_widget.md",
    "html": "<p>Note: The operation guide for different MIUI system versions is different</p>\n<h4>HyperOS/MIUI14</h4>\n<ol>\n<li>Press in the desktop blank and select Add widget; </li>\n<li>click the search button on the top right, click the bottom [Android widgets]</li>\n<li>Find the PodsLink widget in the list and drag it to your desktop</li>\n<li>Click and select a widget</li>\n</ol>\n<h4>MIUI13 System Guide:</h4>\n<ol>\n<li>Press in the desktop blank and select Add widget;</li>\n<li>click the search box at the top, drop the input method, click the bottom [Android widget]</li>\n<li>Find the PodsLink widget in the list and drag it to your desktop</li>\n<li>Click and select a widget</li>\n</ol>\n<h4>The following system guide for MIUI13</h4>\n<ol>\n<li>Click in the desktop blank and select [Add Tool]</li>\n<li>slide down the list to find the PodsLink widget, drag it to the desktop</li>\n<li>Click on the widget and select a widget from the list.</li>\n</ol>\n"
  }
};

export const helpRoutes = helpDocs.map((doc) => doc.route);
