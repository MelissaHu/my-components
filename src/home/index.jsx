import React, { Component } from 'react';
import HSider from '../sider'
import {Layout,Icon } from 'antd'
import './index.css';
import Login from '../login'

const {Header,Content} = Layout;


class Home extends Component {
    constructor() {
            super();
            this.state = { //keyword是变动的
                collapsed:false
            };
           
        }
        /**
         * 入口函数
         * ReactDOM.render会将React原生写法的代码插入到html中生成Dom树
         */


    toggle(){
        this.setState({
            collapsed:!this.state.collapsed
        });
    };
 
    render() {
        return ( 
              <Layout>
                 <HSider collapsed={this.state.collapsed}></HSider>
              <Layout>
              <Header style={{background:'#fff',padding:0}}>
                 <Icon 
                 className="trigger"
                 type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                 onClick={this.toggle.bind(this)}
                   />
               </Header>
               <Content style={{
                   margin:'24px 16px',
                   padding:24,
                   background:'#fff',
                   minHeight:280
               }}
              >
              <div className = "app" >
              {this.props.children || <Login/>}
              </div>  
        </Content>
        </Layout>       
    </Layout>
       
       
        )
    }
}

export default Home;