export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="container-x py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl">Sama Al Tariq</div>
            <div className="mt-2 text-[11px] tracking-[0.18em] text-foreground/50 uppercase sm:tracking-[0.24em]">
              Building Contracting L.L.C.
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-foreground/60">
              A Dubai-based contracting and technical services company for
              fit-out, renovation, civil works and planned maintenance.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow text-foreground/50">Office Address</div>
            <address className="mt-6 not-italic text-sm leading-relaxed text-foreground/80">
              Sapphire Tower, Dubai, UAE
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
              <li className="pt-4 text-[11px] font-semibold tracking-[0.18em] text-foreground/50 uppercase sm:tracking-[0.24em]">
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
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-foreground/50">Index</div>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              <li>
                <a href="/about" className="hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-foreground">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-foreground">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-20" />
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs tracking-[0.12em] text-foreground/50 uppercase sm:tracking-[0.18em] md:flex-row md:items-center">
          <div>
            (c) {new Date().getFullYear()} Sama Al Tariq Building Contracting
            L.L.C.
          </div>
          <div>samaaltariq.org / Dubai</div>
        </div>
      </div>
    </footer>
  );
}
