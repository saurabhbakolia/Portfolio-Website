import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
	return (
		<div className="min-h-screen bg-bg text-ink">
			<NavBar />
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
