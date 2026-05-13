import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Layers, MapPin, Sparkles } from "lucide-react";
import { Fragment, useMemo, useState } from "react";
import { ContactCTA } from "../components/site/ContactCTA";
import { Footer } from "../components/site/Footer";
import { Nav } from "../components/site/Nav";
import { Reveal } from "../components/site/Reveal";
import { projectArchive } from "../lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects - Sama Al Tariq" },
      {
        name: "description",
        content:
          "Explore Sama Al Tariq project concepts for villas, offices, retail, landscapes and commercial fit-out works in Dubai.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectArchive[activeIndex];

  const nextProject = useMemo(
    () => projectArchive[(activeIndex + 1) % projectArchive.length],
    [activeIndex],
  );

  return (
    <main className="bg-background text-foreground">
      <Nav />

      <section className="relative min-h-[100svh] overflow-hidden bg-foreground pt-28 text-background">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeProject.slug}
            src={activeProject.image}
            alt={activeProject.title}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.06, filter: "blur(18px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(12px)" }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,8,8,0.88)_0%,rgba(4,8,8,0.58)_38%,rgba(4,8,8,0.22)_70%,rgba(4,8,8,0.72)_100%)]" />
        <div className="project-archive-grid absolute inset-0 opacity-45" />
        <div className="project-archive-scan absolute inset-y-0 left-0 w-[28%]" />

        <div className="container-x relative z-10 flex min-h-[calc(100svh-7rem)] flex-col justify-between py-14 md:py-20">
          <div className="flex items-center justify-between gap-6">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.26em] text-background/70 uppercase transition-colors hover:text-background"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
            <div className="hidden items-center gap-3 text-[10px] font-bold tracking-[0.28em] text-background/55 uppercase md:flex">
              <span>Project archive</span>
              <span className="h-px w-12 bg-background/30" />
              <span>Concept visualisations</span>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <motion.div
                key={`${activeProject.slug}-copy`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 text-background/70">
                  <span className="h-px w-10 bg-[color:var(--color-teal)]" />
                  <span className="eyebrow">{activeProject.category}</span>
                </div>
                <h1 className="mt-8 max-w-5xl font-serif text-[clamp(3rem,15vw,5rem)] leading-[0.98] md:text-8xl md:leading-[0.96]">
                  {activeProject.title}
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-background/72 md:text-lg">
                  {activeProject.detail}
                </p>
              </motion.div>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="border-y border-background/20 py-7 backdrop-blur-[2px]">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2 text-background/45">
                      <MapPin className="h-4 w-4" />
                      <span className="text-[10px] tracking-[0.16em] uppercase sm:tracking-[0.2em]">
                        Location
                      </span>
                    </div>
                    <div className="mt-3 font-serif text-xl sm:text-2xl">
                      {activeProject.location}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-background/45">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-[10px] tracking-[0.16em] uppercase sm:tracking-[0.2em]">
                        Status
                      </span>
                    </div>
                    <div className="mt-3 font-serif text-xl sm:text-2xl">
                      {activeProject.status}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2 text-background/45">
                    <Layers className="h-4 w-4" />
                    <span className="text-[10px] tracking-[0.16em] uppercase sm:tracking-[0.2em]">
                      Scope
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeProject.scope.map((item) => (
                      <span
                        key={item}
                        className="border border-background/20 px-3 py-2 text-[10px] tracking-[0.14em] text-background/75 uppercase sm:tracking-[0.18em]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-5">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex - 1 + projectArchive.length) %
                        projectArchive.length,
                    )
                  }
                  className="inline-flex h-12 w-12 items-center justify-center border border-background/30 text-background/80 transition-colors hover:border-[color:var(--color-teal)] hover:text-background"
                  aria-label="Previous project"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <div className="min-w-0 flex-1 text-right">
                  <div className="text-[10px] tracking-[0.22em] text-background/45 uppercase">
                    Next
                  </div>
                  <div className="truncate font-serif text-lg text-background/80 sm:text-xl">
                    {nextProject.title}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % projectArchive.length)
                  }
                  className="inline-flex h-12 w-12 items-center justify-center border border-background/30 text-background/80 transition-colors hover:border-[color:var(--color-teal)] hover:text-background"
                  aria-label="Next project"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6">
            {projectArchive.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative aspect-[16/10] overflow-hidden border transition-all duration-500 ${
                    isActive
                      ? "border-[color:var(--color-teal)]"
                      : "border-background/15 hover:border-background/45"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={`absolute inset-0 transition-colors ${
                      isActive ? "bg-black/8" : "bg-black/42"
                    }`}
                  />
                  <span className="absolute inset-x-3 bottom-7 truncate text-left text-[10px] font-bold tracking-[0.16em] text-background uppercase">
                    {String(index + 1).padStart(2, "0")} {project.title}
                  </span>
                  <span className="absolute inset-x-3 bottom-3 truncate text-left text-[9px] font-bold tracking-[0.14em] text-background/70 uppercase">
                    {project.status}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-background py-28 md:py-40">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-10 bg-foreground/40" />
              <span className="eyebrow">Detailed View</span>
            </div>
            <h2 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.05] md:text-6xl">
              Interior stories with the construction discipline still visible.
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
            {projectArchive.map((project, index) => (
              <Fragment key={project.slug}>
                <Reveal
                  delay={(index % 3) * 0.06}
                  className={`md:col-span-6 ${
                    index % 2 === 1 ? "md:translate-y-16" : ""
                  }`}
                >
                  <article className="group">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveIndex(index);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="block w-full text-left"
                    >
                      <div className="relative aspect-[16/10] [perspective:1400px]">
                        <div className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          <div className="absolute inset-0 overflow-hidden bg-foreground [backface-visibility:hidden]">
                            <img
                              src={project.image}
                              alt={project.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(0,0,0,0.62)_100%)] opacity-90" />
                            <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-4 text-background md:right-5 md:bottom-5 md:left-5 md:gap-5">
                              <div>
                                <div className="text-[10px] tracking-[0.16em] text-background/65 uppercase sm:tracking-[0.24em]">
                                  {project.category} / {project.location}
                                </div>
                                <div className="mt-1 text-[9px] font-bold tracking-[0.18em] text-background/65 uppercase">
                                  {project.status}
                                </div>
                                <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                                  {project.title}
                                </h3>
                              </div>
                              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>

                          <div className="absolute inset-0 flex flex-col justify-between border border-[#158e98]/18 bg-[#eefafa] p-6 text-foreground shadow-[0_24px_70px_rgba(21,142,152,0.12)] [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-8">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(21,142,152,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(238,250,250,0.55))]" />
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#158e98]/55" />
                            <div>
                              <div className="relative flex items-center gap-3 text-[color:var(--color-teal)]">
                                <span className="h-px w-10 bg-[color:var(--color-teal)]" />
                                <span className="text-[10px] font-bold tracking-[0.28em] uppercase">
                                  Project Details
                                </span>
                              </div>
                              <p className="relative mt-7 font-serif text-xl leading-[1.08] text-black sm:text-2xl md:text-3xl">
                                {project.detail}
                              </p>
                            </div>
                            <div className="relative grid gap-4 border-t border-[#158e98]/18 pt-5 sm:grid-cols-2">
                              <div>
                                <div className="text-[10px] tracking-[0.22em] text-foreground/42 uppercase">
                                  Scope
                                </div>
                                <div className="mt-2 text-xs leading-relaxed text-foreground/68">
                                  {project.scope.join(" / ")}
                                </div>
                              </div>
                              <div>
                                <div className="text-[10px] tracking-[0.22em] text-foreground/42 uppercase">
                                  Palette
                                </div>
                                <div className="mt-2 text-xs leading-relaxed text-foreground/68">
                                  {project.palette}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>

                    <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto]">
                      <p className="max-w-xl text-sm leading-relaxed text-foreground/68">
                        {project.summary}
                      </p>
                      <div className="text-left text-[10px] tracking-[0.18em] text-foreground/45 uppercase md:text-right">
                        {project.palette}
                      </div>
                    </div>
                  </article>
                </Reveal>

                {index === 0 ? (
                  <Reveal delay={0.1} className="md:col-span-6">
                    <aside className="relative px-2 py-10 text-foreground md:px-12 md:pt-20">
                      <div className="flex items-center gap-3 text-[color:var(--color-teal)]">
                        <span className="h-px w-10 bg-[color:var(--color-teal)]" />
                        <span className="text-[11px] font-bold tracking-[0.32em] uppercase">
                          Project Standard
                        </span>
                      </div>
                      <p className="mt-8 max-w-3xl font-serif text-4xl leading-[1.08] text-black md:text-6xl">
                        &ldquo;Details are not decoration. They are the evidence
                        of control.&rdquo;
                      </p>
                      <p className="mt-8 max-w-xl text-sm leading-relaxed text-black/58">
                        Each project is resolved through proportion, finish,
                        coordination and the discipline to leave nothing
                        unfinished.
                      </p>
                    </aside>
                  </Reveal>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
