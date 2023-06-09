import React from "react";

export default function Scoring(props) {
    return (<div className="text-2xl" style={{color: "#5D62F9"}}>
        <h1 className="score">{props.playerScore} - {props.computerScore}</h1>
        <button onClick={props.onClickReset}>Reset</button>
        <h1>{props.gameStatus}</h1>
    </div>)
}