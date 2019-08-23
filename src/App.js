import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Style.css';
import illustrations from './Components/illustrations'
import threeDModels from './Components/threeDModels'
import graphicDesign from './Components/graphicDesign'
import about from './Components/about'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import webDevelopment from './Components/webDevelopment';

function App() {
  return (
  <div> 
    <MediaQuery query="(min-width: 400px)" query="(max-width: 1000px)" query="(max-height: 1000px)" query="(min-height: 400px)" >
      <div>
      <body className="body">
          <Router>
          <nav className = "Nav">
               <div className = "HeaderLinks">
                <Link to='/about'>About</Link>
                <Link to='/web_development'>Web Development</Link>
                <Link to='/illustrations'>Illustrations</Link>
                <Link to='/graphic_design'>Graphic Design</Link>
                <Link to='/3d_models'>3D Models</Link>
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
                    <Route exact path='/3d_models' component={threeDModels}/>                      
                </Switch>
                </div>
            </Router>           
            </body> 
            </div>  
            <nav className="footer">  
            <div className= "footerDiv">
   
   <h2 className="contactEmail">friedberg_jon@hotmail.com
  ​</h2>
 <h2 className="contactNumber">(802) 829-7252
​ </h2>
<h2 className="LinkedInLink">www.linkedin.com/in/jonfriedberg
​ </h2>
     </div>
     </nav>
     </MediaQuery>
     </div>
  );
}

export default App;
