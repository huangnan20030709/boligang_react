import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { initVChartArcoTheme } from "@visactor/vchart-arco-theme";
import "@arco-design/web-react/dist/css/arco.css";
import App from "./App";

initVChartArcoTheme({
  defaultMode: (window.localStorage.getItem("theme") as any) || "light",
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
