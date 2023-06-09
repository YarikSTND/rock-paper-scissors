import React from "react";

export default function Item(props) {
  const { name, image, onSelectClick } = props;

  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} style={{height:"300px"}} />
      <button
      style={{background: "#5D62F9"}}
        className="px-4 py-2 mt-4  text-white rounded hover:bg-blue-700"
        onClick={() => onSelectClick(name)}
      >
        {name}
      </button>
    </div>
  );
}