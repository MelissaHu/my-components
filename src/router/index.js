import React,{Component} from 'react'
import { BrowserRouter as Router,Route,Redirect} from "react-router-dom"
import Login from '../login'
import Search from '../search'
import Calculate from '../calculate'
import Home from '../home'

 class BasicRouter extends Component{
  
  // const BasicRouter = () => (  <IndexRoute  component={Login} />
     render(){
        return(
           <Router>
           <Home exact path="/" component={Home}>
               <Redirect from= "/" to="login" />
               <Route path="/login"  component={Login} />
               <Route path="/search"  component={Search} />
               <Route path="/calculate"  component={Calculate} /> 
            </Home>
          </Router> 
        )}
      }


export default BasicRouter;