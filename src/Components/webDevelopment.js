import React from 'react';
import '../Style.css';



function WebDevelopment() {
    return (


<div className="Links">
      <ul>
     <div className="LinkOne">
     <li><a target="_blank" href="https://giftme-hjm.herokuapp.com/">"Wish List App" using React and Express</a>
     </li> 
     </div>
     <div className="LinkTwo">
     {/* https://stackoverflow.com/questions/42914666/react-router-external-link */}
     <li><a target="_blank" href="https://amazing-rings.surge.sh">Currency Converter using React</a>
     </li>
     </div>
     <div className="LinkThree">
     <li><a target="_blank" href="https://pages.git.generalassemb.ly/friedbergjon/frogger/">"Frogger- The Game" made with Vanila Javascript</a>
     </li>
     </div>
     </ul>
     <div className="SkillsAndSoftware">
       <h2 className= "SkillsTitle">Skills</h2>
     <p className="SkillsParagraphText">Front-End/Back-End/Full Stack Development, HTML, CSS & CSS libraries, Javascript, React, Node.js, Express, Ruby, C, C++, Java, Drawing, Painting, 3-D Modeling, UV Unwrapping, Storyboarding, Photography, Stereo and 5.1 Recording,Mixing, & Editing; Automated Dialogue Replacement; SFX (Foley, Soft FX, Hard FX); Onset Sound; Appropriate dB Ranges for Broadcast Standards; Studio Recording, Mixing, & Editing; Microphone Placement; Signal Flow; Live Sound Reinforcement; Soldering
    </p>
    
      <h2 className= "SoftwareTitle">Software</h2>
    <p className="SoftwareParagraphText">Visual Studio, Maya, Z-Brush, 3D Studio Max, Marvellous Designer, Substance Painter, Final Cut Pro, Adobe Suite: Premiere; Audition; Illustrator; Photoshop; After Effects; In Design, TextMate, ProTools, Logic Pro, Reason, Symphonic Orchestra, Symphonic Choirs, Word Builder, Garage Band, DVD Compressor
    </p>  
    </div>
    </div>
    )}

export default WebDevelopment;