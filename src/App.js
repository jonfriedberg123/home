import React, { Component } from 'react';
import './Style.css';
import illustrations from './Components/illustrations'
import graphicDesign from './Components/graphicDesign'
import about from './Components/about'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import WebDevelopment from './Components/webDevelopment';

function App() {
  return (
  <div>
    <div>
    <body className="body">
    <div className = "HeaderLinks">
      
    </div>
    <nav className = "Nav">
             <Router>
                <Link to='/about'>About</Link>
                <Link to='/web_development'>Web Development</Link>
                <Link to='/illustrations'>Illustrations</Link>
                <Link to='/graphic_design'>Graphic Design</Link>
              
                <Switch>
                    <Route exact path='/about' component={about}/>    
                    <Route exact path='/web_development' component={WebDevelopment}/> 
                    <Route exact path='/illustrations' component={illustrations}/>      
                    <Route exact path='/graphic_design' component={graphicDesign}/>     
                               
                </Switch>
            </Router>
  <div className = "Header">
    
  <div>
    <br></br>
  <h1 className = "Title">Jonathan Friedberg</h1>
  <br></br>
</div>
 <br></br>
</div>
    </nav>
   
    <div className="Links">
      <ul>
     <div className="LinkOne">
     <li><a target="_blank" href="https://giftme-hjm.herokuapp.com/">"Wish List App" using React and Express</a>
     </li> 
     </div>
     <div className="LinkTwo">
     {/* https://stackoverflow.com/questions/42914666/react-router-external-link */}
     <li><a target="_blank" href="https://amazing-rings.surge.sh">Currency Converter using React</a>
     </li>
     </div>
     <div className="LinkThree">
     <li><a target="_blank" href="https://pages.git.generalassemb.ly/friedbergjon/frogger/">"Frogger- The Game" made with Vanila Javascript</a>
     </li>
     </div>
     </ul>
    
    </div>
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
