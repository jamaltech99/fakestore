import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';



function Footer() {
const divstyle={
    height:'650px',
};


  return (
   <footer>
    <div className="logo-portion">
           <Link to='/'><img src="./src/assets/Logo.png" width="120px"/></Link> 
            <div className="line"></div>
            <h3 className="find">Find us on</h3>
            <div className="links">
                <div className="yt">
                <Link to='https://www.example.com/' target='_blank'><img src="./src/assets/youtube.svg" width="40px"/></Link>
                </div>
                <div className="insta">
                <Link to='https://www.example.com/' target='_blank'><img src="./src/assets/instagram.svg" width="25px"/></Link>
                </div>
                <div className="fb">
                <Link to='https://www.example.com/' target='_blank'><img src="./src/assets/facebook.svg" width="25px"/></Link>
                </div>
            </div>
        </div>
   <div className="footerheadings d-flex justify-content-evenly flex-wrap gap-3">
    {/* about-heading */}
<div className="about">
<div className="about-heading fst-italic">
   <h4>Company</h4> 
</div>
<div className="about-para">
<Link to='https://www.example.com/'><p>About US</p></Link>
<Link to='https://www.example.com/'><p>Careers</p></Link>
<Link to='https://www.example.com/'><p>Company</p></Link>
</div>
</div>
{/* customer-care */}
<div className="customer-care">
<div className="customer-care-heading fst-italic">
   <h4>Customer Care</h4> 
</div>
<div className="customer-care-para">
<Link to='https://www.example.com/'><p>Customer services</p></Link>
<Link to='https://www.example.com/'><p>Store Locator</p></Link>
<Link to='https://www.example.com/'><p>Shipping Policy</p></Link>
<Link to='https://www.example.com/'><p>Customer Feedback</p></Link>
<Link to='https://www.example.com/'><p>Return and Exchange</p></Link>
<Link to='https://www.example.com/'><p id='para-privacy-policy'>Privacy Policy</p></Link>
</div>
</div>
{/* get-intouch */}
<div className="get-intouch">
<div className="get-intouch-heading fst-italic">
   <h4>Get In Touch</h4> 
</div>
<div className="get-intouch-para">
<Link to='https://www.example.com/'><p>info@fakestore.com</p></Link>
<Link to='https://www.example.com/'><p>+49.30.00808877</p></Link>
<Link to='https://www.example.com/'><p>Adenauerallee,Berlin, Germany </p></Link>
<Link to='https://www.example.com/'><button id='contact-button'>Contact Us</button></Link>
</div>
</div>
</div>
{/* Subscribe */}
<div className="subscribe">
<i className="fa-solid fa-envelope"></i>
<input type='email' placeholder='Enter Your Email'/>
<button>Subscribe</button>
</div>
{/* footer end line */}
<div className="lastdiv d-flex justify-content-evenly">
<div className="copyright">
  <p>@Copyright 2023 <span id='copyright-color-change'><a href='/'>Fake Store.com </a></span>
All Rights Reserved</p>
</div>
{/* privacy policy */}
<p className='privacy-policy text-dark'><span id='privacy-hover'>Privacy Policy</span> | <span id='privacy-hover'>Terms & Conditions</span> | <span id='privacy-hover'>ISMS</span></p>
</div>
   </footer>
  )
}

export default Footer