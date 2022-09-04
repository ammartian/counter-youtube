import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };


    // Binding Event Handlers using Arrow Function (Best practice, doesnt require constructor)
    // Passing Event Arguments 
    handleIncrement = () =>  {
        // Use setState method to change state = {} values.
        this.setState({ value: this.state.value + 1 })
    }

    render() {
        // React can only render from 1 parent method so use "<div>" or "<React.Fragement>"
        console.log('props', this.props)

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* use arrow function in onClick to pass argument */}
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' :  count;
    }
}

export default Counter;