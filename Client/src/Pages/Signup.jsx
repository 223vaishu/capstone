import React, { useState, useEffect } from "react";
import photo from "../images/geound.jpg";
import mitImage from "../images/Mit.jpeg";
import "./Signup.css"; 
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    setPasswordMatch(formData.password === formData.confirmPassword);
  }, [formData.password, formData.confirmPassword]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    console.log("Submitted Form Data:", formData);
    
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div>
      <div className="signup-background">
        <img height={660} width={1260} src={photo} alt="Background" />
      </div>
      <Link to="/login">
        <input type="submit" className="login-btn" value="Login" />
      </Link>
      <div className="Logo-MIT">
        <img className="mit-IMG" src={mitImage} alt="MIT Logo" />
      </div>
      <div className="signup-title">
        <h1 className="signup-text">Signup</h1>
      </div>
      <div className="signup-container">
        <div className="signup-box">
          <h2 className="center-text">"Join the winning team, sign up now!"</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {!passwordMatch && (
                <p className="password-match-error">Passwords do not match!</p>
              )}
            </div>
            <input type="submit" className="btn-signup" value="Signup" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;