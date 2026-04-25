import React, { useState, lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress.js";
import { createBrowserHistory } from "history";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const generateClassName = createGenerateClassName({
    productionPrefix: "cn",
    // disableGlobal: true,
  });

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Header
            signedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Switch>
            <Suspense fallback={<Progress />}>
              <Route path="/dashboard">
                {isSignedIn ? <DashboardApp /> : <Redirect to="/" />}
              </Route>
              <Route path="/auth">
                <AuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/">
                <MarketingApp />
              </Route>
            </Suspense>
          </Switch>
        </div>
      </Router>
    </StylesProvider>
  );
};
