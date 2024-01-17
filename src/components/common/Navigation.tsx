import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navigation: React.FC<unknown> = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink className="nav-link" to={"/home"}>
            Home
          </NavLink>
          <NavLink className="nav-link" to={"/jenn"}>
            Jenn
          </NavLink>
          <NavLink className="nav-link" to={"/sophia"}>
            Sophia
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
