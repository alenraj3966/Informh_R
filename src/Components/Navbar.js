import React from 'react';
import '.././Style.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const history = useNavigate();

  const handleDonate = () => {
    history("/Donate");
  };

  return (
    <div className='Top-Navbar'>
      <div className="topbar">
        <div className="left">
          <span style={{ fontWeight: "bold" }}>INFORMH PUBLIC CHARITABLE TRUST</span>
        </div>
        <div className="right">
          <span>Regd. No. 150/1999   Licence No. 189/2015</span>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src="../../../assets/Logo2.png" alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/AboutUs">About Us</a>
          <a href="/OurService">Our Services</a>
          {/* <a href="/Gallery">Our Gallery</a> */}
          <a href="/Contact">Contact</a>
          <a href="/Testimonial">Testimonial</a>
        </div>
        <div className="donate-btn">
          <button onClick={handleDonate}>Donate Now »</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar