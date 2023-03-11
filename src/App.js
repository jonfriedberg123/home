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
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      
{/* 
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/illustrations">Illustrations</Link>
      <Link to="/3d_models">ThreeDModels</Link>
      <Link to="/graphic_design">Illustrations</Link>
      <Link to="/web_development">WebDevelopment</Link>
      <Link to="/animation">Animations</Link>
      <Link to="/sound_design">SoundDesign</Link> */}
    <NavBar />
    <Switch>
      <Route exact path="https://friedbergjon.github.io/" component={Home} />
      <Route exact path="https://friedbergjon.github.io/about" component={About}/> 
      <Route exact path="https://friedbergjon.github.io/illustrations" component={Illustrations}/>
      <Route exact path="https://friedbergjon.github.io/3d-models" component={ThreeDModels}/>
      <Route exact path="https://friedbergjon.github.io/graphic_design" component={GraphicDesign}/>
      <Route exact path="https://friedbergjon.github.io/web-development" component={WebDevelopment}/>
      <Route exact path="https://friedbergjon.github.io/animation" component={Animations}/>
      <Route exact path="https://friedbergjon.github.io/sound-design" component={SoundDesign}/>

    </Switch>
    <br></br>
    <br></br>
    <br></br>
    
    <Footer />
    </div>
   
              
  );
}

export default App;
