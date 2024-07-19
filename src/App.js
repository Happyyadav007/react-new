import './App.css';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Header from './components/Header'
import React from 'react';
import Contact from "./components/Contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/MainPage" element={<MainPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
