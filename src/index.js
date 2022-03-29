import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
