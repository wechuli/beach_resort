import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import {RoomProvider } from "./context/Context.jsx";

ReactDOM.render(
  <RoomProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoomProvider>,
  document.getElementById("root")
);
