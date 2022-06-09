import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Header({ user, handleLogout }) {
  return !user ?

    (<Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>) :
    (<Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="#" onClick={handleLogout}
          >Logout</Nav.Link>
          <h5>Welcome {user.name}</h5>
        </Nav>
      </Container>
    </Navbar>)
}

export default Header;
