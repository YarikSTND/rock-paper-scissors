import React from 'react';
import MainPart from './components/MainPart';
import {render} from "react-dom";
import './styles/tailwind.css';

function App() {
  return (
    <>
      <MainPart/>

    </>
  )
}

render(<App />, document.querySelector("#root"));