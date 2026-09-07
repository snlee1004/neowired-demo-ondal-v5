import { badges } from "../content/site.js";

export default function Badges() {
  const loop = [...badges, ...badges, ...badges];
  return (
    <section className="overflow-hidden bg-paper py-14">
      <div className="marquee-track flex w-max items-center gap-16 px-6">
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="inline-flex h-[88px] min-w-[260px] items-center justify-center border border-[#d4af37] px-8 font-sans text-[15px] font-light tracking-[0.2em] text-night"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
