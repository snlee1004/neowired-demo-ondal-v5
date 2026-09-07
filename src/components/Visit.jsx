import { clinic, mapImg } from "../content/site.js";
import ImgSlot from "./ImgSlot.jsx";

export default function Visit() {
  return (
    <section id="visit" className="bg-[#f6f3f1] py-20">
      <div className="mx-auto grid max-w-[1140px] items-center gap-10 px-5 md:grid-cols-2">
        <div>
          <p className="text-sm tracking-widest text-brand">VISIT</p>
          <h2 className="mt-3 font-serif text-3xl">저희를 방문해 주세요</h2>
          <p className="mt-6 text-sm">주소 {clinic.address}</p>
          <p className="mt-2 text-sm">전화 {clinic.phone}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">{clinic.hours}</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e4e6]">
          <ImgSlot src={mapImg} alt="오시는 길 지도 슬롯" />
          <svg className="map-pin" width="28" height="40" viewBox="0 0 28 40" aria-hidden="true">
            <path
              d="M14 0C6.8 0 1 5.9 1 13.2c0 9.2 13 26.8 13 26.8s13-17.6 13-26.8C27 5.9 21.2 0 14 0Z"
              fill="#ea4335"
            />
            <circle cx="14" cy="13" r="5.2" fill="#fff" />
          </svg>
        </div>
      </div>
    </section>
  );
}
