import React,{Component} from 'react';
import './index.css';
class Forms extends Component{
    constructor(props){
        super(props)
        this.state={
            value1:'',
            value2:'',
            value3:'coconut'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
       const target = event.target;
       const value = target.value;
       const name = target.name;
       this.setState({
           [name]:value
       })
    }
    handleChange1(event){
        this.setState({value1:event.target.value.toUpperCase()});
    }

    handleChange2(event){
        this.setState({value2:event.target.value});
    }
    handleChange3(event){
        this.setState({value3:event.target.value});
    }
    
    handleSubmit(event){
        event.preventDefault()
    }

    render(){
        // <input type="file" /> 文件它的value只读，是一个非受控组件
        // 当需要处理多个input元素时，可以给每个元素添加name属性，并让处理函数根据event.target.name的值选择要执行的操作
        return(
            <form onSubmit={this.handleSubmit}>
            
             <div className="form-control">
            <label>
              名字: <input type="text" name="value1" value={this.state.value1} onChange={this.handleChange} />
             </label>
             </div>
             <div className="form-control">
             <label>
             文章:<textarea name="value2" value={this.state.value2} onChange={this.handleChange}></textarea>
             </label>
             </div>
             <div className="form-control">
              <label>
               选择你喜欢的风味:
                <select value={this.state.value3} onChange={this.handleChange3}>
                     <option value="grapefruit">葡萄柚</option>
                     <option value="lime">酸橙</option>
                     <option value="coconut">椰子</option>
                     <option value="mango">芒果</option>
                </select>
              </label>
             </div>


             <input type="submit" value="提交"/>
            </form>
        )
    }
}

export default Forms;