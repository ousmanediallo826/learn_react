import {useState} from "react";

export  default function Player({name, symbol, isActive}) {
    const [isEditing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    function handleEditing() {
        setEditing((prev) => !prev);
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    return <li className={isActive ? "active" : undefined}>
                <span className="player">
                    {isEditing ? <input type="text" required defaultValue={playerName}  onChange={handleChange} /> : <span className="player-name">{playerName}</span>}

                <span className="player-symbol">{symbol}</span>
                </span>
        <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
}