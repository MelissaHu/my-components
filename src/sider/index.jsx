import React, { Component, Children } from 'react';
import {Link } from 'react-router-dom'
import {Layout,Menu,Icon } from 'antd'
import './index.css';
import routes from '../router/routes'
import SubMenu from 'antd/lib/menu/SubMenu';
const {Sider} = Layout;
  



class Hsider extends Component{
   
    render(){
        return(
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}  style={{minHeight:'100vh'}}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['sub0']} >
                {
                    routes.map((item,index)=>{
                      if(item.children){
                          return(
                            <SubMenu
                               key={`sub${index}`}
                               title={
                               <span>
                                  <Icon type={item.Icon} /><span>{item.name}</span>
                               </span>
                             }>  
                        { 
                           
                            item.children.map((items,index1)=>{
                                return(
                                <Menu.Item key={index1}>
                                 <Link to = {items.path}><span>{items.name}</span></Link>
                                </Menu.Item>
                            )}
                        )}
                    
                     
                        </SubMenu>



                    );
                  }else{
                    return(
                        <Menu.Item key={`sub${index}`}>
                            <Link to = {item.path}><Icon type={item.Icon}/><span>{item.name}</span></Link>
                       </Menu.Item>
                           
                    );
                  }
                }
                )
            }
                
            </Menu>
            
              </Sider>
        )
    }
}

export default Hsider;