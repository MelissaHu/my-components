import React, { Component } from 'react';

class Life extends Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    
    componentDidMount(){
       // clearInterval(this.timerID); //如果没有这个,(组件Unmount 之后依然调用 this.setState()情况下报错问题出现)
        this.timerId = setInterval(
            ()=>this.tick(),
            1000
        );
    }
  
    componentWillUnmount(){
        console.log("清楚了哦");
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        return(
            <div>
            <h1>生命周期</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Life;