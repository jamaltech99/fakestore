import { colors } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css'
import Counter from "../Counter"


function Product() {
  
  const [data, setData] = useState(null);
  const params = useParams();



  const dataapi = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => {
        // Handle any errors that may occur during fetch
        console.error('Error fetching data:', error);
        setData(null); // Set data to null in case of an error
      });
  };

  useEffect(() => {
    dataapi();
  }, []);

  if (data === null) {
    return <div className="custom-loader"></div>; 
  } else if (!data.image) {
    return <div>No image available.</div>; 
  } else {
  
    return (
     <div className="main-container-product d-flex gap-5">
      <div className="image">
      <img src={data.image} alt='image not available'/>
      </div>
      <div className="title-description m-5">
        <h3>{data.title}</h3>
        <p className='description w-50 mb-5 '>{data.description}</p>
        <p className='text-light bg-dark d-inline p-2 rounded'>${data.price}</p><span className='text-success m-2'>In stock</span>
        <Counter/>
        <Link to="#" className="add-to-cart btn btn-dark"><i className="fa fa-cart-plus m-2"></i>Add to card</Link>
      </div>
     </div>
    );
  }
}

export default Product;

