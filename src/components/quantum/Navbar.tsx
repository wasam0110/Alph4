import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(2,3,9,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
        {/* Left: logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Center: pill nav */}
        <div className="flex flex-1 justify-center">
          <div className="nav-pill flex items-center gap-1 overflow-x-auto whitespace-nowrap px-1.5 py-1.5 sm:gap-1.5 sm:px-2 sm:py-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-pill-link">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: CTA (hidden on very small screens to keep pill centered) */}
        <a href="#contact" className="btn-primary-q hidden shrink-0 text-sm md:inline-flex">
          Get a Quote
        </a>
      </nav>
    </header>
  );
}
