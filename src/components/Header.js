import React from "react";
import MetaMask from "./MetaMask";

export default function Header() {
    return (<>
        <div className="flex items-center justify-between text-black py-6">
                <h1 className="text-2xl">ROCK-PAPER-SCISSORS</h1> 
                <MetaMask className="text-right" />
        </div>
    </>)
}