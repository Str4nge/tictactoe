import React, { useState } from 'react';
import Board from '../components/Board';
import { calculateWinner } from './winner';
import './styles/root.scss';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); // useState hook will take the initial state and return an array of exactly 2 elements
  const [isXnext, setIsXnext] = useState(false); //  These elements destructured here are the instance of current state and the function to update the state

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next is ${isXnext ? 'X' : 'O'}`;
  // setBoard is used to update the state by passing the updating value OR by passing a function that will update the value.
  // setBoard('X') will simply update the value of board with 'X'

  // handle click on the square
  const handleSquareClick = pos => {
    // if the board[pos] is not null i.e. one mark on the square already exists or WINNER exists then just return
    if (board[pos] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, position) => {
        // if the position on which map is mapping equals the clicked position then put a mark, else return the same value
        if (pos === position) {
          return isXnext ? 'X' : 'O'; // if the isNext state true then put 'X', else put 'O'
        }
        return square;
      });
    });

    // toggle the next state after click handling has happened to change 'X' to 'O'
    setIsXnext(prev => {
      return !prev;
    });
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h3>{message}</h3>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
}
export default App;
