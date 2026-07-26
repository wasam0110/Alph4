export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% -20%, #020806 0%, transparent 70%), radial-gradient(1000px 700px at 50% 120%, #010604 0%, transparent 65%), #020604",
        }}
      />
      <div
        className="absolute -top-56 -right-56 h-[560px] w-[560px] rounded-full"
        style={{
          background: "#0a3d2e",
          filter: "blur(160px)",
          opacity: 0.35,
        }}
      />
      <div
        className="absolute -bottom-56 -left-56 h-[560px] w-[560px] rounded-full"
        style={{
          background: "#064e3b",
          filter: "blur(160px)",
          opacity: 0.3,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
