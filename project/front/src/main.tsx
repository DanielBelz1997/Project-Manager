import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createTheme, MantineProvider } from "@mantine/core";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <MantineProvider defaultColorScheme="dark">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>
  );
} else {
  console.error("Root element with id 'root' not found");
}
