import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true,
            count: 0
        };
    }

    delHeader = () => {
        this.setState({ show: false });
    }

    componentDidMount() {
        console.log("componentDidMount method called");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate method called");
    }

    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <center>
                {myheader}
                <button type='button' onClick={this.delHeader}>Delete Header</button><hr /><hr />
                <h3>count: {this.state.count}</h3>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </center>
        )
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        console.log("componentWillUnmount method called");
    }
    render() {
        return (
            <h3>Hello world , life cycle</h3>
        );
    }
}

export default LifeCycle;
