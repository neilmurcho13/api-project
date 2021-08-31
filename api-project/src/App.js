import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./components/common/Home";
import "./App.css";
import London from "./components/cities/London";
import NewYork from "./components/cities/NewYork";
import Delhi from "./components/cities/Delhi";
// import Home from "./components/common/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/london" component={London}></Route>
        <Route path="/newyork" component={NewYork}></Route>
        <Route path="/delhi" component={Delhi}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
