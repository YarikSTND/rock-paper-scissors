import React from "react";
import MetaMask from "./MetaMask";

export default function Header() {
    return (<>
        <div className="flex text-black bg-cyan-600 py-6">
            <h1 className="">Rock Paper Scissors</h1> 
            <MetaMask />
        </div>
    </>)
}