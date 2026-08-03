import type { Metadata } from "next";
import MagazineList, { type Magazine } from "@/components/MagazineList";

export const metadata: Metadata = {
  title: "雑誌 | Bizrea",
  description:
    "社長インタビューを軸にした企業雑誌。営業・採用・社内教育に活用できる、読んで終わりではない企業ツールです。",
};

// 雑誌を掲載するときは、下記フォーマットに沿って magazines 配列にオブジェクトを追加してください。
// vol が大きい号（最新号）から順に並べ、最新号には isLatest: true を付けます。
// 誌面画像（{pageBase}/p01.jpg …）と PDF は CDN に置きます。
//
// 【記入例】
// {
//   vol: 12,                                       // 号数（数値）
//   description: "株式会社○○ 代表取締役 ○○氏。記事の紹介文。",  // カードに表示する説明文
//   issue: "2026年12月",                            // カードに表示する発行時期
//   pages: 40,                                     // 総ページ数（ビューアのページ送りに使う）
//   cover: "/images/magazine/vol12.jpg",            // 表紙画像のパス（public 配下）
//   pageBase: "https://assets.singgroup.biz/magazine/vol12", // 誌面画像の置き場
//   pdf: "https://assets.singgroup.biz/magazine/bizrea-vol12.pdf", // PDFのURL（CDN配信）
//   isLatest: true,                                // 最新号のみ true（任意）。それ以外の号では省略
// },
const magazines: Magazine[] = [
  {
    vol: 2,
    description:
      "特集は noridaGARDEN&co. / nobodyknows＋ ノリ・ダ・ファンキーシビレサス氏。ほか、鰻処まえの・竹代・フォレスト個別指導塾 豊田校・紀創機械設計・ホニックの代表者インタビューを収録。",
    issue: "2026年",
    pages: 40,
    cover: "/images/magazine/vol2.jpg",
    pageBase: "https://assets.singgroup.biz/magazine/vol2",
    pdf: "https://assets.singgroup.biz/magazine/bizrea-vol2.pdf",
    isLatest: true,
  },
  {
    vol: 1,
    description:
      "特集は名古屋グランパス所属 プロサッカー選手（MF）稲垣 祥氏。ほか、尾北・愛正・Sing.nexT・フライトップ・ゆめスタの代表者インタビューを収録した創刊号です。",
    issue: "2026年",
    pages: 40,
    cover: "/images/magazine/vol1.jpg",
    pageBase: "https://assets.singgroup.biz/magazine/vol1",
    pdf: "https://assets.singgroup.biz/magazine/bizrea-vol1.pdf",
  },
];

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
            Bizreaは、代表者の想いを引き出し、Web・雑誌・SNSを通じて届けています。<br />
            なかでも雑誌は、代表者の言葉をじっくり読める唯一のメディアです。画面を閉じても手元に残り、商談先でも、面接の場でも、何度でも読み返すことができる。<br />
            代表者一人ひとりの信念と物語を、ぜひご覧ください。
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

          <MagazineList magazines={magazines} />

        </div>
      </section>
    </main>
  );
}
