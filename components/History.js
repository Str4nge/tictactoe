import React from 'react';

const History = ({ history, moveTo, currMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              type="button"
              style={{
                fontWeight: move === currMove ? 'bold' : 'normal',
              }}
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Go to start' : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
