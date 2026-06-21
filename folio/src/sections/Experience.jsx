import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import Pill from "../components/Pill";
import experience from "../data/experience";

export default function Experience() {
	return (
		<section id="work" className="border-b border-border py-24 sm:py-32">
			<div className="container-prose">
				<SectionHeader
					number="03"
					eyebrow="Work"
					title="Where I've shipped."
					lead="A condensed timeline. Roles that taught me something or shipped something users actually used."
				/>
				<ol className="divide-y divide-border border-y border-border">
					{experience.map((job, i) => (
						<Reveal as="li" key={job.id} delay={i * 40}>
							<article className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-6">
								<div className="sm:col-span-3">
									<div className="label-mono">{job.period}</div>
								</div>
								<div className="sm:col-span-9">
									<h3 className="text-lg font-medium text-ink">
										{job.role}{" "}
										<span className="text-muted">— {job.company}</span>
									</h3>
									<p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
										{job.summary}
									</p>
									{job.stack?.length > 0 && (
										<div className="mt-4 flex flex-wrap gap-1.5">
											{job.stack.map((s) => (
												<Pill key={s}>{s}</Pill>
											))}
										</div>
									)}
								</div>
							</article>
						</Reveal>
					))}
				</ol>
			</div>
		</section>
	);
}
