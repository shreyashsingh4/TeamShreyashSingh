import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Home() {
  return (
    <div className="container">
      <h1>Our Awesome Student Team</h1>
      <p>Welcome to the Team Members Management App</p>
      <div className="buttons">
        <Link to="/add" className="btn">Add Member</Link>
        <Link to="/view" className="btn">View Members</Link>
      </div>
    </div>
  );
}

export default Home;

