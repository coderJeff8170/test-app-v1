import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const HomePage: React.FC<unknown> = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header title="This is the home page!" />
        </Col>
      </Row>
    </Container>
  );
};
