import useReveal from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
	const { ref, visible } = useReveal();
	const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
	return (
		<Tag
			ref={ref}
			style={style}
			className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
			{...rest}
		>
			{children}
		</Tag>
	);
}
