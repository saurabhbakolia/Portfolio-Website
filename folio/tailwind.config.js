/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				bg: "#EFEDE4",
				surface: "#F7F5EE",
				ink: "#0F1414",
				muted: "#5E6968",
				border: "#D8D3C4",
				accent: "#3E6B68",
				"accent-soft": "#DDE6E3",
				"accent-hover": "#2F5350",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
			},
			letterSpacing: {
				tightest: "-0.04em",
			},
			maxWidth: {
				prose: "62ch",
			},
		},
	},
	plugins: [],
};
