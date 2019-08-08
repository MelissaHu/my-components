import React,{Component} from 'react'


// 组件之间都包含关系(像vue的slot插槽)


const FancyBorder=(props)=>{
    return(
        <div className={`FancyBorder FancyBorder-` + props.color}>
         {props.children}
        </div>
    )
}
 
const  Dialog=(props)=>{
    return(
        <FancyBorder color="blue">
          <h1 className = "Dialog-tilte">
            {props.title}
          </h1>
          <p className="Dialog-message">
            {props.message}
          </p>
          {props.children}
        </FancyBorder>
    )
}



class Func extends Component{
      constructor(props){
          super(props);
          this.handleChange=this.handleChange.bind(this);
          this.handleSignUp = this.handleSignUp.bind(this);
          this.state = {login:''};
      }

     handleChange(e){
         this.setState({
             login:e.target.value
         });
     }

     handleSignUp(){
         alert(`Welcome aboard,${this.state.login}`)
     }

    render(){
        return(
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you ?">
                <input value = {this.state.login}
                       onChange = {this.handleChange} />
                <button onClick={this.handleSignUp}> Sign Me Up!</button>
            
            </Dialog>
        )
    }
}

export default Func;