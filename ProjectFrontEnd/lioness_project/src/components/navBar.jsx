import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { api } from '../utilities';
import woodedPhoto from '../images/woodedPhoto.jpg';

const userLogout = async () => {
  const response = await api.post('users/logout/')
  if (response.status === 204) {
    
      delete api.defaults.headers.common['Authorization']
      localStorage.removeItem('token')
      console.log('User logged out', response.data)
      return null
  } else {
      console.log('User not logged out')
  }
  
}  


function NavBar({user}) {

 
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundImage: `url(${woodedPhoto})`}}>
      <Container>
        <Navbar.Brand  href="/"> <h1 className='name-band'>hello Lioness </h1>  </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              {user ? null : <NavDropdown.Item href="/sign-up">Sign Up</NavDropdown.Item>}
              {!user ? null : <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>}
              <NavDropdown.Divider />
              {user ? null: <NavDropdown.Item href="/login">Log In</NavDropdown.Item>}
              {!user ? null: <NavDropdown.Item href="/" onClick={() => {userLogout()}}>Log Out</NavDropdown.Item>}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;