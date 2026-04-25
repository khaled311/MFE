import React, { useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default ({ history, onSignIn }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
    // disableGlobal: true,
  });
  useEffect(() => {
    console.log("Auth App mounted");
  }, []);
  return (
    <StylesProvider generateClassName={generateClassName} injectFirst>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
