import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { remove } from './slice/cartslice';

const Cart = () => {
    const cartitem=useSelector((state)=>state.Cart)
    const dispatch=useDispatch()
    const removeitem=(id)=>{
        dispatch(remove(id))
    }

  return (
    <div className="container my-4">
        
           
               {
                    cartitem.map((item) => (
                    <div className="card mb-3" key={item.id}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={item.image}
                                    className="img-fluid rounded-start"
                                    alt={item.title}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Price: ₹{item.price}</p>
                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-outline-primary me-2"
                                            
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="btn btn-outline-primary ms-2"
                                           
                                        >
                                            +
                                        </button>
                                    </div>
                                   
                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>removeitem(item.id)}
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
  )
}

export default Cart
