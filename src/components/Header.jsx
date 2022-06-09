import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa"

function Header({ user, handleLogout }) {
  return !user ?

    (<Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/"><FaHome />Home</Nav.Link>
          <Nav.Link as={Link} to="/signup"><FaUser />Sign Up</Nav.Link>
          <Nav.Link as={Link} to="/login"><FaSignInAlt />Login</Nav.Link>
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
