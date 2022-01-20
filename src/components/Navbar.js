import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
  <ul className='navbar'>
    <li>
      <p id='CompanyName'>The Store</p>
    </li>
    <li>
      <Link to="/" className='navLink'>Home</Link>
    </li>
    <li>
      <Link to="/Products" className='navLink'>Products</Link>
    </li>
    <li>
      <Link to="/AboutUs" className='navLink'>About Us</Link>
    </li>
    <li>
      <Link to="/SignIn" className='navLink'>Sign In</Link>
    </li>
  </ul>
  );
}
export default Navbar;