import React from "react";
import ReactDOM from "react-dom";
import "./css/custom.scss";
import App from "./App";
import Sidebar from "./components/Sidebar";

ReactDOM.render(
  <React.StrictMode>
    <div id="wrapper">
      <Sidebar />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
