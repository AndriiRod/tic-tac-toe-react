import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handlerSelectSquare() {
    setActivePlayer(prevState => (prevState === 'X' ? 'O' : 'X'));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="PLayer-1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="PLayer-2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectedSquare={handlerSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
