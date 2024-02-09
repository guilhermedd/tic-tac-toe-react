import './App.css';
import Square from "./components/Square";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
function Board() {
    const [value, setValue] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [status, setStatus] = useState('Next player: ' + value);
    const [winner, setWinner] = useState(null);

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          setStatus('Winner: ' + squares[a]);
          return squares[a];
        }
      }
      return null;
    }
    function handleClick(i) {
      const newSquares = squares.slice();

      console.log(winner)
      if (newSquares[i] && winner !== null) {
        console.log(squares)
        return;
      }

      setValue((value !== 'X') ? 'X' : 'O');
      const nextValue = value === 'X' ? 'O' : 'X';
      setStatus('Next player: ' + nextValue);
      newSquares[i] = value;
      setSquares(newSquares);

      setWinner(calculateWinner(squares))
    }

    return (
      <>
        <Container className="board ">
          <h1>{status}</h1>
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
