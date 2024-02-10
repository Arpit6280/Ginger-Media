// Login.js

import React, { useContext, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import "../css/Login.css"; // Import CSS file
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../store/login-context";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const loginContext = useContext(LoginContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        formData
      );
      console.log(response.data); // Handle success response (e.g., store token in local storage)
      loginContext.login(response.data.token);
      //   localStorage.setItem("token", response.data.token);
      toast.success("Login Successful");
      navigate("/profile", { replace: true });
    } catch (error) {
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
              style={{ maxWidth: "25rem" }}
              className="text-center bg-info bg-gradient mx-auto rounded-top py-1"
            >
              <i className="bi bi-person-circle fs-1 text-light"></i>
            </div>
            <Form
              onSubmit={handleSubmit}
              className="p-4 shadow-lg mx-auto "
              style={{ maxWidth: "25rem" }}
            >
              <Form.Group className="mb-3">
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
              <Button
                variant="info"
                type="submit"
                className="w-100 py-2 text-light"
              >
                Login
              </Button>

              <p className="mt-1">
                Doesn't have an account?{" "}
                <Link to="/" className="text-decoration-underline text-primary">
                  SignUp here{" "}
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div> */}
    </>
  );
}

export default Login;
