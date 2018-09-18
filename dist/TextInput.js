import React from "react";

var Input = function Input() {
  return React.createElement(
    "div",
    null,
    React.createElement("input", { type: "text" })
  );
};

export default Input;