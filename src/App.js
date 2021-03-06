import React, { useState } from 'react';
import Board from '../components/Board';
import History from '../components/History';
import StatusMessage from '../components/StatusMessage';
import { calculateWinner } from './winner';
import './styles/root.scss';

function App() {
  const newGame = [{ board: Array(9).fill(null), isXnext: true }];
  const [history, setHistory] = useState(newGame); // useState hook will take the initial state and return an array of exactly 2 elements
  const [currMove, setCurrMove] = useState(0); //  These elements destructured here are the instance of current state and the function to update the state

  const current = history[currMove];
  const { winner, winningSquares } = calculateWinner(current.board);

  // setBoard is used to update the state by passing the updating value OR by passing a function that will update the value.
  // setBoard('X') will simply update the value of board with 'X'

  // handle click on the square
  const handleSquareClick = pos => {
    // if the board[pos] is not null i.e. one mark on the square already exists or WINNER exists then just return
    if (current.board[pos] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, position) => {
        // if the position on which map is mapping equals the clicked position then put a mark, else return the same value
        if (pos === position) {
          return last.isXnext ? 'X' : 'O'; // if the isNext state true then put 'X', else put 'O'
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });

    // toggle the next state after click handling has happened to change 'X' to 'O'
    setCurrMove(prev => {
      return prev + 1;
    });
  };

  const moveTo = move => {
    setCurrMove(move);
  };

  const resetGame = () => {
    setHistory(newGame);
    setCurrMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={resetGame} className={`btn-reset ${winner?'active':''}`}>
        Start new game{' '}
      </button>
      <h3 style={{fontWeight:'normal'} }>Current game history</h3>
      <History history={history} moveTo={moveTo} currMove={currMove} />
      <div className="bg-balls"> </div>
    </div>
  );
}
export default App;
