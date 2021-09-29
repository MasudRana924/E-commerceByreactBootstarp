
import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'


const Header = () => {
    return (

        <div className="container-fluid header">
            <div className="row ">
                <div className="col-md-2 col-sm-10 ">
                    <img src={logo} className="img-fluid image" alt="" />
                </div>
                <div className="col-md-8">

                </div>

                <div className="col-md-2 col-sm-8 anchor">

                    <button type="button" className="btn btn-outline-warning button mt-3 ">Login</button>
                    <button type="button" className="btn btn-outline-warning  mt-3 ms-1 button">Signup</button>
                </div>
            </div>
        </div>



    )
};

export default Header;
