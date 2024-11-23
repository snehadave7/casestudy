// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css"; // Custom styling (optional)
// import "bootstrap/dist/css/bootstrap.min.css";
 
// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   // Handle login form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate input fields (simple example)
//     if (!email || !password) {
//       setErrorMessage("Both fields are required.");
//       return;
//     }

//     // Call your login API here (you can integrate axios for actual authentication)
//     console.log("Login submitted with:", { email, password });

//     // Simulate successful login and navigate to homepage or dashboard
//     setErrorMessage("");
//     navigate("/"); // Redirect to home page after successful login (or to a dashboard)
//   };

//   return (
//     <div className="container">
//       <div className="card shadow p-4 mt-5">
//         <h2 className="text-center">Login</h2>

//         {errorMessage && (
//           <div className="alert alert-danger">{errorMessage}</div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="form-group mb-3">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="form-group mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100">
//             Login
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <a href="/forgot-password">Forgot Password?</a>
//         </div>

//         <div className="text-center mt-3">
//           <p>
//             Don't have an account? <a href="/register">Register</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.userName || !credentials.password) {
      setError("Both fields are required.");
    } else {
      console.log("Login Data: ", credentials);
      // Integrate API for login here
      navigate("/dashboard"); // Navigate to a dashboard or homepage after login
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={credentials.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        {error && <span className="error">{error}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
