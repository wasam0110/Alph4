import { Bot, Smartphone, Globe2, Cog, ShoppingBag, Palette, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import ShinyText from "./ShinyText";

const services = [
  {
    n: "01",
    Icon: Bot,
    name: "AI Calling Agents",
    desc: "Intelligent voice agents that handle customer calls 24/7. Book appointments, answer queries, qualify leads — fully on autopilot.",
    tags: ["GPT-4o", "Twilio", "Voice AI", "NLP"],
  },
  {
    n: "02",
    Icon: Smartphone,
    name: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps built for performance. Beautiful UIs, seamless backend integration, smooth UX from day one.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    n: "03",
    Icon: Globe2,
    name: "Web Development",
    desc: "High-performance websites and web apps. From landing pages to full-stack platforms — built to convert visitors into clients.",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
  },
  {
    n: "04",
    Icon: Cog,
    name: "Automation & Bots",
    desc: "Eliminate repetitive tasks with smart automation. CRM integrations, WhatsApp/Telegram bots — we automate what slows you down.",
    tags: ["Python", "n8n", "Zapier", "Make"],
  },
  {
    n: "05",
    Icon: ShoppingBag,
    name: "E-Commerce Solutions",
    desc: "Full-featured online stores with payment gateways, inventory management, and marketing automation — built to scale globally.",
    tags: ["Shopify", "WooCommerce", "Stripe", "Custom"],
  },
  {
    n: "06",
    Icon: Palette,
    name: "UI/UX Design",
    desc: "Research-driven, pixel-perfect design that users love. Interactive prototypes and brand identities that make lasting impressions.",
    tags: ["Figma", "Prototyping", "Branding", "Research"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-[120px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "#5b21b6", filter: "blur(180px)", opacity: 0.12 }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal>
<div className="eyebrow"><ShinyText text="WHAT WE DO" color="#a8a8a8" shineColor="#4ecca3" speed={3} /></div>          </Reveal>
          <Reveal delay={80}>
<h2 className="mt-4 font-display text-4xl font-bold sm:text-[52px]">
  <ShinyText text="Our Core Services" color="#ffffff" shineColor="#4ecca3" speed={3} />
</h2>
          </Reveal>
          <Reveal delay={160}>
<p className="mx-auto mt-4 max-w-[600px] text-[18px]">
  <ShinyText text="From AI-powered automation to pixel-perfect apps — we engineer solutions that give your business a real competitive edge." color="#888888" shineColor="#4ecca3" speed={3} />
</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.Icon;
            return (
              <Reveal key={s.n} delay={i * 60}>
                <article className="premium-card group relative h-full overflow-hidden p-8">
                  {/* corner glow */}
                  <span className="premium-card-glow" aria-hidden />
                  {/* number watermark */}
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 font-display text-[80px] font-extrabold leading-none text-white/[0.03] select-none"
                    aria-hidden
                  >
                    {s.n}
                  </span>

                  <div className="relative flex items-start justify-between">
                    <div className="premium-icon-tile">
                      <Icon size={22} strokeWidth={1.75} className="text-white" />
                    </div>
                    <span className="font-mono-q text-[11px] tracking-widest text-[color:var(--color-q-muted)]">
                      / {s.n}
                    </span>
                  </div>
<h3 className="relative mt-6 font-display text-[22px] font-bold">
  <ShinyText text={s.name} color="#ffffff" shineColor="#4ecca3" speed={3} />
</h3>
<p className="relative mt-2.5 text-[15px] leading-[1.7]">
  <ShinyText text={s.desc} color="#888888" shineColor="#4ecca3" speed={4} />
</p>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-2.5 py-1 text-[11px]"
                        style={{
                          background: "rgba(45,212,168,0.08)",
                          border: "1px solid rgba(45,212,168,0.22)",
                          color: "#67e8f9",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

<a href="#contact" className="premium-card-cta relative mt-7 inline-flex items-center gap-1.5 text-[13px] font-semibold">
  <ShinyText text="Learn more" color="#cccccc" shineColor="#4ecca3" speed={3} />
  <ArrowUpRight size={14} className="premium-card-cta-arrow" />
</a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
