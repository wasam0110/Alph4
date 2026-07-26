import { Reveal } from "./Reveal";

const members = [
  {
    initials: "SZA",
    name: "Syed Zayan Ahmed",
    role: "Founder",
    title: "Client Dealing",
    gradient: "linear-gradient(135deg, #10B981, #2DD4A8)",
  },
  {
    initials: "MA",
    name: "Muhammad Arif",
    role: "Co-Founder",
    title: "Head AI Engineer",
    gradient: "linear-gradient(135deg, #10B981, #EC4899)",
  },
  {
    initials: "AS",
    name: "Ali Sameer",
    role: "Engineering",
    title: "Full-Stack Lead",
    gradient: "linear-gradient(135deg, #2DD4A8, #3B82F6)",
  },
  {
    initials: "LK",
    name: "Layla Kamal",
    role: "Design",
    title: "Product Designer",
    gradient: "linear-gradient(135deg, #10B981, #F59E0B)",
  },
];

export function Team() {
  return (
    <section id="portfolio" className="relative py-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal><div className="eyebrow gradient-text-static">ABOUT US</div></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-[52px]">
              Our Team
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-4 max-w-[600px] text-[18px] text-[color:var(--color-q-muted)]">
              The builders behind every project — passionate engineers, designers, and strategists.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 60}>
              <article className="glass-card flex h-full flex-col items-center p-8 text-center">
                <div
                  className="grid h-[72px] w-[72px] place-items-center rounded-full font-display text-[22px] font-bold text-white"
                  style={{ background: m.gradient, boxShadow: "0 0 24px rgba(16,185,129,0.35)" }}
                >
                  {m.initials}
                </div>
                <h3 className="mt-4 font-display text-[18px] font-bold text-white">{m.name}</h3>
                <span
                  className="mt-2 rounded-full px-3 py-1 text-[12px] gradient-text-static"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }}
                >
                  {m.role}
                </span>
                <div className="mt-2 text-[14px] text-[color:var(--color-q-muted)]">{m.title}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
