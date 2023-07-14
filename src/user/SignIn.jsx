import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Signup from "./SignUp";

function Signin() {

    return (
        <>
            <section className="vh-100 " >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className=" col-xl-5">
                            <form className="center mx-auto shadow-lg p-5">
                                <h1 className="h3 mb-3 fw-normal text-decoration-underline "><b>Sign In</b></h1>
                                <p>Stay updated on your professional world</p>


                                <div className="form-floating">
                                    <input type="email" className="form-control mt-2" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Your email</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control mt-2" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Your password</label>
                                </div>


                                <div className="checkbox mb-3 mt-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-dark" type="submit" style={{ fontSize: "17px" }}> Sign In</button>
                            </form>
                            <div className="text-center mt-4">
                                <p>New to Tesstract-Cube ? &nbsp;<Link className="text-muted" to="/user/sign-up" style={{ textDecoration: "none" }}>Join Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Signin