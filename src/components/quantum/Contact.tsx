import { useState, type FormEvent } from "react";
import { Mail, Instagram, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import ShinyText from "./ShinyText";

const SERVICES = [
  "AI Calling Agent",
  "Mobile App",
  "Website",
  "Automation",
  "E-Commerce",
  "UI/UX Design",
];
const BUDGETS = ["< $500", "$500–$1,000", "$1,000–$5,000", "$5,000+", "Let's Discuss"];

function InfoCard({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass-card flex items-center gap-4 p-5">
      <div
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white"
        style={{ background: "linear-gradient(135deg, #10B981, #2DD4A8)" }}
      >
        <Icon size={16} />
      </div>
      <div className="min-w-0">
        <div className="text-[12px] uppercase tracking-widest text-[color:var(--color-q-muted)]">
          {label}
        </div>
        <div className="mt-0.5 truncate text-[14px] text-white">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg =
      `Hi Alph4! 👋%0A%0A` +
      `*Name:* ${fd.get("name") || ""}%0A` +
      `*Email:* ${fd.get("email") || ""}%0A` +
      `*Phone:* ${fd.get("phone") || ""}%0A` +
      `*Service:* ${fd.get("service") || ""}%0A` +
      `*Budget:* ${fd.get("budget") || ""}%0A%0A` +
      `${fd.get("message") || ""}`;
    window.open(`https://wa.me/97300000000?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-[120px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.18), rgba(45,212,168,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal><div className="eyebrow"><ShinyText text="GET IN TOUCH" color="#a8a8a8" shineColor="#4ecca3" speed={3} /></div></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl font-bold">
              <ShinyText text="Let's Build Together" color="#ffffff" shineColor="#4ecca3" speed={3} />
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-4 max-w-[600px] text-[18px] text-[color:var(--color-q-muted)]">
              Tell us about your project. We respond within 24 hours with a clear plan — always free.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-4">
              <InfoCard Icon={Mail} label="Email" value="hello@alph4.io" href="mailto:hello@alph4.io" />
              <InfoCard Icon={Instagram} label="Instagram" value="@alph4tech" href="https://instagram.com/alph4tech" />
              <InfoCard
                Icon={MapPin}
                label="Address"
                value="GENERAL TRADING W.L.L, Office 3, Bldg. 586, Road 1413, Block 314, Al Naim, Kingdom of Bahrain"
              />
              <a href="mailto:hello@alph4.io" className="btn-ghost-q mt-2 w-full">
                <Calendar size={16} /> Book a Free Call
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-card p-8 sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="grid h-16 w-16 place-items-center rounded-full"
                    style={{ background: "linear-gradient(135deg, #10B981, #2DD4A8)" }}
                  >
                    <CheckCircle2 size={28} className="text-white" />
                  </div>
                  <p className="mt-6 font-display text-[20px] text-white">
                    ✅ Message sent! We'll reply within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <input required name="name" placeholder="Your Name" className="q-input" />
                  <input required type="email" name="email" placeholder="Email Address" className="q-input" />
                  <input name="phone" type="tel" placeholder="Phone Number" className="q-input" />
                  <select required name="service" defaultValue="" className="q-input">
                    <option value="" disabled>Service Needed</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-[#0d0f1a]">{s}</option>
                    ))}
                  </select>
                  <select required name="budget" defaultValue="" className="q-input">
                    <option value="" disabled>Budget Range</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-[#0d0f1a]">{b}</option>
                    ))}
                  </select>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell Us About Your Project"
                    className="q-input resize-none"
                  />
                  <button type="submit" className="btn-primary-q mt-2 w-full">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.65 1.44h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.24-6.15-3.5-8.42ZM12.06 21.6h-.01a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.72 9.72 0 0 1-1.5-5.2c0-5.37 4.37-9.74 9.75-9.74 2.6 0 5.05 1.02 6.89 2.86a9.68 9.68 0 0 1 2.86 6.9c0 5.37-4.37 9.83-9.68 9.83Zm5.34-7.28c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.94 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44a8.77 8.77 0 0 1-1.62-2.02c-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.49.1-.2.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.17-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.2 3.02.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z"/>
                    </svg>
                    Send on WhatsApp
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
