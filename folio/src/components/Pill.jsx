export default function Pill({ children, className = "" }) {
	return (
		<span
			className={`inline-flex items-center border border-border bg-surface px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted ${className}`.trim()}
		>
			{children}
		</span>
	);
}
