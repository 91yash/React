import { Container, Row, Col, Nav } from 'react-bootstrap';
function Footer() {
  return (
<div className="Footer mt-5">
	<Container>
    	<Row>
	    	<Col>
		    	<Nav className="justify-content-center ">
			      <Nav.Link href="#" className="text-white">Home</Nav.Link>
			      <Nav.Link href="#" className="text-white">Services</Nav.Link>
			      <Nav.Link href="#" className="text-white">About</Nav.Link>
			      <Nav.Link href="#" className="text-white">Job Seekers</Nav.Link>
			      <Nav.Link href="#" className="text-white">Contact</Nav.Link>
			      <Nav.Link href="#" className="text-white">Privacy Policy</Nav.Link>
			      <Nav.Link href="#" className="text-white">Terms and Conditions </Nav.Link>
			    </Nav>
			</Col>
		</Row>
	</Container>
</div>
  );
}

export default Footer;
        