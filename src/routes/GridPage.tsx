import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GridExample } from "../components/common/Grid/Grid";

export const GridPage: React.FC<unknown> = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header title="Grid Page" />
        </Col>
      </Row>
      <Row>
        <Col>
          <GridExample />
        </Col>
      </Row>
    </Container>
  );
};
