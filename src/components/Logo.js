import { Col, Image, Button } from "react-bootstrap";
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
      <Button size="lg" variant="secondary">Voir le CV</Button>{" "}
    </Col>
  );
};

export default Logo;
