import { useEffect, useRef, useState } from "react";

export default function useReveal({ threshold = 0.15, once = true } = {}) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						if (once) obs.unobserve(entry.target);
					} else if (!once) {
						setVisible(false);
					}
				});
			},
			{ threshold },
		);
		obs.observe(node);
		return () => obs.disconnect();
	}, [threshold, once]);

	return { ref, visible };
}
