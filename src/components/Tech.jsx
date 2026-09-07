import { useEffect, useRef, useState } from "react";
import { techItems } from "../content/site.js";
import ImgSlot from "./ImgSlot.jsx";

export default function Tech() {
  const [i, setI] = useState(0);
  const videoRef = useRef(null);
  const cur = techItems[i];
  const videoSrc = cur?.video;

  // 탭 클릭은 사용자 제스처라 play()가 통한다. autoPlay만 두면 CT 등은 히어로 영상 때문에 막힌다.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !videoSrc) return undefined;

    const play = () => {
      el.muted = true;
      const run = el.play();
      if (run) run.catch(() => {});
    };

    play();
    el.addEventListener("loadeddata", play);
    el.addEventListener("canplay", play);
    return () => {
      el.removeEventListener("loadeddata", play);
      el.removeEventListener("canplay", play);
      el.pause();
    };
  }, [videoSrc]);

  if (!cur) return null;

  return (
    <section id="tech" className="bg-paper py-20">
      <div className="mx-auto max-w-[1140px] px-5">
        <p className="text-sm tracking-widest text-brand">TECHNOLOGY</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">첨단 치과 기술</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {techItems.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setI(idx)}
              className={`px-4 py-3 text-sm ${
                idx === i ? "bg-accent text-paper" : "bg-[#f1f2f3] text-ink"
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden bg-[#e8e4e6]">
            {cur.video ? (
              <video
                ref={videoRef}
                key={cur.video}
                className="h-full w-full object-cover"
                src={cur.video}
                poster={cur.photo}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
              />
            ) : (
              <ImgSlot src={cur.photo} alt={cur.name} />
            )}
          </div>
          <div>
            <h3 className="font-serif text-2xl">{cur.name}</h3>
            <p className="mt-4 leading-relaxed text-ink/90">{cur.body}</p>
            {Array.isArray(cur.points) ? (
              <ul className="mt-5 space-y-3">
                {cur.points.map((line) => {
                  const sep = line.indexOf(": ");
                  const title = sep > 0 ? line.slice(0, sep) : line;
                  const rest = sep > 0 ? line.slice(sep + 2) : "";
                  return (
                    <li key={line} className="ml-4 list-disc text-[14px] leading-relaxed text-ink/90">
                      <span className="font-medium">{title}</span>
                      {rest ? `: ${rest}` : null}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
