var Counter = React.createClass ({
    componentWillMount: function() {
        console.log();
    },

    componentDidMount: function() {
        console.log();
    },

    componentWillUpdate: function() {
        console.log();
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('p', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment},'Add'),
            React.createElement('button', {onClick: this.decrement},'Remove')
		);
    }
});

var Counters = React.createClass ({
    render: function() {
        return React.createElement('div', {},
            React.createElement(Counter,{}),
            React.createElement('div',{},
                React.createElement(Counter,{})
            )
		);
    }
})


var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));