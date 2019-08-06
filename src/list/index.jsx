import React,{Component} from 'React';
import './index.css';
import fruits from '../fruits';
import Item from '../item';
class List extends Component{
  render(){
      const keyword = this.props.keyword;
      const fruitsToShow = fruits.filter(item=>{
          return item.includes(keyword);
      });
      return(
          <ul className = "list">
              {fruitsToShow.map((item,index)=>{
                  /**这个父元素传值给子元素 */
                  return <Item item={item} key={index} />
              })}
          </ul>
      )
  }
}

export default List;