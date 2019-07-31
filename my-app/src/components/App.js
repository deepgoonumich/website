import React from 'react';
import '../styles/App.css';

import Home from "./landing/Home"
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Nav from "./Nav"
import Footer from "./Footer"


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <div className ="main-body">
      <Router>
      <Nav /> 
      <div className ="content">
        <Switch>
          <Route path ="/" exact component ={Home} />
          <Route path ="/about" component ={About}/>
          <Route path ="/resume" component ={Resume}/>
          <Route path ="/contact" component ={Contact}/>             
        </Switch>  
      </div> 
      </Router>
      <Footer />
    </div>
    
  );
}



export default App;
