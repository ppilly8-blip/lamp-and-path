LAMP & PATH — installable web app
Built 2026-11-05

WHAT THIS IS
A 12-week Bible reading plan with three short moments a day: Read, Reflect,
Respond. It runs in your phone's browser, installs to the home screen like an
app, and works without a connection after the first visit. Your progress and
notes stay on your device.

WHAT IS IN THIS FOLDER (keep every file together, in one folder)
  index.html          the app itself (styles, script, fonts and verses are inside)
  manifest.json       tells the phone how to install it
  sw.js               lets it work offline
  icon-192.png, icon-512.png, icon-maskable-512.png,
  apple-touch-icon.png, icon.svg
                      the app icons
  FONT-LICENSES.txt   licences for the two fonts (SIL Open Font License)
  README.txt          this file


STEP 1. PUT IT ONLINE (free, about 5 minutes)
An installable app has to be opened from an https:// address. GitHub Pages
gives you one for free. Any other host that serves files over https also
works (Netlify, Cloudflare Pages, your own site): upload the same files.

 1. Sign in at github.com. Create a free account if you do not have one.
 2. Create a new repository. Give it a short name such as  lamp-and-path
    and set it to Public (on a free account, Pages needs a public repository).
 3. In the repository, open the "Add file" menu and choose "Upload files".
    Drag in every file from this folder (the files, not the folder), or use
    "choose your files". Keep "Commit directly to the main branch" selected
    and click "Commit changes". (If the button says "Propose changes"
    instead, finish that and merge the pull request it opens.)
 4. Open the repository's "Settings" tab, then "Pages" in the left sidebar.
    Under "Build and deployment", set Source to "Deploy from a branch", pick
    the main branch and the "/ (root)" folder, then click "Save".
 5. Wait a few minutes. GitHub says a change can take up to 10 minutes to
    publish. Your app will be at

        https://YOUR-USERNAME.github.io/lamp-and-path/

    Settings > Pages shows the exact address, with a "Visit site" button.

The site is public, so anyone with the link can open it. It holds no personal
data: your progress and notes are never sent anywhere.


STEP 2. INSTALL IT ON YOUR PHONE
 Android (Chrome): open your address. Tap "Install" in the card at the top of
   Today, or open the menu (three dots) and choose "Install app". It appears
   on your home screen and in your app list.
 iPhone (Safari): tap Share, then "Add to Home Screen".
 Computer (Chrome or Edge): click the install icon at the right end of the
   address bar.

Open it once while you are online. After that it also opens without a
connection.


USING IT
 - Reminders appear inside the app while it is open. To be reminded when it is
   closed, use the "Add daily to Google Calendar" buttons on the Reminders tab,
   or set three alarms on your phone.
 - Your progress and notes are saved on this device only. On the Reminders tab,
   "Back up now" saves a small file. On a new phone, install the app again and
   choose "Restore from backup". Clearing the browser's site data, or
   uninstalling, erases what is on the device, so keep a backup file.
 - "Save notes as a file" on the Notes tab saves your reflections as readable text.
 - The only things that leave the app are links you tap: Bible Gateway (the full
   chapter) and Google Calendar.


UPDATING
Upload the new files over the old ones (same names; "Upload files" replaces
files with the same name). Then open the app while online, and once more after
that, to pick up the update.


IF SOMETHING LOOKS WRONG
 - No "Install" option: make sure you opened the https address, not the file
   itself. If the menu only shows "Add to Home screen", that works too.
 - "Page not found": give it a few minutes, then check Settings > Pages says
   the site is live, and that index.html sits at the top level of the repository,
   not inside a folder.
 - Old version showing: close the app fully and open it again while online.


OPTIONAL: AN ANDROID APK
This package is a web app, not an APK. If you want a downloadable Android
package later, a service such as pwabuilder.com can wrap your https address
into one.

Verse text: King James Version.
