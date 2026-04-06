import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export const metadata = {
  title: "導入メリット",
  description: "BIZREAは営業力・採用力・組織定着の3つの成果を、ひとつのサービスで実現します。社長インタビューを軸にしたコンテンツの活用メリットをご紹介。",
};

function Quote({ text, author }: { text: string; author: string }) {
  return (
    <div className="mt-8 max-lg:mt-6 border-l-[3px] border-accent pl-5">
      <p className="text-[15px] max-lg:text-[14px] leading-[1.8] text-[#5A5A5A]">{text}</p>
      <p className="text-[13px] text-[#5A5A5A] mt-2">—— {author}</p>
    </div>
  );
}

export default function MeritPage() {
  return (
    <main>
      <PageHero
        title="導入メリット"
        subtitle="営業力・採用力・組織定着。ひとつのサービスで、3つの成果を。"
      />

      {/* メリット全体像 */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="max-w-[780px] mx-auto px-6 text-center">
          <h2 className="text-[28px] max-lg:text-[22px] font-bold text-[#222222]">
            なぜ&ldquo;ひとつのインタビュー&rdquo;で<br className="max-lg:hidden" />3つの課題が解決するのか
          </h2>
          <p className="mt-6 max-lg:mt-[18px] text-[16px] max-lg:text-[15px] leading-[1.9] text-[#5A5A5A]">
            BIZREAのコンテンツは、用途を限定しません。<br />
            社長インタビューを軸に制作した雑誌・動画・WEBは、<br className="max-lg:hidden" />
            &ldquo;使う場面&rdquo;を変えるだけで、営業ツールにも採用ツールにも社内教育ツールにもなる。<br />
            だから、ひとつの投資で3つの成果が得られます。
          </p>
        </div>
      </section>

      {/* Merit 01: 営業力 */}
      <section className="bg-[#F6F4F1] py-[100px] max-lg:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="lg:flex lg:items-start lg:gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0">
              <p className="text-[13px] font-medium text-accent tracking-[0.1em]" style={{ fontFamily: "Inter, sans-serif" }}>Merit 01</p>
              <h3 className="mt-3 text-[26px] max-lg:text-[22px] font-bold text-[#222222]">
                商談前に&ldquo;信頼&rdquo;が届く営業をつくる
              </h3>
              <div className="mt-5 text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                <p>
                  商談の前に、BIZREAの記事や動画を相手に送る。<br />
                  それだけで、営業の質が変わります。
                </p>
                <p className="mt-4">
                  &ldquo;社長の考えを読みました&rdquo;<br />
                  &ldquo;御社がどんな会社か、よくわかりました&rdquo;
                </p>
                <p className="mt-4">
                  初対面なのに、すでに信頼が生まれている状態で商談が始まる。<br />
                  資料の説明から始まる営業と、信頼がある状態から始まる営業。<br />
                  結果が変わるのは当然です。
                </p>
                <p className="mt-4">
                  BIZREAのコンテンツは&ldquo;営業が話す前に、会社を語ってくれる&rdquo;存在になります。
                </p>
              </div>
              <Quote
                text={'商談の成約率が体感で1.5倍になりました。BIZREAの記事を事前に送るようにしてから、\u201C説明する時間\u201Dが減って\u201C相談される時間\u201Dが増えた。'}
                author="株式会社○○（製造業・愛知県）代表取締役"
              />
            </div>
            <div className="lg:w-[45%] aspect-[3/2] bg-[#E0DDD8] order-1 lg:order-2 max-lg:mb-8">
              <div className="w-full h-full bg-[url('/images/merit-sales.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Merit 02: 採用力 */}
      <section className="bg-white py-[100px] max-lg:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="lg:flex lg:items-start lg:gap-16">
            <div className="lg:w-[45%] aspect-[3/2] bg-[#E0DDD8] max-lg:mb-8">
              <div className="w-full h-full bg-[url('/images/merit-recruit.jpg')] bg-cover bg-center" />
            </div>
            <div className="lg:w-1/2">
              <p className="text-[13px] font-medium text-accent tracking-[0.1em]" style={{ fontFamily: "Inter, sans-serif" }}>Merit 02</p>
              <h3 className="mt-3 text-[26px] max-lg:text-[22px] font-bold text-[#222222]">
                &ldquo;条件&rdquo;で来る人から、&ldquo;共感&rdquo;で来る人へ変える
              </h3>
              <div className="mt-5 text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                <p>
                  求人サイトの限られた枠では、給与と休日しか伝わらない。<br />
                  だから&ldquo;条件だけ&rdquo;で応募する人が集まり、ミスマッチが起きる。
                </p>
                <p className="mt-4">
                  BIZREAの企業ページには、社長の想い、社員のリアル、会社の空気感がある。<br />
                  これを面接前に見てもらうだけで、応募者の&ldquo;質&rdquo;が変わります。
                </p>
                <p className="mt-4">
                  &ldquo;社長のインタビューを読んで、この会社で働きたいと思いました&rdquo;
                </p>
                <p className="mt-4">
                  そう言ってくれる人が来るようになれば、<br />
                  採用のコストも、入社後の離職リスクも、確実に下がります。
                </p>
              </div>
              <Quote
                text={'応募者の質が明らかに変わりました。以前は\u201Cどこでもいい\u201Dという人が多かったのが、\u201C御社の記事を読んで\u201Dと言ってくれる人が増えた。結果、入社後の定着率も上がっています。'}
                author="○○建設株式会社（建設業・岐阜県）人事担当"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Merit 03: 定着 */}
      <section className="bg-[#F6F4F1] py-[100px] max-lg:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="lg:flex lg:items-start lg:gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0">
              <p className="text-[13px] font-medium text-accent tracking-[0.1em]" style={{ fontFamily: "Inter, sans-serif" }}>Merit 03</p>
              <h3 className="mt-3 text-[26px] max-lg:text-[22px] font-bold text-[#222222]">
                入社後も&ldquo;企業の原点&rdquo;に立ち返れるツール
              </h3>
              <div className="mt-5 text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
                <p>
                  入社して3ヶ月、半年と経つと、日々の業務に追われて<br className="max-lg:hidden" />
                  &ldquo;なぜこの会社を選んだのか&rdquo;を忘れてしまう。<br />
                  これが、早期離職の見えにくい原因です。
                </p>
                <p className="mt-4">
                  BIZREAのコンテンツは、入社後の&ldquo;教科書&rdquo;にもなります。
                </p>
                <p className="mt-4">
                  社長がどんな想いで会社を経営しているか。<br />
                  この会社が大切にしていることは何か。
                </p>
                <p className="mt-4">
                  それが雑誌という&ldquo;手に取れる形&rdquo;で残っているから、<br />
                  迷った時に読み返せる。原点に立ち返れる。
                </p>
                <p className="mt-4">
                  採用して終わりではなく、定着まで機能する。<br />
                  それが、BIZREAのコンテンツが&ldquo;ツール&rdquo;である理由です。
                </p>
              </div>
              <Quote
                text={'新入社員に入社初日に雑誌を渡すようにしています。先輩の言葉だけでは伝えきれない\u201C会社の想い\u201Dが、社長の言葉としてまとまっているので助かっています。'}
                author="株式会社○○物流（物流業・三重県）総務部長"
              />
            </div>
            <div className="lg:w-[45%] aspect-[3/2] bg-[#E0DDD8] order-1 lg:order-2 max-lg:mb-8">
              <div className="w-full h-full bg-[url('/images/merit-retention.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="bg-white py-[100px] max-lg:py-14">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[28px] max-lg:text-[22px] font-bold text-[#222222] text-center mb-10 max-lg:mb-7">
            コストと効果の比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-[#1B2D4F]">
                  {["施策", "営業", "採用", "定着", "蓄積性", "コスト感"].map((h) => (
                    <th key={h} className="px-4 py-3.5 text-[13px] font-medium text-white text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["求人広告", "×", "△", "×", "なし（掲載期間のみ）", "月額数万〜数十万円"],
                  ["採用動画（単体）", "×", "○", "×", "低い", "1本30〜100万円"],
                  ["会社パンフレット", "△", "△", "×", "なし（改訂コスト大）", "1回30〜80万円"],
                  ["採用コンサル", "×", "○", "△", "なし（コンサル終了で効果消）", "月額10〜50万円"],
                ].map(([name, ...cells], i) => (
                  <tr key={i} className="border-b border-[#E0DDD8]">
                    <td className="px-4 py-3.5 text-[14px] text-[#222222]">{name}</td>
                    {cells.map((c, j) => (
                      <td key={j} className="px-4 py-3.5 text-[14px] text-[#5A5A5A]">{c}</td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-[#F6F4F1]">
                  <td className="px-4 py-3.5 text-[14px] font-bold text-[#222222]">BIZREA</td>
                  <td className="px-4 py-3.5 text-[14px] font-bold text-[#222222]">◎</td>
                  <td className="px-4 py-3.5 text-[14px] font-bold text-[#222222]">◎</td>
                  <td className="px-4 py-3.5 text-[14px] font-bold text-[#222222]">◎</td>
                  <td className="px-4 py-3.5 text-[14px] font-bold text-[#222222]">高い（WEB蓄積）</td>
                  <td className="px-4 py-3.5 text-[14px] font-bold text-[#222222]">要相談</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[13px] text-[#5A5A5A]">
            ※効果は導入企業の実績に基づく目安です。業種・規模により異なります。
          </p>
        </div>
      </section>

      <CtaSection
        heading="営業・採用・定着、どれから始めますか？"
        subtext="無料相談では、御社の課題に合わせた最適な活用プランをご提案します。"
        relatedLinks={[
          { label: "導入事例を見る", href: "/cases" },
          { label: "料金・プランを見る", href: "/pricing" },
        ]}
      />
    </main>
  );
}
