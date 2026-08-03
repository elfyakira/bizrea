'use client';

import { useState } from 'react';
import MagazineViewer from './MagazineViewer';

export type Magazine = {
  vol: number;
  description: string;
  issue: string;
  cover: string;
  pdf: string;
  /** 総ページ数（ビューアのページ送りに使う） */
  pages: number;
  /** 誌面画像の置き場。{pageBase}/p01.jpg … の形で参照する */
  pageBase: string;
  isLatest?: boolean;
};

export default function MagazineList({ magazines }: { magazines: Magazine[] }) {
  const [viewing, setViewing] = useState<Magazine | null>(null);

  return (
    <>
      <div className="mt-14 max-lg:mt-10 grid grid-cols-3 max-lg:grid-cols-2 gap-6 max-lg:gap-4">
        {magazines.map((mag) => {
          const title = `Bizrea Vol.${String(mag.vol).padStart(2, '0')}`;
          return (
            <div key={mag.vol} className="bg-white rounded-[4px] overflow-hidden shadow-sm flex flex-col">
              {/* 表紙画像（クリックでビューアを開く） */}
              <button
                onClick={() => setViewing(mag)}
                aria-label={`${title} を閲覧する`}
                className="block aspect-[3/4] bg-[#E0DDD8] overflow-hidden relative group"
              >
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  src={mag.cover}
                  alt={`${title} 表紙`}
                />
                {mag.isLatest && (
                  <span className="absolute top-3 left-3 bg-accent text-white text-[11px] font-bold px-3 py-1 rounded-sm">
                    最新号
                  </span>
                )}
              </button>
              {/* テキスト */}
              <div className="p-5 max-lg:p-4 flex flex-col flex-1">
                <p className="text-[18px] max-lg:text-[16px] font-medium text-[#222222]">{title}</p>
                <p className="mt-2 text-[13px] max-lg:text-[12px] leading-[1.7] text-[#5A5A5A] line-clamp-3">
                  {mag.description}
                </p>
                <p className="mt-3 text-[12px] text-[#999999]">
                  {mag.issue}・全{mag.pages}ページ
                </p>
                {/* 閲覧 / ダウンロード */}
                <div className="mt-4 flex gap-2 items-stretch">
                  <button
                    onClick={() => setViewing(mag)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1B2D4F] text-white text-[14px] font-medium py-3 rounded-[4px] hover:bg-[#0F1D33] transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    閲覧
                  </button>
                  <a
                    href={mag.pdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} をダウンロード`}
                    className="inline-flex items-center justify-center px-4 border border-[#E0DDD8] text-[#5A5A5A] rounded-[4px] hover:bg-[#F6F4F1] hover:text-[#222222] transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {viewing && <MagazineViewer magazine={viewing} onClose={() => setViewing(null)} />}
    </>
  );
}
