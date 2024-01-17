// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
export default function GameBoard({ onSelectedSquare, board }) {
  // let gameBoard = initialGameBoard;
  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;
  //   gameBoard[row][col] = player;
  // }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //
  // function handlerSelectSquare(rowIndex, colIndex) {
  //   setGameBoard(prevState => {
  //     const updateBoard = [...prevState.map(innerArray => [...innerArray])];
  //     updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateBoard;
  //   });
  //   onSelectedSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedSquare(rowIndex, colIndex)}
                  disabled={symbol !== null}
                >
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
