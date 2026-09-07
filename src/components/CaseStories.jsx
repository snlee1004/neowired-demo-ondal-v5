import { caseStories } from "../content/site.js";
import ImgSlot from "./ImgSlot.jsx";

export default function CaseStories() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-[1140px] px-5">
        <p className="text-sm tracking-widest text-brand">CASE STORIES</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">전문의가 이끌 때 가능한 일</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {caseStories.map((c) => (
            <article key={c.title}>
              <div className="shadow-[0_8px_28px_rgba(49,42,35,0.12)]">
                <div className="aspect-[4/3] overflow-hidden bg-[#e8e4e6]">
                  <ImgSlot src={c.photo} alt={c.title} />
                </div>
              </div>
              <p className="mt-4 text-xs tracking-widest text-brand">{c.topic}</p>
              <h3 className="mt-1 font-serif text-xl">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
