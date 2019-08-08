import React,{Component} from 'react';
import './index.css';


class Input extends Component{
      handleKeyUp(event){
          const value = event.target.value;
          this.props.onChange && this.props.onChange(value); //父组件的方法
      }

     render(){
         return(
             <div className="input-container">
                 <input onKeyUp = {this.handleKeyUp.bind(this)}/>
             </div>
         )
     }
}

export default Input;