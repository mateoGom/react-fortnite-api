import React, { Component } from "react";
 import {Route, BrowserRouter as Router , Switch, Link} from 'react-router-dom'
import User from './pages/user'
import Home from './pages/home'
import About from './pages/about'
import  Nav from './components/Nav'

class App extends Component {
 
 render(){
  return(
    
    
    <Router>
        <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/user" exact component={User}/>
        </Switch>
        </div>



    </Router>
    
    
   )
 }
 
}

export default App
