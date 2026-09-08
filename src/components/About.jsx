import useInViewVideo from "../hooks/useInViewVideo.js";
import { aboutPhotos, clinic, videos } from "../content/site.js";
import ImgSlot from "./ImgSlot.jsx";

export default function About() {
  const { boxRef, videoRef } = useInViewVideo();

  return (
    <section id="about" className="bg-paper pb-8 pt-12 md:pb-16 md:pt-16">
      <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-[36px] font-light leading-tight md:text-[48px]">
            전문의가 이끄는
            <br />
            수준 높은 치과 진료
          </h2>
          <p className="mt-4 text-[16px] font-light leading-relaxed text-ink/80">{clinic.subcopy}</p>
          <p className="mt-4 text-[16px] font-light leading-relaxed text-ink/80">
            과잉진료 없이 필요한 치료만. 치료 전 비용과 정품 인증을 서면으로 보여준다.
          </p>
        </div>
        <div className="relative h-[420px] md:h-[520px]">
          <div className="absolute left-0 top-0 z-[1] h-[70%] w-[62%] overflow-hidden">
            <ImgSlot src={aboutPhotos[0].src} alt={aboutPhotos[0].alt} />
          </div>
          <div className="absolute bottom-[8%] right-0 z-[2] h-[48%] w-[48%] overflow-hidden">
            <ImgSlot src={aboutPhotos[1].src} alt={aboutPhotos[1].alt} />
          </div>
          <div className="absolute bottom-0 left-[12%] z-[3] h-[32%] w-[40%] overflow-hidden">
            <ImgSlot src={aboutPhotos[2].src} alt={aboutPhotos[2].alt} />
          </div>
        </div>
      </div>
      <div ref={boxRef} className="mx-auto mt-16 aspect-video max-w-[1140px] overflow-hidden bg-night">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={videos.interior}
          autoPlay
          muted
          loop
          controls
          playsInline
          preload="metadata"
          title="치과 입구 실내 전경"
        />
      </div>
    </section>
  );
}
