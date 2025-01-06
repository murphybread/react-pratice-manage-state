import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import ProductTableApp from "./ProductTable";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <ProductTableApp />
  </StrictMode>
);
