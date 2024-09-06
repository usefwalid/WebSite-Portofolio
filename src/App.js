import React from 'react';
import WhoAmI from './components/whoAmI';
import History from './components/history';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects';
import './App.css';
function App() {
  return (
    <div>
      <WhoAmI/>
      <About/>
      <History/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
