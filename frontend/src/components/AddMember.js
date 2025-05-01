import React, { useState } from "react";
import axios from "axios";
import "../style.css";

function AddMember() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("email", formData.email);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5000/api/members", data);
      alert("Member added successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add member");
    }
  };

  return (
    <div className="container">
      <h2>Add New Team Member</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="text" name="role" placeholder="Role" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default AddMember;
