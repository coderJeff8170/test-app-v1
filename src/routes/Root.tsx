import { Outlet } from "react-router-dom";
import { Navigation } from "../components/common/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Root: React.FC<unknown> = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navigation/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};
