import useInViewVideo from "../hooks/useInViewVideo.js";
import { clinic, videos } from "../content/site.js";

export default function Hero({ onBook }) {
  const { boxRef, videoRef } = useInViewVideo();

  return (
    <section
      ref={boxRef}
      id="top"
      className="relative flex h-[70vh] min-h-[460px] max-h-[680px] flex-col justify-end px-5 pb-24 pt-24 md:h-[76vh] md:max-h-[780px]"
    >
      <div className="hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          src={videos.main}
          poster="/images/clinic-modern-interior-reception.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hero-media-mask" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1300px] text-paper">
        <p className="flex flex-wrap items-baseline gap-x-2 font-serif font-extralight leading-none">
          <span className="text-[40px] md:text-[56px]">당신의</span>
          <span className="text-[58px] md:text-[78px]">미소를</span>
          <span className="text-[40px] md:text-[56px]">위한</span>
        </p>
        <p className="mt-2 text-right font-sans text-[20px] font-light uppercase leading-[1.3] tracking-[0.12em] md:text-[36px]">
          임플란트 · 교정 · 심미 진료
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={onBook} className="bg-brand px-6 py-3 text-[13px] font-light text-cream">
              상담 예약하기
            </button>
            <a
              href={`tel:${clinic.phone.replaceAll("-", "")}`}
              className="border border-paper px-6 py-3 text-[13px] font-light text-paper"
            >
              {clinic.phone}
            </a>
          </div>
          <h1 className="max-w-lg text-left font-sans text-[17px] font-light leading-relaxed md:text-right md:text-[18px]">
            {clinic.slogan.replace("온담치과 강남점", "").trimEnd()}{" "}
            <span className="whitespace-nowrap">온담치과 강남점</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
