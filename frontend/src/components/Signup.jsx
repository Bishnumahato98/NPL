// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; 
// import "../style/signup.css"


// const Signup = () => {
//   const [error , setError] = useState("")
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
   
//   const navigate = useNavigate();  
//   const handleInput = (event) => {
//     setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//   };



//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError("");
  
//     try {
//       const response = await fetch("http://localhost:4000/api/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(values),
//       });
  
//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.message);
//       } else {
//         navigate("/login");
//       }
//     } catch (error) {
//       setError("Signup failed");
//     }
//   };
  

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h1 className="auth-title">Signup</h1>
        
//           <input
//             type="text"
//             placeholder="Username"
//             className="auth-input"
//             required
//             name="name"
//             onChange={handleInput}
//           />
        

//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className="auth-input"
//             name="email"
//             onChange={handleInput}
//           />
          


//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="auth-input"
//             name="password"
//             onChange={handleInput}
//           />
     
          
//           <button onClick={handleSubmit} className="auth-button">Register</button>
//           {error.length > 0 && <span>{error}</span>}
//         <div className="auth-links">
//           <Link to="/login" className="auth-link">Already have an account? <strong>Login</strong></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;




















import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../style/signup.css";

const Signup = () => {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    // Validate password match
    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

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

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Signup</h1>

        <input type="text" placeholder="Username" name="name" className="auth-input" required onChange={handleInput} />
        <input type="email" placeholder="Email" name="email" className="auth-input" required onChange={handleInput} />
        <input type="text" placeholder="Contact" name="contact" className="auth-input" required onChange={handleInput} />
        <input type="password" placeholder="Password" name="password" className="auth-input" required onChange={handleInput} />
        <input type="password" placeholder="Confirm Password" name="confirmPassword" className="auth-input" required onChange={handleInput} />

        <button onClick={handleSubmit} className="auth-button">Register</button>
        {error.length > 0 && <span className="error-message">{error}</span>}

        <div className="auth-links">
          <Link to="/login" className="auth-link">Already have an account? <strong>Login</strong></Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
