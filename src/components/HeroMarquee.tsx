'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { getCompanyById } from '@data/companies';
import { FadeInUp } from './animations';

// ノリさん / 竹代さん / 前野さん / ホニックさん / 松浦さん / フォレストさん
const HERO_IDS = [
  'norida-garden',
  'takeyo',
  'unagi',
  'honic',
  'kiso',
  'forest-toyota',
];

// メインビジュアルでのみ名前の上に添える所属表記（カード一覧・詳細ページには出さない）
const HERO_AFFILIATIONS: Record<string, string> = {
  'norida-garden': 'nobodyknows＋ 所属メンバー',
};

// 1セットの幅が画面幅を下回ると右端に隙間ができるため、6社を2周ぶん並べて1セットとする
const SET = [...HERO_IDS, ...HERO_IDS];

// カード幅300px + 左右余白72px = 372px 間隔なので、拡大は隣と重ならない範囲（〜1.18倍 = 354px）に収める
const HOVER_BOOST = 0.18; // ホバー時の拡大率（+18%）
const HOVER_EASE = 0.12; // 1フレームあたりの追従率（約0.4秒でなめらかに拡大しきる）

export default function HeroMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>('[data-hero-card]'));
    // ホバー拡大の進捗（0→1）。transform は毎フレーム上書きするので、CSSトランジションではなくここで補間する
    const hover = new Array(cards.length).fill(0);

    // mouseenter/mouseleave は「カーソルが止まったままカードだけが動く」場面で発火しないため、
    // カーソル座標とカードの位置を毎フレーム突き合わせてホバー判定する
    let pointer: { x: number; y: number } | null = null;
    const onMove = (e: PointerEvent) => (pointer = { x: e.clientX, y: e.clientY });
    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget) pointer = null;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerout', onOut, { passive: true });

    let raf = 0;
    const loop = () => {
      // 先に全カードの位置を読んでから、まとめて書き込む（レイアウトの往復を避ける）
      const rects = cards.map((c) => c.getBoundingClientRect());

      let hoveredIndex = -1;
      if (pointer) {
        for (let i = 0; i < rects.length; i++) {
          const r = rects[i];
          if (
            pointer.x >= r.left &&
            pointer.x <= r.right &&
            pointer.y >= r.top &&
            pointer.y <= r.bottom
          ) {
            hoveredIndex = i; // 重なっている場合は手前（後ろの要素）を優先
          }
        }
      }

      cards.forEach((c, i) => {
        const target = i === hoveredIndex ? 1 : 0;
        const next = hover[i] + (target - hover[i]) * HOVER_EASE;
        hover[i] = Math.abs(target - next) < 0.001 ? target : next;

        c.style.transform = `scale(${1 + HOVER_BOOST * hover[i]})`;
        c.style.zIndex = String(10 + Math.round(hover[i] * 30));
        c.style.boxShadow =
          hover[i] > 0.01
            ? `0 ${12 + 12 * hover[i]}px ${32 + 20 * hover[i]}px rgba(27,45,79,${0.18 + 0.14 * hover[i]})`
            : '';
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerout', onOut);
    };
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-20 max-lg:gap-10 pt-40 max-lg:pt-28 pb-28 max-lg:pb-16">
      {/* ページを開いたときにふわっと出す */}
      <div className="flex flex-col items-center gap-6 max-lg:gap-4">
        <FadeInUp
          as="h1"
          delay={200}
          duration={1200}
          distance={24}
          className="text-[44px] max-lg:text-[26px] font-medium text-[#1B2D4F] leading-[1.4] text-center px-6"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {/* SPでは「代表者の想いを、」で改行して2行に収める */}
          代表者の想いを、<br className="lg:hidden" />伝わるコンテンツに。
        </FadeInUp>

        {/* 提供コンテンツの並び。区切りの × だけ少し薄くして単語を読みやすくする */}
        <FadeInUp
          as="p"
          delay={500}
          duration={1200}
          distance={16}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 text-[15px] max-lg:text-[11px] font-medium tracking-[0.18em] text-[#1B2D4F]/85 text-center"
        >
          {['INTERVIEW', 'MAGAZINE', 'MOVIE', 'SNS', 'WEB'].map((label, i) => (
            <span key={label} className="flex items-center gap-x-3">
              {i > 0 && (
                <span className="text-[#1B2D4F]/45" aria-hidden>
                  &times;
                </span>
              )}
              {label}
            </span>
          ))}
        </FadeInUp>
      </div>

      {/* 拡大したカードと影の上下が切れないよう、クリップ枠に余白を持たせる。
          余白ぶんは負のマージンで打ち消し、前後の間隔は元のまま（上下40px / SP 24px）に見せる */}
      <div className="w-full overflow-hidden py-32 max-lg:py-28 -my-[88px]">
        <div ref={trackRef} className="flex w-max items-center animate-marquee-left">
        {/* 同じセットを2つ並べて途切れないループにする */}
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center shrink-0" aria-hidden={set === 1}>
            {SET.map((id, i) => {
              const company = getCompanyById(id);
              const affiliation = HERO_AFFILIATIONS[id] ?? company?.affiliation;
              return (
                <Link
                  key={`${set}-${i}`}
                  data-hero-card
                  href={`/cases/${id}`}
                  tabIndex={set === 1 ? -1 : undefined}
                  className="relative shrink-0 block mx-9 max-lg:mx-5 w-[300px] max-lg:w-[240px] rounded-[6px] overflow-hidden shadow-[0_12px_32px_rgba(27,45,79,0.18)] will-change-transform"
                >
                  {/* 拡大時に画像の角がカードの角丸からはみ出さないよう、画像側にも同じ角丸をかける */}
                  <div className="aspect-square overflow-hidden rounded-t-[6px]">
                    <img
                      className="block w-full h-full object-cover rounded-t-[6px] [backface-visibility:hidden]"
                      src={`/images/presidents/${id}.jpg`}
                      alt={company?.name ?? ''}
                      width={640}
                      height={640}
                      decoding="async"
                    />
                  </div>
                  {/* 所属行を詰めたぶんは下の余白で補い、カードの高さはノリさんのカードと揃える */}
                  <div
                    className={`bg-[#1B2D4F] px-4 pt-4 ${
                      affiliation ? 'pb-4' : 'pb-6'
                    }`}
                  >
                    <p className="text-[11px] text-white/55 truncate">
                      {company?.name}
                    </p>
                    {/* 所属がある企業（ノリさん）だけ行を出し、無い企業は社名と氏名の間隔を少し詰める */}
                    {affiliation ? (
                      <p className="text-[11px] text-white/40 truncate">
                        {affiliation}
                      </p>
                    ) : (
                      <div className="h-2" aria-hidden />
                    )}
                    <p className="mt-1 text-[17px] font-bold text-white leading-snug truncate">
                      {company?.president}
                    </p>
                  </div>
                </Link>
              );
            })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
