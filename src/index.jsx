import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./styles/index.css";
import "./colors/colors.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
