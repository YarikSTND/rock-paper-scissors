import React from "react";
import MetaMask from "./MetaMask";

export default function Header() {
    return (<>
        <div className="flex items-center justify-between text-black bg-cyan-600 py-6">
                <h1>Rock Paper Scissors</h1> 
                <MetaMask className="text-right" />
        </div>
    </>)
}