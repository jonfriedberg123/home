import React, { Component } from 'react';
import '../../Style.css';
import {ResponsiveEmbed,Image } from 'react-bootstrap';


class Home extends Component {

    
  render() {
    return (
      <div style={{width: 660, height: 'auto',  display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', margin: 'auto', paddingTop: '5%'}}>
         <ResponsiveEmbed a16b9>
         <Image src="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg" responsive />
         </ResponsiveEmbed>
      </div>)
  }
};



export default Home;
