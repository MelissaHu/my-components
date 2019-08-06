import React,{Component} from 'react'
import Input from '../input'
import List from '../list'

class Search extends Component{
    constructor() {
            super();
            this.state = { //keyword是变动的
                keyword: ''
            };
           
        }
        /**
         * 入口函数
         * ReactDOM.render会将React原生写法的代码插入到html中生成Dom树
         */

    onChange(value) {
        this.setState({
            keyword: value
        });
    };
    render(){
        return(
            <div className = "block" >
              <h1> Find My Fruit </h1> 
               <Input onChange = { this.onChange.bind(this) }/>
                <List keyword = { this.state.keyword }/> 
              </div> 
        )
    }
}


export default Search;