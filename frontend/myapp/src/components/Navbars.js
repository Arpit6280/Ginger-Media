import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import LoginContext from "../store/login-context";
import { toast } from "react-toastify";

function Navbars() {
  const navigate = useNavigate();
  const loginContext = useContext(LoginContext);
  const logout = () => {
    loginContext.logout();
    navigate("/login");
    toast.success("Logout Successfully");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-info">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/profile" className="text-light fs-4 fw-bold">
              Home
            </Nav.Link>
            <Nav.Link
              href="/edit-profile"
              className="text-light fs-4 fw-bold mx-4"
            >
              Edit Profile
            </Nav.Link>
          </Nav>
          <Nav.Link onClick={logout} className="text-light fs-4 fw-bold">
            Logout
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
