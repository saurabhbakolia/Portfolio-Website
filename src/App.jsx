import MainPage from "./pages/MainPage";
import ParticleLayout from "./components/ParticleLayout/ParticleLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResumePage from "./components/ResumePage/ResumePage";
import FavouritePage from "./components/FavouritePage/FavouritePage";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<ParticleLayout>
					<Routes>
						<Route path="/" exact element={<MainPage />} />
						<Route path="/resume" element={<ResumePage />} />
						<Route path="/favourites" element={<FavouritePage />} />
					</Routes>
				</ParticleLayout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
