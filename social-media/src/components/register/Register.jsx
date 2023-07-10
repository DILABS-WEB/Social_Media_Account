import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social~Chit~Chat</h3>
                <span className='loginDesc'>Connect With Friends and the World around you on Social~Chit~Chat.</span>
            </div>
            <div className="loginRIght">
                <div className="loginBox">
                  <input placeholder="Enter your Email" type="email" className="loginInput" />
                  <input placeholder="Enter your Password" type="password" className="loginInput" />
                  <button className='loginButton'>Sign Up</button>
                  
                  <button className="loginRegisterButton">Login Into Account</button>
                </div>
            </div>
        </div>

    </div>
  )
}
