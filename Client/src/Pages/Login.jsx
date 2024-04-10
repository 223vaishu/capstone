import React, { useState } from "react";
import photo from "../images/geound.jpg";
import football from "../images/OIP.jpeg";
import mitImage from "../images/Mit.jpeg"
import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    setFormData({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <div className="backgroundimg1">
        <img height={660} width={1260} src={photo} />
      </div>
      <div className="mit">
        <img className="mitimg" src={mitImage} alt="MIT Logo" />
      </div>
      
      <div className="login">
        <h1 className="text0">Login</h1>
      </div>
      <div className="login-container">
        <img className="football-img" src={football} alt="Football" />
        <div className="login-box">
          <h2 className="center-text">"Step onto the field of champions with every login."</h2>
          <form onSubmit={handleSubmit}>
            <div className="textbox">
              <input 
                type="text" 
                placeholder="Username" 
                name="username" 
                value={formData.username} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="textbox">
              <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={formData.password} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <Link to="/Home">
              <input type="submit" className="btn" value="Login" />
            </Link>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
