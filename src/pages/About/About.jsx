import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import espritlogo from "../../assets/espritlogo.jpg";
import isaaslogo from "../../assets/isaaslogo.jpg";
import certLogo1 from "../../assets/certLogo1.png";
import certLogo2 from "../../assets/certLogo2.png";
import "./about.css";

const About = () => {
  return (
    <Container className="about-container">
      <section className="about-section">
        <h2 className="education text-center text-animation">
          Education Background
        </h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="shadow-sm h-100 mt-5">
              <Card.Img
                variant="top"
                src={espritlogo}
                alt="Esprit Engineering"
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title className="card-title text-center text-animation">
                  Computer Science Engineering Degree
                </Card.Title>
                <Card.Text className="card-text text-center mt-4 text-animation">
                  <p>Esprit</p>
                  <p>Graduation Year: 2025</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm h-100 mt-5">
              <Card.Img
                variant="top"
                src={isaaslogo}
                alt="isaas"
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title className="text-center text-animation">
                  IT Management Bachelor Degree
                </Card.Title>
                <Card.Text className="text-center mt-4 text-animation">
                  <p>Higher Institute of Business Administration</p>
                  <p>Graduation Year: 2019</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="certification text-center text-animation">
          Certifications
        </h2>
        <Row className="certifs ">
          <Col md={6}>
            <Card className="card shadow-sm h-100 mt-5 mb-0 text-center">
              <Card.Img
                className="certLogo1 card-img-top"
                variant="top"
                src={certLogo1}
                alt="Certification 1"
              />
              <Card.Body>
                <Card.Title className="text-center mt-4 text-animation">
                  FrontEnd Developer Capstone
                </Card.Title>
                <Card.Text className="text-center mt-4 text-animation">
                  <p>Meta</p>
                  <p>Year: 2022</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card shadow-sm h-100 mt-5 mb-0">
              <Card.Img
                className="certLogo1 card-img-top"
                variant="top"
                src={certLogo2}
                alt="Certification 2"
              />
              <Card.Body>
                <Card.Title className="text-center mt-4 text-animation">
                  Developing Front-end App with React
                </Card.Title>
                <Card.Text className="text-center text-animation">
                  <p>IBM</p>
                  <p>Year: 2023</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
