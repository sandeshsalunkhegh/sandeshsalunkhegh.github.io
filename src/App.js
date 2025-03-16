import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
            <Router>
                <nav className="navbar shadow-md sticky top-0 z-10 bg-gradient-to-r from-purple-500 to-pink-600 p-4">
                    <ul className="flex space-x-6">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <button 
                        onClick={toggleTheme} 
                        className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
            <footer className="footer bg-black text-white p-4 text-center">
                <div>© 2025 Sandesh Salunkhe. All rights reserved.</div>
                <div>Built with Next.js and Tailwind CSS</div>
            </footer>
        </div>
    );
}

export default App;
