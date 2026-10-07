'use client';

import { useEffect, useState } from 'react';
import { CASE_TAB_EVENT } from '@/components/CaseTabs';

interface CaseTabTextProps {
  texts: string[];
}

/**
 * CaseTabs で選択中のタブに合わせて表示を切り替えるテキスト。
 * （ヒーローに選択中の人物の役職・名前を出すのに使う）
 */
export default function CaseTabText({ texts }: CaseTabTextProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onChange = (e: Event) => setActive((e as CustomEvent<number>).detail);
    window.addEventListener(CASE_TAB_EVENT, onChange);
    return () => window.removeEventListener(CASE_TAB_EVENT, onChange);
  }, []);

  return <>{texts[active] ?? texts[0]}</>;
}
