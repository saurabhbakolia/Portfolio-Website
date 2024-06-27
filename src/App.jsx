import LandingPage from './components/LandingPage/LandingPage'
import AboutPage from './components/AboutPage/AboutPage'
import SkillsPage from './components/SkillsPage'
import PortfolioPage from './components/PortfolioPage'
import ExperiencePage from './components/ExperiencePage'
import ContactPage from './components/ContactPage/ContactPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import ParticleLayout from './components/ParticleLayout/ParticleLayout';
import { ThemeProvider } from './contexts/ThemeContext';
import ResumePage from './components/ResumePage/ResumePage'

function App() {
  return (

    <ThemeProvider>
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
          <Route path="/saurabh-bakolia-resume" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;