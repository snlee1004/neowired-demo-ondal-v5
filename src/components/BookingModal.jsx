import { useState } from "react";
import { clinic, services } from "../content/site.js";

const empty = { service: "", date: "", name: "", phone: "", memo: "" };

export default function BookingModal({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(empty);

  if (!open) return null;

  const close = () => {
    setStep(1);
    setForm(empty);
    onClose();
  };

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/60 px-4" onClick={close}>
      <div
        className="w-full max-w-md bg-paper p-6"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="book-title"
      >
        <h2 id="book-title" className="font-serif text-2xl">
          1분 간편 예약
        </h2>
        <p className="mt-1 text-sm text-brand">{step} / 3단계 · 회원가입 없음</p>

        {step === 1 ? (
          <div className="mt-6 space-y-2">
            {services.map((s) => (
              <label key={s.id} className="flex items-center gap-2 border border-brand/30 p-3 text-sm">
                <input
                  type="radio"
                  name="service"
                  value={s.name}
                  checked={form.service === s.name}
                  onChange={set("service")}
                />
                {s.name}
              </label>
            ))}
            <button
              type="button"
              disabled={!form.service}
              onClick={() => setStep(2)}
              className="mt-4 w-full bg-brand py-3 text-sm text-cream disabled:opacity-40"
            >
              다음
            </button>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="mt-6">
            <label className="text-sm">
              희망 일정
              <input
                type="datetime-local"
                value={form.date}
                onChange={set("date")}
                className="mt-2 w-full border border-brand/40 p-2"
              />
            </label>
            <div className="mt-4 flex gap-2">
              <button type="button" onClick={() => setStep(1)} className="flex-1 border border-ink py-3 text-sm">
                이전
              </button>
              <button
                type="button"
                disabled={!form.date}
                onClick={() => setStep(3)}
                className="flex-1 bg-brand py-3 text-sm text-cream disabled:opacity-40"
              >
                다음
              </button>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              close();
            }}
          >
            <input
              required
              placeholder="이름"
              value={form.name}
              onChange={set("name")}
              className="w-full border border-brand/40 p-2 text-sm"
            />
            <input
              required
              placeholder="연락처"
              value={form.phone}
              onChange={set("phone")}
              className="w-full border border-brand/40 p-2 text-sm"
            />
            <textarea
              placeholder="메모 (선택)"
              value={form.memo}
              onChange={set("memo")}
              className="w-full border border-brand/40 p-2 text-sm"
              rows={3}
            />
            <p className="text-xs text-ink/60">
              데모 폼이다. 실제 전송은 없고, 연락처는 {clinic.phone} 로 확인하면 된다.
            </p>
            <div className="flex gap-2">
              <button type="button" onClick={() => setStep(2)} className="flex-1 border border-ink py-3 text-sm">
                이전
              </button>
              <button type="submit" className="flex-1 bg-brand py-3 text-sm text-cream">
                예약 요청
              </button>
            </div>
          </form>
        ) : null}

        <button type="button" onClick={close} className="mt-4 w-full text-sm text-ink/50">
          닫기
        </button>
      </div>
    </div>
  );
}
