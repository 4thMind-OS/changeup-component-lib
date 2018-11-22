import React from 'react';
import { render } from "react-dom";
import { Nickel, Quarter, Dime, Bounty, Description, LostBounty } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Description description="Hello world I am descriptor destroyer of worlds" />
    <Bounty>
      <Nickel />
      <Quarter />
    </Bounty>
    <LostBounty>
      <Dime />
    </LostBounty>
  </div>
);

render(<App />, document.getElementById("root"));
