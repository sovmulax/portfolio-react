import { Col, Image } from "react-bootstrap";
const Avatar = () => {
  return (
    <Col lg={4} md={12} sm={12}>
      <Image src="/images/avatar.jpg" style={{
            height:'100%',
            width: '100%'
          }}/>
    </Col>
  );
};
 
export default Avatar;
