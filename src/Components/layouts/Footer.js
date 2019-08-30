import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">
        <div className= "footer-middle">
        <div className="container"> 
        <div className="row">
            {/* Column 1 */}
        <div className="col-md-3 col-sm-6">
        
        <ul className="list-unstyled ">
            <li><a href="https://github.com/friedbergjon">Github</a></li>
        </ul> 
        </div>
         {/* Column 2 */}
         <div className="col-md-3 col-sm-6">

        <ul className="list-unstyled ">
        <li><a href="https://www.instagram.com/jonfriedberg/">Instagram</a></li>
        </ul>
        </div>
         {/* Column 3 */}
         <div className="col-md-3 col-sm-6">

        <ul className="list-unstyled ">
        <li><a href="https://www.linkedin.com/in/jonfriedberg/">LinkedIn</a></li>
        </ul>
        </div>
         {/* Column 4 */}
         <div className="col-md-3 col-sm-6">

        <ul className="list-unstyled ">
             <li><a href="https://www.facebook.com/jon.friedberg">Facebook</a></li>
        </ul>
        </div>
        </div>
        {/* Footer Bottom */}
        <div className= "footer-bottom"> 
         </div>
        </div>
        <ul className="contact-info">
            <li>friedberg_jon@hotmail.com</li>
            <li>(802) 829-7252</li>
        </ul> 
        </div>
        </ FooterContainer> 
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle { background: var(--mainDark);
    padding-top: 1.5rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem; 
}

ul li a{
    color: var(--mainGrey);
}

ul li a:hover{
    color: var( --mainWhite);
}
`; 