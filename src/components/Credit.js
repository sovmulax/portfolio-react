import { Col, Image } from "react-bootstrap";

const Credits = () => {
  return (
    <Col sm={12} className="text-center">
      <a href="https://twitter.com/sovmulax">
      <Image
        src="/images/twitter.png"
        style={{
          height: "30px",
          width: "30px",
        }}
      />
        </a>{" "}
        <a href="https://www.linkedin.com/in/geoffroy-evane-soumaila-2317ab198/">
        <Image
        src="/images/linkedin.png"
        style={{
          height: "30px",
          width: "30px",
        }}
      />
        </a>{" "}
      <a href="https://github.com/sovmulax">
      <Image
        src="/images/github.png"
        style={{
          height: "30px",
          width: "30px",
        }}
      />
      </a>{" "}
      <a href="mailto:soumailaevane@gmail.com">
      <Image
        src="/images/gmail-logo.png"
        style={{
          height: "30px",
          width: "30px",
        }}
      />
      </a>
    </Col>
  );
};

export default Credits;
