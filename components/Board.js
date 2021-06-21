import React from 'react';
import Square from './Square';

const Board = ({ board, handleSquareClick }) => {
  // const [board, setBoard] = useState(Array(9).fill(null)); // useState hook will take the initial state and return an array of exactly 2 elements
  // const [isXnext, setIsXnext] = useState(false); //  These elements destructured here are the instance of current state and the function to update the state

  // // setBoard is used to update the state by passing the updating value OR by passing a function that will update the value.
  // // setBoard('X') will simply update the value of board with 'X'

  // // handle click on the square
  // const handleSquareClick = pos => {
  //   // if the board[pos] is not null i.e. one mark on the square already exists then just return
  //   if (board[pos]) {
  //     return;
  //   }

  //   setBoard(prev => {
  //     return prev.map((square, position) => {
  //       // if the position on which map is mapping equals the clicked position then put a mark, else return the same value
  //       if (pos === position) {
  //         return isXnext ? 'X' : 'O'; // if the isNext state true then put 'X', else put 'O'
  //       }
  //       return square;
  //     });
  //   });

  //   // toggle the next state after click handling has happened to change 'X' to 'O'
  //   setIsXnext(prev => {
  //     return !prev;
  //   });
  // };

  // render and return a Square component with value and an onClick event ( that is handled by the square component using props)
  // it will generate a square and whenever the square is clicked the handleSquare function is called using the position of the square
  const renderSquare = pos => {
    return (
      <Square
        value={board[pos]}
        onClick={() => {
          handleSquareClick(pos);
        }}
      />
    );
  };

  // return the grid layout
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
