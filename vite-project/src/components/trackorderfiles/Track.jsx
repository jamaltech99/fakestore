import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Track.css'

function Track() {
      // Set the title of the new tab when the component mounts
  useEffect(() => {
    document.title = 'Fake Store | Track order '; // Change 'New Tab Title' to the desired title
  }, []);
  return (
    <>
    {/* track-nav */}
<div className="track-nav">
<Link to='/'><img className='track-nav-logo' src='../src/assets/Logo.png'/></Link>
</div>
{/* track-content */}
<div className="heading-input-button">
<h2>Track your Order</h2>
<div className="input-button">
<input placeholder='Enter Your Track Number'/>
<button type='submit'>Track</button>
</div>
</div>
</>  )
}

export default Track