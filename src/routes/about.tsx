import { createFileRoute } from "@tanstack/react-router";
import philosophyImg from "../assets/teal-luxury-detail.png";
import samaBuildingImg from "../assets/SamaAlTariq_building.png";
import { ContactCTA } from "../components/site/ContactCTA";
import { Footer } from "../components/site/Footer";
import { Nav } from "../components/site/Nav";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Sama Al Tariq" },
      {
        name: "description",
        content:
          "About Sama Al Tariq Tech Services L.L.C., a UAE-based facility management, renovation, fit-out and civil services company.",
      },
    ],
  }),
  component: AboutPage,
});

const civilServices = [
  "Block work",
  "Plasterwork",
  "Screeding",
  "Column and slab restoration",
  "Waterproofing",
  "Concrete pouring",
  "Masonry work",
  "Indoor and outdoor snagging",
  "Refurbishment",
  "Flooring",
];

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      <section className="relative overflow-hidden bg-[#edf7f7] pt-40 pb-28 md:pt-48 md:pb-40">
        <div className="container-x relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 text-[color:var(--color-teal)]">
              <span className="h-px w-12 bg-[color:var(--color-teal)]" />
              <span className="text-[11px] font-bold tracking-[0.24em] uppercase sm:tracking-[0.36em]">
                About
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-14 max-w-6xl font-sans text-[clamp(3.55rem,18vw,10.5rem)] font-black uppercase leading-[0.9] tracking-normal text-[#071012] md:leading-[0.88]">
              Built for
              <br />
              better spaces.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-12 max-w-4xl text-xl leading-relaxed text-[#43515b] md:text-3xl">
              Sama Al Tariq Tech Services L.L.C. is a UAE-based company
              delivering facility management, renovation, fit-out innovation and
              civil works for villas, apartments, offices, hotels, clubs and
              restaurants.
            </p>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-[#071012] [clip-path:polygon(0_70%,50%_20%,100%_70%,100%_100%,0_100%)]" />
      </section>

      <section className="bg-[#071012] py-24 text-background md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden bg-white p-8 shadow-[0_34px_120px_rgba(0,0,0,0.28)]">
                <img
                  src={samaBuildingImg}
                  alt="Sama Al Tariq Building Contracting L.L.C. brand image"
                  className="h-full w-full object-contain"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div className="flex items-center gap-3 text-[color:var(--color-teal)]">
                <span className="h-px w-10 bg-[color:var(--color-teal)]" />
                <span className="text-[11px] font-bold tracking-[0.24em] uppercase sm:tracking-[0.32em]">
                  Mission
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-serif text-4xl leading-[1.08] md:text-6xl">
                To deliver finished interiors at the standard our clients
                privately hope for but rarely receive.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-background/64">
                On time, on brief, on budget, with a paper trail that proves it.
                Every project is planned, designed and executed around the
                client&apos;s needs, preferences and long-term use of the space.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-10 bg-foreground/40" />
              <span className="eyebrow">What We Do</span>
            </div>
            <h2 className="mt-8 max-w-5xl font-sans text-[clamp(3rem,15vw,8rem)] font-black uppercase leading-[0.92] tracking-normal md:leading-[0.9]">
              Facility. Fit-out. Civil.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-xl leading-relaxed text-foreground/70 md:text-2xl">
                Our team brings technicians, engineers, project managers,
                working staff, creative directors and interior designers
                together to create seamless, functional and polished spaces.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {civilServices.map((item) => (
                  <div
                    key={item}
                    className="border-b border-foreground/12 py-4 text-[11px] font-bold tracking-[0.18em] text-foreground/65 uppercase sm:tracking-[0.24em]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
