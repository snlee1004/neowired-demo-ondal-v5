import { useEffect, useRef, useState } from "react";
import { stats } from "../content/site.js";

function useCount(to, active) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 2000;
    let frame;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      setN(Math.round(to * t));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, active]);
  return n;
}

function StatItem({ item, active }) {
  const n = useCount(item.to, active && !item.text);
  return (
    <div className="flex min-h-[160px] flex-col-reverse justify-between rounded-[7px] bg-brand p-[30px] text-paper">
      <p className="font-sans text-[38px] font-light leading-none md:text-[40px]">
        {item.text ? item.text : n}
        {item.suffix}
      </p>
      <p className="mb-6 font-sans text-[16px] font-light md:text-[18px]">{item.label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setOn(true);
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-20 -mt-[72px] px-5">
      <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((item) => (
          <StatItem key={item.label} item={item} active={on} />
        ))}
      </div>
    </section>
  );
}
