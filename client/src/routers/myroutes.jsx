import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import Landing from "../components/Landing/Landing";

export default class MyRoutes extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/users" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}
