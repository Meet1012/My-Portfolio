import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts';
import ThemeContext from '../src/Context/ThemeContext'
import { useState } from 'react';
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`App ${darkMode ? "bg-black text-white" : ""}`}>
        <Navbar />
        <Intro />
        <Services />
        <Portfolio />
        <Skills />
        <Contacts />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
