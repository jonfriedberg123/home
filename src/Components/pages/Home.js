import React, { Component } from 'react';
import '../../Style.css';
import {ResponsiveEmbed,Image } from 'react-bootstrap';
import Apple from '../../Images/threeDObjects/Apple.gif';
import AutoFitImage from 'react-image-autofit-frame';

class Home extends Component {

    
  render() {
    return (
      
      <div className="homePic"
      style={{width: 330, height: 'auto',  display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', margin: 'auto', paddingTop: '5%', paddingBottom: '5%'}}>
     <AutoFitImage frameWidth="500px" frameHeight="400px" imgSrc = {Apple}/>
      </div>
   )
  }
};



export default Home;
