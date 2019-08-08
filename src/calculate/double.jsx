import React,{Component} from 'react'
import Parent from '../parent'

class Double extends Component{
    constructor() {
            super();
        }
        /**
         * 入口函数
         * ReactDOM.render会将React原生写法的代码插入到html中生成Dom树
         */
    render(){
        return(
            <div className = "block" >
              <Parent />
            </div>   
        )
    }
}

export default Double;