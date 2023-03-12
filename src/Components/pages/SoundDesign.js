import React, { Component }from 'react';
import '../../Style.css';
import ReactPlayer from 'react-player';
import audioReel from '../../Videos/audioreel.mp4'



export const soundDesign = () => (
 
       
  <div className ='audio-reel'>
                <ReactPlayer
                url= {audioReel}
                controls = {true}
                width='80%'
            height='80%'
        
                 />
  </div>

    )
export default soundDesign;