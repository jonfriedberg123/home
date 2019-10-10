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
import Apple from "./Images/threeDObjects/Apple.gif";

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/> 
      <Route exact path="/illustrations" component={Illustrations}/>
      <Route exact path="/3d_models" component={ThreeDModels}/>
      <Route exact path="/graphic_design" component={GraphicDesign}/>
      <Route exact path="/web_development" component={WebDevelopment}/>
    </Switch>
    <br></br>
    <br></br>
    <br></br>
    <div className="homePagePicture">
       <img className="fixed_img_graphic_design" src={Apple}/> 
    </div>
    <Footer />
    </div>
   
              
  );
}

export default App;
