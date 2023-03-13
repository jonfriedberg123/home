import React, {Component} from 'react';
import '../../Style.css';
import { BrowserRouter, Link } from 'react-router-dom';


class about extends Component{

    render () {
  
    return (
      <BrowserRouter>
      
    <div className = "AboutText">
       <div className="AboutParagraph">
     <p className="About">Jon Friedberg has been working as a Full-Stack Developer at ISHK for two and a half years. Previously he hearned a Bachelor Degree in Audio Production, pursued a certificate in Animation, and graduated from General Assembly's Software Engineering Program in July of 2019. For the 3 years prior to being hired at ISHK, he had been studying Programming and Computer Science. </p>
     </div>
     <div className="SkillsAndSoftware">
       <h2 className= "SkillsTitle">Skills</h2>
     <p className="SkillsParagraphText">
     <h2>Advanced:</h2>Website Migrations (DNS Records, Domain Registrar), HTML, CSS, Javascript, Git commands, Algebra, Trigonometry, Calculus, Discrete Mathematics, Computer Science, drawing, painting, 3-D Modeling, UV Unwrapping, Photography, Stereo and 5.1 recording, Mixing & Editing Audio, ADR, SFX (Foley, Soft FX, Hard FX)
     <h2>Moderate:</h2>SEO, PHP, Materialize UI, Bootstrap, React, PostgreSQL, MongoDB, Nodejs, Express, Terminal commands 
     Ruby on Rails

     <h2>Intermediate:</h2> Java, C++
    </p>
    
      <h2 className= "SoftwareTitle">Software</h2>
    <p className="SoftwareParagraphText">
    <h2>Advanced:</h2>Gutenberg, Wordpress, Mailchimp, Text Editors, Maya, Z-Brush, Substance Painter, Final Cut Pro, Adobe Suite: Photoshop; Premiere; Audition, ProTools
    <h2>Moderate:</h2>phpMyAdmin, Adobe Suite: Illustrator; After Effects; In Design
    </p>  
    </div>
    </div>
   
    </BrowserRouter>
    )}
    }
export default about;