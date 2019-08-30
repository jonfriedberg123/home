import React, { Component }from 'react';
import '../../Style.css';
import autumnRooftop from "../../Images/photography/autumnRooftop.gif"
import davidHockneyProject from "../../Images/photography/davidHockneyProject.gif"
import forestPark from "../../Images/photography/forestPark.gif"
import girlWithViolin from "../../Images/photography/girlWithViolin.gif"
import panorama from "../../Images/photography/panorama.gif"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function graphicDesign() {
    return (
        <div className = "carousel">
        <Carousel>
            
            <div>
                <img className="fixed_img_graphic_design" src={autumnRooftop}  /> 
            </div>
            <div>
                <img className="fixed_img_graphic_design" src={davidHockneyProject} /> 
            </div>
            <div>
                <img className="fixed_img_graphic_design" src={forestPark} /> 
            </div>
            <div>
                <img className="fixed_img_graphic_design" src={girlWithViolin} /> 
            </div>
            <div>
                <img className="fixed_img_graphic_design" src={panorama} /> 
            </div>
        </Carousel>
        </div>
    )}

export default graphicDesign;