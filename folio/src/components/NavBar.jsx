import { useEffect, useState } from "react";

const links = [
	{ href: "#about", label: "About" },
	{ href: "#work", label: "Work" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

export default function NavBar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
				scrolled ? "border-border bg-bg/80 backdrop-blur" : "border-transparent bg-bg"
			}`}
		>
			<div className="container-prose flex h-14 items-center justify-between">
				<a href="#top" className="font-mono text-sm tracking-tight text-ink">
					sb<span className="text-accent">.</span>folio
				</a>
				<ul className="hidden gap-7 text-sm text-muted sm:flex">
					{links.map((l) => (
						<li key={l.href}>
							<a href={l.href} className="link-underline hover:text-ink">
								{l.label}
							</a>
						</li>
					))}
				</ul>
				<a
					href="#contact"
					className="font-mono text-xs uppercase tracking-[0.18em] text-ink hover:text-accent"
				>
					Get in touch →
				</a>
			</div>
		</nav>
	);
}
