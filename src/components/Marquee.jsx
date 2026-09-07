import { marqueeItems } from "../content/site.js";

export default function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <section className="overflow-hidden bg-brand py-4">
      <div className="marquee-track flex w-max gap-10">
        {loop.map((t, i) => (
          <span key={`${t}-${i}`} className="whitespace-nowrap text-sm tracking-widest text-cream">
            {t} ·
          </span>
        ))}
      </div>
    </section>
  );
}
