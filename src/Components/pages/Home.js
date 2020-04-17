import React, { Component } from 'react';
import '../../Style.css';
import Apple from '../../Images/threeDObjects/Apple.gif';
import AutoFitImage from 'react-image-autofit-frame';

class Home extends Component {

    
  render() {
    return (
     
      <div className= "homePic"
      style={{ width: '100%', height: 'auto',  display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center', margin: 'auto', marginBottom: '-5.8%'}}>
     <AutoFitImage  frameWidth="100%" frameHeight="500px" imgSrc = {Apple} class = "homePic" />
     
      </div>
      
   )
   
  }
};



export default Home;
;