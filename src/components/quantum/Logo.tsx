import logoSrc from "@/assets/alph4-logo.png";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const h = size === "sm" ? "h-7" : "h-9";
  return (
    <a href="#top" className="inline-flex items-center select-none" aria-label="Alph4">
      <img src={logoSrc} alt="Alph4" className={`${h} w-auto`} draggable={false} />
    </a>
  );
}
