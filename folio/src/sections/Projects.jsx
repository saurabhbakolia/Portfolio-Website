import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import Pill from "../components/Pill";
import projects from "../data/projects";

export default function Projects() {
	return (
		<section id="projects" className="border-b border-border py-24 sm:py-32">
			<div className="container-prose">
				<SectionHeader
					number="04"
					eyebrow="Selected projects"
					title="Things I've built."
					lead="Side projects and shipped work, kept light. Each one taught me something I still use."
				/>
				<ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
					{projects.map((p, i) => (
						<Reveal as="li" key={p.id} delay={i * 30} className="bg-bg">
							<article className="flex h-full flex-col justify-between p-6 transition-colors duration-200 hover:bg-surface sm:p-8">
								<div>
									<div className="flex items-start justify-between gap-4">
										<h3 className="text-xl font-medium text-ink">{p.title}</h3>
										<div className="flex shrink-0 gap-2 text-muted">
											{p.github && (
												<a
													href={p.github}
													target="_blank"
													rel="noreferrer"
													aria-label={`${p.title} on GitHub`}
													className="hover:text-ink"
												>
													<FiGithub size={16} />
												</a>
											)}
											{p.live && (
												<a
													href={p.live}
													target="_blank"
													rel="noreferrer"
													aria-label={`${p.title} live`}
													className="hover:text-accent"
												>
													<FiArrowUpRight size={18} />
												</a>
											)}
										</div>
									</div>
									<p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
										{p.blurb}
									</p>
								</div>
								{p.stack?.length > 0 && (
									<div className="mt-6 flex flex-wrap gap-1.5">
										{p.stack.map((s) => (
											<Pill key={s}>{s}</Pill>
										))}
									</div>
								)}
							</article>
						</Reveal>
					))}
				</ul>
			</div>
		</section>
	);
}
