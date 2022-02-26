import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextPorvider } from "./Context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextPorvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextPorvider>
  </React.StrictMode>,
  document.getElementById("root")
);
