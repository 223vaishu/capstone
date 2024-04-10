import React, { useState } from "react";
import "./Register.css";
import logo from "../images/Mit.jpeg";
import picture from "../images/game.jpg";
import photo from "../images/vector.jpg"

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [batch, setBatch] = useState("");
  const [sport, setSport] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const handleSportChange = (e) => {
    setSport(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      phone.trim() === "" ||
      batch.trim() === "" ||
      sport.trim() === "" ||
      email.trim() === ""
    ) {
      alert("All fields are required");
    } else {
      console.log("Registration submitted:", { name, phone, batch, sport, email });
    }
  };

  return (
    <div>
      <div className="background-container">
        <img height={670} className="background-image" src={photo} alt="Background photo" />
      </div>
      <div className="logo-container">
        <img width={150} className="logo-image" src={logo} alt="logo photo" />
      </div>
      <div className="side-image-container">
        <img width={400} height={519} className="side-image" src={picture} alt="side img" />
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name" className="label-name">
            
          </label>

          <div className="head">
          <h1 className="top">Registration</h1>
          </div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            className="input-name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label-phone">
            
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
            className="input-phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="batch" className="label-batch">
            
          </label>
          <input
            type="text"
            id="batch"
            value={batch}
            onChange={handleBatchChange}
            required
            className="input-batch"
            placeholder="Enter your batch"
          />
        </div>
        <div className="form-group">
          <label htmlFor="sport" className="label-sport">
          </label>
          <input
            type="text"
            id="sport"
            value={sport}
            onChange={handleSportChange}
            required
            className="input-sport"
            placeholder="Enter your sport"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label-email">
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="input-email"
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
