import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ItemView, Nickel, Quarter, Dime, Bounty, Description, LostBounty, Title, TaskSummary, TasksList } from "./lib";

const One = () => <ItemView number="one" />
const Two = () => <ItemView number="two" />
const Three = () => <ItemView number="three" />

const App = () => (
  <Router>
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <TasksList tasks={["one", "two", "three"]} />
      <Route path="/taskOne" exact component={One} />
      <Route path="/taskTwo" component={Two} />
      <Route path="/taskThree" component={Three} />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
