import React, { Component }from 'react';
import '../../Style.css';
import ReactPlayer from 'react-player';
import flowerOfLife from '../../Videos/floweroflife.mp4'
import parvatiDance from '../../Videos/parvatiDance.mp4'
import snakeBrain from '../../Videos/snakeBrain.mov'


export const Animations =()=>(

            <div className='player-wrapper'>
             <div className='animation-videos'>
                <ReactPlayer
                url= {flowerOfLife}
                controls = {true}
                width='50%'
            height='40%'
                 />
             
            
                <ReactPlayer
                url= {parvatiDance}
                controls = {true}
                width='50%'
            height='50%'
                 />
            
          
               <ReactPlayer
                url= {snakeBrain}
                controls = {true}
                width='50%'
            height='40%'
                 />
         </div>
            </div>
            )
   

export default Animations;
