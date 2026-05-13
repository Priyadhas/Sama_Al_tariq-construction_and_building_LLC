import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-transparent.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const previousOverflow = useRef("");
  const isSolid = scrolled || menuOpen || !isHomePage;
  const navItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Projects", "/projects"],
    ["Contact Us", "/contact"],
  ];

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow.current;
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        isSolid
          ? "border-b border-foreground/10 bg-background/95 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x grid h-24 grid-cols-[auto_1fr_auto] items-center gap-4 md:h-28 md:gap-6 xl:gap-8">
        <Link to="/" className="group flex items-center">
          <span
            className={`flex items-center justify-center transition-all duration-500 ${
              isSolid ? "p-0" : "p-0 drop-shadow-[0_14px_34px_rgba(0,0,0,0.28)]"
            }`}
          >
            <img
              src={logo}
              alt="Sama Al Tariq"
              className={`w-auto transition-all duration-500 ${
                isSolid ? "h-12 md:h-16" : "h-14 md:h-20"
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
                isSolid
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
            href="/contact"
            className={`px-5 py-3 text-[11px] font-extrabold tracking-[0.23em] uppercase transition-all duration-300 xl:px-6 xl:text-[12px] xl:tracking-[0.25em] ${
              isSolid
                ? "bg-foreground text-background hover:bg-[color:var(--color-teal)]"
                : "border border-background/70 bg-black/10 text-background shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-[2px] hover:border-[color:var(--color-teal)] hover:bg-[color:var(--color-teal)]"
            }`}
          >
            Enquire
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`col-start-3 inline-flex h-11 w-11 items-center justify-center justify-self-end border transition-colors duration-300 lg:hidden ${
            isSolid
              ? "border-foreground/20 text-foreground"
              : "border-background/60 bg-black/10 text-background shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-[2px]"
          }`}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={`lg:hidden ${
          menuOpen ? "block" : "hidden"
        } border-t border-foreground/10 bg-background/98`}
      >
        <nav className="container-x flex max-h-[calc(100svh-6rem)] flex-col overflow-y-auto py-6">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-foreground/10 py-5 text-[12px] font-extrabold tracking-[0.24em] text-foreground/80 uppercase transition-colors hover:text-[color:var(--color-teal)]"
            >
              {label}
            </a>
          ))}
          <div className="mt-6">
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-foreground px-4 py-4 text-center text-[11px] font-extrabold tracking-[0.22em] text-background uppercase"
            >
              Enquire
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
