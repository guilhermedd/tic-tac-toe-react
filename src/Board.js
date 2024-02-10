import './App.css';
import './index.css';
import Square from "./components/Square";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useState } from 'react';
function Board() {
    const [value, setValue] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [status, setStatus] = useState('Next player: ' + value);
    const [winner, setWinner] = useState(null);
    const [board, setBoard] = useState([]);

    const board_md = 6;

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
        console.log("func", squares);
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          setStatus('Winner: ' + squares[a]);
          return squares[a];
        }
      }
      if (!squares.includes(null)) {
        setStatus('Draw');
        return 'Draw';
      }
      return null;
    }
    function handleClick(i) {
      const newSquares = [...squares];

      if (newSquares[i] || winner) {
        return;
      }

      setValue((value !== 'X') ? 'X' : 'O');
      const nextValue = value === 'X' ? 'O' : 'X';
      setStatus('Next player: ' + nextValue);
      newSquares[i] = value;
      setSquares(newSquares);
      console.log(newSquares);

      setWinner(calculateWinner(newSquares))
      if (winner) {
        setStatus('Winner: ' + winner);
      }

      const history = [...board];
      history.push(newSquares);
      setBoard(history);

    }

    return (
      <>
        <Container className="main">
          <Row>
            <Col md={board_md}>
              <Row className="board">
                <Col md="auto">
                  <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                  <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                  <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                </Col>
              </Row>

              <Row className="board">
                <Col md="auto">
                  <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                  <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                  <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                </Col>
              </Row>

              <Row className="board">
                <Col md="auto">
                  <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                  <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                  <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                </Col>
              </Row>
            </Col>

            <Col md={12-board_md} className="justify-content-start">
              {board.map((item, index) => (
                <ul><button onClick={() => setSquares(item)}>Voltar para jogada {index}</button></ul>
              ))}
            </Col>
          </Row>

          <Row className="status">
            <Col md="auto" className="status">
              <h1>{status}</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Board;
