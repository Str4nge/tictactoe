import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next is ${current.isXnext ? 'X' : 'O'}`;
  const noMoveLeft = current.board.every(el => {
    return el !== null;
  });
  return (
    // Conditional rendering
    <h3>
      {winner && `Winner is ${winner}`}
      {!winner && !noMoveLeft && `Next is ${current.isXnext ? 'X' : 'O'}`}
      {!winner && noMoveLeft && 'Game draw!'}
    </h3>
  );
};

export default StatusMessage;
