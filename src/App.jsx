import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import ElementsPage from "./pages/Elements";
import { HomePage } from "./pages/Home";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/elements" element={<ElementsPage />}></Route>
      </Routes>
    </Router>
  );
};
