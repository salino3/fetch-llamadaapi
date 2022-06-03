import React from 'react';
import Axios from "./components/Axios";
import AsyncAwait from "./components/AsyncAwait";
import ThenAPI from "./components/ThenAPI";

import './App.css';


function App() {
  return (
    <div className="App">
      <Axios />
      <br />
      <hr />
      <AsyncAwait />
      <br />
      <hr />
      <ThenAPI />
    </div>
  );
}

export default App;
