import { doctors, doctorsIntro } from "../content/site.js";
import ImgSlot from "./ImgSlot.jsx";

export default function Doctors() {
  return (
    <section id="doctors" className="bg-[#f6f3f1] pb-8 pt-8 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-[1140px] px-5">
        <h2 className="font-serif text-[28px] font-light md:text-[36px]">3인 분과별 전문의 협진</h2>
        <ul className="mt-3 space-y-1 text-[14px] font-normal leading-[1.8] text-ink/90 md:text-[15px]">
          {doctorsIntro.map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <span
                className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]"
                aria-hidden
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {doctors.map((d) => (
            <article key={d.id} className="bg-paper">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e4e6]">
                <ImgSlot src={d.photo} alt={`${d.name} ${d.title}`} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent p-5 text-paper">
                  <h3 className="font-serif text-2xl font-light">
                    {d.name} {d.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-light text-cream/80">{d.specialty}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[14px] font-normal leading-relaxed text-ink/90">“{d.quote}”</p>
                <ul className="mt-4 space-y-1 text-[12px] font-normal text-ink/80">
                  {d.career.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
