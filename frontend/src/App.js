import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Symptoms from "./Pages/Symptoms";
import Treatment from "./Pages/Treatment";
import Predict from "./Pages/Predict";
import NotFound from "./Pages/Notfound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        <Route path="/symptoms" exact={true}>
          <Symptoms />
        </Route>
        <Route path="/treatment" exact={true}>
          <Treatment />
        </Route>
        <Route path="/predict" exact={true}>
          <Predict />
        </Route>
        <Route path="/error" exact={true}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
