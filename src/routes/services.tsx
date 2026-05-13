import { createFileRoute } from "@tanstack/react-router";
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
import { ContactCTA } from "../components/site/ContactCTA";
import { Footer } from "../components/site/Footer";
import { Nav } from "../components/site/Nav";
import { Reveal } from "../components/site/Reveal";

const services = [
  {
    title: "Interior Fit-Out",
    body: "Turnkey villa, office and retail fit-out coordinated across joinery, stone, lighting, glass, metal and final finishes.",
    image: serviceInteriorFitOut,
  },
  {
    title: "Architectural Finishes",
    body: "Feature surfaces, cladding, paint systems and decorative finishes installed with controlled setting-out and edge details.",
    image: serviceArchitecturalFinishes,
  },
  {
    title: "Maintenance & Asset Care",
    body: "Planned maintenance, responsive repair and lifecycle care for offices, villas, common areas and finished assets after handover.",
    image: serviceMaintenanceAssetCare,
  },
  {
    title: "Ceiling & Partition Systems",
    body: "Gypsum, acoustic, metal-frame and specialist ceiling systems aligned to architectural drawings and MEP requirements.",
    image: serviceCeilingPartitionSystems,
  },
  {
    title: "Stone & Tile Installation",
    body: "Marble, porcelain, ceramic and natural stone works with careful setting-out, substrate checks and edge control.",
    image: serviceStoneTileInstallation,
  },
  {
    title: "Surface Preparation & Plaster",
    body: "Substrate preparation, rendering, plastering and leveling systems that create the base for reliable final finishes.",
    image: serviceSurfacePreparationPlaster,
  },
  {
    title: "Waterproofing Systems",
    body: "Integrated waterproofing for roofs, wet areas, terraces and below-grade conditions before finishes are installed.",
    image: serviceWaterproofingSystems,
  },
  {
    title: "Civil & Structural Works",
    body: "Block work, screeding, masonry, concrete repair and structural modifications executed with documented site control.",
    image: serviceCivilStructuralWorks,
  },
  {
    title: "Landscape Environments",
    body: "External environments shaped through hardscape, softscape, lighting, water features and coordinated site execution.",
    image: serviceLandscapeEnvironments,
  },
  {
    title: "Pool & Leisure Environments",
    body: "Pools, decks and leisure zones delivered with coordination between structure, waterproofing, MEP and finishes.",
    image: servicePoolLeisureEnvironments,
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Sama Al Tariq" },
      {
        name: "description",
        content:
          "Sama Al Tariq services for fit-out, architectural finishes, stone, waterproofing, civil works and landscape environments in Dubai.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      <section className="bg-background pt-40 pb-24 md:pt-48 md:pb-36">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-5 bg-foreground/40" />
              <span className="eyebrow">Services</span>
            </div>
            <h1 className="mt-8 max-w-5xl font-serif text-[clamp(3rem,13vw,4.5rem)] leading-[1.02] md:text-7xl">
              Contracting, fit-out and maintenance delivered under one scope.
            </h1>
          </Reveal>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 0.06}>
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                    />
                    <div className="absolute right-3 bottom-3 bg-black/62 px-3 py-2 text-[9px] font-bold tracking-[0.16em] text-background uppercase">
                      Concept Visualisation
                    </div>
                  </div>
                  <h2 className="mt-7 font-serif text-3xl">{service.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                    {service.body}
                  </p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.12} className="md:col-span-2">
              <aside className="relative px-2 py-10 text-foreground md:px-10 lg:pt-20">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 text-[color:var(--color-teal)]">
                    <span className="h-px w-5 bg-[color:var(--color-teal)]" />
                    <span className="text-[11px] font-bold tracking-[0.24em] uppercase sm:tracking-[0.32em]">
                      Standard
                    </span>
                  </div>
                  <p className="mt-8 font-serif text-3xl leading-[1.08] text-black md:text-5xl">
                    &ldquo;Every surface should look resolved before anyone asks
                    who made it.&rdquo;
                  </p>
                  <p className="mt-8 max-w-xl text-sm leading-relaxed text-black/60">
                    Our work is judged in the corners, junctions, tolerances and
                    final light.
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
