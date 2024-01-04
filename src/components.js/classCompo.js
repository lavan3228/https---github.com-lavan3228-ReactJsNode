import React, { Component } from 'react'
import DisplayClass from './DisplayClass'

class ClassCompo extends Component {
    state = {
        name: "this is Anjali Endarapu",
        products: []
    }

    // componentDidMount() {
    //     fetch(" ").then(res => res.json()).then(data => this.setState({products: data})).catch(err => console.log(err))
    // }

    render() {
        return (
            <div>
                <center>
                    <DisplayClass name={this.state.name} />
                    <h3> Hey, {this.state.name}</h3><br />
                    <button onClick={() => this.setState({ name: "This is Lavankumar Endarapu" })}>ChangeName</button><br />
                </center><br />
            </div>
        )
    }
}

export default ClassCompo
