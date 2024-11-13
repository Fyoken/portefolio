import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CV from './components/CV';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <CV />
        <Contact />
      </main>
      <footer>
        <p>© 2024 BARBOSA Mathias. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
