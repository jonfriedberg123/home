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
import Animations from './Components/pages/Animations';
import SoundDesign from './Components/pages/SoundDesign';


function App() {
  return (
    <div>
      
    <NavBar />
    <Switch>
      <Route exact path="/home" className="nav-link" component={Home} />
      <Route exact path="/home/about" className="nav-link" component={About}/> 
      <Route exact path="/home/illustrations" className="nav-link" component={Illustrations}/>
      <Route exact path="/home/3d_models" className="nav-link" component={ThreeDModels}/>
      <Route exact path="/home/graphic_design" className="nav-link" component={GraphicDesign}/>
      <Route exact path="/home/web_development" className="nav-link" component={WebDevelopment}/>
      <Route exact path="/home/animation" className="nav-link" component={Animations}/>
      <Route exact path="/home/sound_design" className="nav-link" component={SoundDesign}/>

    </Switch>
    <br></br>
    <br></br>
    <br></br>
    
    <Footer />
    </div>
   
              
  );
}

export default App;
