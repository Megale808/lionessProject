import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navContaier'>
        <Navbar.Brand href="#home">Hello Lioness</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;