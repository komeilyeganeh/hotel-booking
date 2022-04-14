import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GalleryProvider from "./Context/GalleryProvider";
import "./index.css";

ReactDOM.render(
    <GalleryProvider><App /></GalleryProvider>,
  document.getElementById("root")
);