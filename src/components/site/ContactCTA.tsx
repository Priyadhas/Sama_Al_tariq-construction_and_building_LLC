import { Reveal } from "./Reveal";

export function ContactCTA() {
  return (
    <section className="relative flex items-center border-t border-background/10 bg-black py-24 text-background md:py-32">
      <div className="container-x text-center">
        <Reveal>
          <div className="mx-auto flex items-center justify-center gap-3 text-background/42 sm:gap-4">
            <span className="h-px w-8 bg-background/28 sm:w-12" />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase sm:tracking-[0.32em]">
              Enquiries
            </span>
            <span className="h-px w-8 bg-background/28 sm:w-12" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-12 max-w-4xl text-center font-serif text-5xl font-semibold leading-[1.02] tracking-normal text-background md:text-7xl">
            Send us your enquiry.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-background/58 md:text-base">
            Share the scope, location and timeline. We respond within 2 working
            days.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14 flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href="mailto:contact@samaaltariq.org"
              className="group inline-flex w-full max-w-[18.5rem] items-center justify-center gap-4 border border-background/35 px-5 py-5 text-[10px] font-bold tracking-[0.18em] text-background uppercase transition-colors hover:border-[color:var(--color-teal)] hover:bg-[color:var(--color-teal)] sm:min-w-[18.5rem] sm:gap-5 sm:px-8 sm:text-[11px] sm:tracking-[0.28em]"
            >
              contact@samaaltariq.org
              <span className="inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </a>
            <a
              href="tel:+971543190845"
              className="text-[11px] tracking-[0.2em] text-background/70 uppercase transition-colors hover:text-background sm:tracking-[0.28em]"
            >
              +971 54 319 0845
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
