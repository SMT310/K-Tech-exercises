import React, { Component } from 'react'

export default class Car extends Component {
    constructor() {
        super();
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            isChangeColor: false,
        }
    }

    changeColor = (currentColor) => {
        this.setState({
            color: currentColor,
            isChangeColor: !this.state.isChangeColor,
        })
    }

    componentWillUpdate = () => {
        alert("componentWillUpdate được gọi - Truoc khi render");
        console.log("componentWillUpdate được gọi - Truoc khi render");
    }
    render() {
        return (
            <div>
                <h1>
                    My {this.state.brand}
                </h1>
                <p style={{ backgroundColor: this.state.color, color: "white" }}>
                    It is a {this.state.color} &nbsp; - &nbsp; {this.state.model} from{" "}
                    {this.state.year} year
                </p>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        this.state.isChangeColor
                            ? this.changeColor("red")
                            : this.changeColor("blue");
                    }}
                >
                    Change color
                </button>
            </div>
        )
    }
    componentDidUpdate = () => {
        if (this.state.color === "blue") {
            this.setState({
                color: "green",
                isChangeColor: !this.state.isChangeColor,
            });
        }
        alert("componentDidUpdate được gọi - Sau khi render ne");
        console.log("componentDidUpdate được gọi - Sau khi render ne");
    };
}
