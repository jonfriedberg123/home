import React from 'react';
import '../Style.css';



function about() {
    return (
    <div className = "AboutText">
       <div className="AboutParagraph">
     <p className="About">Jon Friedberg moved to New York City in late Fall of 2018. Previously he hearned a Bachelor Degree in Audio Production and pursued a certificate in Animation. For the last 2-3 years, he has been programming on his own and graduated from General Assembly's Software Engineering Program in July of 2019 and continues to improve his skills.</p>
     </div>
     <div className="SkillsAndSoftware">
       <h2 className= "SkillsTitle">Skills</h2>
     <p className="SkillsParagraphText">Full-stack development, Javascript, React, Nodejs, Express, PostgreSQL, R, Python, Ruby on Rails, MongoDB, Computer Science fundamentals, HTML, CSS, Git commands, CSS/React libraries, Algebra, Trigonometry, Calculus, drawing, painting, 3-d modeling, UV unwrapping, storyboarding, photography, Stereo and 5.1 recording, mixing & editing audio, ADR, SFX (Foley, Soft FX, Hard FX), onset recording, dB Ranges for Broadcast Standards, microphone placement, polar patterns, signal flow, live sound reinforcement, soldering, schematic reading
    </p>
    
      <h2 className= "SoftwareTitle">Software</h2>
    <p className="SoftwareParagraphText">Text Editors, Maya, Z-Brush, 3D Studio Max, Marvellous Designer, Substance Painter, Final Cut Pro, Adobe Suite: Premiere; Audition; Illustrator; Photoshop; After Effects; In Design, TextMate, ProTools, Logic Pro, Reason, Symphonic Orchestra, Symphonic Choirs, Word Builder, Garage Band, DVD Compressor
    </p>  
    </div>
    </div>
    )}

export default about;