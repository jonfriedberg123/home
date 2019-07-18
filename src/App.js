import React from 'react';
import './App.css';

function App() {
  return (
  <div>
    <div>
    <body className="body">
    <nav className = "Nav">
  <div className = "Header">
    
  <div>
    <br></br>
  <h1 className = "Title">Jonathan Friedberg</h1>
  <br></br>
</div>
 <br></br>
</div>
    </nav>
    <div className="AboutParagraph">
     <p className="About">Jon Friedberg moved to New York City in late Fall of 2018. Previously he hearned a Bachelor Degree in Audio Production and pursued a certificate in Animation. For the last 2-3 years, he has been programming on his own and graduated from General Assembly's Software Engineering Program in July of 2019 and continues to improve his skills.</p>
     </div>
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
    </body>
   <nav className="footer"> 
   <div>
     
   <h2 className="contactEmail">friedberg_jon@hotmail.com
  ​</h2>
  </div>
  <h2 className="contactNumber">(802) 829-7252
​ </h2>
<div>
<h2 className="LinkedInLink">www.linkedin.com/in/jonfriedberg
​ </h2>
</div>
     </nav>
     </div>
    </div>
  );
}

export default App;
