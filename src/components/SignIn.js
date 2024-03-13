import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/signin.css'
import username from '../assets/images/username.png'
import password from '../assets/images/password.png'

function SignIn() {
  return (
    <>
      <div className="signin-container">
        <div className="row">

          <div className="col-6 left d-flex flex-column justify-content-center align-items-center">

            <h1 className="text-white">Welcome to Signin page</h1>
            <p className="text-white w-75">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ullam. Repudiandae explicabo totam, debitis fugiat beatae rerum minus impedit. Porro, ullam. Repudiandae explicabo totam, debitis fugiat beatae rerum minus impedit.</p>
          </div>

          <div className="col-6 bg-white d-flex flex-column justify-content-center align-items-center">

            <h2 className="custom-headline text-uppercase">User Login</h2>

            <div className="input-container my-4 position-relative">
              <input type="text" className="form-control bg-body-secondary rounded-pill custom-input" placeholder="Username" />

              <img src={username} className="username-icon" width="20" alt="Username Icon" />
            </div>

            <div className="input-container mb-4 position-relative">
              <input type="password" className="form-control bg-body-secondary rounded-pill custom-input" placeholder="Password" />
              <img src={password} className="password-icon" width="20" alt="Password Icon" />
            </div>

            <p>Not a member? <Link to="/signup" className="text-decoration-none">Sign Up</Link></p>
            <Link to="/dashboard" className="btn rounded-pill text-uppercase px-5 py-1 text-white custom-signin-btn border-0">Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn