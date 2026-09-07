import { clinic } from "../content/site.js";

function PhoneIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.2 2.4h2.1l.8 2.1-1.3 1.3a9 9 0 0 0 5.4 5.4l1.3-1.3 2.1.8v2.1c0 .6-.5 1.1-1.1 1.1C6.6 14 2 9.4 2 3.5c0-.6.5-1.1 1.2-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const press =
  "transition duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(49,42,35,0.18)] active:translate-y-0 active:scale-[0.94] active:shadow-none";

export default function FloatingCtas({ onBook, onKakao }) {
  return (
    <aside
      className="fixed right-3 bottom-20 z-40 flex w-[92px] flex-col gap-2"
      aria-label="빠른 연락"
    >
      <a
        href={`tel:${clinic.phone.replaceAll("-", "")}`}
        className={`flex flex-col items-center gap-1 border border-ink bg-cream px-2 py-2.5 text-center text-[11px] font-normal leading-tight text-ink shadow-[0_8px_28px_rgba(49,42,35,0.12)] ${press}`}
      >
        <PhoneIcon />
        전화
      </a>
      <button
        type="button"
        onClick={onKakao}
        className={`bg-[#FEE500] px-2 py-2.5 text-[11px] font-normal leading-tight text-ink shadow-[0_8px_28px_rgba(49,42,35,0.12)] ${press}`}
      >
        카카오톡
        <br />
        문의
      </button>
      <button
        type="button"
        onClick={onBook}
        className={`bg-ink px-2 py-2.5 text-[11px] font-normal leading-tight text-cream shadow-[0_8px_28px_rgba(49,42,35,0.12)] ${press}`}
      >
        네이버
        <br />
        예약
      </button>
    </aside>
  );
}
