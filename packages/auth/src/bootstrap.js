import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App history={history} onNavigate={onNavigate} onSignIn={onSignIn} />,
    el,
  );

  return {
    onParentNavigate({ pathname: nextPathName, search }) {
      const { pathname } = history.location;
      if (nextPathName !== pathname) {
        history.push(nextPathName, search);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
