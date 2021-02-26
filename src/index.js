import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root"

import App from "./react/layout/app";
import "./styles/css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
