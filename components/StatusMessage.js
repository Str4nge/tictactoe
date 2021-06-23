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
    <div className="staus-message">
      {winner && (
      <>
      Winner is <span className={winner==='X'?'text-green':'text-orange'}>{winner}</span>
      </>
      )}
      {!winner && !noMoveLeft && (
        <>
        Next player is <span className={current.isXnext?'text-green':'text-orange'}> {current.isXnext ? 'X' : 'O'}</span>
        </>
      )}
      {!winner && noMoveLeft && 'Game draw!'}
    </div>
  );
};

export default StatusMessage;
