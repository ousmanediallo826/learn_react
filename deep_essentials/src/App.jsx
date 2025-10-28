import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectPlayer() {
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? '0' : 'X');
    }
  

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Player 1"  symbol="X" isActive={activePlayer === 'X'}/>
            <Player name="Player 2"  symbol="0" isActive={activePlayer === '0'}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectPlayer}  activePlayerSymbol={activePlayer}/>
        </div>
      </main>
  )
}

export default App
