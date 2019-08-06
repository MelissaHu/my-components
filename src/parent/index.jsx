import React, { Component } from 'React';
import Child from '../child';
class Parent extends Component {
    constructor() {
        super();
        this.state = {
            result: 0
        }
        this.changeResult = this.changeResult.bind(this);
    }
    changeResult(operator) {
        this.setState({
            result: operator * operator
        })
    }

    render() {
        return ( 
            <div className = "parent" >
            <Child changeResult = { this.changeResult }></Child> 
            <p> result: { this.state.result } </p>
             </div>
        )
    }
}

export default Parent;