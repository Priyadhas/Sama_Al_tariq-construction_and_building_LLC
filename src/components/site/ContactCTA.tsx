import { Reveal } from "./Reveal";

export function ContactCTA() {
  return (
    <section className="relative flex min-h-[80svh] items-center border-t border-background/10 bg-black py-24 text-background md:py-36">
      <div className="container-x text-center">
        <Reveal>
          <div className="mx-auto flex items-center justify-center gap-4 text-background/42">
            <span className="h-px w-12 bg-background/28" />
            <span className="text-[10px] font-bold tracking-[0.32em] uppercase">
              06 - Begin
            </span>
            <span className="h-px w-12 bg-background/28" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-12 max-w-4xl text-center font-serif text-5xl font-semibold leading-[1.02] tracking-normal text-background md:text-7xl">
            A conversation, before <span className="italic">a proposal.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-background/58 md:text-base">
            We accept a small number of new commissions each year. If your
            project warrants a considered hand, we would like to meet.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14 flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href="mailto:contact@samaaltariq.org"
              className="group inline-flex min-w-[18.5rem] items-center justify-center gap-5 border border-background/35 px-8 py-5 text-[11px] font-bold tracking-[0.28em] text-background uppercase transition-colors hover:border-[color:var(--color-teal)] hover:bg-[color:var(--color-teal)]"
            >
              contact@samaaltariq.org
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="tel:+971543190845"
              className="text-[11px] tracking-[0.28em] text-background/70 uppercase transition-colors hover:text-background"
            >
              +971 54 319 0845
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
