export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="container-x py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl">Sama Al Tariq</div>
            <div className="mt-2 text-[11px] tracking-[0.24em] text-foreground/50 uppercase">
              Building Contracting L.L.C.
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-foreground/60">
              A Dubai fit-out and renovation house. Built to specification.
              Finished without excuse.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow text-foreground/50">Studio</div>
            <address className="mt-6 not-italic text-sm leading-relaxed text-foreground/80">
              Sheikh Zayed Road
              <br />
              Dubai, United Arab Emirates
            </address>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-foreground/50">Phone Number</div>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              <li>
                <a href="tel:+971543190845" className="hover:text-foreground">
                  +971 54 319 0845
                </a>
              </li>
              <li className="pt-4 text-[11px] font-semibold tracking-[0.24em] text-foreground/50 uppercase">
                Email Address
              </li>
              <li>
                <a
                  href="mailto:contact@samaaltariq.org"
                  className="hover:text-foreground"
                >
                  contact@samaaltariq.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@samaaltariq.org"
                  className="hover:text-foreground"
                >
                  info@samaaltariq.org
                </a>
              </li>
              <li className="pt-4 text-[11px] font-semibold tracking-[0.24em] text-foreground/50 uppercase">
                Office Address
              </li>
              <li>Sapphire Tower, Dubai, UAE</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-foreground/50">Index</div>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              <li>
                <a href="#philosophy" className="hover:text-foreground">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-foreground">
                  Work
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-foreground">
                  Process
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-20" />
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs tracking-[0.18em] text-foreground/50 uppercase md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Sama Al Tariq Building Contracting
            L.L.C.
          </div>
          <div>samaaltariq.ae · Dubai</div>
        </div>
      </div>
    </footer>
  );
}
