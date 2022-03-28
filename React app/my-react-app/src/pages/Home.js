import { Carousel, Card, Button, Row, Col, Img, Container, Form, ListGroup} from 'react-bootstrap';
import Slider from './images/slider.jpg';
import Slider1 from './images/slider1.jpg';
import Slider2 from './images/slider2.jpg';
import ContentImg from './images/content-img.jpg';
import jobSeeker from './images/job-seeker.jpg';
import Employer from './images/employer.jpg';
import Testimonials from './images/testimonials.jpg';

import styles from './css/style.module.css'; 
function Home() {
  return (
    <div className="Home">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider}
      alt="First slide"
    />
    <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center flex-column">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider1}
      alt="Second slide"
    />

    <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center flex-column">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider2}
      alt="Third slide"
    />

    <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center flex-column">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Container>
<Row xs={1} md={2}>
  <Col className="mt-5">
    <h2>WHAT WE DO</h2>
    <Card.Text>
      Founded in 2007, Snakorpio Group has been delivering consulting and staffing solutions to fortune 500 institutions, small and medium sized enterprises, and high growth startups. We provide professional and managed services, direct placement, and contingent staffing to help organizations and people to achieve their objectives. <br />
      Based in New York Metropolitan area, Snakorpio serves over 20 clients, half of which are Fortune 100 firms across financial markets, professional services, media, fintech, energy and pharmaceutical.<br />
      We have employees across the continental U.S., and offshore resources in India and Eastern Europe through our strategic partners.<br />
      Our areas of expertise include risk and control, regulatory remediation, organizational change, digital transformation, and disruptive technology.
    </Card.Text>
  </Col>
  <Col className="mt-5 pt-5">
      <img src={ContentImg} className="img-fluid" alt="ContentImg" />
  </Col>  
</Row>
<Row md={1}>
  <Col className="mt-5">
  <h2 className="text-center">WHO WE SERVE</h2>
 </Col>  
</Row>

<Row xs={1} md={2}>
  <Col className="mt-4">
  <img src={jobSeeker} className="img-fluid" alt="jobSeeker" />
    <h4 className="text-center mt-4">Job Seekers</h4>
    <Card.Text className="mt-4">
      We have successfully placed hundreds of experienced professionals and new grads. Our approach is to first understand our candidate’s career goals and passion, then finding the project / employer for the right fit. The skillset we typically look for are: <br /> <br />
    <ul className="ps-3">
      <li>Project Managers / Business Analyst</li>
      <li>Agile Coach / SCRUM Masters</li>
      <li>Developers / Architect / Testers</li>
      <li>Sales / Customer Success</li>
    </ul>
    <Button variant="primary" size="lg" active className="mt-3">Find more</Button>

    </Card.Text>
  </Col>
  <Col className="mt-4">
  <img src={Employer} className="img-fluid" alt="Employer" />
    <h4 className="text-center mt-4">Employers</h4>
    <Card.Text className="mt-4">
      Our relationship with our clients is based on trust. We operate with the highest integrity and security standards, and commercial interest comes after achieving our client’s objectives. Services we currently offer are: <br /> <br />
    <ul className="ps-3">
      <li>Professional Services</li>
      <li>Contingent Staffing</li>
      <li>Direct Placement</li>
      <li>Managed Services</li>
    </ul>
    <Button variant="primary" size="lg" active className="mt-3">Find more</Button>
    </Card.Text>
  </Col>
</Row>
</Container>
<div  className={styles.testimonials}>
  <Container className="testimonials">
    <h2 className="text-uppercase text-center pb-4">Testimonials</h2>
    <Carousel className="text-center">
      <Carousel.Item>
          <p className="lead">"The speed and knowledge of your team has been a refreshing experience for me, I appreciate your professionalism and help in securing this opportunity"</p>
          <h4 className="text-muted">Candidate</h4>
      </Carousel.Item>
      <Carousel.Item>
         <p className="lead">"… is quite impressive, someone pinch because I must be dreaming! This is someone I need to have on the team and could keep him busy for the next 30 years."</p>
          <h4 className="text-muted">Fortune 500 Fintech Client</h4>
      </Carousel.Item>
    </Carousel>
  </Container>
</div>
<Container className="mt-5">
  <Row md={2} className="justify-content-center">
    <Col>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Submit
      </Button>
      </Form>
    </Col>
  </Row>
</Container>
</div>



 
  );
}

export default Home;
