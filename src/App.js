import React from "react";

import logo from "./logo.svg";
import AppWrapper from "./App.styles.js";

function App() {
  return (
    <AppWrapper>
      <AppWrapper.Header>
        <AppWrapper.Logo src={logo} alt="logo" />
        <AppWrapper.Intro>
          Edit <code>src/App.js</code> and save to reload.
        </AppWrapper.Intro>

        <AppWrapper.Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppWrapper.Link>
      </AppWrapper.Header>
    </AppWrapper>
  );
}

export default App;
