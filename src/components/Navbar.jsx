import React from 'react';
import logoImage from '../assets/Logo.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <img src={logoImage} alt="logo image" />
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/product'><li>Product</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
            <NavLink to='/jobs'><li>jobs</li></NavLink>
        </ul>
        <button onClick={()=> navigate('/product', {replace:true})}>Get started</button>
    </div>
  );
};

export default Navbar;