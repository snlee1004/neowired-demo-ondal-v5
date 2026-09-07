import { videos } from "../content/site.js";

export default function CTA({ onBook }) {
  return (
    <section className="relative overflow-hidden py-32 text-center text-cream">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videos.smile}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/cosmetic-dentistry-smile-profile.jpg"
      />
      <div className="absolute inset-0 bg-night/70" />
      <div className="relative z-10 mx-auto max-w-[800px] px-5">
        <p className="font-serif text-[56px] font-extralight leading-none md:text-[72px]">준비가 된</p>
        <h2 className="mt-3 font-sans text-[22px] font-light md:text-[28px]">당신이 꿈꾸는 미소를 위해?</h2>
        <button type="button" onClick={onBook} className="mt-10 bg-brand px-10 py-3 text-[13px] font-light text-cream">
          1분 간편 예약
        </button>
      </div>
    </section>
  );
}
