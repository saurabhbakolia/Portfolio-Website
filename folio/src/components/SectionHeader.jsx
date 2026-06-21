export default function SectionHeader({ number, eyebrow, title, lead }) {
	return (
		<header className="mb-12 flex flex-col gap-3 sm:mb-16">
			<div className="flex items-baseline gap-3">
				{number && <span className="label-mono text-accent">{number}</span>}
				{eyebrow && <span className="label-mono">{eyebrow}</span>}
			</div>
			<h2 className="text-3xl font-medium tracking-tightest text-ink sm:text-4xl">
				{title}
			</h2>
			{lead && (
				<p className="max-w-prose text-base leading-relaxed text-muted">{lead}</p>
			)}
		</header>
	);
}
