import {useState} from "react";

export  default function Player({name, symbol}) {
    const [isEditing, setEditing] = useState(false);
    function handleEditing() {
        setEditing(true);
    }
    return <li>
                <span className="player">
                    {isEditing ? <input/> : <span className="player-name">{name}</span>}

                <span className="player-symbol">{symbol}</span>
                </span>
        <button onClick={handleEditing}>Edit</button>
    </li>
}