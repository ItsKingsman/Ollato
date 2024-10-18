import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration= () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender:"",
    dob:"",
    mobile:""
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
  
    localStorage.setItem('userData', JSON.stringify(formData));
    alert("Registration successful! Redirecting to login page...");
    navigate('/login'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Gender</label>
        <input
          type="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>DOB</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Mobile</label>
        <input
          type="number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
