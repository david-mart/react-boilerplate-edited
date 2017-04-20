# dotMaps React/Redux 

Fresh project structure setup. Using **react**/**redux**, **react-router**, **redux-thunk**, **chai**, **react-hot-loader** and more. 
Detailed dev technologies are listed at the bottom of the page.

## Setup
1. **Install [Node 7.2.1 or greater](https://nodejs.org)**.
2. Clone the project.
    - HTTP:     `git clone git@github.com:sadasystems/geo-dotmaps-react.git`
    - SSH:      `git@github.com:sadasystems/geo-dotmaps-react.git`

## Building the Application

```bash
# Install the dependencies with yarn
yarn

# Install the dependencies with npm

npm install
```

## Run

* `npm start -s`
    - This will run the automated build process, start up a webserver, and open the application in your default browser. When  developing, this command will continue watching all your files.
        * Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
    - Every time a file is saved, the following is performed:
        * Code is rebuilt.
        * Linter will check the code quality of the project.
        * Unit tests are re-ran.

## Running Tests and Code Coverage
* To run tests explicitly, `npm run test`.
* To perform code coverage analysis: `npm run test:cover`.
    * Code coverage can be viewed in the `/coverage` folder.
        * Open `/coverage/index.html` in your browser to review the results in finer detail

## Building the project
```bash
# This will build the solution and produce the artifacts to the /dist folder
npm run build
```

## Technologies
Slingshot offers a rich development experience using the following technologies:

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux), [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux), [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)|
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Mocha](https://mochajs.org/) | Feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.  | [Official Wiki](https://github.com/mochajs/mocha/wiki) |
| [Material-UI](http://www.material-ui.com/#/) | A Set of React Components that Implement Google's Material Design. | [Getting started](http://www.material-ui.com/#/get-started/required-knowledge), [Google Material Design specs](https://material.io/guidelines/) |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |



