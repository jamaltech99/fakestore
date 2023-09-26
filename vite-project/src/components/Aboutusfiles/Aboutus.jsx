import React from 'react'
import './Aboutus.css'
import { Link } from 'react-router-dom'
Link

function Aboutus() {
  return (
    <main>
        <section>
            <h1>About Us</h1>
            <p>Welcome to fakestore.com, your one-stop destination for all things stylish, affordable, and convenient. At fakestore.com, we believe that shopping should be an enjoyable and hassle-free experience, and we're dedicated to making that a reality for our valued customers. Our mission is simple: to provide you with a wide range of high-quality products at unbeatable prices, all while delivering exceptional customer service.</p>
        </section>
        
        <section>
            <h2>Our Story</h2>
            <p>fakestore.com was founded in 2008 with a vision to redefine online shopping. Our founder,<span style={{color:'blue'}}>Mr Ahmed Shafiq</span>, started this journey with a passion for providing customers with a curated selection of products that cater to their diverse needs and preferences. What began as a small e-commerce venture has now grown into a thriving online store with thousands of satisfied customers worldwide.</p>
        </section>
            <h1>Our Commitment</h1>
        <section>
            <h2>Quality</h2>
            <p>We're committed to sourcing only the finest products from trusted manufacturers and suppliers. Our dedicated team meticulously selects each item to ensure it meets our stringent quality standards. We want you to be confident that every purchase you make at fakestore.com is a quality investment.</p>
        </section>
        <section>
            <h2>Affordability</h2>
            <p>We understand the importance of affordability in today's world. At fakestore.com, we work tirelessly to offer competitive prices on all our products without compromising on quality. We believe that luxury doesn't have to come with a high price tag.</p>
        </section>
        <section>
            <h2>Customer Service</h2>
            <p>We understand the importance of security when shopping online. fakestore.com employs the latest encryption technologies and security measures to safeguard your personal information and payment details. You can shop with confidence, knowing that your data is protected.</p>
        </section>
        <h1>Join Us</h1>
        <p>We invite you to become a part of the fakestore.com family and experience a new way of shopping. Discover a world of style, affordability, and convenience right at your fingertips. Thank you for choosing fakestore.com as your trusted online shopping destination.

If you have any questions, suggestions, or feedback, please don't hesitate to contact us. We look forward to serving you and providing you with an exceptional shopping experience.<br/>
<span style={{color:'#f17700',fontWeight:'700'}}>Happy shopping!</span></p>
<div className="about-address">
<Link to='https://www.example.com/'><p>info@fakestore.com</p></Link>
<Link to='https://www.example.com/'> <p>+49.30.00808877</p></Link>
<Link to='https://www.example.com/'> <p>Adenauerallee,Berlin, Germany</p></Link>
</div>
        
    </main>
    

  )
}

export default Aboutus