import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import '../App.css'

function GameScreen() {
  let { state } = useLocation();

  const navigate = useNavigate();

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const rock = 'rock', scissors = 'scissors', paper = 'paper';

  const moves = [
    {rock, scissors},
    {scissors, paper},
    {paper, rock}
  ];

  let movesHistory = [];

  useEffect(() => {

    if (!state || !state?.player1 || !state?.player2) {
      navigate("/");
    }

    setPlayer1(state?.player1);

    setPlayer2(state?.player2);

  }, [navigate]);  

  let [ player, setPlayer ] = useState(1);

  const getCurrentPlayerName = () => {
    return player == 1 ? player1 : player2;
  }

  const pushMove = (move) => {
    let moveData = { player: player, move: move};

    movesHistory.push(moveData);

    togglePlayer();
  };

  const checkWinner = () => {
    if(movesHistory.length % 2 != 0){
      return;
    }

    let lastTwoMoves = movesHistory.slice(movesHistory.length - 2);

    
  }

  const togglePlayer = () => {
    if(player == 1){
      setPlayer(2);
    }
    else{
      setPlayer(1);
    }
  }

  return (
    <>
      <h1>GAME</h1>
      <h2>{getCurrentPlayerName()} it's your turn!</h2>
      <button className='button capitalize' onClick={() => pushMove(rock)}>{rock}</button>
      <button className='button capitalize' onClick={() => pushMove(paper)}>{paper}</button>
      <button className='button capitalize' onClick={() => pushMove(scissors)}>{scissors}</button>
    </>
  )
}

export default GameScreen