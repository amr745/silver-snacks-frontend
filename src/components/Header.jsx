import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Header({ user, handleLogout }) {
  return !user ?

    (<Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>) :
    (<Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#" onClick={handleLogout}
          >Logout</Nav.Link>
          <h5>Welcome {user.name}</h5>
        </Nav>
      </Container>
    </Navbar>)

  // (
  //   <nav className="nav">
  //     <Link to="/">Home</Link>
  //     <Link to="/signup">Sign Up</Link>
  //     <Link to="/login">Log In</Link>
  //   </nav>
  // ) : (
  //   <nav className="nav">
  //     <h1>Welcome {user.name},</h1>
  //     <Link to="/">Home</Link>
  //     <Link to="" onClick={handleLogout}>
  //       Log Out
  //     </Link>
  //   </nav>
  // );
}

export default Header;
