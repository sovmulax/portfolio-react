import { Row } from "react-bootstrap";
import Avatar from "./components/Avatar";
import Infos from "./components/Infos";
import Logo from "./components/Logo";

function App() {
  return (
    <div>
      <Row
        style={{
          overflow: "hidden",
        }}
      >
        <Avatar />
        <Infos />
        <Logo />
      </Row>
    </div>
  );
}

export default App;
