module.exports = React.createClass({
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
            <div>
                <input type="text" value={ this.state.myName } onChange={ this.handleChange } />
                <table border="0">
                    <tr><th>Header</th></tr>
                    <tr><th>Data</th></tr>
                    <tr><th> <input type="button" value="RUN!!!" /> </th></tr>
                </table>
            </div>
        )
    }
});

//module.exports = MySuperDIV;

//ReactDOM.render(
//<MySuperDIV data={'developer'} />,
//document.getElementById('here')
//);
