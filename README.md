## To Run just the UI app:

To Run locally for development, in your terminal type `npm start`.
<br />
<br />

## To run tests:

To Test, in your terminal type `npm run test`.
<br />
<br />

## To build artifacts for deployment:

When this app is ready for deployment, run `npm run build` to generate artifacts into a `build/` folder.
<br />
<br />
<br />

# Seting up your IDE:

Since most people on the team uses Visual Studio Code, this section will focus on setting up VSCode.
<br />
<br />
Install the following extensions:

- ESLint
- GitLens
- One Monokai Theme
- Prettier
- Sass Lint
- TODO Highlighter
- VSCode Great Icons

Not everyone finds them useful, so install the extension that you need/want!
<br />
<br />

### Set up ESLint & Prettier:

If you installed ESLint & Prettier, make sure you install them globally with `npm i -g eslint prettier`. After installing, configure VSCode to use them to auto lint!
<br />

- Go to File => Preferences => Settings.
- Next to the search bar, click the ellipsis (...) button
- Choose "open settings.json".
- Under User Settings, make sure you have the following settings:
  <br />

```
{
  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true
}
```

<br />

Make sure you have an .eslintrc file at the root of your project and watch the magic happen!

<br />

### Set up GitLens:

1. Make sure you have git installed.
2. Make sure VSCode is pointing to the correct git.exe file.<br />
   - Go to File => Preferences => Settings.<br />
   - Next to the search bar, click the ellipsis (...) button<br />
   - Choose "open settings.json".<br />
   - Under User Settings, make sure you have the following settings:
     <br />

```
{
  "gitlens.advanced.git": "C:\\Users\\YOUNAME\\AppData\\Local\\Programs\\Git\\git.exe",
  "terminal.integrated.shell.windows": "C:\\Users\\YOUNAME\\AppData\\Local\\Programs\\Git\\bin\\bash.exe",
  "git.path": "C:\\Users\\YOUNAME\\AppData\\Local\\Programs\\Git\\git.exe",
}
```

<br />

Simply replace YOURNAME with your username.

**The above is set up for the default git location on windows.**

<br />
<br />

**_As an example, my User Settings look like:_**

```
{
  "gitlens.advanced.git": "C:\\Users\\LUSHEN9\\AppData\\Local\\Programs\\Git\\git.exe",
  "terminal.integrated.shell.windows": "C:\\Users\\LUSHEN9\\AppData\\Local\\Programs\\Git\\bin\\bash.exe",
  "editor.tabSize": 2,
  "gitlens.currentLine.enabled": true,
  "git.autofetch": true,
  "git.path": "C:\\Users\\LUSHEN9\\AppData\\Local\\Programs\\Git\\git.exe",
  "terminal.integrated.rendererType": "dom",
  "explorer.confirmDelete": false,
  "window.zoomLevel": 0,
  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true
}
```

<br />

**A final note on using Firefox in Windows:**
<br />
Some pages might work for Chrome but not Firefox because FF actually has stricter security rules. To setup FF to use Windows security certificates,

- Open FF and in the url box, type about:config
- Search for security.enterprise_roots.enabled
- turn it on (value should be set to true)
- Restart FF

##Download Redux DevTools - Google Chrome
