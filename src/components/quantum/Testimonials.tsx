import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote: "Built our AI calling agent in 6 days. It now handles 300+ calls daily with zero human effort.",
    name: "Dr. Asim Khan",
    meta: "MedCare Clinics, Lahore",
    initials: "AK",
    g: "linear-gradient(135deg, #10B981, #2DD4A8)",
  },
  {
    quote: "The mobile app exceeded all expectations. Clean UI, blazing performance throughout.",
    name: "Sara Farooq",
    meta: "RideSwift, Karachi",
    initials: "SF",
    g: "linear-gradient(135deg, #EC4899, #10B981)",
  },
  {
    quote: "Automated our entire sales pipeline. Saved 40 hours per week. ROI visible within month one.",
    name: "Moiz Raza",
    meta: "SalesPilot, Dubai",
    initials: "MR",
    g: "linear-gradient(135deg, #2DD4A8, #3B82F6)",
  },
  {
    quote: "Concept to live store in 12 days. Our conversions are up 68% since launch.",
    name: "Hira Noor",
    meta: "LuxBrand, Islamabad",
    initials: "HN",
    g: "linear-gradient(135deg, #F59E0B, #EC4899)",
  },
  {
    quote: "Understood our vision, delivered on time, and the quality is genuinely world-class.",
    name: "Zain Ahmad",
    meta: "EduLink, London",
    initials: "ZA",
    g: "linear-gradient(135deg, #10B981, #F59E0B)",
  },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="glass-card relative w-[340px] shrink-0 p-7">
      <span
        className="absolute left-0 top-6 h-14 w-[3px] rounded-r"
        style={{ background: "linear-gradient(to bottom, #10B981, #2DD4A8)" }}
      />
      <div className="flex gap-0.5 text-[#F59E0B]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="#F59E0B" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-3 text-[15px] italic leading-[1.7] text-[#E2E8F0]">"{t.quote}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div
          className="grid h-11 w-11 place-items-center rounded-full font-display text-[13px] font-bold text-white"
          style={{ background: t.g }}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <div className="truncate font-display text-[15px] font-bold text-white">{t.name}</div>
          <div className="truncate text-[13px] text-[color:var(--color-q-muted)]">{t.meta}</div>
        </div>
      </div>
    </div>
  );
}

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...testimonials, ...testimonials];
  return (
    <div
      className="q-marquee overflow-hidden"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className={`flex w-max gap-6 ${reverse ? "q-marquee-track-reverse" : "q-marquee-track"}`}>
        {items.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal><div className="eyebrow gradient-text-static">CLIENT LOVE</div></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-[52px]">
              What Clients Say
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-4 max-w-[600px] text-[18px] text-[color:var(--color-q-muted)]">
              Real results from real businesses — here's what our clients have to say.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-6">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
