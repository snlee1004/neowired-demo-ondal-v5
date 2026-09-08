// 실제 로고 파일이 생기면 이 마크만 img로 바꾸면 된다
export default function Logo() {
  return (
    <a href="#top" className="flex min-w-max shrink-0 items-center gap-2.5 text-ink">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-brand font-sans text-[15px] font-bold tracking-tight text-white"
        aria-hidden="true"
      >
        OD
      </span>
      <span className="inline-flex items-baseline whitespace-nowrap font-serif text-[20px] font-normal tracking-[0.06em] md:text-[22px]">
        온담치과{" "}
        <span className="text-[16px] tracking-[0.06em] md:text-[18px]">강남점</span>
        <span className="ml-1.5 text-[11px] font-light tracking-normal text-ink/25">(데모용)</span>
      </span>
    </a>
  );
}
