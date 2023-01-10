import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PageNotFound from "./pages/400";
// Sections
import Footer from "./component/Footer";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Service from "./component/Service";

// CSS
import './assets/css/style.css'

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Banner />
        <Service />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
