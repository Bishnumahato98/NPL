import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css"


const Login = () => {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };  



  const onSubmit = async (event) => { 
    event.preventDefault();
    setError("");

    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      console.error("Error logging in:", error);
      alert("Error logging in. Please try again.");
    } else {
     

        console.log("Login Response:", data);
 
        // Check if access_token exists inside response.data
        if (data && data.data.access_token) {
          console.log("Access Token:", data.data.access_token);
          localStorage.setItem("token", data.data.access_token); // ✅ Store Token
          navigate("/home")
        } else {
          alert("Login failed! Check credentials.");
        }
    }
  
 
  };



  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter Email"
            required
            autoComplete="off"
            className="login-input"
            name="email"
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            className="login-input"
            name="password"
            onChange={handleInput}
          />
          
          <button type="submit" className="login-button">Login</button>

          {error && <span className="error-message">{error}</span>}
        </form>
        
        <div className="login-links">
          <Link to="/forgotpassword" className="login-link">Forgot Password?</Link>
        </div>
        <div className="login-links">
          <Link to="/signup" className="login-link">Don't have an account? <strong>Sign up</strong></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;














// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios"; // Ensure axios is imported
// import { API } from "./Environment";


// const Login = () => {
//   const [error, setError] = useState("");
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleInput = (event) => {
//     setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Email validation
//     if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
//       return setError("Invalid email format");
//     }
    
//     // Password validation
//     if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(values.password)) {
//       return setError("Use a stronger password! (At least 8 characters, including letters and numbers)");
//     }
    
//     // Clear previous errors
//     setError("");

//     try {
//       const response = await axios.post(`${API.BASE_URL}/api/auth/login`, values, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.data && response.data.data.access_token) {
//         localStorage.setItem("token", response.data.data.access_token);
//         navigate("/home"); // Redirect to home on success
//       } else {
//         setError("Login failed! Check credentials.");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       setError("Error logging in. Please try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1 className="login-title">Login</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enter Email"
//             required
//             autoComplete="off"
//             className="login-input"
//             name="email"
//             onChange={handleInput}
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             required
//             className="login-input"
//             name="password"
//             onChange={handleInput}
//           />
          
//           <button type="submit" className="login-button">Login</button>

//           {error && <span className="error-message">{error}</span>}
//         </form>
        
//         <div className="login-links">
//           <Link to="/forgotpassword" className="login-link">Forgot Password?</Link>
//         </div>
//         <div className="login-links">
//           <Link to="/signup" className="login-link">Don't have an account? <strong>Sign up</strong></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

