(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
