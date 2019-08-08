import React, { Component } from 'react'


class OnOrOff extends Component {
    constructor(props) {
        super(props);
        this.state={
            isToggleOn:true
        };
      this.hanleClick = this.hanleClick.bind(this);

    }

   hanleClick(){
       this.setState(state=>({
           isToggleOn:!state.isToggleOn
       }))
   }

    render() {
        return ( 
           <button onClick={this.hanleClick}>
             {this.state.isToggleOn ? 'ON' : 'OFF'}
           </button>
        )
    }
}

export default OnOrOff;