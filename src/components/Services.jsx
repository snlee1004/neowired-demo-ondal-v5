import { services } from "../content/site.js";
import ImgSlot from "./ImgSlot.jsx";

export default function Services() {
  return (
    <section id="services" className="bg-[#f6f3f1] py-20">
      <div className="mx-auto max-w-[1140px] px-5">
        <p className="text-sm tracking-widest text-brand">SERVICES</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">무엇이 가능할까요?</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <article key={s.id} className="bg-paper shadow-[0_8px_28px_rgba(49,42,35,0.12)]">
              <div className="aspect-[16/9] overflow-hidden">
                <ImgSlot src={s.photo} alt={s.name} />
              </div>
              <div className="grid grid-cols-[6px_1fr] items-start gap-x-2.5 gap-y-1 p-6">
                <span
                  className="mt-[13px] h-1.5 w-1.5 rounded-full bg-[#d4af37]"
                  aria-hidden
                />
                <h3 className="font-serif text-2xl leading-tight">{s.name}</h3>
                <span aria-hidden />
                <p className="text-brand">{s.tagline}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
