import MainPage from "./pages/MainPage";
import ParticleLayout from "./components/ParticleLayout/ParticleLayout";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<ParticleLayout>
				<MainPage />
			</ParticleLayout>
		</ThemeProvider>
	);
}

export default App;
