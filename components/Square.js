/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
