import { Reveal } from "./Reveal";
import ShinyText from "./ShinyText";

const steps = [
  { n: 1, title: "Discovery Call", desc: "Free 30-min consultation — deep-dive into goals, timeline, requirements." },
  { n: 2, title: "Proposal & Planning", desc: "Detailed proposal with scope, timeline, tech stack within 24 hours." },
  { n: 3, title: "Design & Build", desc: "Weekly progress updates and live previews at every stage.", active: true },
  { n: 4, title: "Test & Deploy", desc: "Rigorous QA across all devices + zero-downtime deployment." },
  { n: 5, title: "Ongoing Support", desc: "14-day post-launch support included with every project." },
];

export function Process() {
  return (
    <section id="process" className="relative py-[120px]">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[300px] -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(16,185,129,0.06), transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
<Reveal><div className="eyebrow"><ShinyText text="HOW WE WORK" color="#a8a8a8" shineColor="#4ecca3" speed={3} /></div></Reveal>          <Reveal delay={80}>
<h2 className="mt-4 font-display text-4xl font-bold sm:text-[52px]">
  <ShinyText text="From Idea to Launch" color="#ffffff" shineColor="#4ecca3" speed={3} />
</h2>
          </Reveal>
          <Reveal delay={160}>
<p className="mx-auto mt-4 max-w-[600px] text-[18px]">
  <ShinyText text="A streamlined process that keeps you informed, on budget, and always moving forward." color="#888888" shineColor="#4ecca3" speed={3} />
</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ol className="relative">
              {steps.map((s, i) => (
                <li key={s.n} className="relative flex gap-5 pb-10 last:pb-0">
                  {i < steps.length - 1 && (
                    <span
                      className="absolute left-[17px] top-10 h-full w-px"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(16,185,129,0.3) 50%, transparent 50%)",
                        backgroundSize: "1px 8px",
                      }}
                    />
                  )}
                  <div
                    className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm font-bold text-white"
                    style={{
                      background: s.active
                        ? "linear-gradient(135deg, #10b981, #2dd4a8)"
                        : "rgba(255,255,255,0.04)",
                      border: s.active
                        ? "none"
                        : "1px solid rgba(16,185,129,0.4)",
                      boxShadow: s.active ? "0 0 20px rgba(16,185,129,0.5)" : "none",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`font-display text-[18px] font-bold ${
                        s.active ? "gradient-text-static" : "text-white"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-[1.7] text-[color:var(--color-q-muted)]">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 0 40px rgba(16,185,129,0.15)" }}
            >
              <div
                className="flex items-center px-4 py-3"
                style={{ background: "#1a1a2e", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="h-3 w-3 rounded-full" style={{ background: "#FEBC2E" }} />
                  <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <div className="flex-1 text-center font-mono-q text-[13px] text-[color:var(--color-q-muted)]">
                  alph4.config.js
                </div>
                <div className="w-12" />
              </div>
              <pre
                className="overflow-x-auto p-7 font-mono-q text-[13px] leading-[1.8] sm:text-[14px]"
                style={{ background: "#0D0F1A", color: "#f1f5f9" }}
              >
{``}<span style={{ color: "#6B7280" }}>// alph4.config.js</span>{`
`}<span style={{ color: "#10B981" }}>const</span>{` `}<span style={{ color: "#F1F5F9" }}>project</span>{` `}<span style={{ color: "#64748B" }}>= {`{`}</span>{`
  `}<span style={{ color: "#2DD4A8" }}>client</span>{": "}<span style={{ color: "#A3E635" }}>"Your Business"</span>{",\n  "}<span style={{ color: "#2DD4A8" }}>type</span>{": "}<span style={{ color: "#A3E635" }}>"AI Calling Agent"</span>{",\n  "}<span style={{ color: "#2DD4A8" }}>timeline</span>{": "}<span style={{ color: "#A3E635" }}>"7 days"</span>{",\n  "}<span style={{ color: "#2DD4A8" }}>status</span>{": "}<span style={{ color: "#A3E635" }}>"in_progress"</span>{",\n  "}<span style={{ color: "#2DD4A8" }}>calls_handled</span>{": "}<span style={{ color: "#F59E0B" }}>2847</span>{",\n  "}<span style={{ color: "#2DD4A8" }}>satisfaction</span>{": "}<span style={{ color: "#F59E0B" }}>99.2</span>{"\n"}<span style={{ color: "#64748B" }}>{`}`}</span>{`

`}<span style={{ color: "#6B7280" }}>// deploying to production...</span>{`

`}<span style={{ color: "#22c55e" }}>✓</span>{" Build complete — 2.1s\n"}<span style={{ color: "#22c55e" }}>✓</span>{" Tests passed — 142/142\n"}<span style={{ color: "#22c55e" }}>✓</span>{" Deployed to alph4.io\n"}<span className="q-blink inline-block h-4 w-2 align-middle" style={{ background: "#f1f5f9" }} />
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
