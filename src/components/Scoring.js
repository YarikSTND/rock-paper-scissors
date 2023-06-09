import React from "react";

export default function Scoring(props) {
  let textColor = "";

  if (props.gameStatus === "Draw") {
    textColor = "text-black";
  } else if (props.gameStatus === "You win") {
    textColor = "text-green-500";
  } else {
    textColor = "text-red-500";
  }

  return (
    <div className="h-20 m-10 flex flex-col items-center justify-center text-2xl text-blue-500">
      <h1 className="score">{props.playerScore} - {props.computerScore}</h1>
      <button className="hover:text-blue-800" onClick={props.onClickReset}>Reset</button>
      <h1 className={textColor}>{props.gameStatus}</h1>
    </div>
  );
}
// style={{color: "#5D62F9"}}