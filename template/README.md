# [Electron](https://www.electronjs.org) [Typescript](https://www.typescriptlang.org) [Sass](https://sass-lang.com) template.

This is my Electron - TypeScript - Sass template for [Create React App](https://github.com/facebook/create-react-app).

to use it paste this in your terminal

```sh
npx create-react-app my-app --template electron-node-react-sass-typescript

# or

yarn create react-app my-app --template electron-node-react-sass-typescript
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
<hr/>

## npm (/yarn) Scripts

### In the project directory, you can run:

<br/>

### `npm start`

Renders you app with electron

### `npm run build`

Builds your app. you'll be able to find an installer and a
localy installed version in the dist directory.

### `npm run release`

Releases your app.

### `npm run electron-start`

Starts the electron part of your app.

### `npm run electron-build`

Builds the electron part of your app.  
This is done using [electron-builder](https://www.npmjs.com/package/electron-builder)

### `npm run electron-release`

Releases the electron part of your app.  
This is also done using [electron-builder](https://www.npmjs.com/package/electron-builder)

### `npm run react-start`

Starts your react on [localhost (port 3000)](https://localhost:3000)  
and opens it in your default browser.  
The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm run react-build`

Builds the react part of your app.
The build is minified and the filenames include the hashes.  
If necessary, classnames and function names can be enabled for profiling purposes.  
See [this](https://create-react-app.dev/docs/production-build/) for more information

### `npm run react-serve`

Starts your react on [localhost (port 3000)](https://localhost:3000)  
**without** opening it in your default browser.  
The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm run test`

Runs the tests that you've built into react.  
See [this](https://create-react-app.dev/docs/running-tests/) for more information

### `npm run eject`

Ejects your CRA.  
Read [this](https://create-react-app.dev/docs/available-scripts/#npm-run-eject) before performing!

<hr/>
This is my first CRA template, hope you like it.
