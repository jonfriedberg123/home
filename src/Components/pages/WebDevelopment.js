import React, {Component} from 'react';
import '../../Style.css';



export const webDevelopment = () => (
  

<div className="webDevLinks">
  <br></br>
      <ul>
     <div className="LinkOne">
     <li><a target="_blank" href="https://giftme-hjm.herokuapp.com/">"Wish List App" using React and Express - mobile responsive</a>
     </li> 
     </div>
  <br></br>
     <div className="LinkTwo">
     {/* https://stackoverflow.com/questions/42914666/react-router-external-link */}
     <li><a target="_blank" href="https://friedbergjon.github.io/api-currency-converter/">Currency Converter using React</a>
     </li>
     </div>
  <br></br>
     <div className="LinkThree">
     <li><a target="_blank" href="https://friedbergjon.github.io/frogger/">"Frogger- The Game" made with Vanila Javascript</a>
     </li>
     </div>
     </ul>
    </div>
    )
export default webDevelopment;