import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent() {
  return (
    <Row className="justify-content-md-center">
      <Container>
        <Col
          md={6}
          style={{
            margin: "100px auto",
          }}
        >
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </Row>
  );
}

export default CardComponent;
