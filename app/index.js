// My app's outermost JS file, which is also a entry point for webpack

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')


);
