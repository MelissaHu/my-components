import React,{Component} from 'react'
import { HashRouter as Router,Route,Switch} from "react-router-dom"
import Home from '../home'
import routes from './routes'
import Login from '../login';


 class BasicRouter extends Component{
  
  // const BasicRouter = () => (  <IndexRoute  component={Login} />
     render(){  //exact 是一种严格匹配模式
        return( // switch 作用是当<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配
           <Router> 
            <Home  component={Home}>
            <Switch> 
              <Route exact path="/"  component={Login} /> 
              {routes.map((item,index)=>{ 
                  if(item.children){
                    return(
                      item.children.map((items,index2)=>{
                         return(
                           <Route path={items.path}  component={items.component} key={index2} /> 
                         )
                      })
                      ) 
                 }else{
                    return(
                       <Route path={item.path}  component={item.component} key={index} /> 
                     )
                 }
               
                
     })}
            </Switch>
            </Home>
          </Router> 
        )}
      }
   
export default BasicRouter;