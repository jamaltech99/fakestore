import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbarfiles/Navbar'
import Hero from './components/Herofiles/Hero' 
import Products from './components/Productsfiles/Products'
import loadingAnimation from '../src/assets/Loader.gif';
import { Route,Routes,useNavigate } from 'react-router-dom';
import Signin from "./components/Signinfiles/Signin"
import Product from './components/productdetails/Product';
import Footer from './components/Footerfiles/Footer';
import Aboutus from './components/Aboutusfiles/Aboutus';
import Track from './components/trackorderfiles/Track'

const App = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  // Check if the current path is the Track component, and hide the Navbar and Footer
  const isTrackComponent = currentPath === '/Track';


  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setContentLoaded(true);
    }, 1000); // Set the delay time in milliseconds (here, 2 seconds)
  }, []);

  return (
    <>
    {!contentLoaded ? (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={loadingAnimation} alt="Loading"width={300}/>
      </div>
    ) : (
    <>
    {!isTrackComponent &&<Navbar/>}
   <Routes>
   <Route path='/' element={<Hero/>}/>
   <Route path='/Products' element={<Products/>}/>
   <Route path='/Aboutus' element={<Aboutus/>}/>
   <Route path="/Sigin" element={<Signin/>}></Route>
   <Route path='/Products/:id' element={<Product/>}/>
   <Route path='/Track' element={<Track/>}/>
   </Routes>
   { !isTrackComponent &&<Footer/>}
    </>
  )
}
</>
  );
};

export default App
