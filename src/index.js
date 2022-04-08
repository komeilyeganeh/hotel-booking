import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProvideStore from "./store/ProvideStore";
import "./index.css";

ReactDOM.render(
  <ProvideStore>
    <App />
  </ProvideStore>,
  document.getElementById("root")
);