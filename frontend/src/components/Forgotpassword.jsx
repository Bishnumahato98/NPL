import React from "react";
import {Link} from "react-router-dom";
import "../style/forgotpassword.css"

const ForgotPassword = () => {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <h1 className="auth-title">Forgot Password</h1>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="auth-input"
            />
            <button type="submit" className="auth-button">
              Reset Password
            </button>
          </form>
          <div className="auth-links">
            <Link to="/login" className="auth-link">Back to Login</Link>
          </div>
        </div>
      </div>
    );
  };




export default ForgotPassword;