import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div class="col">

                </div>
                <div className="col-md-4 col-sm-10">
                    <div class=" card ps-3 pe-3 border-1 rounded-3 shadow-class">
                        <h3 class="mt-3 h3">Create account</h3>
                        <small class="para-two mt-3 ">Your name</small>
                        <input type="text" class="form-control mt-1 mb-1 h-75" />
                        <small class="para-two mt-3 ">Email</small>
                        <input type="text" class="form-control mt-1 mb-1 h-75" />
                        <small class="para-two">Password</small>
                        <input type="text" class="form-control mt-1 mb-1 h-75" />
                        <small class="para">! Password must be at least 6 characters</small>

                        <small class="para-two mt-3">Re-enter password</small>
                        <input type="text" class="form-control mt-1 mb-1 h-75" />
                        <button class="w-100 btn rounded-3 bg-info mt-3">Continue</button>
                        <br />
                        <p class="mt-1 para">By continuing, you agree to Amazon's <Link className=" text-decoration-none">Conditions of Use </Link  >
                            and <Link className=" text-decoration-none">Privacy Notice</Link  > </p>


                       <small class="para-three">Already have an account  <Link className=" text-decoration-none">Signin</Link  > </small>
                       <small class="para-three">Bying for work <Link className=" text-decoration-none">Create a free business account</Link  > </small>
                    </div>
                    <div class="d-flex justify-content-center align-items-center w-100 mb-2">
                        <div class="col-4">
                            <hr />
                        </div>
                        <div class="col-4">
                            <small class="text-center para ps-3">New to here?</small>
                        </div>
                        <div class="col-4">
                            <hr />
                        </div>
                    </div>
                    <button className="btn w-100 bg-secondary" >Create your account</button>

                </div>
                <div className="col">

                </div>





            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-md-8 col-sm-8">
                    <hr />
                    <div class="row row-cols-1">
                        <div class="col-3"></div>
                        <div class="col-6  ">
                            <div class="desc">
                                <p className="text-start">
                                    <Link className=" text-decoration-none ps-5 ps-5">Conditions of Use </Link  >
                                   <Link className=" text-decoration-none ps-3 pe-3">Privacy Notice</Link  > 
                                   <Link className=" text-decoration-none ps-3">Help</Link  >  </p>
                            </div>
                            <p class="para ps-2 text-center"> &#169; 2021 ,all rights reserved team</p>
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>


    );
};

export default Signup;