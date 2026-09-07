// 실제 로고 파일이 생기면 이 컴포넌트 안의 SVG만 img로 바꾸면 된다
export default function Logo() {
  return (
    <a href="#top" className="flex min-w-max shrink-0 items-center gap-2.5 text-ink">
      <svg
        className="h-8 w-8 shrink-0"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="15" fill="#908592" />
        <path
          d="M16 8c2.2 0 4 1.5 4 3.4 0 1.1-.5 2.1-1.2 3 .8 1.2 1.4 2.6 1.4 4.1 0 3.3-1.9 5.5-4.2 5.5s-4.2-2.2-4.2-5.5c0-1.5.6-2.9 1.4-4.1C12.5 13.5 12 12.5 12 11.4 12 9.5 13.8 8 16 8Z"
          fill="#312a23"
        />
        <path d="M14.2 18.2h3.6M14.6 20.4h2.8" stroke="#fff8f0" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="inline-flex items-baseline whitespace-nowrap font-serif text-[20px] font-normal tracking-[0.06em] md:text-[22px]">
        온담치과{" "}
        <span className="text-[16px] tracking-[0.06em] md:text-[18px]">강남점</span>
        <span className="ml-1.5 text-[11px] font-light tracking-normal text-ink/25">(데모용)</span>
      </span>
    </a>
  );
}
