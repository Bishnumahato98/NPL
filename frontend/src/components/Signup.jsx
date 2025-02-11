import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../style/signup.css"


const Signup = () => {
  const [error , setError] = useState("")
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
   
  const navigate = useNavigate();  
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
  
    try {
      const response = await fetch("http://localhost:4000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
  
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
      } else {
        navigate("/login");
      }
    } catch (error) {
      setError("Signup failed");
    }
  };
  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //     if(values.username.length < 3) return setError("Username must be longer")
  //     if(!values.contact.length === "10" ) return setError("Invalid phonenumber")
  //     if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(values.email)) return setError("Invalid email")
  //     if(!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(values.password)) return setError("Use stronger password!")
  //     if(values.confirmpassword !== values.password) return setError("Password do not match")
  //     navigate("/login");
  // };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Signup</h1>
        
          <input
            type="text"
            placeholder="Username"
            className="auth-input"
            required
            name="name"
            onChange={handleInput}
          />
        

          <input
            type="email"
            placeholder="Email"
            required
            className="auth-input"
            name="email"
            onChange={handleInput}
          />
          


          <input
            type="password"
            placeholder="Password"
            required
            className="auth-input"
            name="password"
            onChange={handleInput}
          />
     
          
          <button onClick={handleSubmit} className="auth-button">Register</button>
          {error.length > 0 && <span>{error}</span>}
        <div className="auth-links">
          <Link to="/login" className="auth-link">Already have an account? <strong>Login</strong></Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
