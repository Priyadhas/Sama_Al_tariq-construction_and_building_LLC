import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/site/Footer";
import { Nav } from "../components/site/Nav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Sama Al Tariq" },
      {
        name: "description",
        content:
          "Contact Sama Al Tariq Building Contracting L.L.C. for fit-out, renovation, civil works and maintenance enquiries in Dubai.",
      },
    ],
  }),
  component: ContactPage,
});

const projectTypes = [
  "Interior fit-out",
  "Renovation",
  "Civil works",
  "Maintenance",
  "Waterproofing",
  "Landscape / pool",
];

const valueBands = [
  "Below AED 100K",
  "AED 100K - 250K",
  "AED 250K - 500K",
  "AED 500K - 1M",
  "AED 1M+",
];

function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-10 bg-foreground/40" />
              <span className="eyebrow">Contact</span>
            </div>
            <h1 className="mt-8 max-w-4xl font-serif text-[clamp(3rem,12vw,5.5rem)] leading-[1.02]">
              Send us your enquiry.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/68 md:text-lg">
              Share the scope, location and timeline. We respond within 2
              working days.
            </p>

            <div className="mt-12 space-y-7 border-t border-foreground/10 pt-8 text-sm text-foreground/72">
              <div>
                <div className="eyebrow text-foreground/42">Email</div>
                <a
                  href="mailto:contact@samaaltariq.org"
                  className="mt-2 block text-lg text-foreground hover:text-[color:var(--color-teal)]"
                >
                  contact@samaaltariq.org
                </a>
                <a
                  href="mailto:info@samaaltariq.org"
                  className="mt-1 block text-lg text-foreground hover:text-[color:var(--color-teal)]"
                >
                  info@samaaltariq.org
                </a>
              </div>
              <div>
                <div className="eyebrow text-foreground/42">Phone</div>
                <a
                  href="tel:+971543190845"
                  className="mt-2 block text-lg text-foreground hover:text-[color:var(--color-teal)]"
                >
                  +971 54 319 0845
                </a>
              </div>
              <div>
                <div className="eyebrow text-foreground/42">Office</div>
                <p className="mt-2 text-lg text-foreground">
                  Sapphire Tower, Dubai, UAE
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <form
              action="mailto:contact@samaaltariq.org"
              method="post"
              encType="text/plain"
              className="grid gap-5 border border-foreground/10 bg-[#f6f4f1] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.08)] md:grid-cols-2 md:p-8"
            >
              <label className="grid gap-2 text-sm font-medium text-foreground/70">
                Name
                <input
                  name="name"
                  required
                  className="h-12 border border-foreground/12 bg-background px-4 text-foreground outline-none transition-colors focus:border-[color:var(--color-teal)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/70">
                Company
                <input
                  name="company"
                  className="h-12 border border-foreground/12 bg-background px-4 text-foreground outline-none transition-colors focus:border-[color:var(--color-teal)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/70">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="h-12 border border-foreground/12 bg-background px-4 text-foreground outline-none transition-colors focus:border-[color:var(--color-teal)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/70">
                Phone
                <input
                  type="tel"
                  name="phone"
                  required
                  className="h-12 border border-foreground/12 bg-background px-4 text-foreground outline-none transition-colors focus:border-[color:var(--color-teal)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/70">
                Project Type
                <select
                  name="project_type"
                  className="h-12 border border-foreground/12 bg-background px-4 text-foreground outline-none transition-colors focus:border-[color:var(--color-teal)]"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/70">
                Location
                <input
                  name="location"
                  required
                  className="h-12 border border-foreground/12 bg-background px-4 text-foreground outline-none transition-colors focus:border-[color:var(--color-teal)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/70 md:col-span-2">
                Estimated Value Band
                <select
                  name="estimated_value_band"
                  className="h-12 border border-foreground/12 bg-background px-4 text-foreground outline-none transition-colors focus:border-[color:var(--color-teal)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select value band
                  </option>
                  {valueBands.map((band) => (
                    <option key={band}>{band}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/70 md:col-span-2">
                Brief Description
                <textarea
                  name="brief_description"
                  rows={6}
                  required
                  className="resize-y border border-foreground/12 bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-[color:var(--color-teal)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/70 md:col-span-2">
                Attach RFQ / Drawings
                <input
                  type="file"
                  name="attachment"
                  className="border border-dashed border-foreground/18 bg-background px-4 py-4 text-sm text-foreground/65 file:mr-4 file:border-0 file:bg-foreground file:px-4 file:py-2 file:text-background"
                />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-foreground px-6 py-5 text-[11px] font-bold tracking-[0.22em] text-background uppercase transition-colors hover:bg-[color:var(--color-teal)] md:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
