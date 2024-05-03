import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css"
import welcomelogo from "../images/MITlogo.png"
import fitness from "../images/fitness.jpeg"


function Welcome() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={welcomelogo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="navbar-link">Signup</Link>
          </li>
        </ul>
      </nav>
      <div className="welcome-container">
        <img width={1265} height={550} src={fitness} alt="fitness is everything" />
      <div className="Welcome">
        <h1 className="welcome-text">ALLMITSPORT: Uniting Fans Through Insightful Content</h1>
        <h3 className="welcome-update">Explore ALLMITSPORT's dedication to sports journalism, community, and engaging analysis on various athletics topics.</h3>
        <button className="learn-more-btn">Learn More</button>
      </div>

      </div>
    </div>
  );
}

export default Welcome;