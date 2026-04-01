'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { contact } from "@/lib/site";

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
      <section className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#1B2D4F]">
          <div className="absolute inset-0 bg-[url('/images/hero-top.jpg')] bg-cover bg-center opacity-60" />
          {/* PC gradient overlay */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[rgba(15,29,51,0.75)] via-[rgba(15,29,51,0.3)] to-transparent" />
          {/* SP overlay */}
          <div className="lg:hidden absolute inset-0 bg-[rgba(27,45,79,0.6)]" />
        </div>

        {/* Text content */}
        <div className="relative z-10 lg:pl-20 lg:max-w-[600px] max-lg:px-6 max-lg:text-center max-lg:mx-auto">
          <h1
            className="text-[48px] max-lg:text-[28px] font-medium leading-[1.4] text-white animate-fade-in-up"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            社長の言葉が、<br className="max-lg:hidden" />営業と採用を変える。
          </h1>
          <p className="mt-6 max-lg:mt-[18px] text-[17px] max-lg:text-[14px] leading-[1.8] text-white/85 animate-fade-in-up animation-delay-300">
            社長インタビューを軸にした動画・雑誌・WEBで、<br className="max-lg:hidden" />
            御社の&ldquo;本質&rdquo;を&ldquo;伝わる形&rdquo;にする。<br />
            営業資料にも、採用ツールにも、社内教育にも。
          </p>
          <div className="mt-10 max-lg:mt-7 animate-fade-in-up animation-delay-500">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white text-[16px] max-lg:text-[15px] font-bold px-10 max-lg:px-9 py-[18px] max-lg:py-4 rounded-[4px] hover:bg-accent-dark hover:-translate-y-[1px] transition-all duration-250"
            >
              まずは話を聞いてみる
            </Link>
          </div>
        </div>

        {/* Logo strip at bottom */}
        <div className="absolute bottom-10 max-lg:bottom-6 left-0 right-0 px-20 max-lg:px-6">
          <p className="text-[12px] text-white/50 mb-3 lg:text-left max-lg:text-center">掲載企業</p>
          <div className="flex lg:gap-10 max-lg:gap-6 max-lg:justify-center items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`h-6 w-20 bg-white/30 rounded ${i > 3 ? "max-lg:hidden" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== セクション②: 共感 ===== */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="max-w-[780px] mx-auto px-6 max-lg:px-6">
          <h2 className="text-[32px] max-lg:text-[22px] font-bold text-[#222222] text-center">
            こんな課題、抱えていませんか？
          </h2>
          <div className="mt-12 max-lg:mt-8 space-y-5 max-lg:space-y-4">
            {[
              "求人を出しても、応募がほとんど来ない",
              "採用しても半年で辞めてしまう。ミスマッチが続いている",
              "自社の強みをうまく言語化できず、営業で差別化できない",
              "ホームページやパンフレットを作ったが、誰にも見られていない",
              "会社の魅力を伝えたいのに、何から始めればいいかわからない",
            ].map((item, i) => (
              <p key={i} className="text-[17px] max-lg:text-[15px] leading-[1.8] text-[#222222]">
                <span className="text-accent mr-2">—</span>
                {item}
              </p>
            ))}
          </div>
          <p className="mt-10 max-lg:mt-7 text-[16px] max-lg:text-[14px] leading-[1.9] text-[#5A5A5A] text-center">
            これらの課題の根本原因は、&ldquo;企業の本質が伝わっていない&rdquo;こと。<br />
            BIZREAは、社長の言葉を起点に、御社の本当の価値を&ldquo;伝わる形&rdquo;にします。
          </p>
        </div>
      </section>

      {/* ===== 中間CTA① ===== */}
      <section className="bg-[#F6F4F1] py-12 max-lg:py-9">
        <div className="max-w-[780px] mx-auto px-6 text-center">
          <p className="text-[16px] max-lg:text-[14px] text-[#5A5A5A]">
            その課題、BIZREAで解決できるかもしれません。
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white text-[16px] max-lg:text-[15px] font-bold px-9 py-4 max-lg:w-full max-lg:py-4 rounded-[4px] hover:bg-accent-dark hover:-translate-y-[1px] transition-all duration-250"
            >
              まずは話を聞いてみる
            </Link>
          </div>
        </div>
      </section>

      {/* ===== セクション③: 選ばれる理由 ===== */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[32px] max-lg:text-[22px] font-bold text-[#222222] text-center mb-[72px] max-lg:mb-11">
            BIZREAが選ばれる3つの理由
          </h2>

          {/* 理由① */}
          <div className="lg:flex lg:items-center lg:gap-16 mb-[100px] max-lg:mb-14">
            <div className="lg:w-1/2 aspect-[3/2] bg-[#E0DDD8] rounded-sm overflow-hidden max-lg:mb-8">
              <div className="w-full h-full bg-[url('/images/reason-01.jpg')] bg-cover bg-center" />
            </div>
            <div className="lg:w-1/2 relative">
              <span className="absolute -top-4 left-0 text-[64px] max-lg:text-[40px] font-bold text-accent/15 leading-none" style={{ fontFamily: "Inter, sans-serif" }}>01</span>
              <div className="pt-10 max-lg:pt-6">
                <h3 className="text-[24px] max-lg:text-[20px] font-bold text-[#222222] mb-4">
                  &ldquo;語れる会社&rdquo;をつくる設計
                </h3>
                <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                  ただの映像制作でも、パンフレット制作でもありません。<br />
                  社長インタビューを通じて、御社の価値観・強み・文化を&ldquo;言語化&rdquo;します。<br />
                  抽象的なスローガンではなく、具体的なエピソードを引き出し、<br className="max-lg:hidden" />
                  社員も取引先も求職者も&ldquo;腹落ちする言葉&rdquo;に変える。<br />
                  これが、営業でも採用でも使える&ldquo;語れる状態&rdquo;をつくる第一歩です。
                </p>
              </div>
            </div>
          </div>

          {/* 理由② */}
          <div className="lg:flex lg:items-center lg:gap-16 lg:flex-row-reverse mb-[100px] max-lg:mb-14">
            <div className="lg:w-1/2 aspect-[3/2] bg-[#E0DDD8] rounded-sm overflow-hidden max-lg:mb-8">
              <div className="w-full h-full bg-[url('/images/reason-02.jpg')] bg-cover bg-center" />
            </div>
            <div className="lg:w-1/2 relative">
              <span className="absolute -top-4 left-0 text-[64px] max-lg:text-[40px] font-bold text-accent/15 leading-none" style={{ fontFamily: "Inter, sans-serif" }}>02</span>
              <div className="pt-10 max-lg:pt-6">
                <h3 className="text-[24px] max-lg:text-[20px] font-bold text-[#222222] mb-4">
                  紙 × 動画 × WEB、三位一体で届ける
                </h3>
                <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                  雑誌は手に取れるから信頼を生む。<br />
                  動画は表情と声で共感をつくる。<br />
                  WEBは情報を蓄積し、検索で届く。<br />
                  BIZREAはこの3つをひとつのインタビューから一気通貫で制作。<br />
                  バラバラに発注するより、メッセージが統一されるから伝わる。<br />
                  コストも工数も、まとめたほうが圧倒的に効率がいい。
                </p>
              </div>
            </div>
          </div>

          {/* 理由③ */}
          <div className="bg-[#F6F4F1] py-20 max-lg:py-12 -mx-6 lg:-mx-10 px-6 lg:px-10">
            <div className="max-w-[680px] mx-auto relative">
              <span className="absolute -top-4 left-0 text-[64px] max-lg:text-[40px] font-bold text-accent/15 leading-none" style={{ fontFamily: "Inter, sans-serif" }}>03</span>
              <div className="pt-10 max-lg:pt-6">
                <h3 className="text-[24px] max-lg:text-[20px] font-bold text-[#222222] mb-4">
                  つくって終わりじゃない。&ldquo;使える&rdquo;から成果が出る
                </h3>
                <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                  一般的な制作物は、納品されて終わり。<br />
                  BIZREAのコンテンツは、納品後こそ本番です。
                </p>
                <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222] mt-6">
                  商談前に送れば、営業トークの前に御社を理解してもらえる。<br />
                  面接前に送れば、御社の価値観に共感した人だけが応募してくる。<br />
                  入社後に読ませれば、企業文化の理解が早まり、定着率が上がる。
                </p>
                <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222] mt-6">
                  読ませるコンテンツではなく、&ldquo;使わせるツール&rdquo;として設計しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== セクション④: 実績・証拠 ===== */}
      <section className="bg-[#F6F4F1] py-[120px] max-lg:py-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[32px] max-lg:text-[22px] font-bold text-[#222222] text-center mb-16 max-lg:mb-10">
            導入企業の声と実績
          </h2>

          {/* 実績数字 */}
          <div className="flex justify-center gap-20 max-lg:gap-10 mb-20 max-lg:mb-12">
            <div className="text-center">
              <span ref={stat1.ref} className="block text-[56px] max-lg:text-[36px] font-bold text-[#1B2D4F]" style={{ fontFamily: "Inter, sans-serif" }}>
                {stat1.display}
              </span>
              <span className="text-[14px] max-lg:text-[12px] text-[#5A5A5A] mt-2 block">掲載企業数</span>
            </div>
            <div className="text-center">
              <span ref={stat2.ref} className="block text-[56px] max-lg:text-[36px] font-bold text-[#1B2D4F]" style={{ fontFamily: "Inter, sans-serif" }}>
                {stat2.display}
              </span>
              <span className="text-[14px] max-lg:text-[12px] text-[#5A5A5A] mt-2 block">制作コンテンツ数</span>
            </div>
            <div className="text-center">
              <span ref={stat3Display.ref} className="block text-[56px] max-lg:text-[36px] font-bold text-[#1B2D4F]" style={{ fontFamily: "Inter, sans-serif" }}>
                {stat3Display.display}
              </span>
              <span className="text-[14px] max-lg:text-[12px] text-[#5A5A5A] mt-2 block">導入後の平均応募数の変化</span>
            </div>
          </div>

          {/* 企業の声 */}
          <div className="lg:flex lg:gap-8">
            {/* 声① 大 */}
            <div className="lg:w-1/2 bg-white p-10 max-lg:p-6 mb-8 lg:mb-0">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 rounded-full bg-[#E0DDD8] flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/voice-01.jpg')] bg-cover bg-center" />
                </div>
                <div>
                  <p className="text-[14px] text-[#5A5A5A]">株式会社○○（製造業・愛知県）</p>
                  <p className="text-[13px] text-[#5A5A5A]">代表取締役 ○○ ○○ 氏</p>
                </div>
              </div>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                「正直に言うと、最初は&ldquo;また営業ツールを作るのか&rdquo;と思っていました。
                でもBIZREAは違いました。インタビューで引き出された自分の言葉が、
                そのまま採用ページになり、営業資料になり、社員教育にも使えている。
                一回の取材で、ここまで広がるとは思いませんでした。」
              </p>
            </div>

            {/* 声②③ */}
            <div className="lg:w-1/2 space-y-8">
              <div className="bg-white p-8 max-lg:p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#E0DDD8] flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-[url('/images/voice-02.jpg')] bg-cover bg-center" />
                  </div>
                  <p className="text-[14px] text-[#5A5A5A] pt-1">○○建設株式会社（建設業・岐阜県）</p>
                </div>
                <p className="text-[15px] max-lg:text-[14px] leading-[1.8] text-[#222222]">
                  「営業前にBIZREAの記事を送るようになってから、
                  商談の質が明らかに変わりました。初対面なのに
                  &ldquo;社長の考え、読みました&rdquo;と言われることが増えた。」
                </p>
              </div>
              <div className="bg-white p-8 max-lg:p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#E0DDD8] flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-[url('/images/voice-03.jpg')] bg-cover bg-center" />
                  </div>
                  <p className="text-[14px] text-[#5A5A5A] pt-1">株式会社○○物流（物流業・三重県）</p>
                </div>
                <p className="text-[15px] max-lg:text-[14px] leading-[1.8] text-[#222222]">
                  「応募者の&ldquo;質&rdquo;が変わったのが一番大きい。
                  以前は条件だけ見て来る人が多かったけど、
                  今は&ldquo;社長の話を読んで共感した&rdquo;という人が来る。
                  入社後の定着率も確実に上がっています。」
                </p>
              </div>
            </div>
          </div>

          {/* ロゴ帯 */}
          <div className="mt-16 max-lg:mt-10 text-center">
            <p className="text-[12px] text-[#5A5A5A] mb-4">掲載企業（一部）</p>
            <div className="flex justify-center gap-8 max-lg:gap-4 items-center flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-[#222222]/10 rounded opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 中間CTA② ===== */}
      <section className="bg-[#1B2D4F] py-14 max-lg:py-10">
        <div className="max-w-[780px] mx-auto px-6 text-center">
          <h2 className="text-[24px] max-lg:text-[18px] font-medium text-white">
            御社の&ldquo;伝え方&rdquo;を変えてみませんか？
          </h2>
          <p className="mt-3 text-[15px] max-lg:text-[13px] text-white/70">
            無料相談では、御社の課題に合わせた活用プランをご提案します。
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white text-[16px] font-bold px-11 py-[18px] max-lg:py-4 max-lg:w-full max-lg:max-w-[360px] rounded-[4px] hover:bg-accent-dark transition-colors duration-200"
            >
              無料で相談してみる
            </Link>
          </div>
        </div>
      </section>

      {/* ===== セクション⑤: サービス詳細 ===== */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[32px] max-lg:text-[22px] font-bold text-[#222222] text-center">
            BIZREAでつくるもの
          </h2>
          <p className="text-[16px] max-lg:text-[14px] text-[#5A5A5A] text-center mt-4 max-lg:mt-3 mb-16 max-lg:mb-10">
            ひとつのインタビューから、3つのコンテンツが生まれます。
          </p>

          {/* 雑誌 */}
          <div className="mb-20 max-lg:mb-12">
            <div className="w-full aspect-[21/9] max-lg:aspect-video bg-[#E0DDD8] rounded-sm overflow-hidden">
              <div className="w-full h-full bg-[url('/images/service-magazine.jpg')] bg-cover bg-center" />
            </div>
            <div className="max-w-[680px] mx-auto mt-10 max-lg:mt-6">
              <h3 className="text-[24px] max-lg:text-[20px] font-bold text-[#222222] mb-4">
                手に取れるから、信頼が生まれる
              </h3>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                社長インタビューを6ページの特集記事に。<br />
                プロのライターとデザイナーが、社長の言葉を&ldquo;読みたくなる記事&rdquo;に仕上げます。
              </p>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222] mt-4">
                商談先に渡せば、御社の想いが伝わる。<br />
                求職者に渡せば、会社の空気感が伝わる。<br />
                社員に渡せば、会社の原点に立ち返れる。
              </p>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222] mt-4">
                紙の冊子だから、手元に残る。何度でも読み返せる。
              </p>
            </div>
          </div>

          {/* 動画 */}
          <div className="mb-20 max-lg:mb-12">
            <div className="w-full aspect-[21/9] max-lg:aspect-video bg-[#E0DDD8] rounded-sm overflow-hidden">
              <div className="w-full h-full bg-[url('/images/service-video.jpg')] bg-cover bg-center" />
            </div>
            <div className="max-w-[680px] mx-auto mt-10 max-lg:mt-6">
              <h3 className="text-[24px] max-lg:text-[20px] font-bold text-[#222222] mb-4">
                表情と声で、共感がつくれる
              </h3>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                文字では伝わらない、社長の人柄。<br />
                声のトーン、表情の変化、言葉を選ぶ間。<br />
                動画だから届けられるものがあります。
              </p>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222] mt-4">
                実写インタビュー動画に加え、<br />
                事業内容をわかりやすく伝えるアニメーション動画も制作。
              </p>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222] mt-4">
                商談前のメール、採用ページ、SNS——<br />
                あらゆる場面で&ldquo;会う前に信頼をつくる&rdquo;ツールになります。
              </p>
            </div>
          </div>

          {/* WEB */}
          <div className="mb-12 max-lg:mb-8">
            <div className="w-full aspect-[21/9] max-lg:aspect-video bg-[#E0DDD8] rounded-sm overflow-hidden">
              <div className="w-full h-full bg-[url('/images/service-web.jpg')] bg-cover bg-center" />
            </div>
            <div className="max-w-[680px] mx-auto mt-10 max-lg:mt-6">
              <h3 className="text-[24px] max-lg:text-[20px] font-bold text-[#222222] mb-4">
                検索で見つかる。蓄積で強くなる
              </h3>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                雑誌記事をWEB化し、動画を埋め込んだ企業ページを制作。<br />
                BIZREAサイト上に掲載されるため、SEOでの検索流入が見込めます。
              </p>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222] mt-4">
                &ldquo;企業名 + 社長&rdquo;で検索した人が、御社の本質に触れるページにたどり着く。<br />
                求人サイトの限られた枠では伝えきれない情報が、ここにある。
              </p>
              <p className="text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222] mt-4">
                しかも、掲載企業が増えるほどサイト全体の評価が上がり、<br />
                御社のページへの流入も増える。コンテンツが資産になる構造です。
              </p>
            </div>
          </div>

          <div className="text-center mt-12 max-lg:mt-8">
            <Link href="/content" className="inline-block text-[15px] font-medium text-accent hover:underline underline-offset-4 transition-all">
              コンテンツ紹介を詳しく見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== セクション⑥: オファー ===== */}
      <section className="bg-accent py-20 max-lg:py-14">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="text-[28px] max-lg:text-[22px] font-bold text-white">
            御社の&ldquo;伝え方&rdquo;、無料で診断します。
          </h2>
          <p className="mt-6 max-lg:mt-[18px] text-[16px] max-lg:text-[15px] leading-[1.9] text-white/90">
            BIZREAでは、初回の無料相談で御社の現状をヒアリングし、<br className="max-lg:hidden" />
            &ldquo;営業・採用・定着&rdquo;の3つの視点から、最適な活用プランをご提案します。
          </p>
          <p className="mt-4 text-[16px] max-lg:text-[15px] leading-[1.9] text-white/90">
            相談したからといって、契約の必要はありません。<br />
            &ldquo;うちの会社に合うかどうか&rdquo;を確認するだけでも大歓迎です。
          </p>
          <p className="mt-5 max-lg:mt-4 text-[14px] max-lg:text-[13px] text-white/70">
            無料相談 <span className="opacity-50">/</span> 無理な営業一切なし <span className="opacity-50">/</span> オンラインOK
          </p>
          <div className="mt-8 max-lg:mt-6">
            <Link
              href="/contact"
              className="inline-block bg-white text-accent text-[17px] max-lg:text-[16px] font-bold px-12 py-5 max-lg:py-[18px] max-lg:w-full max-lg:max-w-[400px] rounded-[4px] hover:bg-[#F6F4F1] transition-colors duration-200"
            >
              無料相談を申し込む
            </Link>
          </div>
        </div>
      </section>

      {/* ===== セクション⑦: FAQ ===== */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="max-w-[780px] mx-auto px-6">
          <h2 className="text-[32px] max-lg:text-[22px] font-bold text-[#222222] text-center mb-14 max-lg:mb-9">
            よくあるご質問
          </h2>
          <div>
            {[
              { q: "費用はどれくらいかかりますか？", a: "プランにより異なりますが、雑誌・動画・WEBの三位一体パッケージで○○万円〜ご用意しています。御社の課題や活用目的に合わせて最適なプランをご提案しますので、まずは無料相談でお気軽にご相談ください。" },
              { q: "社長がインタビューで上手く話せるか不安です。", a: "ご安心ください。BIZREAのインタビューは\"台本を読む\"ものではありません。プロのインタビュアーが対話形式で進めるため、普段のお話をしていただくだけで大丈夫です。\"話すのが苦手\"とおっしゃっていた社長ほど、自然体で良いインタビューになることが多いです。" },
              { q: "制作にはどれくらいの期間がかかりますか？", a: "取材から納品まで約2〜3ヶ月が目安です。取材自体は半日〜1日で完了します。御社にご負担いただく時間は、取材日と確認作業のみです。" },
              { q: "愛知県以外でも対応できますか？", a: "東海エリア（愛知・岐阜・三重）を中心に対応しています。それ以外の地域についてもご相談ください。オンラインでの対応も可能です。" },
              { q: "他の制作会社との違いは何ですか？", a: "BIZREAは\"制作会社\"ではなく\"成果ツールの提供\"です。動画だけ、パンフレットだけを納品するサービスとは異なり、社長インタビューを軸に雑誌・動画・WEBを一気通貫で制作し、営業・採用・定着のすべてに活用できる設計にしています。つくって終わりではなく、\"使って成果を出す\"ところまでが私たちの仕事です。" },
              { q: "無料相談後に、しつこい営業はありませんか？", a: "一切ありません。無料相談はあくまで御社の課題をお聞きし、BIZREAが合うかどうかをお互いに確認する場です。合わないと判断された場合も、その後のご連絡は差し上げません。" },
              { q: "制作したコンテンツの権利はどうなりますか？", a: "制作した雑誌・動画・WEB記事は、御社にてご自由にご活用いただけます。自社HPへの掲載、SNSでのシェア、採用サイトへの転載など、活用方法に制限はありません。" },
            ].map((item, i, arr) => (
              <FaqItem key={i} q={item.q} a={item.a} isLast={i === arr.length - 1} />
            ))}
          </div>
          <div className="text-center mt-10 max-lg:mt-7">
            <Link href="/faq" className="inline-block text-[15px] font-medium text-accent hover:underline underline-offset-4 transition-all">
              すべてのご質問を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== セクション⑧: 最終CTA ===== */}
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
