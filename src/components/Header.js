import React from "react";
import MetaMask from "./MetaMask";

export default function Header() {
  return (
    <div className="h-20 flex items-center justify-between text-black py-6">
      <div className="flex-1 text-center">
        <h1 style={{transform: 'translateX(9%)'}} className="text-2xl mx-auto " >ROCK-PAPER-SCISSORS</h1>
      </div>
      <div>
        <MetaMask />
      </div>
    </div>
  );
}


