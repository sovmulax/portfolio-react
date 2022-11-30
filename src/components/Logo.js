import { Col, Image, Button } from "react-bootstrap";
import cv from '../files/cv.pdf'
const Logo = () => {
  return (
    <Col lg={4} md={12} sm={12} className="text-center">
      <Image
        src="/images/logo.png"
        style={{
          marginTop: "100px",
          width: "80%",
        }}
      />
      <br />
      <br />
      <a href={cv} target="_blank" rel="noopener noreferrer">
        <Button size="lg" variant="secondary">Voir le CV</Button>
      </a>
    </Col>
  );
};

export default Logo;
