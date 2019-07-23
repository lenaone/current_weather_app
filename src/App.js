import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import NavBar from "./component/navBar";
import "./App.css";

class App extends Component {
  // state = {};
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
        </Switch>
      </div>
    );
  }
}

export default App;
