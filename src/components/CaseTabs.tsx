'use client';

import { ReactNode, useState } from 'react';

interface CaseTabsProps {
  labels: string[];
  panels: ReactNode[];
}

/**
 * 詳細ページで複数人分の記事を切り替えるタブ。
 * パネルの中身はサーバー側で描画したものを受け取り、選択中以外は hidden にする。
 * （DOM に残すことで、タブを切り替えなくても本文が検索エンジンから読める）
 */
export default function CaseTabs({ labels, panels }: CaseTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-2 mb-6 max-lg:mb-4" role="tablist">
        {labels.map((label, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`flex-1 text-[15px] max-lg:text-[13px] font-bold py-3 max-lg:py-2.5 rounded-[4px] transition-colors duration-200 ${
              active === i
                ? 'bg-[#1B2D4F] text-white'
                : 'bg-white text-[#5A5A5A] border border-[#E0DDD8] hover:text-accent'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {panels.map((panel, i) => (
        <div key={i} role="tabpanel" hidden={active !== i}>
          {panel}
        </div>
      ))}
    </div>
  );
}
