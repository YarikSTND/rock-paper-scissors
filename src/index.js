import React from 'react';
import MainPart from './components/MainPart';
import {render} from "react-dom";

function App() {
  return (
    <>
      <MainPart/>

    </>
  )
}

render(<App />, document.querySelector("#root"));