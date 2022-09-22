import React from "react";
import ReactDOM from "react-dom/client";
import "the-new-css-reset/css/reset.css";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import WebFont from "webfontloader";
import { MantineProvider } from "@mantine/core";
import { HashRouter } from "react-router-dom";

WebFont.load({
  google: {
    families: ["Open Sans&display=swap"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </MantineProvider>
  </React.StrictMode>
);
