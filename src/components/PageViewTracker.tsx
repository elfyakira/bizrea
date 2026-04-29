"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  useEffect(() => {
    if (!pathname) return;
    // 初回 page_view は gtag('config', ID) が自動送信するためスキップ。
    // クライアントサイド遷移(2 回目以降)のみ手動で発火させる。
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;
    trackEvent("page_view", {
      page_path: path,
      page_location: typeof window !== "undefined" ? window.location.href : "",
      page_title: typeof document !== "undefined" ? document.title : "",
    });
  }, [pathname, searchParams]);

  return null;
}
