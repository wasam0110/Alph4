import { useEffect, useRef, useState } from "react";
import { Bot, Smartphone, Globe2, Cog, ShoppingBag, Palette } from "lucide-react";
import { CountUp } from "./Reveal";
import robotImg from "@/assets/hero-robot.png";

function MeshCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    const nodes: { x: number; y: number; vx: number; vy: number; c: string }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      nodes.length = 0;
      const count = Math.min(70, Math.floor((w * h) / 18000));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          c: Math.random() > 0.5 ? "16,185,129" : "45,212,168",
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.strokeStyle = `rgba(${a.c}, ${0.12 * (1 - d / 140)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${n.c}, 0.7)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();
    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}

const MARQUEE_ITEMS = [
  "AI CALLING AGENTS",
  "MOBILE APPS",
  "WEB DEVELOPMENT",
  "AUTOMATION",
  "UI/UX DESIGN",
  "E-COMMERCE",
  "CHATBOTS",
  "API INTEGRATION",
];

const FLOATING_SERVICES = [
  { Icon: Bot, label: "AI Agents", tag: "GPT-4o", pos: "top-[12%] left-[6%]", delay: "0s", depth: 0.35 },
  { Icon: Smartphone, label: "Mobile Apps", tag: "React Native", pos: "top-[20%] right-[7%]", delay: "0.6s", depth: 0.5 },
  { Icon: Globe2, label: "Web Dev", tag: "Next.js", pos: "top-[55%] left-[3%]", delay: "1.2s", depth: 0.25 },
  { Icon: Cog, label: "Automation", tag: "n8n · Zapier", pos: "bottom-[18%] right-[5%]", delay: "0.3s", depth: 0.4 },
  { Icon: ShoppingBag, label: "E-Commerce", tag: "Shopify", pos: "bottom-[10%] left-[14%]", delay: "0.9s", depth: 0.6 },
  { Icon: Palette, label: "UI / UX", tag: "Figma", pos: "top-[8%] right-[22%]", delay: "1.5s", depth: 0.3 },
];

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const p = (mult: number) => ({ transform: `translate3d(0, ${scrollY * mult}px, 0)` });

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <MeshCanvas />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0" style={p(0.12)}><div className="q-ring r3" /></div>
        <div className="absolute inset-0" style={p(0.18)}><div className="q-ring r2" /></div>
        <div className="absolute inset-0" style={p(0.24)}><div className="q-ring r1" /></div>
        <div style={p(0.3)} className="absolute inset-0">
          <img
            src={robotImg}
            alt=""
            width={1024}
            height={1024}
            className="q-robot"
            draggable={false}
          />
        </div>

        {/* Floating service cards the robot is "viewing" */}
        <div className="absolute inset-0 hidden md:block">
          {FLOATING_SERVICES.map(({ Icon, label, tag, pos, delay, depth }, i) => (
            <div
              key={i}
              className={`q-float-card absolute ${pos}`}
              style={{ animationDelay: delay, ...p(-depth * 0.35) }}
            >
              <div className="q-svc-card">
                <div className="q-svc-icon">
                  <Icon className="h-4 w-4 text-white" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold leading-tight text-white">{label}</span>
                  <span className="text-[10px] uppercase tracking-[2px] text-[color:var(--color-q-muted)]">{tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(3,4,10,0.85) 75%, #020604 100%)",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <div className="q-hero-stagger flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] text-white"
            style={{
              border: "1px solid rgba(16,185,129,0.5)",
              background: "rgba(16,185,129,0.1)",
            }}
          >
            <span className="q-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ✦ NOW ACCEPTING PROJECTS
          </div>

          <h1 className="q-hero-title mt-8 font-display font-extrabold leading-[1.05] tracking-[-0.01em] text-white text-[clamp(3rem,9vw,88px)]">
            WE BUILD
          </h1>
          <h1 className="q-hero-title font-display font-extrabold leading-[1.05] tracking-[-0.01em] gradient-text text-[clamp(3rem,9vw,88px)]">
            DIGITAL FUTURES
          </h1>

          <p className="q-hero-sub mt-5 text-[18px] text-[color:var(--color-q-muted)]">
            AI Agents · Mobile Apps · Websites · Automation
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary-q">Start a Project</a>
            <a href="#services" className="btn-ghost-q">Explore Services</a>
          </div>

          <div className="mt-16 grid grid-cols-3 items-center gap-6 text-white sm:gap-12">
            <div>
              <div className="font-display text-4xl font-bold sm:text-5xl">
                <CountUp end={120} />
              </div>
              <div className="mt-2 text-[13px] text-[color:var(--color-q-muted)]">Projects Done</div>
            </div>
            <div className="border-x border-white/10 px-6">
              <div className="font-display text-4xl font-bold sm:text-5xl">
                <CountUp end={85} />
              </div>
              <div className="mt-2 text-[13px] text-[color:var(--color-q-muted)]">Happy Clients</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold sm:text-5xl">
                <CountUp end={99} suffix="%" />
              </div>
              <div className="mt-2 text-[13px] text-[color:var(--color-q-muted)]">Satisfaction</div>
            </div>
          </div>

          <div
            className="q-marquee relative mt-12 w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="q-marquee-track flex w-max whitespace-nowrap">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
                <span
                  key={i}
                  className="px-8 text-[11px] uppercase text-[color:var(--color-q-muted)]"
                  style={{ letterSpacing: "3px" }}
                >
                  {t} ✦
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
