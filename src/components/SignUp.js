import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/signup.css'
import userImage from '../assets/images/user-image.png'

function SignUp() {
  return (
    <>
      <div className="signup-container">
        <div className="column rounded">
          <img src={userImage} width="175" alt="User Image" />

          <input type="text" className="mt-4 mb-2 custom-signup-input" name="firstName" id="firstName" placeholder="First Name" />
          <input type="text" className="mb-2 custom-signup-input" name="lastName" id="lastName" placeholder="Last Name" />
          <input type="text" className="mb-2 custom-signup-input" name="username" id="username" placeholder="Username" />
          <input type="password" className="mb-2 custom-signup-input" name="password" id="password" placeholder="Password" />
          <input type="password" className="mb-2 custom-signup-input" name="retypePassword" id="retypePassword" placeholder="Re-enter Password" />
          <input type="email" className="mb-4 custom-signup-input" name="email" id="email" placeholder="Email" />

          <Link to="/signin" className="btn custom-signup-btn text-white rounded-pill px-5 py-1 text-uppercase">Sign Up</Link>
        </div>
      </div>
    </>
  )
}

export default SignUp