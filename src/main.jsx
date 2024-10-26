import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { FpsProvider } from "./FpsContext"; // Adjust the import based on your file structure

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FpsProvider>
      <App />
    </FpsProvider>
  </React.StrictMode>,
);
