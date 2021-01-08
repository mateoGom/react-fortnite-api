import React, { Component } from "react";
 import {Route, BrowserRouter as Router , Switch, Link} from 'react-router-dom'
import Shop from './pages/shop'
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
          <Route path="/shop" exact component={Shop}/>
        </Switch>
        </div>



    </Router>
    
    
   )
 }
 
}

export default App
