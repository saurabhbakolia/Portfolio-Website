import './App.css';
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import SkillsPage from './components/SkillsPage'
import PortfolioPage from './components/PortfolioPage'
import ExperiencePage from './components/ExperiencePage'
import ContactPage from './components/ContactPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<LandingPage /> />
        <Route path="/about" element=<AboutPage />/>
        <Route path="/skills" element=<SkillsPage /> />
        <Route path="/portfolio" element=<PortfolioPage /> />
        <Route path="/exp" element=<ExperiencePage /> />
        <Route path="/contact" element=<ContactPage /> />
      </Routes>
    </BrowserRouter>
    // </main>

  );
}

export default App;