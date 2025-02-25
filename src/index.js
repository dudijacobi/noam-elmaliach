import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App";
import { NAVIGATION } from "./components/paths";
import "./index.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path={NAVIGATION.Home} element={<Home />} />
          <Route path={NAVIGATION.Projects} element={<Projects />} />
          <Route path={NAVIGATION.About} element={<About />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
