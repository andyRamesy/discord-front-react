import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AlertNotification from "./shared/components/AlertNotification";
import Router from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <AlertNotification/>
    </BrowserRouter>
  );
}

export default App;
