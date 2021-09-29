
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { NavLink } from 'react-router-dom';



const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'orange'
    }

    return (

        <div className="container-fluid header mb-3 pb-3 pt-3">
            <div className="container-fluid row row-cols-1 ">
                <div className="col-md-2 col-sm-6 ">
                    <img src={logo} className="img-fluid" alt="" />
                </div>
                <div className="col-md-8 col-sm-12 ">
                    <NavLink to="/home" activeStyle={activeStyle} className="anchor fs-4 pe-3 ">Home</NavLink>
                    <NavLink to="/about" activeStyle={activeStyle} className="anchor fs-4 pe-3 ">About Us</NavLink>
                    <NavLink to="/contact" activeStyle={activeStyle} className="anchor fs-4 pe-3 ">Contact Us</NavLink>
                    <NavLink to="/contact" activeStyle={activeStyle} className="anchor fs-4 pe-3 ">Links</NavLink>

                </div>
                <div className="col-md-2 col-sm-12">
              <button className="btn btn-warning me-1 mt-1">Login</button>
              <button className="btn btn-warning mt-1">SignUp</button>
                </div>
            </div>
        </div>



    )
};

export default Header;
