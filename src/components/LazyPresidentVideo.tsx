'use client';

import { useEffect, useRef } from 'react';

interface LazyPresidentVideoProps {
  /** companies の id。/videos/presidents/card/{id}.mp4 と /images/presidents/{id}.jpg を参照する */
  id: string;
  className?: string;
  poster?: string;
}

/**
 * 画面内に入ったときだけ再生する代表者動画。
 * preload="none" + poster により、表示されるまで動画本体を読み込まないので、
 * ページを開いた瞬間に大量の動画がデコードされてカクつくのを防ぐ。
 */
export default function LazyPresidentVideo({
  id,
  className,
  poster,
}: LazyPresidentVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() は再生できない環境（省電力モード等）で reject するため握りつぶす
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={`/videos/presidents/card/${id}.mp4`}
      poster={poster ?? `/images/presidents/${id}.jpg`}
      loop
      muted
      playsInline
      preload="none"
    />
  );
}
