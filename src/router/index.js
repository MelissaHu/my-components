import React,{Component} from 'react'
import { BrowserRouter as Router,Route,IndexRoute} from "react-router-dom"
import Login from '../login'
import Search from '../search'
import Calculate from '../calculate'
import Home from '../home'

 class BasicRouter extends Component{
  
  // const BasicRouter = () => ( <Route exact path="/" component={Home}> 
     render(){
        return(
           <Router>
            <Route exact path="/" component={Home}>
               <Route path="/login"  component={Login} />
               <Route path="/search"  component={Search} />
               <Route path="/calculate"  component={Calculate} /> 
            </Route>
          </Router> 
        )}
      }


export default BasicRouter;