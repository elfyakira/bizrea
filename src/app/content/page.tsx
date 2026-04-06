import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export const metadata = {
  title: "コンテンツ紹介",
  description: "BIZREAで制作する雑誌・動画・WEBコンテンツの詳細をご紹介。ひとつのインタビューから3つの武器を制作します。",
};

function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full max-w-[600px] mx-auto">
      <tbody>
        {rows.map(([label, value], i) => (
          <tr key={i} className="border-b border-[#E0DDD8]">
            <td className="py-3.5 text-[14px] font-medium text-[#5A5A5A] w-[30%]">{label}</td>
            <td className="py-3.5 text-[14px] text-[#222222]">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ContentPage() {
  return (
    <main>
      <PageHero
        title="コンテンツ紹介"
        subtitle="雑誌 × 動画 × WEB。ひとつのインタビューから、3つの&ldquo;武器&rdquo;を。"
      />

      {/* 雑誌コンテンツ */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="w-full aspect-[21/9] max-lg:aspect-video bg-[#E0DDD8] overflow-hidden">
          <div className="w-full h-full bg-[url('/images/content-magazine.jpg')] bg-cover bg-center" />
        </div>
        <div className="max-w-[720px] mx-auto px-6 mt-12 max-lg:mt-8">
          <p className="text-[13px] font-medium text-accent tracking-[0.1em]" style={{ fontFamily: "Inter, sans-serif" }}>Content 01</p>
          <h2 className="mt-3 text-[26px] max-lg:text-[22px] font-bold text-[#222222]">
            6ページの特集記事が、御社の&ldquo;信頼&rdquo;になる
          </h2>
          <div className="mt-5 text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
            <p>
              プロのライターが社長インタビューを構成し、<br className="max-lg:hidden" />
              デザイナーが6ページの特集記事として仕上げます。
            </p>
            <p className="mt-4">
              抽象的なスローガンではなく、具体的なエピソードを中心に。<br />
              社長の人柄が伝わる言葉選び。<br />
              読み手が&ldquo;この人の話をもっと聞きたい&rdquo;と思う構成。
            </p>
            <p className="mt-4">
              冊子だから手に取れる。<br />
              商談先に渡す。面接前に渡す。社員に配る。<br />
              デジタルにはない&ldquo;手元に残る&rdquo;という信頼感があります。
            </p>
          </div>
          <div className="mt-10 max-lg:mt-7">
            <SpecTable rows={[
              ["ページ数", "6ページ（見開き3ページ分）"],
              ["構成", "社長インタビュー + 企業概要 + 事業紹介"],
              ["サイズ", "A4サイズ"],
              ["印刷", "フルカラー、マット or コート紙"],
              ["部数", "ご希望に応じて（追加印刷可）"],
              ["納品形式", "印刷物 + PDFデータ"],
            ]} />
          </div>
        </div>
      </section>

      {/* 動画コンテンツ */}
      <section className="bg-[#F6F4F1] py-[100px] max-lg:py-14">
        <div className="max-w-[960px] mx-auto px-6">
          <p className="text-[13px] font-medium text-accent tracking-[0.1em]" style={{ fontFamily: "Inter, sans-serif" }}>Content 02</p>
          <h2 className="mt-3 text-[26px] max-lg:text-[22px] font-bold text-[#222222]">
            表情と声が、文字では伝えられない&ldquo;共感&rdquo;をつくる
          </h2>
          <div className="mt-5 text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
            <p>
              社長の声のトーン。話している時の表情。言葉を探す間。<br />
              動画だから伝えられるものがあります。
            </p>
            <p className="mt-4">
              BIZREAでは2種類の動画を制作。<br />
              社長の人柄を伝える実写インタビュー動画と、<br />
              事業内容をわかりやすく伝えるアニメーション動画。
            </p>
            <p className="mt-4">
              商談前のメールに添付する。採用ページに埋め込む。SNSでシェアする。<br />
              &ldquo;会う前に信頼をつくる&rdquo;ツールとして、あらゆる場面で活躍します。
            </p>
          </div>

          <div className="mt-12 max-lg:mt-8 grid grid-cols-2 max-lg:grid-cols-1 gap-8 max-lg:gap-6">
            <div>
              <div className="aspect-video bg-[#E0DDD8] rounded-sm relative overflow-hidden">
                <div className="w-full h-full bg-[url('/images/content-video-interview.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#222222] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[14px] font-medium text-[#222222]">実写インタビュー動画</p>
            </div>
            <div>
              <div className="aspect-video bg-[#E0DDD8] rounded-sm relative overflow-hidden">
                <div className="w-full h-full bg-[url('/images/content-video-animation.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#222222] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[14px] font-medium text-[#222222]">アニメーション動画</p>
            </div>
          </div>

          <div className="mt-10 max-lg:mt-7">
            <SpecTable rows={[
              ["種類", "実写インタビュー動画 + アニメーション動画"],
              ["尺", "実写: 3〜5分 / アニメ: 1〜2分"],
              ["撮影", "プロの撮影クルーが御社に訪問"],
              ["編集", "テロップ、BGM、カラーグレーディング込み"],
              ["納品形式", "MP4データ + YouTube/SNS最適化版"],
            ]} />
          </div>
        </div>
      </section>

      {/* WEBコンテンツ */}
      <section className="bg-white py-[100px] max-lg:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0">
              <p className="text-[13px] font-medium text-accent tracking-[0.1em]" style={{ fontFamily: "Inter, sans-serif" }}>Content 03</p>
              <h2 className="mt-3 text-[26px] max-lg:text-[22px] font-bold text-[#222222]">
                検索で届き、蓄積で強くなる企業ページ
              </h2>
              <div className="mt-5 text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                <p>
                  雑誌の記事をWEB化し、動画を埋め込んだ企業ページを制作。<br />
                  BIZREAのサイト上に掲載されます。
                </p>
                <p className="mt-4">
                  &ldquo;企業名 + 社長&rdquo;で検索した求職者が、<br />
                  御社の本質に触れるページにたどり着く。
                </p>
                <p className="mt-4">
                  求人サイトの300文字では伝えきれない情報が、<br />
                  写真と動画とともにここにある。
                </p>
                <p className="mt-4">
                  さらに、掲載企業が増えるほどサイト全体の評価が上がり、<br />
                  御社のページへの流入も増加。<br />
                  使い捨てのコンテンツではなく、時間とともに価値が上がる&ldquo;資産&rdquo;です。
                </p>
              </div>
              <div className="mt-8">
                <SpecTable rows={[
                  ["掲載内容", "社長インタビュー記事 + 動画埋め込み + 企業情報"],
                  ["SEO", "企業名・業種・地域で検索可能な設計"],
                  ["QR連動", "雑誌→動画→WEBへの導線設計"],
                  ["更新", "記事の追加・修正に対応"],
                  ["分析", "ページビュー、滞在時間のレポート"],
                ]} />
              </div>
            </div>
            <div className="lg:w-[45%] order-1 lg:order-2 aspect-[4/3] bg-[#E0DDD8] rounded-sm overflow-hidden max-lg:mb-8">
              <div className="w-full h-full bg-[url('/images/content-web.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* 連動の仕組み */}
      <section className="bg-[#F6F4F1] py-[100px] max-lg:py-14">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <h2 className="text-[28px] max-lg:text-[22px] font-bold text-[#222222] mb-12 max-lg:mb-8">
            紙 → 動画 → WEB、すべてが繋がる
          </h2>

          <div className="flex max-lg:flex-col items-center justify-center gap-6 max-lg:gap-4 mb-14 max-lg:mb-9">
            {[
              { icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25", label: "雑誌を手渡す", sub: "QRコードで動画に誘導" },
              { icon: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z", label: "動画を視聴", sub: "リンクでWEBページへ" },
              { icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25", label: "WEBで詳しく読む", sub: "問い合わせ / 応募" },
            ].map((step, i) => (
              <div key={i} className="flex max-lg:flex-col items-center gap-4 max-lg:gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border border-[#E0DDD8] flex items-center justify-center mb-2">
                    <svg className="w-6 h-6 text-[#1B2D4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} /></svg>
                  </div>
                  <p className="text-[15px] font-medium text-[#222222]">{step.label}</p>
                  <p className="text-[13px] text-[#5A5A5A]">{step.sub}</p>
                </div>
                {i < 2 && (
                  <span className="text-[#E0DDD8] text-2xl max-lg:rotate-90">→</span>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-[20px] max-lg:text-[18px] font-bold text-[#222222] mb-5 text-left max-w-[720px] mx-auto">活用シーン</h3>
          <div className="max-w-[720px] mx-auto text-left space-y-5 max-lg:space-y-4">
            {[
              { label: "営業", text: "商談前に雑誌を郵送 → 相手がQRで動画視聴 → WEBで事業理解 → 商談がスムーズに" },
              { label: "採用", text: "面接前にWEBページのURLを送付 → 動画で社長の人柄を確認 → \"共感\"した状態で面接へ" },
              { label: "定着", text: "入社初日に雑誌を配布 → 動画で会社の歴史・ビジョンを共有 → WEBページをいつでも振り返り" },
            ].map((scene, i) => (
              <div key={i}>
                <span className="text-[15px] font-bold text-accent">{scene.label}</span>
                <p className="text-[15px] text-[#222222] leading-[1.7]">{scene.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="どんなコンテンツになるか、まずはご相談ください。"
        subtext="御社の強みに合わせた構成案を、無料でご提案します。"
        relatedLinks={[
          { label: "導入事例を見る", href: "/cases" },
          { label: "料金・プランを見る", href: "/pricing" },
        ]}
      />
    </main>
  );
}
