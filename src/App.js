import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./home.css";
import Home from "./home";
import Order from "./order";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/order" component={Order} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
