import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
