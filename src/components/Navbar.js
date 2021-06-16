import React from 'react';
import logo from "../logo.png";
// react fontawsome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav className ="navbar navbar-expand-lg navbar-light " style={{ background:"#000"}}>
  <div className ="container">
    <a className ="navbar-brand" href="#"><img className="logo" src={logo} width="100px" height="auto" alt="logo..."/></a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
      {/* <span className ="navbar-toggler-icon"></span> */}
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <a className ="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#">About me</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#">Services</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#">How Work</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#">Portfolio</a>
        </li>  
        <li className ="nav-item">
          <a className ="nav-link" href="#">Contacts</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Navbar
