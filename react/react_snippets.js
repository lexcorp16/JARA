/*React makes writing javascript much easier by employing a new 
syntax called JSX which enables a developer mix HTML and javascript*/

var React = require('react');
var ReactDOM = require('react-dom');

var QuoteMaker = React.createClass({
  render: function () {
    return (
      <blockquote>
		  <p>
		    What is important now is to recover our senses.
		  </p>
		  <cite>
		    <a target="_blank" 
		      href="http://bit.ly/1LvSLUA">
		      Susan Sontag
		    </a>
		  </cite>
      </blockquote>
    );
  }
});

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);

//The ability to create and manipulate components make react very popular as components are the future of web applications

//say we have a navbar component that looks somewhat like this
var React = require('react');

var NavBar = React.createClass({
  render: function () {
    var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    var navLinks = pages.map(function(page){
      return (
        <a href={'/' + page}>
          {page}
        </a>
      );
    });

    return <nav>{navLinks}</nav>;
  }
});

module.exports = NavBar;

//Another component, say mainPage can be used to render the navbar component like so
var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.js')


var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
		<NavBar />
	        <h1>All About Me!</h1>
	        <p>I like movies and blah blah blah blah blah</p>
	        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
});

ReactDOM.render(<ProfilePage/>, document.getElementById('app'))