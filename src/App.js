import Layout from "./layouts/Layout";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Industry from "./pages/IndustryTecPage/Industrytec";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industrytec" element={<Industry />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
