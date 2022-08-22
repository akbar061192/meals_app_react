import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h1 style={{ marginLeft: '20px' }} className='navbar-heading'>
        Meals App
      </h1>
      <ul className='navbar-items'>
        <li className='navbar-item'>
          <Link to={'/'}>Home</Link>
        </li>
        <li className='navbar-item'>
          <Link to={'/categories'}>Categories</Link>
        </li>
        <li className='navbar-item'>
          <Link to={'/random-meal'}>Random Meal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
