import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Projects", "/projects"],
    ["Contact Us", "/contact"],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "border-b border-foreground/10 bg-background/95 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x grid h-28 grid-cols-[auto_1fr_auto] items-center gap-6 xl:gap-8">
        <Link to="/" className="group flex items-center">
          <span
            className={`flex items-center justify-center transition-all duration-500 ${
              scrolled
                ? "bg-transparent p-0"
                : "bg-background p-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
            }`}
          >
            <img
              src={logo}
              alt="Sama Al Tariq"
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
              }`}
            />
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-8">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`group relative py-3 text-[11px] font-extrabold tracking-[0.23em] uppercase transition-colors duration-300 xl:text-[12px] xl:tracking-[0.25em] ${
                scrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-background/90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] hover:text-background"
              }`}
            >
              {label}
              <span className="absolute inset-x-0 bottom-1 h-[2px] origin-left scale-x-0 bg-[color:var(--color-teal)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/login"
            className={`px-4 py-3 text-[11px] font-extrabold tracking-[0.23em] uppercase transition-all duration-300 xl:px-5 xl:text-[12px] xl:tracking-[0.25em] ${
              scrolled
                ? "border border-foreground/20 text-foreground/80 hover:border-[color:var(--color-teal)] hover:text-[color:var(--color-teal)]"
                : "border border-background/60 bg-black/10 text-background shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-[2px] hover:border-[color:var(--color-teal)] hover:bg-background/12"
            }`}
          >
            Login
          </a>
          <a
            href="/contact"
            className={`px-5 py-3 text-[11px] font-extrabold tracking-[0.23em] uppercase transition-all duration-300 xl:px-6 xl:text-[12px] xl:tracking-[0.25em] ${
              scrolled
                ? "bg-foreground text-background hover:bg-[color:var(--color-teal)]"
                : "border border-background/70 bg-black/10 text-background shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-[2px] hover:border-[color:var(--color-teal)] hover:bg-[color:var(--color-teal)]"
            }`}
          >
            Enquire
          </a>
        </div>
      </div>
    </header>
  );
}
