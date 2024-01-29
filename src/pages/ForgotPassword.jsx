import { Link } from "react-router-dom";

import '../App.css'
export default function ForgotPassword () {
  return (
    <main className="forgot-password-main">
      <div className="forgot-password-wrapper">
        <h6 className="forgot-password-heading">Forgot Password?</h6>
        <p className="forgot-password-para">Don&apos;t worry ! We can assist you. Kindly enter the email address you used while registering, we will send the OTP to the email.</p>
        <input className="forgot-password-input"
          type="email" 
          name="Email" 
          placeholder="Enter the Email Address"
        />
        <Link to="/">
          <button className="forgot-password-btn">
            Continue
          </button>
        </Link>
      </div>
    </main>
  )
}