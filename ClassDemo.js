import { render } from "@testing-library/react";
import React from "react";

class ClassDemo extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 10,
        }
    }
     Display=()=>{
console.log("codekul");
    }
    render() {
        return (
            <div><h2>
                ClassDemo
            </h2>
                <p>number={this.state.number}</p>
                <button type="button" onClick={this.Display}>Read</button>
                
                </div>
        )
    }
}
export default ClassDemo
