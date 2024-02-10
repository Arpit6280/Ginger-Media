// EditProfile.js

import React, { useState } from "react";
import axios from "axios";
import "../css/EditProfile.css"; // Import CSS file
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditProfile() {
  const [formData, setFormData] = useState({
    age: "",
    dob: "",
    contact: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://localhost:4000/profile",
        formData,
        {
          headers: { Authorization: token },
        }
      );
      toast.success("Profile Updated Succesfully");
      navigate("/profile");
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center min-vh-100 align-items-center">
          <Col>
            <div
              style={{ maxWidth: "30rem" }}
              className="text-center bg-info bg-gradient mx-auto rounded-top py-1"
            >
              <i className="bi bi-person-circle fs-1 text-light"></i>
            </div>
            <Form
              onSubmit={handleSubmit}
              className="p-4 shadow-lg mx-auto "
              style={{ maxWidth: "30rem" }}
            >
              <Form.Group className="mb-3">
                <Form.Control
                  className="px-2 py-3"
                  type="text"
                  name="age"
                  placeholder="Enter Age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="px-2 py-3"
                  type="text"
                  name="dob"
                  placeholder="Enter date of birth"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="px-2 py-3"
                  type="text"
                  name="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="info"
                type="submit"
                className="w-100 py-2 text-light"
              >
                Update Profile
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* <div className="edit-profile-container">
        <h2 className="edit-profile-heading">Edit Profile</h2>
        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={handleChange}
          />
          <input
            type="text"
            name="dob"
            placeholder="Date of Birth"
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            onChange={handleChange}
          />
          <button type="submit">Update Profile</button>
        </form>
      </div> */}
    </>
  );
}

export default EditProfile;
