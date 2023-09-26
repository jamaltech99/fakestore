import React from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'

function Signin() {
    return (
      <>
    <div className="container">  
              <div className="login-box">
                <h2 className='signin-heading'>Sign in</h2>
                <form>
    <div className="user-box">
      <input required="" name="" type="text"/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input required="" name="" type="password"/>
      <label>Password</label>
    </div>
    <Link to="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </Link>
    </form>
  <p>Don't have an account? <Link to="" className="a2">Sign up!</Link></p>
            </div>
            </div>
            </>
    )
}

export default Signin