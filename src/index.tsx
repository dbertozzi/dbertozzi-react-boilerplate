import React from "react";
import ReactDOM from "react-dom";

function Root() {
  const x: number = 15;
  return <h1>{`Hello, world.${x}`}</h1>;
}

// Render the Root element into the DOM
ReactDOM.render(<Root />, document.getElementById("root"));
