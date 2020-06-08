import React, { Component }from 'react';
import '../../Style.css';
import Apple from "../../Images/threeDObjects/Apple.gif"
import Apple2 from "../../Images/threeDObjects/Apple2.gif"
import Apple3 from "../../Images/threeDObjects/Apple3.gif"
import Bench from "../../Images/threeDObjects/Bench.gif"
import Bench2 from "../../Images/threeDObjects/Bench2.gif"
import Bench3 from "../../Images/threeDObjects/Bench3.gif"
import fireHydrant from "../../Images/threeDObjects/fireHydrant.gif"
import fireHydrant2 from "../../Images/threeDObjects/fireHydrant2.png"
import fireHydrant3 from "../../Images/threeDObjects/fireHydrant3.png"
import Lamppost from "../../Images/threeDObjects/Lamppost.gif"
import Lamppost2 from "../../Images/threeDObjects/Lamppost2.gif"
import Lamppost3 from "../../Images/threeDObjects/Lamppost3.gif"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class threeDModels extends Component{
    render () {
    return (
        <div className = "carousel">
            <Carousel>
                
                <div>
                    <img className="fixed_img_three_d" src={Apple}  /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={Apple2} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={Apple3} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={Bench} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={Bench2} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={Bench3} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={fireHydrant} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={fireHydrant2} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={fireHydrant3} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={Lamppost} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={Lamppost2} /> 
                </div>
                <div>
                    <img className="fixed_img_three_d" src={Lamppost3} /> 
                </div>
            </Carousel>
            </div>
        );
    }
;}
export default threeDModels;