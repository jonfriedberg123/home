import React, { Component } from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/layouts/NavBar';
import Footer from './Components/layouts/Footer';
import { Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home'
import Illustrations from './Components/pages/Illustrations'
import ThreeDModels from './Components/pages/ThreeDModels'
import GraphicDesign from './Components/pages/GraphicDesign'
import About from './Components/pages/About'
import WebDevelopment from './Components/pages/WebDevelopment';
import dreamScene from "./Images/illustrations/dreamScene.jpg";


function App() {
  return (
    <div>
      <p></p>
       <h1 style={{ display: 'flex', 
      justifyContent: 'center', width: '100%', height: 'auto',textShadow: "2px 1px grey"}}>Jon Friedberg</h1>
    <p></p>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About}/> 
      <Route exact path="/illustrations" component={Illustrations}/>
      <Route exact path="/3d_models" component={ThreeDModels}/>
      <Route exact path="/graphic_design" component={GraphicDesign}/>
      <Route exact path="/web_development" component={WebDevelopment}/>
    </Switch>
    <br></br>
    <br></br>
    <br></br>
    
    <Footer />
    </div>
   
              
  );
}

export default App;
