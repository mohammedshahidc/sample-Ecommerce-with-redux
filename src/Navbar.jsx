import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartcount=useSelector((state)=>state.Cart)
  const Count = cartcount.length;
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
    <div className="container">
      {/* Logo */}
      <a className="navbar-brand text-primary" href="#">
        {/* Heroicon - Chip Outline */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      </a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* Active Link = text-primary
          Inactive Link = text-secondary */}
          <li className="nav-item">
            <Link className="nav-link active text-primary" to={"/"}>Home</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link text-secondary" href="#">Explore</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link text-secondary" href="#">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" to={"/cart"}>cart : {Count}</Link>

          </li>
        </ul>
        <button className="btn btn-primary ms-3">
          {/* Heroicons - Login Solid */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-5 me-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Login
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
