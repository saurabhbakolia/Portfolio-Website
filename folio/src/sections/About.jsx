import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import profile from "../data/profile";

export default function About() {
	return (
		<section id="about" className="border-b border-border py-24 sm:py-32">
			<div className="container-prose">
				<SectionHeader number="02" eyebrow="About" title="A short introduction." />
				<div className="grid gap-10 sm:grid-cols-5">
					<Reveal className="sm:col-span-3 space-y-5">
						{profile.bio.map((p, i) => (
							<p key={i} className="text-lg leading-relaxed text-ink/90">
								{p}
							</p>
						))}
					</Reveal>
					<Reveal delay={80} className="sm:col-span-2">
						<dl className="divide-y divide-border border-y border-border">
							<Row label="Based in" value={profile.location} />
							<Row label="Email" value={profile.email} href={`mailto:${profile.email}`} />
							<Row label="GitHub" value="@saurabhbakolia" href={profile.socials.github} />
							<Row
								label="LinkedIn"
								value="saurabh-bakolia"
								href={profile.socials.linkedin}
							/>
						</dl>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

function Row({ label, value, href }) {
	const content = (
		<>
			<dt className="label-mono">{label}</dt>
			<dd className="text-sm text-ink">
				{href ? (
					<a
						href={href}
						target={href.startsWith("http") ? "_blank" : undefined}
						rel="noreferrer"
						className="link-underline"
					>
						{value}
					</a>
				) : (
					value
				)}
			</dd>
		</>
	);
	return <div className="flex items-baseline justify-between gap-6 py-3">{content}</div>;
}
