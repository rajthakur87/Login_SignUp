// Signup.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
      });
      console.log(result);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log("Error Response:", error.response.data);
      } else {
        console.log("Error:", error.message);
      }
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg" style={{ borderRadius: "15px" }}>
            <div
              className="card-header text-center text-white"
              style={{
                backgroundColor: "#007bff",
                borderRadius: "15px 15px 0 0",
              }}
            >
              <h3>Signup</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}{" "}
              {/* Error message display */}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="text-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
                >
                  Register
                </button>
              </form>
              <div className="mt-3 text-center">
                <p className="text-dark">
                  Already have an account?{" "}
                  <Link to="/login" className="btn btn-link text-primary">
                    Login
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

export default Signup;
