import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "雑誌 | BIZREA",
  description:
    "社長インタビューを軸にした企業雑誌。営業・採用・社内教育に活用できる、読んで終わりではない企業ツールです。",
};

const magazines = [
  {
    vol: 12,
    description: "株式会社サンプルテクノロジー 代表取締役 田中太郎氏。IT業界の常識を覆す、地方発のDX戦略とは。",
    cover: "/images/magazine/vol12.jpg",
    pdf: "/pdf/bizrea-vol12.pdf",
    isLatest: true,
  },
  {
    vol: 11,
    description: "株式会社ハマダ商事 代表取締役社長 佐藤祐一氏。三代目が語る、老舗商社の生存戦略。",
    cover: "/images/magazine/vol11.jpg",
    pdf: "/pdf/bizrea-vol11.pdf",
  },
  {
    vol: 10,
    description: "株式会社国際エキスプレス 代表取締役 芳賀遥氏。物流の現場から見える、日本経済のリアル。",
    cover: "/images/magazine/vol10.jpg",
    pdf: "/pdf/bizrea-vol10.pdf",
  },
  {
    vol: 9,
    description: "有限会社ライトスタッフデザイン 代表取締役 鶴岡元久氏。デザインの力で中小企業を変える。",
    cover: "/images/magazine/vol09.jpg",
    pdf: "/pdf/bizrea-vol09.pdf",
  },
  {
    vol: 8,
    description: "西川ゴム工業株式会社 代表取締役社長 小川秀樹氏。製造業の未来を支える、職人魂と経営哲学。",
    cover: "/images/magazine/vol08.jpg",
    pdf: "/pdf/bizrea-vol08.pdf",
  },
  {
    vol: 7,
    description: "株式会社開発堂 常務取締役 山本英樹氏。地域に根ざした小売の在り方を問い直す。",
    cover: "/images/magazine/vol07.jpg",
    pdf: "/pdf/bizrea-vol07.pdf",
  },
  {
    vol: 6,
    description: "アサヒ産業株式会社 代表取締役社長 中谷安伸氏。ものづくりの現場から、次世代への橋渡し。",
    cover: "/images/magazine/vol06.jpg",
    pdf: "/pdf/bizrea-vol06.pdf",
  },
  {
    vol: 5,
    description: "株式会社たしく福祉ビレッジ 代表取締役社長 山田明弘氏。福祉の常識を変える、経営者の挑戦。",
    cover: "/images/magazine/vol05.jpg",
    pdf: "/pdf/bizrea-vol05.pdf",
  },
  {
    vol: 4,
    description: "株式会社山本工業 代表取締役 山本健一氏。技術継承と人材育成、その両立の秘訣。",
    cover: "/images/magazine/vol04.jpg",
    pdf: "/pdf/bizrea-vol04.pdf",
  },
];

export default function MagazinePage() {
  return (
    <main>
      {/* ===== ヒーロー ===== */}
      <section className="pt-32 pb-20 max-lg:pt-24 max-lg:pb-14 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <p className="text-[15px] max-lg:text-[13px] text-accent tracking-[0.15em]">
            MAGAZINE
          </p>
          <h1
            className="mt-4 text-[36px] max-lg:text-[24px] font-medium text-[#222222] leading-[1.6]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            雑誌
          </h1>
          <p className="mt-8 text-[17px] max-lg:text-[15px] leading-[2.2] text-[#5A5A5A]">
            社長インタビューを6ページの特集記事に。プロのライターとデザイナーが、社長の言葉を&ldquo;読みたくなる記事&rdquo;に仕上げます。商談先に渡せば御社の想いが伝わり、求職者に渡せば会社の空気感が伝わり、社員に渡せば会社の原点に立ち返れる。紙だから手元に残る。何度でも読み返せる。
          </p>
        </div>
      </section>

      {/* ===== Magazine Archive ===== */}
      <section className="bg-[#F6F4F1] py-[120px] max-lg:py-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
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
