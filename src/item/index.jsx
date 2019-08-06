import React,{Component} from 'React';

import './index.css';


class Item extends Component{
    /**props和state的区别在于 props不能改变而state是可以改变的 */
    constructor(){
        super();
        this.state={
            isSelected:false
        }
    }
    handleClick(){
        this.setState({
            isSelected:!this.state.isSelected
        });
    }
    render(){
        let isSelected = this.state.isSelected;
        let selectedCls = isSelected ? 'item-selected' :'';
        return(
            /**这个父元素传值给子元素通过的是props */
            <li className={'item ' + selectedCls}
                onClick = {this.handleClick.bind(this)}
            >
                {this.props.item}
            </li>
        )
    }
} 


export default Item;