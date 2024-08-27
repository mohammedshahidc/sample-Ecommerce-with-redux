import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addcart } from './slice/cartslice';
import { getproducts } from './slice/productslice';
import { Alert } from 'bootstrap';

const Home = () => {
   
    const {products,status}=useSelector((state)=>state.products)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getproducts())
        
    }, [])
    if(status==='loading'){
        return  <p>loading...........</p>
      }
      if(status==='failed'){
         return <Alert key='danger' varient='danger'>something went wronge....</Alert>
      }
   
const addtocart=(product)=>{
    dispatch(addcart(product))
}
    return (
        <div className="container-fluid bg-transparent my-4 p-3">
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-1">
                {products.map((product) => (
                    <div className="col d-flex flex-column" key={product.id}>
                        <div className="card h-50 shadow-sm">
                            <img
                                src={product.image}
                                className="card-img-top img-fluid h-50"
                                alt={product.title}
                            />

                            <div className="card-body">
                                <h4 className="card-title">
                                    {product.title}<br />
                                    <h3>₹{product.price}</h3>
                                </h4><br />
                                <footer>
                            <button className='bg-primary hover:bg-dark btn-custom {
                                                        background-color: #007bff; 
                                                        color: white;
                                                        transition: background-color 0.3s ease, color 0.3s ease;' onClick={()=>addtocart(product)}>Add to cart</button>
                            </footer>
                                {/* <h6>{product.description}</h6> */}
                                
                            </div>
                           
                            <div>
                            

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
