/*webpack takes modules with dependencies and generates 
static assets representing those modules.*/

//say we have a main.js file that requires another js file 'second.js'

//main.js
require('./second.js')
document.write("Webpack for the win!");

//second.js
module.exports = document.write("Oh yeah another file");

//next we define a webpack.config.js file that determines how the bundling will be done
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'       
  }
};

//running the 'webpack' command outputs a 'bundle.js' file housing both 'main.js' and 'second.js'
//excerpt from bundle.js
([
/* 0 */
/***/ (function(module, exports) {

module.exports = document.write("Oh yeah another file");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
document.write("Webpack for the win!");
/***/ })
/******/ ]);

/*It can build and bundle CSS, preprocessed CSS, compile-to-JS languages 
(like TypeScript, CoffeeScript), images and more by utilising webpack loaders*/

//Using the CoffeeScript and CSS loaders
//modify webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
  	path: './build', // This is where images AND js will go
    publicPath: 'http://yoururl.com/', // This is used to generate URLs
    filename: 'bundle.js'       
  }
};
module: {
    loaders: [
        { test: /\.coffee$/, loader: "coffee-loader" },
        { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
}

//create a CoffeeScript file 'third.coffee'
alert('This is CoffeeScript')

//and a style.css file
body{
	background-color: Red;
}

//require the files in 'main.js'
require('./style.css')
require('./third.coffee');
require('./second.js');
document.write("Webpack for the win!");

/*runnig webpack builds and loads all the dependencies and outputs the 'bundle.js' file 
that can be used in the project*/