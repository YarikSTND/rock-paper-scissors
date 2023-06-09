import React, { useState } from "react";

export default function Item(props) {
  const { name, image, onSelectClick } = props;
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(true);
    onSelectClick(name);

    // Reset the pressed state after a short delay (e.g., 500ms)
    setTimeout(() => {
      setIsPressed(false);
    }, 500);
  };

  return (
    <div
      className={`flex flex-col items-center ${
        isPressed ? "bounce-animation" : ""
      }`}
    >
      <img src={image} alt={name} className="h-72" />
      <button
        className="px-4 py-2 mt-4 text-white rounded bg-blue-500 hover:bg-blue-700"
        onClick={handleButtonClick}
      >
        {name}
      </button>
    </div>
  );
}
