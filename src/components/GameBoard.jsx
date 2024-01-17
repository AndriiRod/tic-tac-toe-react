import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectedSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handlerSelectSquare(rowIndex, colIndex) {
    setGameBoard(prevState => {
      const updateBoard = [...prevState.map(innerArray => [...innerArray])];
      updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });
    onSelectedSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handlerSelectSquare(rowIndex, colIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
