import profile from "../data/profile";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t border-border bg-bg">
			<div className="container-prose flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
				<p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
					© {year} {profile.name} — Built quietly.
				</p>
				<div className="flex gap-5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
					<a href={profile.socials.github} target="_blank" rel="noreferrer" className="link-underline hover:text-ink">
						GitHub
					</a>
					<a
						href={profile.socials.linkedin}
						target="_blank"
						rel="noreferrer"
						className="link-underline hover:text-ink"
					>
						LinkedIn
					</a>
					<a href={`mailto:${profile.email}`} className="link-underline hover:text-ink">
						Email
					</a>
				</div>
			</div>
		</footer>
	);
}
