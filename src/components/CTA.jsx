import { videos } from "../content/site.js";

export default function CTA({ onBook }) {
  return (
    <section className="overflow-hidden">
      <div className="relative flex min-h-[280px] items-end justify-center overflow-hidden pb-6 pt-16 text-center text-cream md:min-h-[380px] md:pb-8 md:pt-24">
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
        <div className="relative z-10 mx-auto w-full max-w-[800px] px-5">
          {/* 상단 히어로와 같은 세리프·산세리프 조합 */}
          <p className="font-serif text-[26px] font-extralight leading-none md:text-[56px]">
            준비가 된
          </p>
          <h2 className="mt-2 font-sans text-[20px] font-light uppercase leading-[1.3] tracking-[0.12em] md:text-[36px]">
            당신이 꿈꾸는 미소를 위해?
          </h2>
        </div>
      </div>
      {/* 예약 버튼은 영상 밖, 바로 아래 */}
      <button
        type="button"
        onClick={onBook}
        className="w-full bg-brand py-3 text-[13px] font-light text-cream"
      >
        1분 간편 예약
      </button>
    </section>
  );
}
