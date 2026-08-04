'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Magazine } from './MagazineList';

interface MagazineViewerProps {
  magazine: Magazine;
  onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;

const pageUrl = (base: string, page: number) =>
  `${base}/p${String(page).padStart(2, '0')}.jpg`;

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

// 見開き（PC）: 表紙は1枚、以降は 2-3, 4-5 ... と並べる。SPは1ページずつ。
function buildSpreads(pages: number, double: boolean): number[][] {
  if (!double) return Array.from({ length: pages }, (_, i) => [i + 1]);
  const spreads: number[][] = [[1]];
  for (let p = 2; p <= pages; p += 2) {
    spreads.push(p + 1 <= pages ? [p, p + 1] : [p]);
  }
  return spreads;
}

export default function MagazineViewer({ magazine, onClose }: MagazineViewerProps) {
  const [double, setDouble] = useState(true);
  const [current, setCurrent] = useState(1); // 表示中の見開きの先頭ページ
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const stageRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const pointersRef = useRef(new Map<number, { x: number; y: number }>());
  const pinchRef = useRef<{ dist: number; scale: number } | null>(null);
  // 連続したホイール/ピンチ操作でも直前の値を正しく参照できるようにする
  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  // 直近のページ送り時刻。連打がダブルクリック拡大として拾われるのを防ぐ
  const lastNavRef = useRef(0);

  // 画面幅で見開き / 単ページを切り替える
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const apply = () => setDouble(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const spreads = useMemo(
    () => buildSpreads(magazine.pages, double),
    [magazine.pages, double]
  );
  const index = Math.max(
    0,
    spreads.findIndex((s) => s.includes(current))
  );
  const spread = spreads[index] ?? [1];

  // 拡大しすぎて誌面が画面外に流れないよう移動量を制限する
  const clampOffset = useCallback((x: number, y: number, s: number) => {
    const el = stageRef.current;
    if (!el || s <= 1) return { x: 0, y: 0 };
    const limitX = ((s - 1) * el.clientWidth) / 2;
    const limitY = ((s - 1) * el.clientHeight) / 2;
    return { x: clamp(x, -limitX, limitX), y: clamp(y, -limitY, limitY) };
  }, []);

  const applyView = useCallback((s: number, o: { x: number; y: number }) => {
    scaleRef.current = s;
    offsetRef.current = o;
    setScale(s);
    setOffset(o);
  }, []);

  const resetZoom = useCallback(() => applyView(1, { x: 0, y: 0 }), [applyView]);

  // カーソル位置を基点に拡大縮小する
  const zoomAt = useCallback(
    (clientX: number | null, clientY: number | null, nextScale: number) => {
      const el = stageRef.current;
      const s2 = clamp(nextScale, MIN_SCALE, MAX_SCALE);
      if (!el) return;
      if (s2 === 1) {
        resetZoom();
        return;
      }
      const rect = el.getBoundingClientRect();
      const cx = clientX === null ? rect.width / 2 : clientX - rect.left;
      const cy = clientY === null ? rect.height / 2 : clientY - rect.top;
      const px = cx - rect.width / 2;
      const py = cy - rect.height / 2;
      const s1 = scaleRef.current;
      const o = offsetRef.current;
      const ux = (px - o.x) / s1;
      const uy = (py - o.y) / s1;
      applyView(s2, clampOffset(px - ux * s2, py - uy * s2, s2));
    },
    [clampOffset, applyView, resetZoom]
  );

  const go = useCallback(
    (delta: number) => {
      const next = index + delta;
      if (next < 0 || next >= spreads.length) return;
      lastNavRef.current = Date.now();
      setCurrent(spreads[next][0]);
      resetZoom();
    },
    [index, spreads, resetZoom]
  );

  // ホイール / トラックパッドでの拡大（ページ側のスクロールは止める）
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, scaleRef.current * Math.exp(-e.deltaY * 0.0015));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [zoomAt]);

  // キーボード操作 & 背面スクロールのロック
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Escape') onClose();
      else if (e.key === '+' || e.key === '=') zoomAt(null, null, scale + 0.5);
      else if (e.key === '-' || e.key === '_') zoomAt(null, null, scale - 0.5);
      else if (e.key === '0') resetZoom();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [go, onClose, zoomAt, resetZoom, scale]);

  // 前後の見開きを先読みしておく
  useEffect(() => {
    [index - 1, index + 1].forEach((i) => {
      spreads[i]?.forEach((p) => {
        const img = new Image();
        img.src = pageUrl(magazine.pageBase, p);
      });
    });
  }, [index, spreads, magazine.pageBase]);

  /* ───── ドラッグ移動 / ピンチ拡大 ───── */
  const onPointerDown = (e: React.PointerEvent) => {
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointersRef.current.size === 2) {
      const [a, b] = [...pointersRef.current.values()];
      pinchRef.current = {
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        scale: scaleRef.current,
      };
      dragRef.current = null;
      return;
    }
    if (scaleRef.current > 1) {
      (e.target as Element).setPointerCapture?.(e.pointerId);
      dragRef.current = {
        x: e.clientX,
        y: e.clientY,
        ox: offsetRef.current.x,
        oy: offsetRef.current.y,
      };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointersRef.current.has(e.pointerId)) return;
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointersRef.current.size === 2 && pinchRef.current) {
      const [a, b] = [...pointersRef.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const ratio = dist / pinchRef.current.dist;
      zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, pinchRef.current.scale * ratio);
      return;
    }

    const d = dragRef.current;
    if (!d) return;
    const next = clampOffset(
      d.ox + (e.clientX - d.x),
      d.oy + (e.clientY - d.y),
      scaleRef.current
    );
    offsetRef.current = next;
    setOffset(next);
  };

  // ページ送りボタンを素早く2回押したときに、ダブルクリック拡大が誤発火しないようにする
  const onStageDoubleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a, input')) return;
    // ページ送り直後（ボタンが消える・切り替わる瞬間）の2回目のクリックも無視する
    if (Date.now() - lastNavRef.current < 500) return;
    zoomAt(e.clientX, e.clientY, scaleRef.current > 1 ? 1 : 2);
  };

  const endPointer = (e: React.PointerEvent) => {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) pinchRef.current = null;
    if (pointersRef.current.size === 0) dragRef.current = null;
  };

  const title = `Bizrea Vol.${String(magazine.vol).padStart(2, '0')}`;
  const canPrev = index > 0;
  const canNext = index < spreads.length - 1;
  const zoomed = scale > 1;

  const iconBtn =
    'w-8 h-8 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 disabled:opacity-30 disabled:hover:bg-white/15 transition-colors';

  return (
    <div className="fixed inset-x-0 bottom-0 top-20 max-lg:top-16 z-[90] bg-[#1F1F1F] flex flex-col">
      {/* 上部バー */}
      <div className="relative flex items-center justify-between px-4 py-3 max-lg:px-3 max-lg:py-2 bg-black/40">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 bg-white/95 text-[#222222] text-[13px] max-lg:text-[12px] font-medium px-4 py-2 max-lg:px-3 rounded-[4px] hover:bg-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          一覧に戻る
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 max-lg:hidden">
          <button onClick={() => go(-1)} disabled={!canPrev} aria-label="前のページ" className={iconBtn}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-center">
            <p className="text-white text-[14px] font-medium leading-tight">{title}</p>
            <p className="text-white/60 text-[12px] leading-tight">
              {spread.join('-')} / {magazine.pages}
            </p>
          </div>
          <button onClick={() => go(1)} disabled={!canNext} aria-label="次のページ" className={iconBtn}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* 拡大縮小 */}
          <div className="flex items-center gap-1.5 mr-1">
            <button
              onClick={() => zoomAt(null, null, scale - 0.5)}
              disabled={scale <= MIN_SCALE}
              aria-label="縮小"
              className={iconBtn}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
              </svg>
            </button>
            <button
              onClick={resetZoom}
              aria-label="拡大率をリセット"
              className="text-white/70 text-[12px] tabular-nums w-11 text-center hover:text-white transition-colors"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              onClick={() => zoomAt(null, null, scale + 0.5)}
              disabled={scale >= MAX_SCALE}
              aria-label="拡大"
              className={iconBtn}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>

          <a
            href={magazine.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/95 text-[#222222] text-[13px] max-lg:text-[12px] font-medium px-4 py-2 max-lg:px-3 rounded-[4px] hover:bg-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            PDF
          </a>
        </div>
      </div>

      {/* 誌面 */}
      <div
        ref={stageRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        onDoubleClick={onStageDoubleClick}
        className={`relative flex-1 min-h-0 flex items-center justify-center px-16 py-5 max-lg:px-3 max-lg:py-3 overflow-hidden touch-none select-none ${
          zoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
        }`}
      >
        <div
          className="flex h-full items-center justify-center gap-0.5"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transition: dragRef.current ? 'none' : 'transform 150ms ease-out',
            willChange: 'transform',
          }}
        >
          {spread.map((p) => (
            <img
              key={p}
              src={pageUrl(magazine.pageBase, p)}
              alt={`${title} ${p}ページ`}
              draggable={false}
              className="h-full max-h-full w-auto object-contain shadow-[0_4px_24px_rgba(0,0,0,0.5)] bg-white"
            />
          ))}
        </div>

        {/* 左右の送り（拡大中はドラッグ移動を優先して隠す） */}
        {!zoomed && (
          <>
            <button
              onClick={() => go(-1)}
              disabled={!canPrev}
              aria-label="前のページ"
              className="absolute left-3 max-lg:left-1 top-1/2 -translate-y-1/2 w-12 h-12 max-lg:w-9 max-lg:h-9 rounded-full bg-white/90 text-[#222222] flex items-center justify-center shadow-lg hover:bg-white disabled:opacity-25 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              disabled={!canNext}
              aria-label="次のページ"
              className="absolute right-3 max-lg:right-1 top-1/2 -translate-y-1/2 w-12 h-12 max-lg:w-9 max-lg:h-9 rounded-full bg-white/90 text-[#222222] flex items-center justify-center shadow-lg hover:bg-white disabled:opacity-25 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* 下部：ページスライダー */}
      <div className="px-6 py-3 max-lg:px-4 max-lg:py-2 bg-black/40 flex items-center gap-4">
        <span className="text-white/60 text-[12px] tabular-nums w-16 max-lg:w-12 shrink-0">
          {spread.join('-')}
        </span>
        <input
          type="range"
          min={0}
          max={Math.max(0, spreads.length - 1)}
          value={index}
          onChange={(e) => {
            setCurrent(spreads[Number(e.target.value)][0]);
            resetZoom();
          }}
          aria-label="ページを移動"
          className="flex-1 h-1 accent-white cursor-pointer"
        />
        <span className="text-white/60 text-[12px] tabular-nums w-16 max-lg:w-12 shrink-0 text-right">
          {magazine.pages}
        </span>
      </div>
    </div>
  );
}
