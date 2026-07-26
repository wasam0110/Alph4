import { Logo } from "./Logo";

const col = (title: string, items: string[]) => (
  <div>
    <h4 className="font-display text-[14px] font-bold uppercase tracking-widest text-white">
      {title}
    </h4>
    <ul className="mt-5 space-y-3">
      {items.map((i) => (
        <li key={i}>
          <a
            href="#"
            className="text-[14px] text-[color:var(--color-q-muted)] transition-colors duration-200 hover:text-white"
          >
            {i}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "#020409",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Logo />
          <a href="#contact" className="btn-primary-q">Start a Project</a>
        </div>

        <div className="my-12 h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {col("Services", [
            "AI Calling Agents",
            "Mobile Apps",
            "Web Development",
            "Automation",
            "E-Commerce",
            "UI/UX Design",
          ])}
          {col("Company", ["About Us", "Portfolio", "Our Process", "Reviews", "Contact"])}
          {col("Contact", [
            "hello@alph4.io",
            "WhatsApp Us",
            "Book a Free Call",
            "Kingdom of Bahrain",
          ])}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[13px] text-[color:var(--color-q-muted)]">
            © 2026 Alph4. All rights reserved.
          </p>
          <p className="text-[13px] text-[color:var(--color-q-muted)]">
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
