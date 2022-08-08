import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Features from './pages/Features';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path='/features' element={<Features />} />
                    <Route path="/pricing" element={<Pricing />} />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
