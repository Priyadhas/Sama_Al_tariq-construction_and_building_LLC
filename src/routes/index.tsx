import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { startTransition, useEffect, useRef, useState } from "react";
import heroImg from "../assets/teal-luxury-hero.png";
import heroVideoOne from "../assets/services/Building1.mp4";
import heroVideoTwo from "../assets/services/Buiding2.mp4";
import philosophyImg from "../assets/teal-luxury-detail.png";
import fitoutDetailImg from "../assets/services/fitout_detail.png";
import processImg from "../assets/teal-luxury-staircase.png";
import serviceArchitecturalFinishes from "../assets/services/service-architectural-finishes.png";
import serviceCeilingPartitionSystems from "../assets/services/service-ceiling-partition-systems.png";
import serviceCivilStructuralWorks from "../assets/services/service-civil-structural-works.png";
import serviceInteriorFitOut from "../assets/services/service-interior-fit-out.png";
import serviceLandscapeEnvironments from "../assets/services/service-landscape-environments.png";
import serviceMaintenanceAssetCare from "../assets/services/service-maintenance-asset-care.png";
import servicePoolLeisureEnvironments from "../assets/services/service-pool-leisure-environments.png";
import serviceStoneTileInstallation from "../assets/services/service-stone-tile-installation.png";
import serviceSurfacePreparationPlaster from "../assets/services/service-surface-preparation-plaster.png";
import serviceWaterproofingSystems from "../assets/services/service-waterproofing-systems.png";
import logo from "../assets/logo.jpg";
import logoOutline from "../assets/logo-outline.png";
import buildingImg from "../assets/building_images.jpg";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { ContactCTA } from "../components/site/ContactCTA";
import { featuredProjects } from "../lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charSet: "utf-8" },
      { title: "Sama Al Tariq — Luxury Construction & Fit-Out, Dubai" },
      {
        name: "description",
        content:
          "A Dubai-based construction and fit-out practice specializing in luxury villas, offices, retail spaces, and commercial fit-out. Built to specification. Finished without excuse.",
      },
      {
        name: "keywords",
        content:
          "luxury construction, fit-out, Dubai, villa construction, office fit-out, retail spaces, commercial construction, interior design",
      },
      { name: "author", content: "Sama Al Tariq Building Contracting L.L.C." },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      // Open Graph
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Sama Al Tariq — Luxury Construction & Fit-Out, Dubai",
      },
      {
        property: "og:description",
        content:
          "A Dubai-based construction and fit-out practice. Built to specification. Finished without excuse.",
      },
      { property: "og:url", content: "https://samaaltariq.com" },
      { property: "og:image", content: "https://samaaltariq.com/logo.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Sama Al Tariq" },
      { property: "og:locale", content: "en_US" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Sama Al Tariq — Luxury Construction & Fit-Out, Dubai",
      },
      {
        name: "twitter:description",
        content:
          "A Dubai-based construction and fit-out practice. Built to specification. Finished without excuse.",
      },
      { name: "twitter:image", content: "https://samaaltariq.com/logo.jpg" },
      // Canonical URL
      { rel: "canonical", href: "https://samaaltariq.com" },
    ],
  }),
  component: Index,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const heroVideos = [heroVideoOne, heroVideoTwo];
  const [activeVideo, setActiveVideo] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveVideo((current) => (current + 1) % heroVideos.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [heroVideos.length]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] overflow-hidden bg-foreground"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={activeVideo}
            src={heroVideos[activeVideo]}
            poster={heroImg}
            className="absolute inset-0 h-[115%] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Luxury construction and interior building video"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="h-[115%] w-full object-cover"
          style={{ display: "none" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,49,53,0.5)_0%,rgba(12,49,53,0.22)_32%,rgba(10,14,15,0.16)_58%,rgba(10,14,15,0.34)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(9,34,37,0.42)] to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-x relative z-10 flex h-full flex-col justify-between pt-32 pb-16"
      >
        <div className="flex items-center gap-4 text-background/70">
          <span className="h-px w-5 bg-background/50 sm:w-6" />
          <span className="text-[10px] tracking-[0.24em] uppercase sm:text-[11px] sm:tracking-[0.32em]">
            Founded Dubai / 2012
          </span>
        </div>

        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-5xl font-serif text-4xl font-semibold uppercase leading-[1.08] tracking-[0.08em] text-background drop-shadow-[0_10px_32px_rgba(0,0,0,0.35)] sm:text-6xl md:text-[5.25rem]"
          >
            Built to Specification
            <br />
            <span className="text-background/85">Finished Without Excuse</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 max-w-md text-base leading-relaxed text-background/70"
          >
            A Dubai contracting and technical services team delivering fit-out,
            renovation, civil works and planned maintenance for villas, offices,
            retail and commercial environments.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-end"
        >
          <div className="flex items-center gap-3 text-background/60">
            <span className="text-[10px] tracking-[0.32em] uppercase">
              Scroll
            </span>
            <span className="h-12 w-px bg-background/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function IntroSplash() {
  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.018, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 bg-black" />

      <div className="relative flex h-full w-full items-center justify-center px-5 py-5">
        <motion.div
          className="intro-sketch-frame relative flex h-full w-full items-center justify-center"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <motion.img
            src={buildingImg}
            alt="Dubai building construction"
            className="intro-sketch-image mx-auto h-full w-auto object-contain"
            initial={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
              filter: "brightness(1.35) contrast(1.22) grayscale(1)",
              opacity: 0.22,
            }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{
              duration: 2.65,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.18,
            }}
          />

          <motion.img
            aria-hidden="true"
            src={buildingImg}
            alt=""
            className="intro-sketch-glow absolute inset-0 mx-auto h-full w-auto object-contain"
            initial={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
              opacity: 0,
            }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              opacity: [0, 0.28, 0.12],
            }}
            transition={{ duration: 2.9, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.35 }}
          >
            <span className="intro-sketch-pencil-light absolute inset-y-[4%] left-0 w-[28%]" />
            <motion.div
              className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent"
              animate={{ opacity: [0, 0.55, 0], x: [-28, 0, 28] }}
              transition={{
                duration: 4.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute inset-x-0 bottom-20 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent"
              animate={{ opacity: [0, 0.48, 0], x: [24, 0, -24] }}
              transition={{
                duration: 4.6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-[24px] border border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.65, 0.2] }}
              transition={{
                duration: 3.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Marquee() {
  return (
    <div className="border-y border-foreground/10 bg-background py-6 overflow-hidden">
      <div className="container-x flex flex-wrap items-center justify-between gap-y-3 text-[11px] tracking-[0.32em] text-foreground/50 uppercase">
        <span>Residential</span>
        <span className="text-foreground/20">/</span>
        <span>Hospitality</span>
        <span className="text-foreground/20">/</span>
        <span>Retail</span>
        <span className="text-foreground/20">/</span>
        <span>Workplace</span>
        <span className="text-foreground/20">/</span>
        <span>Maintenance</span>
      </div>
    </div>
  );
}

function Philosophy() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-28 bg-background pt-16 pb-16 md:pt-24 md:pb-20"
    >
      <div className="container-x grid gap-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Reveal>
            <div className="group relative aspect-[3/4] overflow-hidden">
              <img
                src={philosophyImg}
                alt="Aqua glass, brass and veined marble material detail"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
              />
              <img
                src={fitoutDetailImg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-16">
          <Reveal>
            <div className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-5 bg-foreground/40" />
              <span className="eyebrow">Philosophy</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-10 font-serif text-4xl leading-[1.05] md:text-6xl">
              We finish what others <span className="italic">over-promise</span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="text-base leading-relaxed text-foreground/75">
                Sama Al Tariq is a Dubai-based contracting and technical
                services company. We coordinate civil works, interior fit-out,
                waterproofing, finishes and maintenance under one accountable
                delivery team.
              </p>
              <p className="text-base leading-relaxed text-foreground/75">
                Tolerances measured. Edges aligned. Site noise stays on site. We
                build for the second owner, not the next photograph.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-foreground/10 pt-10">
              {[
                ["14+", "Years in Dubai"],
                ["140", "Projects delivered"],
                ["32", "Specialist trades"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif text-4xl">{n}</div>
                  <div className="mt-3 text-[11px] tracking-[0.24em] text-foreground/50 uppercase">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Interior Fit-Out",
    body: "Bespoke interiors delivered with disciplined coordination across joinery, stone, lighting, glass, metal and final finishes.",
    img: serviceInteriorFitOut,
  },
  {
    title: "Maintenance & Asset Care",
    body: "Planned maintenance, responsive repair and lifecycle care that protects finished assets long after handover.",
    img: serviceMaintenanceAssetCare,
  },
  {
    title: "Ceiling & Partition Systems",
    body: "Precision gypsum, acoustic, metal-frame and specialist ceiling systems aligned to architectural and MEP requirements.",
    img: serviceCeilingPartitionSystems,
  },
  {
    title: "Architectural Finishes",
    body: "High-control decorative finishes, feature surfaces and detail-led materials installed to premium visual standards.",
    img: serviceArchitecturalFinishes,
  },
  {
    title: "Landscape Environments",
    body: "External environments shaped through hardscape, softscape, lighting, water features and coordinated site execution.",
    img: serviceLandscapeEnvironments,
  },
  {
    title: "Civil & Structural Works",
    body: "Foundational civil works, structural modifications and site-built systems executed with measured discipline.",
    img: serviceCivilStructuralWorks,
  },
  {
    title: "Stone & Tile Installation",
    body: "Marble, porcelain, ceramic and natural stone installations with careful setting-out, alignment and edge control.",
    img: serviceStoneTileInstallation,
  },
  {
    title: "Surface Preparation & Plaster",
    body: "Substrate preparation, rendering, plastering and leveling systems that create the base for flawless final finishes.",
    img: serviceSurfacePreparationPlaster,
  },
  {
    title: "Waterproofing Systems",
    body: "Integrated waterproofing for roofs, wet areas, terraces and below-grade conditions, specified for durability.",
    img: serviceWaterproofingSystems,
  },
  {
    title: "Pool & Leisure Environments",
    body: "Pools, decks and leisure zones delivered with technical coordination between structure, waterproofing and finishes.",
    img: servicePoolLeisureEnvironments,
  },
];

function Services() {
  const [activeService, setActiveService] = useState(0);
  const service = services[activeService];
  const nextService = services[(activeService + 1) % services.length];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveService((current) => (current + 1) % services.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="services"
      className="scroll-mt-28 border-t border-foreground/10 bg-background pt-10 pb-32 md:pt-14 md:pb-48"
    >
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-5 bg-foreground/40" />
              <span className="eyebrow">Practice</span>
            </div>
            <h2 className="mt-8 max-w-[66rem] font-serif text-[clamp(2.45rem,10vw,4.25rem)] font-medium leading-[1.03] tracking-[0.015em] text-foreground md:w-[min(82vw,66rem)] md:text-[clamp(2.65rem,4.3vw,5.2rem)]">
              <span className="block md:whitespace-nowrap">
                Material, method, and finish
              </span>
              <span className="block md:whitespace-nowrap">
                held in quiet alignment.
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border border-foreground/10 bg-foreground shadow-[0_30px_90px_rgba(0,0,0,0.12)] md:mt-20">
          <div className="service-cinema-frame relative min-h-[720px] overflow-hidden md:aspect-[16/8] md:min-h-[620px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={service.title}
                src={service.img}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.38)_42%,rgba(0,0,0,0.16)_72%,rgba(0,0,0,0.66)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_34%,rgba(24,139,151,0.26),transparent_34%)]" />
            <div className="service-cinema-grid absolute inset-0 opacity-35" />
            <div className="service-cinema-scan absolute inset-y-0 left-0 w-[28%]" />

            <div className="relative z-10 grid h-full min-w-0 grid-rows-[auto_auto_1fr_auto] gap-7 p-5 text-background sm:p-7 md:grid-cols-[minmax(0,1fr)_22rem] md:grid-rows-[auto_1fr_auto] md:gap-8 md:gap-x-12 md:p-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:p-16">
              <div className="flex min-w-0 items-center gap-3 text-background/70 md:col-start-1">
                <span className="h-px w-5 shrink-0 bg-[color:var(--color-teal)] sm:w-6" />
                <span className="min-w-0 text-[10px] font-bold tracking-[0.24em] uppercase sm:tracking-[0.3em]">
                  Service Matrix
                </span>
              </div>

              <div className="hidden items-center justify-end font-serif text-2xl text-background/70 md:flex md:col-start-2 md:row-start-1">
                {String(activeService + 1).padStart(2, "0")}
                <span className="text-background/25">
                  /{String(services.length).padStart(2, "0")}
                </span>
              </div>

              <div className="min-w-0 max-w-3xl self-end md:col-start-1 md:row-start-2 md:self-center md:pr-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="max-w-full break-words font-serif text-[clamp(2.35rem,11vw,3.35rem)] leading-[0.98] md:text-7xl md:leading-[0.96]">
                      {service.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/72 md:mt-8 md:text-base">
                      {service.body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="min-w-0 md:absolute md:top-1/2 md:right-10 md:z-20 md:w-[22rem] md:-translate-y-1/2 lg:right-16 lg:w-[25rem]">
                <div className="w-full min-w-0 border-y border-background/15 bg-black/10 py-3 backdrop-blur-[2px] md:border-y-0 md:border-r md:bg-black/0 md:py-0 md:pr-8 md:backdrop-blur-0">
                  <div className="mb-5 hidden items-center justify-end gap-3 text-background/45 md:flex">
                    <span className="text-[9px] font-bold tracking-[0.34em] uppercase">
                      Disciplines
                    </span>
                    <span className="h-px w-5 bg-background/30" />
                  </div>
                  <div className="flex max-w-full gap-3 overflow-x-auto pb-2 [scrollbar-width:thin] md:block md:space-y-1 md:overflow-visible md:pb-0">
                    {services.map((item, index) => {
                      const isActive = index === activeService;

                      return (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => setActiveService(index)}
                          className={`group relative flex max-w-[78vw] shrink-0 items-center gap-3 py-2 pr-5 text-left transition-all duration-500 md:w-full md:max-w-none md:justify-end md:py-2.5 md:pr-0 md:text-right ${
                            isActive
                              ? "text-background"
                              : "text-background/42 hover:text-background/78"
                          }`}
                        >
                          <span className="min-w-0 truncate text-[10px] font-bold tracking-[0.18em] uppercase leading-relaxed sm:tracking-[0.22em] md:max-w-none md:whitespace-normal md:text-clip">
                            {item.title}
                          </span>
                          <span
                            className={`h-px shrink-0 transition-all duration-500 ${
                              isActive
                                ? "w-9 bg-[color:var(--color-teal)] shadow-[0_0_18px_rgba(24,139,151,0.85)]"
                                : "w-4 bg-background/20 group-hover:w-7 group-hover:bg-background/45"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:col-span-2 md:row-start-3 md:flex-row md:items-end md:justify-between">
                <div className="w-full max-w-xl">
                  <div className="h-px overflow-hidden bg-background/20">
                    <motion.div
                      key={service.title}
                      className="h-full bg-[color:var(--color-teal)]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.2, ease: "linear" }}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4 text-[10px] tracking-[0.18em] text-background/50 uppercase sm:gap-8 sm:tracking-[0.28em]">
                    <span>Active Scope</span>
                    <span className="truncate">Next: {nextService.title}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveService(
                        (activeService - 1 + services.length) % services.length,
                      )
                    }
                    className="flex-1 border border-background/30 px-4 py-3 text-[10px] tracking-[0.24em] text-background/80 uppercase transition-colors hover:border-[color:var(--color-teal)] hover:text-background md:flex-none"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveService((activeService + 1) % services.length)
                    }
                    className="flex-1 border border-background/30 px-4 py-3 text-[10px] tracking-[0.24em] text-background/80 uppercase transition-colors hover:border-[color:var(--color-teal)] hover:text-background md:flex-none"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const projects = featuredProjects.slice(0, 6).map((project) => ({
  img: project.image,
  t: project.title,
  l: project.location,
  c: project.category,
}));

function Work() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["24vw", "-168vw"]);

  return (
    <section
      ref={ref}
      id="work"
      className="relative border-t border-foreground/10 bg-[#e8e6e3] md:h-[245vh]"
    >
      <div className="container-x py-20 md:hidden">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 text-foreground/60">
            <span className="h-px w-5 bg-foreground/40" />
            <span className="eyebrow">Selected Work</span>
          </div>
          <h2 className="mt-5 font-serif text-[clamp(2.75rem,12vw,4.25rem)] leading-[1.02]">
            Signature spaces, crafted with precision.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/62">
            Explore a curated selection of villa, office, retail, and commercial
            interiors shaped with refined materials, disciplined detailing, and
            a luxury finish.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          {projects.slice(0, 4).map((p, i) => (
            <Link
              key={p.t}
              to="/projects"
              className="group block overflow-hidden bg-foreground"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.t}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_18%,rgba(0,0,0,0.74)_100%)]" />
                <div className="absolute inset-x-5 bottom-5 text-background">
                  <div className="mb-4 flex items-center justify-between gap-5 text-[10px] font-bold tracking-[0.18em] text-background/75 uppercase">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span className="truncate">{p.c}</span>
                  </div>
                  <h3 className="max-w-[12ch] font-sans text-[clamp(2.45rem,13vw,4rem)] font-black uppercase leading-[0.92] tracking-normal">
                    {p.t}
                  </h3>
                  <div className="mt-5 text-[10px] font-bold tracking-[0.2em] text-background/75 uppercase">
                    {p.l}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <Link
            to="/projects"
            className="group flex min-h-64 items-center justify-center bg-[color:var(--color-teal)] px-8 py-14 text-center text-background"
          >
            <div>
              <div className="mx-auto mb-7 h-px w-20 bg-background/50 transition-transform duration-500 group-hover:scale-x-125" />
              <div className="font-serif text-5xl leading-[0.95]">
                Explore
                <br />
                More
              </div>
              <div className="mt-7 text-[10px] font-bold tracking-[0.2em] uppercase text-background/75">
                View full project page
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="sticky top-0 hidden h-screen flex-col justify-center overflow-hidden py-10 md:flex md:py-14">
        <div className="container-x relative z-10 mb-7 flex flex-col items-start justify-between gap-5 md:mb-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-5 bg-foreground/40" />
              <span className="eyebrow">Selected Work</span>
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-6xl">
              Signature spaces, crafted with precision.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/62 md:text-base">
              Explore a curated selection of villa, office, retail, and
              commercial interiors shaped with refined materials, disciplined
              detailing, and a luxury finish.
            </p>
          </div>
          <div className="text-[10px] tracking-[0.2em] text-foreground/45 uppercase md:tracking-[0.28em]">
            Scroll to explore
          </div>
        </div>

        <motion.div style={{ x }} className="flex items-stretch gap-4 pl-0">
          {projects.map((p, i) => (
            <Link
              key={p.t}
              to="/projects"
              className="group relative block h-[min(68vh,44rem)] w-[78vw] shrink-0 overflow-hidden bg-foreground md:w-[31.5rem] lg:w-[34rem]"
            >
              <img
                src={p.img}
                alt={p.t}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_20%,rgba(0,0,0,0.68)_100%)]" />
              <div className="absolute left-5 right-5 bottom-5 text-background md:left-7 md:right-7 md:bottom-7">
                <div className="mb-4 flex items-center justify-between gap-5 text-[10px] font-bold tracking-[0.18em] text-background/75 uppercase md:tracking-[0.22em]">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="truncate">{p.c}</span>
                </div>
                <h3 className="max-w-[12ch] font-sans text-[clamp(2.3rem,13vw,4.35rem)] font-black uppercase leading-[0.92] tracking-normal md:text-[4.35rem]">
                  {p.t}
                </h3>
                <div className="mt-5 text-[10px] font-bold tracking-[0.24em] text-background/75 uppercase">
                  {p.l}
                </div>
              </div>
            </Link>
          ))}

          <Link
            to="/projects"
            className="group relative flex h-[min(68vh,44rem)] w-[78vw] shrink-0 items-center justify-center overflow-hidden bg-[color:var(--color-teal)] px-10 text-center text-background md:w-[31.5rem] lg:w-[34rem]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.2),transparent_34%)]" />
            <div className="relative">
              <div className="mx-auto mb-8 h-px w-24 bg-background/50 transition-transform duration-500 group-hover:scale-x-125" />
              <div className="font-serif text-5xl leading-[0.95] md:text-7xl">
                Explore
                <br />
                More
              </div>
              <div className="mt-8 text-[10px] font-bold tracking-[0.2em] uppercase text-background/75 md:tracking-[0.28em]">
                View full project page
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    t: "Brief",
    b: "We listen. The first conversation is unhurried, and on site where possible.",
  },
  {
    n: "02",
    t: "Scope",
    b: "A single principal-authored document defines the work, the materials and the standard.",
  },
  {
    n: "03",
    t: "Build",
    b: "A dedicated team executes against the scope — without subcontracted compromise.",
  },
  {
    n: "04",
    t: "Handover",
    b: "We finish before we leave. A snag list is a failure of the previous step.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-foreground/10 bg-[#090f10] py-24 text-background md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(24,139,151,0.28),transparent_34%),linear-gradient(180deg,rgba(9,15,16,0.2),rgba(9,15,16,0.95))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-background/70">
                <span className="h-px w-5 bg-[color:var(--color-teal)]" />
                <span className="eyebrow">Approach</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-xl font-serif text-[clamp(3rem,5vw,6.8rem)] leading-[0.94] tracking-normal text-background">
                Quiet process.
                <br />
                <span className="italic text-background/78">Exact finish.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-background/62 md:text-base">
                Measured. Documented. Built clean.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="process-image-frame relative mt-12 aspect-[4/5] overflow-hidden border border-white/12 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.38)] lg:mt-16">
                <img
                  src={processImg}
                  alt="Teal luxury staircase with refined marble and brass interior detailing"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_35%,rgba(0,0,0,0.72)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,255,255,0.18),transparent_28%)] mix-blend-screen" />
                <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between border-t border-white/20 pt-5 text-[10px] font-bold tracking-[0.18em] text-background/70 uppercase md:tracking-[0.28em]">
                  <span>Precision Path</span>
                  <span>01-04</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-[21.5rem]">
            <motion.div
              className="overflow-hidden"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.52,
                    delayChildren: 0.35,
                  },
                },
              }}
            >
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  className={`group grid grid-cols-12 items-start gap-5 border-b border-background/18 py-8 transition-colors hover:border-[color:var(--color-teal)]/55 md:gap-7 md:py-10 ${
                    i === 0 ? "border-t" : ""
                  }`}
                  variants={{
                    hidden: { opacity: 0, x: "42vw", filter: "blur(10px)" },
                    show: {
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  style={{ willChange: "transform, opacity, filter" }}
                >
                  <div className="col-span-12 flex items-center gap-4 md:col-span-3">
                    <div className="font-serif text-3xl text-background/35 transition-colors group-hover:text-[color:var(--color-teal)] md:text-4xl">
                      {s.n}
                    </div>
                    <span className="h-px flex-1 bg-background/18 md:hidden" />
                  </div>
                  <div className="col-span-12 md:col-span-3">
                    <h3 className="font-serif text-3xl leading-none text-background md:text-4xl">
                      {s.t}
                    </h3>
                  </div>
                  <p className="col-span-12 max-w-xl text-sm leading-relaxed text-background/62 md:col-span-6 md:text-base">
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                      {s.b}
                    </span>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return <ContactCTA />;
}

function Index() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      startTransition(() => setShowIntro(false));
    }, 4200);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!showIntro) {
      document.body.style.overflow = "";
    }
  }, [showIntro]);

  return (
    <>
      <AnimatePresence>{showIntro ? <IntroSplash /> : null}</AnimatePresence>
      <main className="bg-background text-foreground">
        <Nav />
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <Work />
        <Process />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
