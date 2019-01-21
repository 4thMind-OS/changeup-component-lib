import React from 'react';
import { render } from "react-dom";
import { Nickel, Quarter, Dime, Bounty, Description, LostBounty, Title, TaskSummary, TasksList } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TasksList tasks={["one", "two", "three"]} />
  </div>
);

render(<App />, document.getElementById("root"));
