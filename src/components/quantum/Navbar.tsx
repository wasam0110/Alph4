import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import Dock from "./Dock";
import ShinyText from "./ShinyText";
import {
  VscHome,
  VscBriefcase,
  VscOrganization,
  VscCommentDiscussion,
  VscQuestion,
} from "react-icons/vsc";

const links = [
  { href: "#services",      label: "Services",     icon: <VscBriefcase size={18} /> },
  { href: "#process",       label: "Process",      icon: <VscHome size={18} /> },
  { href: "#portfolio",     label: "Portfolio",    icon: <VscOrganization size={18} /> },
  { href: "#why",           label: "Why Us",       icon: <VscQuestion size={18} /> },
  { href: "#contact",       label: "Contact",      icon: <VscCommentDiscussion size={18} /> },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dockItems = links.map((l) => ({
    icon: l.icon,
    label: l.label,
    onClick: () => {
      document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(2,3,9,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
        {/* Left: logo */}
        <div className="shrink-0">
        <Logo size="sm" />
          </div>

{/* Center: Dock */}
<div className="flex flex-1 justify-center" style={{ height: 52 }}>
  <Dock
    items={dockItems}
    panelHeight={44}
    baseItemSize={30}
    magnification={48}
  />
</div>
      </nav>
    </header>
  );
}