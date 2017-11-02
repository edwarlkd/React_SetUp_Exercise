# React_SetUp_Exercise
# This README.md file simply contains some introduction guides to set up React

---Term---
npm: a package manager to keep track of JS software
Node.js: an environment for developing server-side applications
(npm and Node.js are just installed once on a computer)
Babel is a JavaScript compiler that includes the ability to compile JSX (JS XML) into regular JavaScript.
----------

---Steps to take to set up React---
1.	In cmd, create a directory. “mkdir (new_foldername)”, which will create a file package.json that contains metadata about your new project. Also, it keeps track of modules you installed and run their own local versions of your project.
2.	Now install React with “npm install --save react”. (You can see it added in the package.json which has now React listed as a dependency). Also ‘node-modules’ directory is created. (node-module is where npm modules are saved. After installing React, you can also see React folder included in ‘node-modules’)
3.	Now install React-dom “npm install --save react-dom” 
4.	Now install Babel (its npm module name is babel-core) with “npm install –save-dev babel-core”. Also, install babel-core, babel-loader, and babel-present-react. To make Babel work, we need to write a babel configuration file called ‘.babelrc’, and write the following code 
{preset : [‘reset’] }
5.	Now, we need to set up a system in which your React will automatically run through Babel and compile your JSX file. (Remember Babel translate JSX to JS). Such transformation is one of many transformation, and we need to set up a ‘transformation manager’ that will take the codes and run it through all of the transformation. There are many software packages that can do this (most popular is ‘webpack’; we need the following set ‘webpack’, ‘webpack-dev-server’, ‘html-webpack-plugin’ in dev mode “--save-dev”). Remember Webpack’s job is to run the React code through various transformation. However, webpack needs to know what transformations it should use, which can be done in a special webpack configuration file ‘webpack.config.js’ in the root directory. Webpack will take your JS, run through some transformation, and create a new transformed JS file, which will be the ones the browser actually reads.

-To make these installed parts (Node, rpm, React, ReactDOM, Babel, and Webpack) actually run, you will be using npm command-line scripts
-npm run build will make webpack perform its transformations.
-npm run start will start a local server! npm run start will also give you the ability to change your app and see the changes automatically, without having to restart the server for each new change.



