import { Reveal } from "./Reveal";
import ShinyText from "./ShinyText";

const members = [
  {
    initials: "MA",
    name: "Muhammad Arif",
    role: "Co-Founder",
    title: "Co-Founder & CEO",
    gradient: "linear-gradient(135deg, #10B981, #060204)",
  },
];

export function Team() {
  return (
    <section id="portfolio" className="relative py-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal><div className="eyebrow"><ShinyText text="ABOUT US" color="#a8a8a8" shineColor="#4ecca3" speed={3} /></div></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl font-bold">
              <ShinyText text="Our Team" color="#ffffff" shineColor="#4ecca3" speed={3} />
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-4 max-w-[600px] text-[18px]">
              <ShinyText text="The builders behind every project — passionate engineers, designers, and strategists." color="#ffffff" shineColor="#4ecca3" speed={3} />
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
