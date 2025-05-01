import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style.css";

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="container">
      {member ? (
        <>
          <h2>{member.name}</h2>
          <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
          <p><strong>Role:</strong> {member.role}</p>
          <p><strong>Email:</strong> {member.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MemberDetails;

