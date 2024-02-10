// Profile.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:4000/profile", {
          headers: { Authorization: token },
        });
        setUserData(response.data);
      } catch (error) {
        console.error(error.response.data); // Handle error response
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center  align-items-center my-4">
          <Col>
            {userData && (
              <div
                className="p-4 shadow-lg mx-auto "
                style={{ maxWidth: "25rem" }}
              >
                <p>Username: {userData.username}</p>
                <p>Age: {userData.age}</p>
                <p>Date of Birth: {userData.dob}</p>
                <p>Contact: {userData.contact}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
