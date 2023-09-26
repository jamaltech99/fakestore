import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import './Products.css'
import Loader from '../Loaderfiles/Loader';

function Products() {

    const [data,setData]=useState([])
    const [loading, setLoading] = useState(true);


    const dataapi = () => {
      setLoading(true); // Show loader before making the request
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setLoading(false); // Hide loader when data is loaded
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); // Hide loader on error
        });
    };

    useEffect(()=>{
dataapi()
    },[]);

   
return (
  <div className='all-products d-flex flex-wrap gap-4 justify-content-center'>
    {loading ? (
      <Loader />
    ) : (
      data.map((product) => (
        <div className="card" style={{ width: "18rem" }}>
          <div className="product-image w-100 h-100 d-flex align-items-center justify-content-center">
            <img src={product.image} className="card-img-top" alt={product.title} />
          </div>
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title">{product.title}</h5>
            <Link to={`${product.id}`} className="btn btn-dark w-75">
              Buy Now
            </Link>
          </div>
        </div>
      ))
    )}
  </div>
);
};

export default Products;