import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./home.css";
import Home from "./home";
import Order from "./order";
import Snake from "./snake";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/order" component={Order} />
            <Route path="/games" component={Snake} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
