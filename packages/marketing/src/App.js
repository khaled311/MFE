import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "mk",
    // disableGlobal: true,
  });
  return (
    <StylesProvider generateClassName={generateClassName} injectFirst>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
