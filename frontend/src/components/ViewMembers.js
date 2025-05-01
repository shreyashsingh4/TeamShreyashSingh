import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/members")
      .then(res => setMembers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>All Team Members</h2>
      <div className="cards">
        {members.map(member => (
          <div key={member._id} className="card">
            <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link to={`/member/${member._id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers;
