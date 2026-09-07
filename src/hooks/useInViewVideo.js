import { useEffect, useRef } from "react";

// 화면에 보이면 muted 재생, 거의 사라지면 pause.
export default function useInViewVideo() {
  const boxRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const video = videoRef.current;
    if (!box || !video) return undefined;

    let visible = true;

    const play = () => {
      if (!visible) return;
      video.muted = true;
      const run = video.play();
      if (run) run.catch(() => {});
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting) && (entry.intersectionRatio ?? 0) > 0.12;
        if (visible) play();
        else video.pause();
      },
      { threshold: [0, 0.12, 0.4, 0.8] },
    );
    io.observe(box);
    play();

    return () => {
      io.disconnect();
      video.pause();
    };
  }, []);

  return { boxRef, videoRef };
}
