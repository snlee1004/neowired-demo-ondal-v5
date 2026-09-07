import { useState } from "react";
import { faqs } from "../content/site.js";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-[800px] px-5">
        <p className="text-sm tracking-widest text-brand">FAQ</p>
        <h2 className="mt-3 font-serif text-3xl">
          고객님들의{" "}
          <span className="text-2xl">자주 하시는 질문</span>
        </h2>
        <div className="mt-10 divide-y divide-brand/30 border-y border-brand/30">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 py-5 text-left"
                onClick={() => setOpen((n) => (n === i ? -1 : i))}
                aria-expanded={open === i}
              >
                <span className="font-medium">{f.q}</span>
                <span className="text-brand">{open === i ? "−" : "+"}</span>
              </button>
              {open === i ? <p className="pb-5 text-sm leading-relaxed text-ink/80">{f.a}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
