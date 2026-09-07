import { useState } from "react";
import { reviews } from "../content/site.js";

export default function Reviews() {
  const [i, setI] = useState(0);
  const cur = reviews[i];
  if (!cur) return null;

  const prev = () => setI((n) => (n === 0 ? reviews.length - 1 : n - 1));
  const next = () => setI((n) => (n === reviews.length - 1 ? 0 : n + 1));

  return (
    <section id="reviews" className="bg-[#f6f3f1] py-10 md:py-12">
      <div className="mx-auto max-w-[800px] px-5 text-center">
        <p className="text-sm tracking-widest text-brand">REVIEWS</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">당신의 미소 이야기에 함께하고 싶습니다</h2>
        <blockquote className="mt-6 text-left text-base leading-relaxed text-ink/90 md:text-lg">
          “{cur.text}”
        </blockquote>
        <p className="mt-4 text-sm text-brand">
          {cur.name}({cur.age}세) / {cur.treatment}
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <button type="button" onClick={prev} className="border border-ink px-4 py-2 text-sm">
            이전
          </button>
          <button type="button" onClick={next} className="border border-ink px-4 py-2 text-sm">
            다음
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`${idx + 1}번째 후기`}
              onClick={() => setI(idx)}
              className={`h-1.5 w-1.5 rounded-full ${idx === i ? "bg-ink" : "bg-ink/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
