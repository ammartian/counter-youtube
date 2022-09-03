import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"] 
    }

    //2 ways to render CSS
    // 1. Create a style object
    // 2. Create style inline object 

    // fontStyles = {
    //     fontSize: 20,
    //     fontWeight: "bold"
    // }

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    //Binding Event Handlers
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     // console.log("Constructor", this);
    // }

    // Binding Event Handlers using Arrow Function (Best practice, doesnt require constructor)
    // Passing Event Arguments
    handleIncrement = product =>  {
        // Use setState method to change state = {} values.
        console.log(product);
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        // React can only render from 1 parent method so use "<div>" or "<React.Fragement>"
        
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* use arrow function in onClick to pass argument */}
                <button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>


                {/* RenderTag() Demo */}
                {/* <ul>
                    { this.state.tags.length === 0 && "Please create new tag!" }
                    {this.renderTags()}
                </ul> */}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        //destructure the "this.state.count"
        //return this.state.count === 0 ? 'Zero' : this.state.count;

        const { count } = this.state;
        return count === 0 ? 'Zero' :  count;
    }
}

export default Counter;