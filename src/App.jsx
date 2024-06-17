import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/Home';
import About from './assets/About';
import Projects from './assets/Projects';
import NavBar from './assets/NavBar';
import Contact from './assets/Contact';
import Resume from './assets/Resume';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Resume" element={<Resume />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
