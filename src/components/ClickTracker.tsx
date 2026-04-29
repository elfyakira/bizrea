"use client";

import { useEffect } from "react";
import { events, trackEvent } from "@/lib/analytics";

/**
 * グローバルクリックトラッカー
 * 以下を自動で GA4 に送信:
 *   1. data-cta 属性付きの要素クリック → cta_click(name, location)
 *   2. tel: リンク → phone_click
 *   3. mailto: リンク → email_click
 *   4. /contact または #contact へのリンク → contact_link_click
 */
export default function ClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. data-cta 属性 → 明示的 CTA クリック
      const ctaEl = target.closest("[data-cta]") as HTMLElement | null;
      if (ctaEl) {
        const ctaName = ctaEl.dataset.cta || "unknown";
        const location = ctaEl.dataset.ctaLocation || "unknown";
        events.ctaClick(ctaName, location);
        return;
      }

      // 2. tel: リンク
      const phoneLink = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (phoneLink) {
        events.phoneClick();
        return;
      }

      // 3. mailto: リンク
      const mailLink = target.closest('a[href^="mailto:"]') as HTMLAnchorElement | null;
      if (mailLink) {
        const email = mailLink.getAttribute("href")?.replace("mailto:", "") || "";
        trackEvent("email_click", { email });
        return;
      }

      // 4. 問い合わせ系リンク(/contact / #contact)
      const contactLink = target.closest(
        'a[href*="/contact"], a[href$="#contact"], a[href="#contact"]'
      ) as HTMLAnchorElement | null;
      if (contactLink) {
        trackEvent("contact_link_click", {
          href: contactLink.getAttribute("href") || "",
          text: (contactLink.textContent || "").slice(0, 50).trim(),
        });
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
