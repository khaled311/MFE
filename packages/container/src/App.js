import React, { useState, lazy, Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress.js";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const generateClassName = createGenerateClassName({
    productionPrefix: "cn",
    // disableGlobal: true,
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header
            signedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Switch>
            <Suspense fallback={<Progress />}>
              <Route path="/auth">
                <AuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/">
                <MarketingApp />
              </Route>
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
