import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import CreateSale from "./screens/sale/createSale";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/create-sale">
          <CreateSale />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
