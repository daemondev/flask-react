(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//import {MiDIV} from './util.js';
//import MySuperDIV from './util.js';
var MiDiv = require('./util.js');

var DynamicSearch = React.createClass({displayName: "DynamicSearch",

  // sets initial state
  getInitialState: function(){
    return { searchString: '', items : [] };
  },

  // sets state, triggers render method
  handleChange: function(event){
    // grab value form input box
    this.setState({searchString:event.target.value});
    console.log("scope updated!");
  },

  componentWillMount: function() {
  //loadCommentsFromServer: function() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.props.url, true);
    xhr.onload = function() {
      var data = JSON.parse(xhr.responseText);
      this.setState({ items: data });
    }.bind(this);
    xhr.send();
  },

  componentDidMount: function() {
    //this.loadCommentsFromServer();
    //window.setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {

    //var countries = this.props.items;
    var countries = this.state.items;
    var searchString = this.state.searchString.trim().toLowerCase();

    // filter countries list by value from input box
    if(searchString.length > 0){
      countries = countries.filter(function(country){
        return country.name.toLowerCase().match( searchString );
      });
    }

    return (
      React.createElement("div", null, 
      React.createElement(MiDiv, {data: 'developer'}), 
        React.createElement("input", {type: "text", value: this.state.searchString, onChange: this.handleChange, placeholder: "Search!"}), 
        React.createElement("ul", null, 
           countries.map(function(country){ return React.createElement("li", null, country.name, " | ", country.total) }) 
        )
      )
    )
  }

});

// list of countries, defined with JavaScript object literals
var countries = [
  {"name": "Sweden"}, {"name": "China"}, {"name": "Peru"}, {"name": "Czech Republic"},
  {"name": "Bolivia"}, {"name": "Latvia"}, {"name": "Samoa"}, {"name": "Armenia"},
  {"name": "Greenland"}, {"name": "Cuba"}, {"name": "Western Sahara"}, {"name": "Ethiopia"},
  {"name": "Malaysia"}, {"name": "Argentina"}, {"name": "Uganda"}, {"name": "Chile"},
  {"name": "Aruba"}, {"name": "Japan"}, {"name": "Trinidad and Tobago"}, {"name": "Italy"},
  {"name": "Cambodia"}, {"name": "Iceland"}, {"name": "Dominican Republic"}, {"name": "Turkey"},
  {"name": "Spain"}, {"name": "Poland"}, {"name": "Haiti"}, {"name": "Rusia"}
];

ReactDOM.render(
  //<DynamicSearch items={ countries } />,
  //<DynamicSearch url="/items" pollInterval={2000} items={ countries }/>,
  React.createElement(DynamicSearch, {url: "/items", pollInterval: 2000}),
  document.getElementById('main')
);

//https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export
//https://reactcommunity.org/react-tabs/example/
//https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
},{"./util.js":2}],2:[function(require,module,exports){
module.exports = React.createClass({displayName: "exports",
    getInitialState: function(){
        return { myName: "SuperDIV" };
    },
    handleChange: function(event){
        this.setState({myName:event.target.value});
        console.log("run!!!: " + this.state.myName);
    },

    render: function(){
        var data = this.props.data;
        var param = this.state.myName;

        if(param == 'Romel'){
            return param + ' - ' + 'RUN!!!';
        }

        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", value:  this.state.myName, onChange:  this.handleChange}), 
                React.createElement("table", {border: "0"}, 
                    React.createElement("tr", null, React.createElement("th", null, "Header")), 
                    React.createElement("tr", null, React.createElement("th", null, "Data")), 
                    React.createElement("tr", null, React.createElement("th", null, " ", React.createElement("input", {type: "button", value: "RUN!!!"}), " "))
                )
            )
        )
    }
});

//module.exports = MySuperDIV;

//ReactDOM.render(
//<MySuperDIV data={'developer'} />,
//document.getElementById('here')
//);
},{}]},{},[1]);
