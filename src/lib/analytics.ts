declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export const events = {
  formStart: (formName = "contact") =>
    trackEvent("form_start", { form_name: formName }),
  formSubmit: (formName = "contact") =>
    trackEvent("form_submit", { form_name: formName }),
  ctaClick: (ctaName: string, location: string) =>
    trackEvent("cta_click", { cta_name: ctaName, location }),
  phoneClick: () => trackEvent("phone_click"),
  scrollDepth: (percent: number) =>
    trackEvent("scroll_depth", { percent }),
};
