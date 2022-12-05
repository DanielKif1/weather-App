import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import weatherReports from "./data/forecast.json";
// import { location, forecasts } from "./data/forecast.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      location={weatherReports.location}
      forecasts={weatherReports.forecasts}
    />
  </React.StrictMode>
);
