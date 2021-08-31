import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./components/common/Home";
import "./App.css";
import London from "./components/cities/London";
// import Home from "./components/common/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="london" component={London}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
