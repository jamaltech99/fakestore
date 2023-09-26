import React from 'react'
import './Newarrival.css'
import {Link} from 'react-router-dom'

function Newarrival() {
  return (
    <>
      <h1 className='new-arrival-heading'>New Arrival</h1>
                {/* card-1 left to right*/}
                <div className="card-container">
                <div className="card card-1" style={{width: '15rem'}}>
                <div className="ribbon"><span>Premium</span></div>
  <img src="./src/assets/home-card-1-img.png" className="card-img-top  mx-auto" alt="No image Available"/>
  <div className="card-body ">
    <h3>Premium Jacket</h3>
    <p className="card-text">Some quick example text to build on the card.<br/><Link to='/Products'>&#x2794;</Link></p>
  </div>
</div>
            {/* card-2 */}
                <div className="card card-1" style={{width: '15rem'}}>
  <img src="./src/assets/home-card-2-img.png" className="card-img-top  h-75 mx-auto mt-4" alt="No image Available"/>
  <div className="card-body">
    <h3>Women Top</h3>
    <p className="card-text">Some quick example text to build on the card.<br/><Link to='/Products'>&#x2794;</Link></p>
  </div>
</div>
              {/* card-3 */}
              <div className="card card-1" style={{width: '15rem'}}>
  <img src="./src/assets/home-card-3-img.png" className="card-img-top  h-75 mx-auto mt-4" alt="No image Available"/>
  <div className="card-body ">
    <h3>Women Top</h3>
    <p className="card-text ">Some quick example text to build on the card.<br/><Link to='/Products'>&#x2794;</Link></p>
  </div>
</div>
              {/* card-4 */}
              <div className="card card-1" style={{width: '15rem'}}>
  <img src="./src/assets/home-card-4-img.png" className="card-img-top  h-75 mx-auto mt-4" alt="No image Available"/>
  <div className="card-body ">
    <h3>Women Top</h3>
    <p className="card-text ">Some quick example text to build on the card.<br/><Link to='/Products'>&#x2794;</Link></p>
  </div>
</div>
<div className="card card-1" style={{width: '15rem'}}>
  <img src="./src/assets/home-card-5-img.png" className="card-img-top  h-75 mx-auto mt-4" alt="No image Available"/>
  <div className="card-body ">
    <h3>Women Top</h3>
    <p className="card-text">Some quick example text to build on the card.<br/><Link to='/Products'>&#x2794;</Link></p>
  </div>
</div>
                  {/* card-6 */}
<div className="card card-1" style={{width: '15rem'}}>
<div className="ribbon"><span>New</span></div>
  <img src="./src/assets/home-card-6-img.png" className="card-img-top  h-75 mx-auto mt-4" alt="No image Available"/>
  <div className="card-body ">
    <h3>Women Top</h3>
    <p className="card-text ">Some quick example text to build on the card.<br/><Link to='/Products'>&#x2794;</Link></p>
  </div>
</div>
{/* card-7 */}
<div className="card card-1" style={{width: '15rem'}}>
  <img src="./src/assets/home-card-7-img.png" className="card-img-top  h-75 mx-auto mt-4" alt="No image Available"/>
  <div className="card-body ">
    <h3>Women Top</h3>
    <p className="card-text">Some quick example text to build on the card.<br/><Link to='/Products'>&#x2794;</Link></p>
  </div>
</div>
{/* card-8 */}
<div className="card card-1" style={{width: '15rem'}}>
  <img src="./src/assets/home-card-8-img.png" className="card-img-top  h-75 mx-auto mt-4" alt="No image Available"/>
  <div className="card-body ">
    <h3>Women Top</h3>
    <p className="card-text ">Some quick example text to build on the card.<br/><Link to='/Products'>&#x2794;</Link></p>
  </div>
</div>
</div>
</>
  )
}

export default Newarrival
