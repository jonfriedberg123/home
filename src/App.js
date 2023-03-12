import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/layouts/NavBar';
import Footer from './Components/layouts/Footer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home'
import Illustrations from './Components/pages/Illustrations'
import ThreeDModels from './Components/pages/ThreeDModels'
import GraphicDesign from './Components/pages/GraphicDesign'
import About from './Components/pages/About'
import WebDevelopment from './Components/pages/WebDevelopment';
import Animations from './Components/pages/Animations';
import SoundDesign from './Components/pages/SoundDesign';
import { Link } from 'react-router-dom';


function App() {
  return (
    
 <div className="home-pic">
    <NavBar />
      <h1 className= 'home-title'>Jonathan Friedberg</h1>
       <h1 className= 'home-title-heading'>Full-Stack Developer</h1>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About}/> 
      <Route exact path="/illustrations" component={Illustrations}/>
      <Route exact path="/3d-models" component={ThreeDModels}/>
      <Route exact path="/graphic-design" component={GraphicDesign}/>
      <Route exact path="/web-development" component={WebDevelopment}/>
      <Route exact path="/animation" component={Animations}/>
      <Route exact path="/sound-design" component={SoundDesign}/>

    </Switch>
    <br></br>
    <br></br>
    <br></br>
    <Footer />
    </div>        
  );
}

export default App;
