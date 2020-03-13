import React, { Component } from 'react';
import '../../Style.css';
import {ResponsiveEmbed,Image } from 'react-bootstrap';
import Apple from '../../Images/threeDObjects/Apple.gif'

class Home extends Component {

    
  render() {
    return (
      <div 
      style={{
      alignItems: 'center', height: '30%', margin: 0, margin:'auto', paddingTop: '5%', paddingBottom: '5%'}}>
       <img src = {Apple}></img>
      </div>)
  }
};



export default Home;
