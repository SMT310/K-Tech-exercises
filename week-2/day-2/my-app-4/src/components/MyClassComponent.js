import React, { Component } from 'react'

export default class MyClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            id: 2,
            name: 'Queen'
        }
    }
    render() {
        return (
            <>
                <div>Welcome to Like Lion</div>
                <p>Id: {this.state.id}</p>
                <p>Name: {this.state.name}</p>

                <button onClick={() => this.setState({ name: "Mira" })}>Update Name</button>             </>
        )
    }
}
