import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link   } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid mt-3 footer">
            <div className="row row-cols-2">
                <div className="col-md-3 col-sm-6 mt-3">
                    <h4>Get to Know Us</h4>
                    <FontAwesomeIcon icon={faFacebookF} className="icon mt-3" />
                    <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                    <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                    <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <h4>Payment Methods</h4>
                    <div className="row row-cols-2">
                        <div className="col-md-6 col-sm-6">
                            <Link  className="anchor">Visa Card</Link  >
                            <br />
                            <Link  className="anchor">Master Card</Link  >
                            <br />
                            <Link  className="anchor">Bkash</Link >
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <Link  className="anchor">Rocket</Link  >
                            <br />
                            <Link  className="anchor">Nagad</Link  >
                            <Link  className="anchor">Cash On Delivery</Link  >
                        </div>
                    </div>



                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                <h4>Let Us Help You</h4>
                <Link  className="anchor">Your Account </Link > <br />
                <Link  className="anchor">Your orders</Link  > <br />
              <Link  className="anchor">Your Query </Link  > <br />
              <Link  className="anchor">Help </Link  > <br />
            
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                      <h4>Condition Of Use</h4>
                      <Link  className="anchor">Privacy Notice</Link  >
                      <Link  className="anchor">Terms</Link  ><br />
                      <Link  className="anchor">Policy</Link ><br />
                      <Link  className="anchor">Conditions</Link >

                </div>
            </div>

        </div>
    );
};

export default Footer;