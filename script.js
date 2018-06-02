var Counter = React.createClass ({
    componentWillMount: function() {
        console.log('I check the initial value of the counter, before render');
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

    componentWillReceiveProps: function() {
        console.log('Actualization counter state after click')
    },

    componentDidMount: function() {
        console.log('Checking counters values after add to DOM');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('p', {}, 'Counter ' + this.state.counter),
            React.createElement('button', {onClick: this.increment},'Add'),
            React.createElement('button', {onClick: this.decrement},'Remove')
		);
    },

    componentWillUpdate: function() {
        console.log('Checking counters values after changes in prop or state');
    },

    componentDidUpdate: function() {
        console.log('Actualization component');
    },
    componentWillUnmount: function() {
        console.log('Stop watching counters')
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