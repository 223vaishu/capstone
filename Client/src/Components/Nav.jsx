import React from "react";
import logo from "../images/MITlogo.png"; 
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
    return (
        <div className="Main">
            <nav>
                <div className="logo">
                    <a href="#"><img src={logo} alt="MITlogo" /></a>
                </div>
                <ul className="nav-links">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to='/About'>About us</Link></li>
                    <li><Link to="/Detail">Details</Link> </li>
                    <li><Link to="/Contact">Contact</Link></li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
