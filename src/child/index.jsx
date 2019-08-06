import React, { Component } from 'React';

class Child extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
      //this.handleClick = this.handleClick.bind(this); 等于下面的bind(this)
    }

    handleClick() {
        let oldValue = this.state.value;
        let newValue = oldValue + 1;
        this.props.changeResult(newValue);
        this.setState({
            value: newValue
        });
    }
    render() {
        return ( 
            <div className = "child" >
            <p> { this.state.value } * { this.state.value } </p> 
            <button onClick = { this.handleClick.bind(this) }> 加 </button>
             </div>
        )
    }
}

export default Child;