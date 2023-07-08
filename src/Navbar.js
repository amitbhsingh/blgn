import React from 'react'
import { Link } from 'react-router-dom/';
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <Link></Link>
        <Link to="/">Home</Link>
        <Link to="/Create" >New Blog</Link>
      </div>
    </div>
    
  );
}

export default Navbar