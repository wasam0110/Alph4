import ShinyText from "./ShinyText";
const col = (title: string, items: string[]) => (
  <div>
<h4 className="font-display text-[14px] font-bold uppercase tracking-widest">
  <ShinyText text={title} color="#ffffff" shineColor="#4ecca3" speed={3} />
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
      <div className="mx-auto max-w-7xl px-6 py-16">

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
<p className="text-[13px]">
  <ShinyText text="© 2026 Alph4. All rights reserved." color="#888888" shineColor="#4ecca3" speed={3} />
</p>
<p className="text-[13px]">
  <ShinyText text="Privacy Policy · Terms of Service" color="#888888" shineColor="#4ecca3" speed={3} />
</p>
        </div>
      </div>
    </footer>
  );
}
