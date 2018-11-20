import React from 'react';
import { render } from "react-dom";
import { Nickel, Quarter, Dime, Bounty } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Bounty>
      <Nickel />
      <Quarter />
      <Dime />
    </Bounty>
  </div>
);

render(<App />, document.getElementById("root"));
