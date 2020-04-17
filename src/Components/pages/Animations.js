import React, { Component }from 'react';
import '../../Style.css';
import ReactPlayer from 'react-player';
import flowerOfLife from '../../Videos/floweroflife.mp4'
import parvatiDance from '../../Videos/parvatiDance.mp4'
import snakeBrain from '../../Videos/snakeBrain.mov'


class Animations extends Component{
    render () {
        return (
            
            <div className='player-wrapper'>
              <div>
                <ReactPlayer
                url= {flowerOfLife}
                controls = {true}
                width='50%'
            height='50%'
                 />
             </div> 
             <div>
                <ReactPlayer
                url= {parvatiDance}
                controls = {true}
                width='50%'
            height='50%'
                 />
            </div> 
          
             <div>   <ReactPlayer
                url= {snakeBrain}
                controls = {true}
                width='50%'
            height='50%'
                 />
          </div>
            </div>
            )
    }
  }

export default Animations;
