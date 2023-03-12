import React, { Component }from 'react';
import '../../Style.css';
import ReactPlayer from 'react-player';
import flowerOfLife from '../../Videos/floweroflife.mp4'
import parvatiDance from '../../Videos/parvatiDance.mp4'
import snakeBrain from '../../Videos/snakeBrain.mov'


export const Animations =()=>(
<div className='animation-window'>
            <div className='player-wrapper'>
             <div className='animation-videos'>
                <div className='animation-video-each'>
                <ReactPlayer
                url= {flowerOfLife}
                controls = {true}
                width='70%'
            height='70%'
                 />
             </div>
            <div className='animation-video-each'>
                <ReactPlayer
                url= {parvatiDance}
                controls = {true}
                width='70%'
            height='70%'
                 />
            </div>
          <div className='animation-video-each'>
               <ReactPlayer
                url= {snakeBrain}
                controls = {true}
                width='70%'
            height='70%'
                 />
         </div>
         </div>
            </div>
            </div>
            )
   

export default Animations;
