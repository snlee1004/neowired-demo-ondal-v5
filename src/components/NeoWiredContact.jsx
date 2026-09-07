import { useState } from "react";

const FORMSPREE = "https://formspree.io/f/meaqeayd";
const SITE_OPTS = ["아직 없습니다", "있는데 손봐야 합니다", "있고 만족합니다"];
const inputCls =
  "w-full border-b border-slate-600 bg-transparent px-1 py-2.5 text-base text-slate-100 placeholder:text-slate-500 focus:border-[#C9A961] focus:outline-none";

function IconAlert() {
  return (
    <svg className="mt-1 h-4 w-4 shrink-0 text-[#C9A961]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16.2" r="0.9" fill="currentColor" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="h-4 w-4 text-[#C9A961]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.2 2.4h2.1l.8 2.1-1.3 1.3a9 9 0 0 0 5.4 5.4l1.3-1.3 2.1.8v2.1c0 .6-.5 1.1-1.1 1.1C6.6 14 2 9.4 2 3.5c0-.6.5-1.1 1.2-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="h-4 w-4 text-[#C9A961]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconDone() {
  return (
    <svg className="h-6 w-6 text-[#C9A961]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12.5 11 15.5 16.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function NeoWiredContact() {
  const [clinic, setClinic] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [siteStatus, setSiteStatus] = useState("");
  const [status, setStatus] = useState("idle");

  const ready =
    clinic.trim() !== "" &&
    name.trim() !== "" &&
    phone.trim() !== "" &&
    email.trim() !== "" &&
    siteStatus !== "";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!ready || status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[NeoWired] ${clinic} 제작문의`,
          병원명: clinic,
          담당자명: name,
          연락처: phone,
          email,
          현재홈페이지: siteStatus,
          유입경로: "온담치과 강남점 데모",
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="neowired-contact-section"
      aria-labelledby="neowired-heading"
      className="border-t-4 border-[#C9A961] bg-[#181818] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-7 lg:col-span-6">
            <div className="flex items-start gap-3 border-l-2 border-[#C9A961] pl-4">
              <IconAlert />
              <p className="text-sm leading-relaxed text-slate-400">
                여기까지가 데모입니다. 온담치과의원은 실재하지 않는 가상의 병원이고, 원장 이름과 진료
                내용도 예시로 만든 것입니다. 이 페이지 전체를 NeoWired가 제작했습니다.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide text-[#C9A961]">NeoWired</p>
              <h2
                id="neowired-heading"
                className="text-2xl font-bold leading-snug tracking-tight text-slate-50 sm:text-3xl lg:text-4xl"
              >
                검색이 아니라 AI가
                <br />
                병원을 찾는 시대의 홈페이지
              </h2>
            </div>

            <div className="max-w-xl space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              <p>
                위에서 보신 화면은 사람이 읽기 좋게 만든 동시에, AI 검색이 병원 정보를 정확히 읽어가도록
                구조를 짜둔 것입니다. 진료과목과 위치, 자주 묻는 질문이 기계가 인용할 수 있는 형태로
                들어가 있습니다.
              </p>
              <p>
                연락처를 남겨주시면 병원 상황에 맞춘 제안서를 보내드립니다. 제작 범위와 견적, 예상 일정이
                담겨 있습니다.
              </p>
            </div>

            <div className="space-y-2.5 border-t border-slate-700/60 pt-4">
              <p className="text-sm font-semibold text-slate-200">
                이성노 <span className="font-normal text-slate-400">· Lead Architect</span>
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href="tel:01095588892"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-[#C9A961]"
                >
                  <IconPhone />
                  <span>010-9558-8892</span>
                </a>
                <a
                  href="mailto:elosys1004@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-[#C9A961]"
                >
                  <IconMail />
                  <span>elosys1004@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:col-span-6">
            <div className="rounded-2xl border border-slate-700/60 bg-[#222] p-6 sm:p-8">
              {status === "done" ? (
                <div className="space-y-4 py-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A961]/15">
                    <IconDone />
                  </div>
                  <h3 className="text-xl font-bold text-slate-50">접수됐습니다</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-slate-300">
                    남겨주신 메일로 영업일 기준 하루 안에 제안서를 보내드리겠습니다. 급하시면
                    010-9558-8892로 바로 연락 주셔도 됩니다.
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={onSubmit}>
                  <div>
                    <label htmlFor="nw-clinic" className="mb-2 block text-sm font-medium text-slate-300">
                      병원명
                    </label>
                    <input
                      id="nw-clinic"
                      type="text"
                      value={clinic}
                      onChange={(e) => setClinic(e.target.value)}
                      placeholder="병원명을 입력해주세요"
                      autoComplete="organization"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="nw-name" className="mb-2 block text-sm font-medium text-slate-300">
                      담당자명
                    </label>
                    <input
                      id="nw-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="담당자를 입력해주세요"
                      autoComplete="name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="nw-phone" className="mb-2 block text-sm font-medium text-slate-300">
                      연락처
                    </label>
                    <input
                      id="nw-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      autoComplete="tel"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="nw-email" className="mb-2 block text-sm font-medium text-slate-300">
                      이메일
                    </label>
                    <input
                      id="nw-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="제안서를 받으실 주소"
                      autoComplete="email"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <span id="nw-site-label" className="mb-2.5 block text-sm font-medium text-slate-300">
                      지금 홈페이지가 있으신가요
                    </span>
                    <div className="flex flex-wrap gap-2" role="group" aria-labelledby="nw-site-label">
                      {SITE_OPTS.map((opt) => {
                        const on = siteStatus === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSiteStatus(opt)}
                            aria-pressed={on}
                            className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] ${
                              on
                                ? "border-[#C9A961] bg-[#C9A961]/10 font-semibold text-[#C9A961]"
                                : "border-slate-600 text-slate-300 hover:border-slate-400"
                            }`}
                          >
                            {on ? <IconCheck /> : null}
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!ready || status === "sending"}
                      className="min-h-[48px] w-full rounded-lg bg-[#C9A961] py-4 text-base font-bold text-[#0F1B2D] transition-all hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100"
                    >
                      {status === "sending" ? "보내는 중" : "제안서 받기"}
                    </button>
                  </div>
                  {status === "error" ? (
                    <p className="text-sm leading-relaxed text-rose-300">
                      전송이 되지 않았습니다. 잠시 후 다시 눌러보시거나 010-9558-8892로 연락 주세요.
                    </p>
                  ) : null}
                  <p className="text-xs leading-relaxed text-slate-500">
                    받은 정보는 제안서 발송과 상담 목적으로만 쓰고, 그 외에는 사용하지 않습니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
