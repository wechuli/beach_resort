import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error404 from "./pages/Error404";
import SingleRoom from "./pages/SingleRoom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error404} />
      </Switch>
    </>
  );
}

export default App;
