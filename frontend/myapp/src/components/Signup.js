// Signup.js

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Signup.css"; // Import CSS file

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      const response = await axios.post(
        "http://localhost:4000/signup",
        formData
      );
      toast.success("SignUp Successfully");
      navigate("/login");
      console.log(response.data); // Handle success response
    } catch (error) {
      toast.error("SignUp fail retry");
      console.error(error.response.data); // Handle error response
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center min-vh-100 align-items-center">
          <Col>
            <div className="text-center pb-4">
              <h3>
                Welcome to{" "}
                <span className="text-info fst-italic">
                  User Collection App
                </span>
              </h3>
            </div>
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
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Control
                  className="px-2 py-3"
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  className="px-2 py-3"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

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
                Sign Up
              </Button>

              <p className="mt-1">
                Have an account?{" "}
                <Link
                  to="/login"
                  className="text-decoration-underline text-primary"
                >
                  Login here{" "}
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* <div className="signup-container">
        <h2 className="signup-heading">Signup</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
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
          <button type="submit">Signup</button>
        </form>
      </div> */}
    </>
  );
}

export default Signup;
