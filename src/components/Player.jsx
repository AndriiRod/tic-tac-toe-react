import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            onChange={e => setPlayerName(e.target.value)}
            type="text"
            value={playerName}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(prevState => !prevState)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
