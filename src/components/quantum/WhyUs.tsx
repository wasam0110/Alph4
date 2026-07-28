import { Zap, Sparkles, DollarSign, ShieldCheck, Globe2, Handshake } from "lucide-react";
import { CountUp, Reveal } from "./Reveal";
import ShinyText from "./ShinyText";
const features = [
  { icon: Zap, title: "Lightning Fast Delivery", desc: "Most projects done in 5–14 days. Agile sprints, zero compromise on quality." },
  { icon: Sparkles, title: "AI-First Approach", desc: "We embed AI into every solution — smarter UIs, voice agents, intelligent automation." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees. Clear upfront quotes with milestone-based payments." },
  { icon: ShieldCheck, title: "Quality Guaranteed", desc: "14-day post-launch support on every project. We stand behind our work." },
  { icon: Globe2, title: "Global-Ready", desc: "Multi-language, multi-timezone support. Built to scale from day one." },
  { icon: Handshake, title: "Ongoing Partnership", desc: "Retainer plans, feature updates, and strategic advice as your business grows." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-[120px]">
      <div
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full"
        style={{ background: "#2dd4a8", filter: "blur(140px)", opacity: 0.08 }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal><div className="eyebrow"><ShinyText text="THE ADVANTAGE" color="#a8a8a8" shineColor="#4ecca3" speed={3} /></div></Reveal>
          <Reveal delay={80}>
<h2 className="mt-4 font-display text-4xl font-bold sm:text-[52px]">
  <ShinyText text="The Alph4 Advantage" color="#ffffff" shineColor="#4ecca3" speed={3} />
</h2>
          </Reveal>
          <Reveal delay={160}>
<p className="mx-auto mt-4 max-w-[600px] text-[18px]">
  <ShinyText text="We don't just build software — we engineer competitive advantages." color="#888888" shineColor="#4ecca3" speed={3} />
</p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-8 text-center sm:gap-16">
            {[
              { end: 120, suffix: "+", label: "Projects" },
              { end: 85, suffix: "+", label: "Clients" },
              { end: 4.9, suffix: "★", label: "Rating", decimals: 1 },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex items-center gap-8 sm:gap-16">
                <div>
                  <div className="font-display text-5xl font-bold gradient-text-static sm:text-[56px]">
                    <CountUp end={s.end} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </div>
                  <div className="mt-2 text-[14px] text-[color:var(--color-q-muted)]">
                    <ShinyText text={s.label} color="#888888" shineColor="#4ecca3" speed={3} />
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div
                    className="hidden h-12 w-px sm:block"
                    style={{ background: "linear-gradient(to bottom, transparent, #10b981, transparent)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 60}>
                <article className="glass-card h-full p-8">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1.5px solid rgba(16,185,129,0.4)",
                    }}
                  >
                    <Icon size={22} className="gradient-text-static" style={{ stroke: "url(#q-grad)" }} />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="q-grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#2DD4A8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-[17px] font-bold">
  <ShinyText text={f.title} color="#ffffff" shineColor="#4ecca3" speed={3} />
</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[color:var(--color-q-muted)]">
                    <ShinyText text={f.desc} color="#888888" shineColor="#4ecca3" speed={3} />
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
