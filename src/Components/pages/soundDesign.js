import React, { Component }from 'react';
import '../../Style.css';
import ReactPlayer from 'react-player';
import audioReel from '../../Videos/audioreel.mp4'




class soundDesign extends Component{
  render () {
    return (
       
  <div className ='audio-reel'>
     
                <ReactPlayer
                url= {audioReel}
                controls = {true}
                width='100%'
            height='100%'
                 />
                
  </div>

    )}
    }
export default soundDesign;