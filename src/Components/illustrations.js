import React, { Component }from 'react';
import angel from "../Images/illustrations/angel.gif"
import gridDrawing from "../Images/illustrations/gridDrawing.gif"
import icons from "../Images/illustrations/icons.jpg"
import japanesePrint from "../Images/illustrations/japanesePrint.gif"
import nashvillePoster from "../Images/illustrations/nashvillePoster.gif"
import stLouis from "../Images/illustrations/stLouis.gif"
import vectorDrawing from "../Images/illustrations/vectorDrawing.gif"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 

class Illustrations extends Component {
    render() {
        return (
      <div className = "carousel">
            <Carousel>
                
                <div>
                    <img className="fixed_img" src={angel}  /> 
                </div>
                <div>
                    <img className="fixed_img" src={gridDrawing} /> 
                </div>
                <div>
                    <img className="fixed_img" src={icons} /> 
                </div>
                <div>
                    <img className="fixed_img" src={japanesePrint} /> 
                </div>
                <div>
                    <img className="fixed_img" src={nashvillePoster} /> 
                </div>
                <div>
                    <img className="fixed_img" src={stLouis} /> 
                </div>
                <div>
                    <img className="fixed_img" src={vectorDrawing} /> 
                </div>
            </Carousel>
            </div>
        );
    }
};

export default Illustrations;