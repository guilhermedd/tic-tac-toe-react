import './App.css';
import Square from "./components/Square";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
function Board() {
    const [value, setValue] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
      const newSquares = squares.slice();
      if (newSquares[i]) {
        return;
      }
      setValue((value !== 'X') ? 'X' : 'O');
      newSquares[i] = value;
      setSquares(newSquares);
    }

    return (
      <>
        <Container className="board ">
          <Row className="justify-content-center">
            <Col md="auto">
              <Square value={squares[0]} onSquareClick={() =>handleClick(0)}/>
              <Square value={squares[1]} onSquareClick={() =>handleClick(1)}/>
              <Square value={squares[2]} onSquareClick={() =>handleClick(2)}/>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="auto">
              <Square value={squares[3]} onSquareClick={() =>handleClick(3)}/>
              <Square value={squares[4]} onSquareClick={() =>handleClick(4)}/>
              <Square value={squares[5]} onSquareClick={() =>handleClick(5)}/>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="auto">
              <Square value={squares[6]} onSquareClick={() =>handleClick(6)}/>
              <Square value={squares[7]} onSquareClick={() =>handleClick(7)}/>
              <Square value={squares[8]} onSquareClick={() =>handleClick(8)}/>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Board;
