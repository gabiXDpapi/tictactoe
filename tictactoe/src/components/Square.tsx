import React from 'react';

type SquareValue = 'X' | 'O' | null;

interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps): JSX.Element {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
