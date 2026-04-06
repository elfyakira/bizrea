'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { contact } from "@/lib/site";
import { companies } from "@data/companies";

/* ───────── カウントアップフック ───────── */
function useCountUp(end: number, suffix: string, duration = 1200) {
  const [display, setDisplay] = useState("0" + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            const val = Math.round(ease * end);
            setDisplay(val + suffix);
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix, duration]);

  return { ref, display };
}

/* ───────── FAQアコーディオン ───────── */
function FaqItem({ q, a, isLast }: { q: string; a: string; isLast: boolean }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={!isLast ? "border-b border-[#E0DDD8]" : ""}>
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[17px] max-md:text-[16px] font-medium text-[#222222] pr-8">
          {q}
        </span>
        <span
          className={`text-[#5A5A5A] text-xl flex-shrink-0 transition-transform duration-250 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-400 ease-out"
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight ?? 500 : 0,
        }}
      >
        <p className="pb-6 pr-12 text-[15px] max-md:text-[14px] text-[#5A5A5A] leading-[1.8]">
          {a}
        </p>
      </div>
    </div>
  );
}

/* ───────── TOPページ ───────── */
export default function Home() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight;
      const nearBottom = scrollY + vh > docHeight - 400;
      setShowFloating(scrollY > vh && !nearBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stat1 = useCountUp(50, "+");
  const stat2 = useCountUp(200, "+");
  const stat3 = useCountUp(2.4, "x", 1200);

  // stat3 needs special handling for decimal
  const stat3Display = useCountUpDecimal(2.4, "x");

  return (
    <main>
      {/* ===== セクション①: ファーストビュー ===== */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-top.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* ===== セクション②: About Us ===== */}
      <section className="bg-[#1B2D4F] py-[120px] max-lg:py-[72px]">
        <div className="max-w-[1000px] mx-auto px-6 max-lg:px-6">
          <p className="text-[15px] max-lg:text-[13px] text-accent tracking-[0.15em]">
            ABOUT BIZREA
          </p>
          <h2
            className="mt-5 text-[36px] max-lg:text-[24px] font-medium text-white leading-[1.6]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            社長の言葉が、企業の未来をつくる
          </h2>
          <p className="mt-10 max-lg:mt-7 text-[17px] max-lg:text-[15px] leading-[2.2] text-white/85">
            社長の頭の中には、創業の原体験、事業にかける信念、社員への想いがある。けれどそれは多くの場合、社長の中にとどまったまま、誰にも届いていません。
            <br /><br />
            BIZREAは、社長への取材を通じてその想いを引き出し、&ldquo;伝わる言葉&rdquo;に整え、雑誌・動画・SNS・WEBで届けます。
            <br /><br />
            わたしたちが届けたいのは、きれいに整えられた企業紹介ではありません。社長が何を考え、なぜこの事業をやっているのか。その熱をそのまま届けること。だからこそ一社一社、必ず社長本人に向き合い、丁寧に取材を重ねます。
            <br /><br />
            こうして生まれたコンテンツは、商談で信頼を勝ち取る武器になり、求職者の心を動かす採用ツールになり、社員が自社を誇れる理由になる。読まれて終わりではなく、経営を前に進める力になります。
            <br /><br />
            社長の言葉を可視化し、企業と人との出会いを変えていく。それがBIZREAの仕事です。
          </p>
        </div>
      </section>

      {/* ===== 掲載企業 ===== */}
      <section className="bg-[#F6F4F1] py-[120px] max-lg:py-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-[15px] max-lg:text-[13px] text-accent tracking-[0.15em] text-center">
            FEATURED
          </p>
          <h2
            className="mt-3 text-[32px] max-lg:text-[22px] font-medium text-[#222222] text-center leading-[1.6]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            掲載企業
          </h2>
          <div className="mt-14 max-lg:mt-10 grid grid-cols-4 max-lg:grid-cols-2 gap-3 max-lg:gap-2">
            {companies.map((c) => (
              <Link key={c.id} href={`/cases/${c.id}`} className="bg-white rounded-[3px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="aspect-square bg-[#E0DDD8] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${c.image}')` }}
                  />
                </div>
                <div className="px-3 py-2.5 max-lg:px-2 max-lg:py-2">
                  <p className="text-[11px] max-lg:text-[10px] text-[#5A5A5A] leading-[1.4] truncate">
                    {c.name}
                  </p>
                  <p className="mt-1 text-[13px] max-lg:text-[11px] font-medium text-[#222222] truncate">
                    {c.president}
                  </p>
                  <div className="mt-1.5 flex gap-1.5">
                    <span className="text-[10px] max-lg:text-[9px] text-[#5A5A5A] border border-[#E0DDD8] rounded-sm px-1.5 py-px">
                      {c.region}
                    </span>
                    <span className="text-[10px] max-lg:text-[9px] text-[#5A5A5A] border border-[#E0DDD8] rounded-sm px-1.5 py-px">
                      {c.industry}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 最終CTA ===== */}
      <section className="bg-[#1B2D4F] py-20 max-lg:py-14">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2
            className="text-[28px] max-lg:text-[22px] font-medium text-white"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            まずは、気軽にお話ししませんか？
          </h2>
          <p className="mt-4 max-lg:mt-3 text-[15px] max-lg:text-[14px] text-white/70 leading-[1.7]">
            相談だけでもOK。無理な営業は一切しません。<br />
            御社の課題に合わせて、最適な活用方法をご提案します。
          </p>
          <div className="mt-8 max-lg:mt-6">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white text-[17px] max-lg:text-[16px] font-bold px-12 py-5 max-lg:py-[18px] max-lg:w-full max-lg:max-w-[400px] rounded-[4px] hover:bg-accent-dark transition-colors duration-200"
            >
              無料で相談してみる
            </Link>
          </div>
          {contact.phone && (
            <div className="mt-6 max-lg:mt-5">
              <a
                href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
                className="text-[20px] max-lg:text-[18px] font-medium text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                TEL: {contact.phoneFormatted || contact.phone}
              </a>
              <p className="text-[13px] text-white/50 mt-1">
                受付時間: {contact.hours || "平日 9:00〜18:00"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== SP フローティングCTA ===== */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.06)] transition-transform duration-400 ${
          showFloating ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex gap-2 px-3 py-3">
          <a
            href={`tel:${contact.phoneTel || contact.phone?.replace(/-/g, "")}`}
            className="flex-[35] flex items-center justify-center bg-[#1B2D4F] text-white text-[14px] font-bold rounded-[4px] py-3"
          >
            電話する
          </a>
          <Link
            href="/contact"
            className="flex-[60] flex items-center justify-center bg-accent text-white text-[14px] font-bold rounded-[4px] py-3"
          >
            無料で相談してみる
          </Link>
        </div>
      </div>
    </main>
  );
}

/* ───────── 小数対応カウントアップ ───────── */
function useCountUpDecimal(end: number, suffix: string, duration = 1200) {
  const [display, setDisplay] = useState("0" + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            const val = (ease * end).toFixed(1);
            setDisplay(val + suffix);
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix, duration]);

  return { ref, display };
}
