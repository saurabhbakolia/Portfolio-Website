import MainPage from "./pages/MainPage";
import ParticleLayout from "./components/ParticleLayout/ParticleLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResumePage from "./components/ResumePage/ResumePage";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<ParticleLayout>
					<Routes>
						<Route path="/" exact element={<MainPage />} />
						<Route path="/resume" element={<ResumePage />} />
					</Routes>
				</ParticleLayout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
