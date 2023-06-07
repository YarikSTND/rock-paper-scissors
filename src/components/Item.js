import React from "react";

export default function Item(props) {
  const { name, image, onSelectClick } = props;

  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="w-100 h-100" />
      <button
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => onSelectClick(name)}
      >
        {name}
      </button>
    </div>
  );
}