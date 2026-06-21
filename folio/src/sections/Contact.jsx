import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../components/Reveal";
import profile from "../data/profile";

const channels = [
	{ label: "Email", value: profile.email, href: `mailto:${profile.email}` },
	{ label: "GitHub", value: "@saurabhbakolia", href: profile.socials.github },
	{ label: "LinkedIn", value: "saurabh-bakolia", href: profile.socials.linkedin },
];

export default function Contact() {
	return (
		<section id="contact" className="py-24 sm:py-32">
			<div className="container-prose">
				<Reveal>
					<p className="label-mono mb-6 text-accent">05 — Contact</p>
				</Reveal>
				<Reveal delay={60}>
					<h2 className="max-w-3xl text-3xl font-medium leading-[1.1] tracking-tightest text-ink sm:text-5xl">
						Have a problem worth solving?
						<br />
						<span className="text-muted">Send a note.</span>
					</h2>
				</Reveal>
				<Reveal delay={120} className="mt-10">
					<a href={`mailto:${profile.email}`} className="btn-primary">
						{profile.email} →
					</a>
				</Reveal>
				<Reveal delay={180} className="mt-16">
					<ul className="divide-y divide-border border-y border-border">
						{channels.map((c) => (
							<li key={c.label}>
								<a
									href={c.href}
									target={c.href.startsWith("http") ? "_blank" : undefined}
									rel="noreferrer"
									className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-surface"
								>
									<span className="label-mono">{c.label}</span>
									<span className="flex items-center gap-2 text-sm text-ink group-hover:text-accent">
										{c.value}
										<FiArrowUpRight size={14} />
									</span>
								</a>
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</section>
	);
}
