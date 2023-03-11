import React, { Component } from 'react';
import '../../Style.css';
import Apple from './apple.gif';
import AutoFitImage from 'react-image-autofit-frame';

export const Home = () => (


    
      <div className= "homePic"
      style={{ width: '100%', height: 'auto',  display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center', margin: 'auto', marginTop: '5%'}}>
     <AutoFitImage  frameWidth="100%" frameHeight="500px" imgSrc = {Apple} class = "homePic" />
   
   
      
      <div>  
      <h1 className= 'nameHome'>Jonathan Friedberg</h1>
      </div>
      </div>
      
   )
   




export default Home;
;