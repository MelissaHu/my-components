import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import {Layout,Menu,Icon } from 'antd'
import './index.css';

const {Sider} = Layout;

class Hsider extends Component{
    render(){
        return(
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}  style={{minHeight:'100vh'}}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                   <Menu.Item key="1">
                   <Link to = "/login"> <Icon type="user" /><span>登陆/注册</span></Link>
                   </Menu.Item>
                   <Menu.Item key="2">
                   <Link to = "/search"> <Icon type="video-camera" /><span>输入筛选</span></Link>
                   </Menu.Item>
                   <Menu.Item key="3">
                   <Link to = "/calculate"> <Icon type="upload" /><span>自加/自减</span></Link>
                   </Menu.Item>
              </Menu>
            
              </Sider>
        )
    }
}

export default Hsider;