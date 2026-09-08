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
    <div className="flex flex-col gap-2 rounded-[7px] bg-brand px-3 py-4 text-paper md:gap-3 md:p-6">
      {/* 모바일 2열이면 라벨이 한 글자씩 떨어지므로 한 줄 고정 */}
      <p className="whitespace-nowrap font-sans text-[12px] font-light leading-none tracking-tight md:text-[18px] md:tracking-normal">
        {item.label}
      </p>
      <p className="font-sans text-[32px] font-light leading-none md:text-[40px]">
        {item.text ? item.text : n}
        {item.suffix}
      </p>
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
