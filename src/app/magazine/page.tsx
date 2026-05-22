import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "雑誌 | Bizrea",
  description:
    "社長インタビューを軸にした企業雑誌。営業・採用・社内教育に活用できる、読んで終わりではない企業ツールです。",
};

type Magazine = {
  vol: number;
  description: string;
  cover: string;
  pdf: string;
  isLatest?: boolean;
};

// 雑誌を掲載するときは、下記フォーマットに沿って magazines 配列にオブジェクトを追加してください。
// vol が大きい号（最新号）から順に並べ、最新号には isLatest: true を付けます。
//
// 【記入例】
// {
//   vol: 12,                                       // 号数（数値）
//   description: "株式会社○○ 代表取締役 ○○氏。記事の紹介文。",  // カードに表示する説明文
//   cover: "/images/magazine/vol12.jpg",            // 表紙画像のパス（public 配下）
//   pdf: "/pdf/bizrea-vol12.pdf",                   // PDFファイルのパス（public 配下）
//   isLatest: true,                                // 最新号のみ true（任意）。それ以外の号では省略
// },
const magazines: Magazine[] = [];

export default function MagazinePage() {
  return (
    <main>
      {/* ===== ヒーロー ===== */}
      <section className="relative pt-32 pb-20 max-lg:pt-24 max-lg:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[#1B2D4F]">
          <div className="absolute inset-0 bg-[url('/images/hero-magazine.jpg')] bg-cover bg-center opacity-25" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-[15px] max-lg:text-[13px] text-accent tracking-[0.15em]">
            MAGAZINE
          </p>
          <h1
            className="mt-4 text-[36px] max-lg:text-[24px] font-medium text-white leading-[1.6]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            雑誌
          </h1>
          <p className="mt-8 text-[17px] max-lg:text-[15px] leading-[2.2] text-white/80">
            Bizreaは、社長の想いを引き出し、Web・雑誌・SNSを通じて届けています。<br />
            なかでも雑誌は、社長の言葉をじっくり読める唯一のメディアです。画面を閉じても手元に残り、商談先でも、面接の場でも、何度でも読み返すことができる。<br />
            経営者一人ひとりの信念と物語を、ぜひご覧ください。
          </p>
        </div>
      </section>

      {/* ===== Magazine Archive ===== */}
      <section
        className="relative py-[120px] max-lg:py-[72px] bg-white overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(27,45,79,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(27,45,79,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-[15px] max-lg:text-[13px] text-accent tracking-[0.15em] text-center">
            MAGAZINE ARCHIVE
          </p>
          <h2
            className="mt-3 text-[32px] max-lg:text-[22px] font-medium text-[#222222] text-center leading-[1.6]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            最新号・バックナンバー
          </h2>

          <div className="mt-14 max-lg:mt-10 grid grid-cols-3 max-lg:grid-cols-2 gap-6 max-lg:gap-4">
            {magazines.map((mag) => (
              <div key={mag.vol} className="bg-white rounded-[4px] overflow-hidden shadow-sm">
                {/* 表紙画像 */}
                <div className="aspect-[3/4] bg-[#E0DDD8] overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${mag.cover}')` }}
                  />
                  {mag.isLatest && (
                    <span className="absolute top-3 left-3 bg-accent text-white text-[11px] font-bold px-3 py-1 rounded-sm">
                      最新号
                    </span>
                  )}
                </div>
                {/* テキスト */}
                <div className="p-5 max-lg:p-4">
                  <p className="text-[18px] max-lg:text-[16px] font-medium text-[#222222]">
                    Bizrea Vol.{String(mag.vol).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-[13px] max-lg:text-[12px] leading-[1.7] text-[#5A5A5A] line-clamp-3">
                    {mag.description}
                  </p>
                  <Link
                    href={mag.pdf}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-accent-dark transition-colors"
                  >
                    閲覧する
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
