import './App.css';
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import SkillsPage from './components/SkillsPage'
import PortfolioPage from './components/PortfolioPage'
import ExperiencePage from './components/ExperiencePage'
import ContactPage from './components/ContactPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import ParticleLayout from './components/ParticleLayout/ParticleLayout';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ParticleLayout><MainPage /></ParticleLayout>}>
          <Route path='/' element={<ParticleLayout><LandingPage /></ParticleLayout>} />
          <Route path="/about" element={<ParticleLayout><AboutPage /></ParticleLayout>} />
          <Route path="/skills" element={<ParticleLayout><SkillsPage /></ParticleLayout>} />
          <Route path="/portfolio" element={<ParticleLayout><PortfolioPage /></ParticleLayout>} />
          <Route path="/exp" element={<ParticleLayout><ExperiencePage /></ParticleLayout>} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </main>
  );
}

export default App;