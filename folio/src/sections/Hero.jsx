import Reveal from "../components/Reveal";
import profile from "../data/profile";

export default function Hero() {
	return (
		<section
			id="top"
			className="relative overflow-hidden border-b border-border"
		>
			<div
				aria-hidden
				className="pointer-events-none absolute -top-40 right-[-20%] h-[420px] w-[520px] rounded-full bg-accent-soft blur-3xl opacity-60"
			/>
			<div className="container-prose relative pb-24 pt-20 sm:pb-32 sm:pt-28">
				<Reveal>
					<p className="label-mono mb-6 text-accent">
						01 — {profile.role}, available for select work
					</p>
				</Reveal>
				<Reveal delay={80}>
					<h1 className="max-w-4xl text-[40px] font-medium leading-[1.05] tracking-tightest text-ink sm:text-6xl">
						{profile.name}.
						<br />
						<span className="text-muted">{profile.tagline}</span>
					</h1>
				</Reveal>
				<Reveal delay={160} className="mt-10 flex flex-wrap items-center gap-3">
					<a href="#contact" className="btn-primary">
						Start a conversation →
					</a>
					<a
						href={profile.resumeUrl}
						target="_blank"
						rel="noreferrer"
						className="btn-ghost"
					>
						Read résumé
					</a>
				</Reveal>
				<Reveal delay={240} className="mt-14 flex flex-wrap gap-x-6 gap-y-2">
					{profile.stack.map((s) => (
						<span key={s} className="font-mono text-xs text-muted">
							{s}
						</span>
					))}
				</Reveal>
			</div>
		</section>
	);
}
