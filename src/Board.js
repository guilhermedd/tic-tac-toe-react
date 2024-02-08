import './App.css';
import Square from "./components/Square";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Board() {
  return (
      <>
          <Container fluid className="board">
              <Row className="justify-content-md-center">
                  <Col md="auto">
                      <Square index={1}/>
                      <Square index={2}/>
                      <Square index={3}/>
                  </Col>
              </Row>
              <Row className="justify-content-center">
                  <Col md="auto">
                      <Square index={1}/>
                      <Square index={2}/>
                      <Square index={3}/>
                  </Col>
              </Row>
              <Row className="justify-content-center">
                  <Col md="auto">
                      <Square index={1}/>
                      <Square index={2}/>
                      <Square index={3}/>
                  </Col>
              </Row>
          </Container>
      </>
  );
}

export default Board;
