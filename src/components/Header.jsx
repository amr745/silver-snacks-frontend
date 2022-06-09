import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FaSignInAlt, FaHome, FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../App.css"

function Header({ user, handleLogout }) {
  return !user ?

    (<Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img id="logo-image" src="https://i.imgur.com/TDB1QQv.png" alt="logo image"></img></Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/"><FaHome />Home</Nav.Link>
          <Nav.Link as={Link} to="/signup"><FaUser />Sign Up</Nav.Link>
          <Nav.Link as={Link} to="/login"><FaSignInAlt />Login</Nav.Link>
          <Nav.Link as={Link} to="/cart"><AiOutlineShoppingCart />Cart</Nav.Link>
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
