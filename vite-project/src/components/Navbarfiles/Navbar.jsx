import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';



function Navbar({ cartValue }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="../src/assets/Logo.png" className='nav-logo' alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Products">Products</Link>
            </li>
            <li className="nav-item contact">
              <Link className="nav-link active " aria-current="page" to="/Aboutus">About us</Link>
              {/* <div className="contact-content">
                <a href='https://wa.me/<+923246633975r>' target='_blank'><img src='../src/assets/whatsapp-logo.png' alt='whatsapp-logo' />
                  <span>+493257755543</span>
                </a>
                <a href='mailto:fahadmian267@gmail.com' ><img src='../src/assets/email-logo.png' alt='skype-logo' />
                  <span>info@fakestore.com</span>
                </a>
                <a href='/'><img src='../src/assets/skype-logo.png' alt='skype-logo' />
                  <span className='ml-2'>fstore.shopping</span>
                </a>
              </div> */}
            </li>
          </ul>
          <div className="d-flex gap-2 align-items-center">
            <div className="navbar-buttons d-flex gap-2">
              <Link to="#" className="btn btn-dark">
                <i className="fa fa-cart-plus"></i><sup><span>0</span></sup></Link>
                <Link to='/Track'target='_blank' className='btn btn-dark'><i className="fa-solid fa-truck-fast"></i></Link>
              {currentPath !== '/Sigin' ? (
                <Link to="/Sigin" className="btn btn-dark">
                  <i className="fa fa-sign-in"></i></Link>
              ) : null}
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar