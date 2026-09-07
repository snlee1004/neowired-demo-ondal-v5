import { clinic, navItems } from "../content/site.js";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t-[5px] border-brand bg-night py-10 text-cream">
      <div className="mx-auto max-w-[720px] px-5">
        <p className="inline-flex items-baseline font-serif text-xl tracking-[0.06em]">
          온담치과{" "}
          <span className="text-[16px]">강남점</span>
          <span className="ml-1.5 text-[11px] font-light tracking-normal text-cream/25">(데모용)</span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-cream/70">
          주소 {clinic.address}
          <span className="mx-2 text-cream/30">·</span>
          전화 {clinic.phone}
        </p>
        <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-cream/80">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 border-t border-cream/15 pt-5 text-xs leading-relaxed text-cream/55">
          <p>
            © {YEAR} 온담치과 강남점
            <span className="ml-1 text-cream/25">(데모용)</span>
            . All rights reserved.
          </p>
          <p className="mt-2">
            본 페이지는 레이아웃 확인용 데모 사이트입니다. 주소·전화번호는 예시이며 실제 병원 정보와 다를 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
