import React, { useEffect, useState } from "react";
import Item from "./Item";
import Scoring from "./Scoring";
import Header from "./Header";


export default function MainPart() {
  const [playerScore, setPlayerScore] = useState(() => {
    const storedPlayerScore = localStorage.getItem("playerScore")
    return storedPlayerScore ? parseInt(storedPlayerScore, 10) : 0
  });

  const [computerScore, setComputerScore] = useState(() => {
    const storedComputerScore = localStorage.getItem("computerScore")
    return storedComputerScore ? parseInt(storedComputerScore, 10) : 0
  });

  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => {
    localStorage.setItem("playerScore", playerScore)
    localStorage.setItem("computerScore", computerScore)
  }, [playerScore, computerScore])

  function handleClickReset() {
    setPlayerScore(0);
    setComputerScore(0);
    setGameStatus("");
    localStorage.removeItem("playerScore");
    localStorage.removeItem("computerScore");
  }

  function generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
  }

  function handleSelectClick(choice) {
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
    <div>
      <Header />
      <Scoring playerScore={playerScore} computerScore={computerScore} onClickReset={handleClickReset} gameStatus={gameStatus} />
      <div className="flex justify-around">
        <Item name="rock" image="images/rock.svg" onSelectClick={handleSelectClick}/>
        <Item name="paper" image="images/paper.svg" onSelectClick={handleSelectClick}/>
        <Item name="scissors" image="images/scissors.svg" onSelectClick={handleSelectClick}/>
      </div>
    </div>
  );
}