import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCcMastercard, faCcPaypal, faCcVisa, faFacebookF, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom';
import Rocket from '../../images/rocket.png'
import Bkash from '../../images/bkash.png'
import Nagad from '../../images/nagad.jpg'
import Cash from '../../images/cash.png'

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
                            <FontAwesomeIcon icon={faCcVisa} className="visa-icon ms-3 mt-3" />      <Link className="anchor">Visa Card</Link  >

                            <br />
                            <FontAwesomeIcon icon={faCcMastercard} className="master-icon ms-3 mt-3" /> <Link className="anchor">Master Card</Link  >

                            <br />
                            <FontAwesomeIcon icon={faCcPaypal} className="paypal-icon ms-3 mt-3" /> <Link className="anchor">Paypal</Link >

                            <br />
                            <img src={Bkash} className="img-fluid rocket" alt="" />  <Link className="anchor">Bkash</Link >
                        </div>
                        <div className="col-md-6 col-sm-6">
                        <img src={Rocket} className="img-fluid rocket" alt="" />     <Link className="anchor">Rocket</Link  >
                            <br />
                            <img src={Nagad} className="img-fluid nagad" alt="" />           <Link className="anchor">Nagad</Link  >
                            <br />
                            <img src={Cash} className="img-fluid rocket" alt="" />       <Link className="anchor">Cash On Delivery</Link  >
                        </div>
                    </div>



                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <h4>Let Us Help You</h4>
                    <Link className="anchor">Your Account </Link >
                    <br />
                    <Link className="anchor">Your orders</Link  >
                    <br />
                    <Link className="anchor">Your Query </Link  >
                    <br />
                    <Link className="anchor">Help </Link  >

                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <h4>Condition Of Use</h4>
                    <Link className="anchor">Privacy Notice</Link  > <br />
                    <Link className="anchor">Terms</Link  ><br />
                    <Link className="anchor">Policy</Link ><br />
                    <Link className="anchor">Conditions</Link >

                </div>
            </div>

        </div>
    );
};

export default Footer;