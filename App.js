import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">Learn React with JSX</h1>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2>{100 + 300}</h2>
    <h1 className="heading">Learn React</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
