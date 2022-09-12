import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "the-new-css-reset/css/reset.css";
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
    <MantineProvider withGlobalStyles withNormalizeCss>
      <HashRouter>
        <App />
      </HashRouter>
    </MantineProvider>
  </React.StrictMode>
);
