import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export const metadata = {
  title: "BIZREAとは",
  description: "BIZREAは社長インタビューを軸にした企業ブランディングコンテンツサービスです。雑誌・動画・WEBの三位一体で、企業の本質を伝わる形にします。",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="BIZREAとは"
        subtitle="&ldquo;いい会社&rdquo;が、正しく伝わる社会をつくる。"
      />

      {/* 課題提起 */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="max-w-[720px] mx-auto px-6">
          <h2 className="text-[28px] max-lg:text-[22px] font-bold text-[#222222] text-center">
            &ldquo;いい会社&rdquo;ほど、伝わっていない。
          </h2>
          <div className="mt-8 max-lg:mt-6 text-[16px] max-lg:text-[15px] leading-[2.0] text-[#222222]">
            <p>
              真面目にものづくりをしている会社。<br />
              社員を家族のように大切にしている会社。<br />
              地域に根差して何十年も信頼を積み重ねてきた会社。
            </p>
            <p className="mt-6">
              東海エリアには、そんな会社がたくさんあります。
            </p>
            <p className="mt-6">
              でも、その魅力は外に伝わっていない。<br />
              求人を出しても「知らない会社だから」と素通りされる。<br />
              営業で「うちの強みは——」と説明しても、言葉にできない。
            </p>
            <p className="mt-6">
              問題は、会社の中身じゃない。<br />
              &ldquo;伝え方&rdquo;です。
            </p>
          </div>
        </div>
      </section>

      {/* BIZREAの答え */}
      <section className="bg-[#F6F4F1] py-[100px] max-lg:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0">
              <h2 className="text-[26px] max-lg:text-[22px] font-bold text-[#222222]">
                社長の言葉を起点に、<br />企業の&ldquo;本質&rdquo;を届ける。
              </h2>
              <div className="mt-6 max-lg:mt-[18px] text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                <p>BIZREAは、社長インタビューを軸にしたコンテンツサービスです。</p>
                <p className="mt-4">
                  プロのインタビュアーが社長の想い・ビジョン・こだわりを引き出し、<br className="max-lg:hidden" />
                  その言葉を&ldquo;伝わる形&rdquo;に変換する。
                </p>
                <p className="mt-4">
                  雑誌にして、手に取れる信頼に。<br />
                  動画にして、表情と声で共感に。<br />
                  WEBにして、検索で届く資産に。
                </p>
                <p className="mt-4">
                  ひとつのインタビューから、<br />
                  営業にも採用にも定着にも使えるコンテンツが生まれます。
                </p>
              </div>
            </div>
            <div className="lg:w-[45%] order-1 lg:order-2 aspect-[4/5] max-lg:aspect-[3/2] bg-[#E0DDD8] max-lg:mb-8">
              <div className="w-full h-full bg-[url('/images/about-interview.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* ビジョン */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="text-[28px] max-lg:text-[22px] font-bold text-[#222222]">
            私たちが目指す未来
          </h2>
          <p
            className="mt-10 max-lg:mt-7 text-[32px] max-lg:text-[24px] font-medium text-[#1B2D4F] leading-[1.5]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            &ldquo;いい会社&rdquo;が、<br />正しく伝わる社会をつくる。
          </p>
          <div className="mt-8 max-lg:mt-6 text-[16px] max-lg:text-[15px] leading-[2.0] text-[#222222] text-center">
            <p>
              求人サイトの限られた枠では、会社の本質は伝わりません。<br />
              30秒のCMでは、社長の想いは届きません。
            </p>
            <p className="mt-4">
              BIZREAが目指しているのは、<br />
              企業の&ldquo;一次情報&rdquo;がちゃんと届く世界。
            </p>
            <p className="mt-4">
              社長自身の言葉で語られた、加工しすぎない情報。<br />
              それが求職者にも、取引先にも、社員にも届く。
            </p>
            <p className="mt-4">
              &ldquo;いい会社&rdquo;が正しく評価され、正しく選ばれる。<br />
              そんな社会の実現が、BIZREAの存在意義です。
            </p>
          </div>
        </div>
      </section>

      {/* 三位一体の仕組み */}
      <section className="bg-[#F6F4F1] py-[100px] max-lg:py-14">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] max-lg:text-[22px] font-bold text-[#222222] text-center mb-14 max-lg:mb-9">
            ひとつのインタビューから、3つのコンテンツへ
          </h2>

          {/* 図解 */}
          <div className="max-w-[560px] mx-auto relative">
            {/* 接続線（SVG） */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 560 380" preserveAspectRatio="xMidYMid meet">
              {/* 中央(280,100)から左上(100,300) */}
              <line x1="280" y1="140" x2="100" y2="260" stroke="#E0DDD8" strokeWidth="1" />
              {/* 中央(280,100)から右上(460,300) */}
              <line x1="280" y1="140" x2="460" y2="260" stroke="#E0DDD8" strokeWidth="1" />
              {/* 中央(280,100)から下(280,300) */}
              <line x1="280" y1="140" x2="280" y2="260" stroke="#E0DDD8" strokeWidth="1" />
            </svg>

            {/* 中央 */}
            <div className="flex justify-center mb-16 max-lg:mb-12">
              <div className="w-40 h-40 max-lg:w-28 max-lg:h-28 rounded-full bg-[#1B2D4F] flex items-center justify-center relative z-10">
                <span className="text-white text-[14px] max-lg:text-[12px] font-medium text-center leading-tight px-4">
                  社長<br />インタビュー
                </span>
              </div>
            </div>

            {/* 3つの要素 */}
            <div className="grid grid-cols-3 gap-6 max-lg:gap-4 text-center relative z-10">
              <div>
                <div className="w-16 h-16 max-lg:w-12 max-lg:h-12 mx-auto mb-3 rounded-full border border-[#E0DDD8] bg-[#F6F4F1] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#5A5A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                </div>
                <p className="text-[15px] max-lg:text-[13px] font-bold text-[#222222]">雑誌</p>
                <p className="text-[13px] max-lg:text-[11px] text-[#5A5A5A] mt-1">信頼獲得</p>
              </div>
              <div>
                <div className="w-16 h-16 max-lg:w-12 max-lg:h-12 mx-auto mb-3 rounded-full border border-[#E0DDD8] bg-[#F6F4F1] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#5A5A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>
                </div>
                <p className="text-[15px] max-lg:text-[13px] font-bold text-[#222222]">動画</p>
                <p className="text-[13px] max-lg:text-[11px] text-[#5A5A5A] mt-1">共感・理解</p>
              </div>
              <div>
                <div className="w-16 h-16 max-lg:w-12 max-lg:h-12 mx-auto mb-3 rounded-full border border-[#E0DDD8] bg-[#F6F4F1] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#5A5A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </div>
                <p className="text-[15px] max-lg:text-[13px] font-bold text-[#222222]">WEB</p>
                <p className="text-[13px] max-lg:text-[11px] text-[#5A5A5A] mt-1">情報蓄積・検索</p>
              </div>
            </div>
          </div>

          <p className="mt-12 max-lg:mt-8 text-[15px] max-lg:text-[14px] leading-[1.8] text-[#5A5A5A] text-center max-w-[600px] mx-auto">
            それぞれのコンテンツが独立して機能しながら、<br />
            QRコードやリンクで相互に繋がる導線を設計。<br />
            紙を手に取った人が動画を見て、動画を見た人がWEBで詳しく読む。<br />
            接触回数が増えるほど、御社への理解と信頼が深まります。
          </p>
        </div>
      </section>

      {/* 他社との違い */}
      <section className="bg-white py-[100px] max-lg:py-14">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] max-lg:text-[22px] font-bold text-[#222222] text-center mb-12 max-lg:mb-8">
            一般的な制作会社とBIZREAの違い
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#F6F4F1]">
                  <th className="text-left px-5 py-4 text-[14px] font-medium text-[#5A5A5A]">項目</th>
                  <th className="text-left px-5 py-4 text-[14px] font-medium text-[#5A5A5A]">一般的な制作会社</th>
                  <th className="text-left px-5 py-4 text-[14px] font-medium text-[#5A5A5A]">BIZREA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["納品物", "動画だけ、パンフだけ", "雑誌＋動画＋WEBが連動"],
                  ["活用範囲", "採用だけ、営業だけ", "営業・採用・定着すべて"],
                  ["情報の質", "企業が用意した原稿", "社長の一次情報（インタビュー）"],
                  ["納品後", "つくって終わり", "使い方まで設計"],
                  ["蓄積性", "単発で終わる", "WEB上に蓄積、SEO資産に"],
                ].map(([label, general, bizrea], i) => (
                  <tr key={i} className="border-b border-[#E0DDD8]">
                    <td className="px-5 py-4 text-[14px] text-[#222222]">{label}</td>
                    <td className="px-5 py-4 text-[14px] text-[#5A5A5A]">{general}</td>
                    <td className="px-5 py-4 text-[14px] font-bold text-[#222222]">{bizrea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection
        heading="御社の&ldquo;本質&rdquo;を、一緒に届けませんか？"
        subtext="まずは無料相談で、御社の課題をお聞かせください。"
        relatedLinks={[
          { label: "導入メリットを見る", href: "/merit" },
          { label: "導入事例を見る", href: "/cases" },
        ]}
      />
    </main>
  );
}
