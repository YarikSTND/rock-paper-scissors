import React, { useState } from "react";
import '../styles/tailwind.css';



export default function MainPart(props) {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  function handleClickReset() {
    setPlayerScore(0);
    setComputerScore(0);
    setGameStatus("");
  }

  function generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
  }

  function handleConfirmClick(choice) {
    const computerChoice = generateComputerChoice();

    if (choice === "rock") {
      if (computerChoice === "rock") {
        setGameStatus("Draw");
      } else if (computerChoice === "paper") {
        setGameStatus("You lose");
        setComputerScore(prevScore => prevScore + 1);
      } else {
        setGameStatus("You win");
        setPlayerScore(prevScore => prevScore + 1);
      }
    } else if (choice === "paper") {
      if (computerChoice === "paper") {
        setGameStatus("Draw");
      } else if (computerChoice === "rock") {
        setGameStatus("You win");
        setPlayerScore(prevScore => prevScore + 1);
      } else {
        setGameStatus("You lose");
        setComputerScore(prevScore => prevScore + 1);
      }
    } else {
      if (computerChoice === "scissors") {
        setGameStatus("Draw");
      } else if (computerChoice === "rock") {
        setGameStatus("You lose");
        setComputerScore(prevScore => prevScore + 1);
      } else {
        setGameStatus("You win");
        setPlayerScore(prevScore => prevScore + 1);
      }
    }
  }

  return (
    <>
      <h1 className="score">{playerScore} - {computerScore}</h1>
      <button onClick={handleClickReset}>Reset</button>
      <button onClick={() => handleConfirmClick("rock")}>Rock</button>
      <button onClick={() => handleConfirmClick("paper")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" >Paper</button>
      <button onClick={() => handleConfirmClick("scissors")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" >Scissors</button>
      <h1>{gameStatus}</h1>
    </>
  );
}