// SNSアイコン。単色版（フッター用）は色を currentColor、大きさは className で指定する

const TIKTOK_PATH =
  "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z";

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.2 9.4v5.2l4.4-2.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={TIKTOK_PATH} />
    </svg>
  );
}

// 色付きのアプリアイコン風（SNS案内エリア用）。グラデーションの id はページ内で1回だけ使う前提
export function InstagramColorIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <radialGradient id="sns-ig-grad" cx="0.3" cy="1.07" r="1.3">
          <stop offset="0" stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="5.5" fill="url(#sns-ig-grad)" />
      <g fill="none" stroke="#fff" strokeWidth={1.8}>
        <rect x="4.5" y="4.5" width="15" height="15" rx="4.4" />
        <circle cx="12" cy="12" r="3.6" />
      </g>
      <circle cx="16.6" cy="7.4" r="1" fill="#fff" />
    </svg>
  );
}

export function TikTokColorIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" rx="5.5" fill="#000" />
      {/* 音符マークを水色・赤・白の3枚重ねにして、ずらした分だけ色が見えるようにする */}
      <g transform="translate(3.4 3.6) scale(0.7)">
        <path d={TIKTOK_PATH} fill="#25F4EE" transform="translate(-0.9 -0.9)" />
        <path d={TIKTOK_PATH} fill="#FE2C55" transform="translate(0.9 0.9)" />
        <path d={TIKTOK_PATH} fill="#fff" />
      </g>
    </svg>
  );
}

export function YouTubeColorIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" rx="5.5" fill="#FF0000" />
      <path d="M9.6 7.8v8.4l7.2-4.2z" fill="#fff" />
    </svg>
  );
}
