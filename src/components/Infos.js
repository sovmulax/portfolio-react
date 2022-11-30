import { Col, ProgressBar } from "react-bootstrap";
import Credits from "./Credit";

const Infos = () => {
  return (
    <Col lg={4} md={12} sm={12}>
      <div className="m-3">
        <h1 style={{
          fontSize: '3.5em',
        }}>Soumaila Géoffroy Evane</h1><br />
        <h3>Software Engineer</h3><br />
        <h4>📍 Abidjan, Côte d'Ivoire</h4><br />
        <p style={{
          textAlign: 'justify'
        }}>
          Le Lorem Ipsum est simplement du faux texte employé dans la composition
          et la mise en page avant impression. Le Lorem Ipsum est le faux texte
          standard de l'imprimerie depuis les années 1500, quand un imprimeur
          anonyme assembla ensemble des morceaux de texte pour réaliser un livre
          spécimen de polices de texte.
        </p><br /><br /><br /><br />
      </div>
      <h2 className="text-center">Skills</h2>
      <div style={{
        marginRight: '20px',
        marginLeft: '20px',
      }}>
        <span className="font-weight-bold" style={{
          fontSize: '1.5em',
        }}>React</span>
        <ProgressBar now={50} animated={true} />
        <span className="font-weight-bold" style={{
          fontSize: '1.5em',
        }}>Flutter & Dart</span>
        <ProgressBar now={90} animated={true} />
        <span className="font-weight-bold" style={{
          fontSize: '1.5em',
        }}>Java</span>
        <ProgressBar now={70} animated={true} />
        <span className="font-weight-bold" style={{
          fontSize: '1.5em',
        }}>Laravel</span>
        <ProgressBar now={90} animated={true} />
        <span className="font-weight-bold" style={{
          fontSize: '1.5em',
        }}>NodeJs</span>
        <ProgressBar now={60} animated={true} />
      </div>
      <br /><br />
      <Credits />
    </Col>
  );
};

export default Infos;
