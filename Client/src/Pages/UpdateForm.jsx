import React, { useState } from "react";
import "./UpdateForm.css";
import pic from "../images/vector.jpg";

function UpdateForm() {
  const [formData, setFormData] = useState({
    name: "",
    batch: "",
    sport: "",
    timing: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() === "" ||
      formData.batch.trim() === "" ||
      formData.sport.trim() === "" ||
      formData.timing.trim() === ""
    ) {
      alert("All fields are required");
    } else {
      console.log("Update submitted:", formData);
      alert("Update successfully done!");
    }
  };

  return (
    <div className="updatemain">
      <div className="update-form-background">
        <img
          src={pic}
          width={1240}
          height={670}
          alt="background image for update form"
        />
      </div>
      <div className="update-form-container">
        <h1 className="update-form-header">Update Form</h1>
        <form onSubmit={handleSubmit} className="update-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="update-input"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
              className="update-input"
              placeholder="Enter your batch"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="sport"
              value={formData.sport}
              onChange={handleChange}
              required
              className="update-input"
              placeholder="Enter your sport"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="timing"
              value={formData.timing}
              onChange={handleChange}
              required
              className="update-input"
              placeholder="Enter your timing"
            />
          </div>
          <button type="submit" className="update-button">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;