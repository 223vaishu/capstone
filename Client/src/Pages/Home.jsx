import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";
import image from "../images/skate.webp";
import Nav from "../Components/Nav";

function Home() {
    return (
        <div>
            <Nav />
            <div className="Main">
                <div className="search">
                    <input type="search" id="search-input" placeholder="search" />
                </div>
                <div className="button1">
                    <Link to="/Batch"><button className="batch">Check Batches</button></Link>
                </div>
                <div className="background">
                    <img height={500} src={image} alt="background" />
                </div>

                <div className="text1">
                    <h2>"Fuel your passion for sports and ignite your journey to greatness with ALLMITSPORT - where every athlete finds their winning edge!"</h2>
                </div>

                <div className="button">
                    <Link to="/Register"><button className="explore-button">Register</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
