"use client";

import { useEffect } from "react";
import { events } from "@/lib/analytics";

export default function ScrollTracker() {
  useEffect(() => {
    const sent = new Set<number>();
    const thresholds = [50, 75, 90];

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight <= window.innerHeight) return;
      const scrolled =
        ((window.scrollY + window.innerHeight) / docHeight) * 100;
      thresholds.forEach((t) => {
        if (scrolled >= t && !sent.has(t)) {
          sent.add(t);
          events.scrollDepth(t);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
