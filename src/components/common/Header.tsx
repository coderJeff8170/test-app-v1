import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type HeaderType = {
  title: string;
};
export const Header: React.FC<HeaderType> = (props: HeaderType) => {
  const { title } = props;
  return (
    <Container fluid>
      <Row>
        <Col className="text-center">
          <h1>{title}</h1>
        </Col>
      </Row>
    </Container>
  );
};
