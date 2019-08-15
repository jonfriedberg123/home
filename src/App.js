import React, { Component } from 'react';
import './Style.css';
import illustrations from './Components/illustrations'
import graphicDesign from './Components/graphicDesign'
import about from './Components/about'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import webDevelopment from './Components/webDevelopment';

function App() {
  return (
  <div>
    <div>
    <body className="body">
   
          <Router>
          <nav className = "Nav">
               <div className = "HeaderLinks">
                <Link to='/about'>About</Link>
                <Link to='/web_development'>Web Development</Link>
                <Link to='/illustrations'>Illustrations</Link>
                <Link to='/graphic_design'>Graphic Design</Link>
                </div>
                </nav>  
                <div className = "Name">
                <h1 className = "Title">Jonathan Friedberg</h1>
               </div>
          
                <div className ="Components">
                <Switch>
                    <Route exact path='/about' component={about}/>    
                    <Route exact path='/web_development' component={webDevelopment}/> 
                    <Route exact path='/illustrations' component={illustrations}/>      
                    <Route exact path='/graphic_design' component={graphicDesign}/>                      
                </Switch>
                </div>
            </Router>
           
            </body>
   <nav className="footer"> 
   <div>
     
   <h2 className="contactEmail">friedberg_jon@hotmail.com
  ​</h2>
  </div>
  <h2 className="contactNumber">(802) 829-7252
​ </h2>
<div>
<h2 className="LinkedInLink">www.linkedin.com/in/jonfriedberg
​ </h2>
</div>
     </nav>
     </div>
    </div>
  );
}

export default App;
