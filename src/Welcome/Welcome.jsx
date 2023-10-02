import { useState } from 'react'
import '../App.css'
import { Link, useLocation } from "react-router-dom";

function WelcomeScreen() {
  let [player1name, setPlayer1name] = useState('');
  let [player2name, setPlayer2name] = useState('');

  return (
    <>
      <h1 className="text-5xl mt-10">
        Welcome to rock, paper, scissors!
      </h1>

      <h2 className="text-2xl mt-10">
        Introduce the names of the players
      </h2>

        <div className='grid grid-cols-1 mt-10'>
            <div className='input-group w-full'>
              <label htmlFor="player1name">Player 1 name:</label>
              <input type="text" id="player1name" className='border border-gray-500 flex-grow ml-5'
                  value={player1name}
                  onChange={e => setPlayer1name(e.target.value)} />
            </div>
            <div className='input-group w-full mt-10'>
              <label htmlFor="player2name">Player 2 name:</label>
              <input type="text" id="player2name" className='border border-gray-500 flex-grow ml-5'
                  value={player2name}
                  onChange={e => setPlayer2name(e.target.value)}/>
            </div>
        </div>
        <Link to="game" state={{ player1: player1name, player2: player2name }}
          className='bg-blue-500 p-5 rounded-md mt-10 inline-block'>
          Start!
        </Link>
        
    </>
  )
}

export default WelcomeScreen
