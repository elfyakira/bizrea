import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companies, getCompanyById } from "@data/companies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return companies.filter((c) => !c.hidden).map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyById(slug);
  if (!company) return {};
  return {
    title: `${company.name} | Bizrea`,
    description: `${company.name}の社長インタビュー。${company.catchphrase} ${company.desc}`,
  };
}

const regionColors: Record<string, string> = {
  "愛知県": "bg-[#3B82A0] text-white",
  "岐阜県": "bg-[#6B8E5B] text-white",
  "三重県": "bg-[#A07B3B] text-white",
};
const industryColors: Record<string, string> = {
  "製造業": "bg-[#E67635] text-white",
  "建設業": "bg-[#4A7B8C] text-white",
  "物流業": "bg-[#7B6B8E] text-white",
  "食品製造業": "bg-[#C4784A] text-white",
  "IT・通信業": "bg-[#5B7ABF] text-white",
  "採用支援": "bg-[#3B8C6E] text-white",
};

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const company = getCompanyById(slug);
  if (!company || company.hidden) notFound();

  const regionClass = regionColors[company.region] || "bg-[#888888] text-white";
  const industryClass = industryColors[company.industry] || "bg-[#888888] text-white";

  // 応募ボタンを非表示にする企業
  const hideApplyButton = ["sorairo", "prelune", "paluu", "kiso"].includes(company.id);

  // 問い合わせボタンの遷移先をお問い合わせフォームにする企業
  const contactToForm = ["paluu", "sorairo", "aisei"].includes(company.id);
  const contactHref = contactToForm ? "/contact" : company.url || "#";
  const contactTarget = contactToForm ? undefined : "_blank";

  return (
    <main>
      {/* ===== ヒーロー ===== */}
      <section className="relative pt-32 pb-16 max-lg:pt-24 max-lg:pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#1B2D4F]">
          {company.heroImage && (
            <div
              className="absolute inset-0 bg-cover opacity-25"
              style={{ backgroundImage: `url('${company.heroImage}')`, backgroundPosition: "center 35%" }}
            />
          )}
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex gap-2 mb-4">
            <span className={`text-[11px] font-medium rounded-sm px-2.5 py-1 ${regionClass}`}>
              {company.region}
            </span>
            <span className={`text-[11px] font-medium rounded-sm px-2.5 py-1 ${industryClass}`}>
              {company.industry}
            </span>
          </div>
          <h1
            className="text-[36px] max-lg:text-[24px] font-medium text-white leading-[1.4]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            {company.name}
          </h1>
          <p className="mt-3 text-[18px] max-lg:text-[15px] text-white/80">
            {company.president}
          </p>
          {company.catchphrase && (
            <p className="mt-5 text-[20px] max-lg:text-[16px] text-white/90 leading-[1.6]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              {company.catchphrase}
            </p>
          )}
        </div>
      </section>

      {/* ===== メインコンテンツ: 2カラム（格子背景） ===== */}
      <section className="relative py-16 max-lg:py-10 bg-white overflow-hidden">
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
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 lg:flex lg:gap-10">

          {/* ===== 左カラム ===== */}
          <div className="lg:flex-1 min-w-0">
            {/* 動画 / ヒーロー画像 */}
            <div className="relative w-full aspect-video rounded-[4px] overflow-hidden bg-[#1B2D4F] shadow-sm">
              {company.videoUrl ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={company.videoUrl}
                  poster={company.image || undefined}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : company.videoId ? (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${company.image}')` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 max-lg:w-14 max-lg:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white hover:scale-110 transition-all duration-200">
                      <svg className="w-8 h-8 max-lg:w-6 max-lg:h-6 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : company.image ? (
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: company.imagePosition ?? "center 35%" }}
                  src={company.image}
                  alt={`${company.name} ${company.president}`}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
                  <svg className="w-12 h-12 max-lg:w-10 max-lg:h-10 mb-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[15px] max-lg:text-[13px] font-medium tracking-wider">動画準備中</p>
                </div>
              )}
            </div>

            {/* インタビュー記事 */}
            <div className="mt-12 max-lg:mt-8 bg-white rounded-[4px] p-8 max-lg:p-5 shadow-sm">
              {/* チャプター目次 */}
              {company.chapters.length > 1 && (
                <nav className="mb-10 max-lg:mb-8 border border-[#E0DDD8] rounded-[4px] p-5 max-lg:p-4 bg-[#F6F4F1]">
                  <p className="text-[13px] font-bold text-[#5A5A5A] mb-3">チャプターを選んで見る</p>
                  <ol className="space-y-2">
                    {company.chapters.map((chapter, ci) => (
                      <li key={ci}>
                        <a
                          href={`#chapter-${ci}`}
                          className="flex items-start gap-2 text-[14px] max-lg:text-[13px] text-[#222222] hover:text-accent transition-colors"
                        >
                          <span className="text-accent font-medium flex-shrink-0">{ci + 1}.</span>
                          {chapter.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {company.chapters.map((chapter, ci) => (
                <div key={ci}>
                  {ci > 0 && company.photos[ci - 1] && (
                    <div className="my-10 max-lg:my-6">
                      <div
                        className="w-full aspect-[3/2] bg-[#E0DDD8] bg-cover bg-center rounded-[4px]"
                        style={{ backgroundImage: `url('${company.photos[ci - 1].src}')` }}
                      />
                      <p className="mt-2 text-[13px] text-[#5A5A5A]">
                        {company.photos[ci - 1].caption}
                      </p>
                    </div>
                  )}

                  <h2 id={`chapter-${ci}`} className="text-[22px] max-lg:text-[18px] font-bold text-[#222222] mt-12 max-lg:mt-8 mb-5 max-lg:mb-4 first:mt-0 scroll-mt-28">
                    {chapter.title}
                  </h2>

                  <div className="space-y-5 max-lg:space-y-4">
                    {chapter.content.split("\n\n").map((paragraph, pi) => {
                      if (paragraph.startsWith("——")) {
                        return (
                          <p key={pi} className="text-[16px] max-lg:text-[15px] leading-[2.0] font-bold text-[#1B2D4F]">
                            {paragraph}
                          </p>
                        );
                      }
                      return (
                        <p key={pi} className="text-[16px] max-lg:text-[15px] leading-[2.0] text-[#222222]">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {company.quotes[ci] && (
                    <blockquote className="my-10 max-lg:my-6 border-l-[3px] border-accent pl-6">
                      <p
                        className="text-[20px] max-lg:text-[17px] leading-[1.7] text-[#1B2D4F]"
                        style={{ fontFamily: "'Noto Serif JP', serif" }}
                      >
                        &ldquo;{company.quotes[ci]}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}

              {company.photos.length > 0 && (
                <div className="mt-10 max-lg:mt-6">
                  <div
                    className="w-full aspect-[3/2] bg-[#E0DDD8] bg-cover bg-center rounded-[4px]"
                    style={{ backgroundImage: `url('${company.photos[company.photos.length - 1].src}')` }}
                  />
                  <p className="mt-2 text-[13px] text-[#5A5A5A]">
                    {company.photos[company.photos.length - 1].caption}
                  </p>
                </div>
              )}

              {/* 企業への問い合わせ・応募ボタン */}
              <div className="mt-14 max-lg:mt-10 flex max-lg:flex-col gap-4">
                <a
                  href={contactHref}
                  target={contactTarget}
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#1B2D4F] text-white text-[15px] font-bold py-4 rounded-[4px] hover:bg-[#152440] transition-colors duration-200"
                >
                  この企業に問い合わせする
                </a>
                {!hideApplyButton && (
                  <a
                    href={company.recruitmentUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-accent text-white text-[15px] font-bold py-4 rounded-[4px] hover:bg-accent-dark transition-colors duration-200"
                  >
                    この企業に応募する
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ===== 右カラム: サイドバー ===== */}
          <aside className="lg:w-[340px] flex-shrink-0 max-lg:mt-10">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* リード文 */}
              <div className="bg-white rounded-[4px] p-6 shadow-sm">
                <p className="text-[14px] leading-[1.9] text-[#222222]">
                  {company.leadText}
                </p>
                {company.interviewDate && (
                  <p className="mt-4 text-[12px] text-[#5A5A5A]">
                    公開日: {company.interviewDate}
                  </p>
                )}
              </div>

              {/* 問い合わせ・応募ボタン */}
              <div className="flex flex-col gap-3">
                <a
                  href={contactHref}
                  target={contactTarget}
                  rel="noopener noreferrer"
                  className="text-center bg-[#1B2D4F] text-white text-[14px] font-bold py-3.5 rounded-[4px] hover:bg-[#152440] transition-colors duration-200"
                >
                  この企業に問い合わせする
                </a>
                {!hideApplyButton && (
                  <a
                    href={company.recruitmentUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-accent text-white text-[14px] font-bold py-3.5 rounded-[4px] hover:bg-accent-dark transition-colors duration-200"
                  >
                    この企業に応募する
                  </a>
                )}
              </div>

              {/* リンク集 */}
              <div className="bg-white rounded-[4px] p-6 shadow-sm space-y-3">
                {company.url && (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[14px] text-accent hover:text-accent-dark transition-colors"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                    この会社のWEBサイトを見る
                  </a>
                )}
                {company.recruitmentUrl && (
                  <a
                    href={company.recruitmentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[14px] text-accent hover:text-accent-dark transition-colors"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    この会社で働いてみたい
                  </a>
                )}
              </div>

              {/* 企業情報 */}
              <div className="bg-white rounded-[4px] p-6 shadow-sm">
                <h3 className="text-[14px] font-bold text-[#222222] mb-4">企業情報</h3>
                <table className="w-full">
                  <tbody>
                    {company.companyInfo.map((info, i) => (
                      <tr key={i} className="border-b border-[#E0DDD8] last:border-b-0">
                        <td className="py-2.5 text-[12px] text-[#5A5A5A] w-[30%] align-top">
                          {info.label}
                        </td>
                        <td className="py-2.5 text-[12px] text-[#222222]">
                          {info.label === "URL" ? (
                            <a
                              href={info.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:underline underline-offset-4 break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            info.value
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== Bizrea掲載CTA ===== */}
      <section className="bg-[#1B2D4F] py-16 max-lg:py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 lg:flex lg:items-center lg:gap-16">
          <div className="lg:flex-1">
            <h3 className="text-[20px] max-lg:text-[18px] font-bold text-white">
              Bizreaへの掲載を検討中の方へ
            </h3>
            <p className="mt-2 text-[14px] text-white/70 leading-[1.7]">
              御社の魅力を&ldquo;伝わる形&rdquo;にする方法を、無料でご提案します。
            </p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-block bg-accent text-white text-[15px] font-bold px-8 py-[14px] rounded-[4px] hover:bg-accent-dark transition-colors duration-200"
              >
                無料で相談してみる
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:w-[360px] flex-shrink-0">
            <div className="aspect-[4/3] rounded-[4px] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/cta-image.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
