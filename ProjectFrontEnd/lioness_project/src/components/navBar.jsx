import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {api} from '../utilities';
import { userLogout } from '../utilities';




function NavBar() {
 const token = localStorage.getItem('token')
 if (token) {
   api.defaults.headers['Authorization'] = `Token ${token}`
 }
 
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"> <h1>hello Lioness</h1> </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              {token ? null : <NavDropdown.Item href="/sign-up">Sign Up</NavDropdown.Item>}
              {!token ? null : <NavDropdown.Item href="/info">Profile</NavDropdown.Item>}
              <NavDropdown.Divider />
              {token ? null: <NavDropdown.Item href="/login">Log In</NavDropdown.Item>}
              {!token ? null: <NavDropdown.Item href="/logout" onClick={() => {userLogout}}>Log Out</NavDropdown.Item>}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;