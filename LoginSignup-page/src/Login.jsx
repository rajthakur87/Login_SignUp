// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Reset error message
//     try {
//       const result = await axios.post('http://localhost:3001/login', { email, password });
//       console.log(result);
//       if (result.data.message === "Login successful") {
//         window.alert('Login successful!'); // Show popup for successful login
//         navigate('/home'); // Redirect to home page
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError(error.response.data.message); // Show specific error message
//       } else {
//         setError('An error occurred. Please try again.'); // General error message
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
//             <div
//               className="card-header text-center text-white"
//               style={{ backgroundColor: '#007bff', borderRadius: '15px 15px 0 0' }}
//             >
//               <h3>Login</h3>
//             </div>
//             <div className="card-body">
//               {error && <div className="alert alert-danger">{error}</div>} {/* Error message display */}
//               <form onSubmit={handleSubmit}>
//                 {/* Email field */}
//                 <div className="form-group">
//                   <label htmlFor="email" className="text-dark">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>

//                 {/* Password field */}
//                 <div className="form-group">
//                   <label htmlFor="password" className="text-dark">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     required
//                   />
//                 </div>

//                 {/* Login button */}
//                 <button
//                   type="submit"
//                   className="btn btn-primary btn-block"
//                   style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
//                 >
//                   Login
//                 </button>
//               </form>

//               {/* Signup link */}
//               <div className="mt-3 text-center">
//                 <p className="text-dark">
//                   Don't have an account?{' '}
//                   <Link to="/register" className="btn btn-link text-primary">
//                     Signup
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Reset error message
//     try {
//       const result = await axios.post('http://localhost:3001/login', { email, password }, { withCredentials: true }); // Enable cookie handling
//       console.log(result);
//       if (result.data.message === "Login successful") {
//         window.alert('Login successful!');
        
//         // Storing the token in localStorage
//         localStorage.setItem('authToken', result.data.token);

//         navigate('/home'); // Redirect to home page
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError(error.response.data.message); // Show specific error message
//       } else {
//         setError('An error occurred. Please try again.'); // General error message
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
//             <div
//               className="card-header text-center text-white"
//               style={{ backgroundColor: '#007bff', borderRadius: '15px 15px 0 0' }}
//             >
//               <h3>Login</h3>
//             </div>
//             <div className="card-body">
//               {error && <div className="alert alert-danger">{error}</div>}
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="email" className="text-dark">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="password" className="text-dark">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-primary btn-block"
//                   style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
//                 >
//                   Login
//                 </button>
//               </form>

//               <div className="mt-3 text-center">
//                 <p className="text-dark">
//                   Don't have an account?{' '}
//                   <Link to="/register" className="btn btn-link text-primary">
//                     Signup
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
















import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    try {
      const result = await axios.post('http://localhost:3001/login', { email, password }, { withCredentials: true }); // Include credentials
      console.log(result);
      if (result.data.message === "Login successful") {
        window.alert('Login successful!'); // Show popup for successful login
        navigate('/home'); // Redirect to home page
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(error.response.data.message); // Show specific error message
      } else {
        setError('An error occurred. Please try again.'); // General error message
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
            <div
              className="card-header text-center text-white"
              style={{ backgroundColor: '#007bff', borderRadius: '15px 15px 0 0' }}
            >
              <h3>Login</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>} {/* Error message display */}
              <form onSubmit={handleSubmit}>
                {/* Email field */}
                <div className="form-group">
                  <label htmlFor="email" className="text-dark">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password field */}
                <div className="form-group">
                  <label htmlFor="password" className="text-dark">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Login button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
                >
                  Login
                </button>
              </form>

              {/* Signup link */}
              <div className="mt-3 text-center">
                <p className="text-dark">
                  Don't have an account?{' '}
                  <Link to="/register" className="btn btn-link text-primary">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


