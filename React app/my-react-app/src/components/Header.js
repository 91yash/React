import { Navbar, Container, Nav, NavDropdown, Image, Button } from 'react-bootstrap';
import logo from './images/logo.png';



function Header() {
  const menuStyle = {
    color: "white",
  };

  return (
<div className="Header">
  <Navbar bg="dark" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="#home"><Image src={logo} className="App-logo1" alt="logo1"/></Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" style={menuStyle} className="ms-4">Home</Nav.Link>
        <Nav.Link href="#home" className="ms-4">Services</Nav.Link>
        <Nav.Link href="#home" className="ms-4">About</Nav.Link>
        <Nav.Link href="#home" className="ms-4">Job Seekers</Nav.Link>
        <Nav.Link href="#home" className="ms-4">Employers</Nav.Link>
        <Nav.Link href="#home" className="ms-4">Contact</Nav.Link>
        <Button variant="primary ms-4">Primary</Button>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>      
</div>

  );
}

export default Header;

<style>

</style>