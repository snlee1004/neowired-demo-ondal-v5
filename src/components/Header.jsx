import { useState } from "react";
import { navItems } from "../content/site.js";
import Logo from "./Logo.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-ink/10 bg-cream">
      <div className="relative flex flex-nowrap items-center justify-between gap-3 px-4 py-3 md:px-5">
        <Logo />
        <nav className="hidden items-center gap-2 min-[650px]:flex sm:gap-4 xl:gap-6" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-sans text-[12px] font-normal text-ink after:absolute after:bottom-[-6px] after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-[#3f444b] after:transition after:duration-300 hover:after:scale-x-100 sm:text-[14px]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="shrink-0 p-1 min-[650px]:hidden"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
        {open ? (
          <div className="absolute right-3 top-[calc(100%+6px)] z-50 w-[220px] border border-ink/10 bg-cream px-3 py-2 shadow-[0_8px_28px_rgba(49,42,35,0.12)] min-[650px]:hidden">
            <nav aria-label="모바일 메뉴">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-1.5 text-[13px] font-normal text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
