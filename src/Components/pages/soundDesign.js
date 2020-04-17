import React, { Component }from 'react';
import '../../Style.css';
import ReactPlayer from 'react-player';
import audioReel from '../../Videos/audioreel.mp4'




function soundDesign() {
    return (
       
  <div>
      <div>
                <ReactPlayer
                url= {audioReel}
                controls = {true}
                width='50%'
            height='50%'
                 />
                 </div>
  </div>

    )}

export default soundDesign;