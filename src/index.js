import React from 'react';
import { render } from "react-dom";
import { ItemView, Nickel, Quarter, Dime, Bounty, Description, LostBounty, Title, TaskSummary, TasksList } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TasksList tasks={["one", "two", "three"]} />
    <ItemView />
  </div>
);

render(<App />, document.getElementById("root"));
