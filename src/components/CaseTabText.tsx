'use client';

import { ReactNode, useEffect, useState } from 'react';
import { CASE_TAB_EVENT } from '@/components/CaseTabs';

interface CaseTabTextProps {
  items: ReactNode[];
}

/**
 * CaseTabs で選択中のタブに合わせて表示を切り替える。
 * （ヒーローの役職・名前や、サイドバーのプロフィールを人物ごとに出すのに使う）
 */
export default function CaseTabText({ items }: CaseTabTextProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onChange = (e: Event) => setActive((e as CustomEvent<number>).detail);
    window.addEventListener(CASE_TAB_EVENT, onChange);
    return () => window.removeEventListener(CASE_TAB_EVENT, onChange);
  }, []);

  return <>{items[active] ?? items[0]}</>;
}
