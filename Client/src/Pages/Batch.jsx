import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import "./Batch.css";
import { Link } from "react-router-dom";
import Card from "../Pages/Card";

function Batch() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://s56-capstone-projectsport.onrender.com/sport');
            console.log(response)
            setData(response.data.sports);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Nav />
            <div className="heading">
                <div className="Sentence">
                    <h1 className="Sent">"Discover your next sporting adventure at ALLMITSPORT's dynamic batch offerings!" 🏋️‍♂️💪</h1>
                </div>
                <div className="button">
                    <Link to="/Register"><button className="explore-button">Register</button></Link>
                </div>

                <div className="display">
                    {data.map((ele, i) => (
                        <Card key={i} {...ele} fetchData={fetchData} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Batch;