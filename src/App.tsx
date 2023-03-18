import * as React from "react";
import * as ReactDOM from "react-dom";

import Home from "./Home/Home";

window.onload = () => {
  console.log("this thing ");
  ReactDOM.render(<Home />, document.getElementById("root"));
};
