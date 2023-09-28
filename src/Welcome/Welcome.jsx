import { useState } from 'react'
import '../App.css'

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

        <div className='grid grid-cols-2'>
            <label htmlFor="player1name">Player 1 name:</label>
            <input type="text" id="player1name" className='border border-gray-500'
                value={player1name}
                onChange={e => setPlayer1name(e.target.value)} />

            <label htmlFor="player2name">Player 2 name:</label>
            <input type="text" id="player2name" className='border border-gray-500'
                value={player2name}
                onChange={e => setPlayer2name(e.target.value)}/>
        </div>
        <a href='/game' className='bg-blue-500 p-5 rounded-md'>
            Start!
        </a>
    </>
  )
}

export default WelcomeScreen
