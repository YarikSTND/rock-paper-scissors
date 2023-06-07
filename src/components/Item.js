import React from "react";

export default function Item(props) {
  const { name, image, onSelectClick } = props;

  return (
    <>
      <img src={image} alt={name} />
      <button onClick={() => onSelectClick(name)}>{name}</button>
    </>
  );
}
