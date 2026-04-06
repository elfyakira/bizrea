import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export const metadata = {
  title: "料金・プラン",
  description: "Bizreaの料金プランをご紹介。ライト・スタンダード・プレミアムの3プランから、御社に最適なプランをご提案します。",
};

const plans = [
  {
    name: "ライト",
    desc: "まずはBizreaを試してみたい企業向け",
    recommended: false,
    includes: [
      "社長インタビュー取材（半日）",
      "動画制作（実写1本・3分程度）",
      "WEBページ制作・掲載",
    ],
    excludes: ["雑誌制作", "アニメーション動画"],
    href: "/contact?plan=light",
  },
  {
    name: "スタンダード",
    desc: "Bizreaの効果を最大限に引き出す、一番人気のプラン",
    recommended: true,
    includes: [
      "社長インタビュー取材（1日）",
      "6ページ雑誌制作（印刷100部込み）",
      "動画制作（実写1本・5分程度）",
      "アニメーション動画（1本・1分程度）",
      "WEBページ制作・掲載",
      "QR導線設計",
    ],
    excludes: [],
    href: "/contact?plan=standard",
  },
  {
    name: "プレミアム",
    desc: "複数回取材で企業の深みを伝える、本格プラン",
    recommended: false,
    includes: [
      "社長インタビュー取材（複数回）",
      "6ページ雑誌制作（印刷200部込み）",
      "動画制作（実写2本・計10分程度）",
      "アニメーション動画（1本・2分程度）",
      "社員インタビュー動画（1本）",
      "WEBページ制作・掲載",
      "QR導線設計",
      "活用コンサルティング（3ヶ月）",
    ],
    excludes: [],
    href: "/contact?plan=premium",
  },
];

export default function PricingPage() {
  return (
    <main>
      <PageHero
        title="料金・プラン"
        subtitle="御社の課題と規模に合わせて、最適なプランをご提案します。"
      />

      {/* 料金の考え方 */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <h2 className="text-[28px] max-lg:text-[22px] font-bold text-[#222222]">
            &ldquo;制作費用&rdquo;ではなく、&ldquo;成果ツールへの投資&rdquo;
          </h2>
          <div className="mt-6 text-[16px] max-lg:text-[15px] leading-[1.9] text-[#222222]">
            <p>Bizreaの費用は&ldquo;動画を1本つくる&rdquo;コストではありません。</p>
            <p className="mt-4">
              社長インタビューを軸に、雑誌・動画・WEBの3つが連動するコンテンツを制作。<br />
              営業・採用・定着のすべてに使える&ldquo;企業ツール&rdquo;としてお届けします。
            </p>
            <p className="mt-4">
              一般的な制作会社に動画・パンフレット・WEBページをバラバラに発注すると、<br className="max-lg:hidden" />
              合計で数百万円以上になることも。<br />
              Bizreaなら、ひとつのインタビューから一気通貫で制作するため、<br className="max-lg:hidden" />
              トータルコストを抑えながら、メッセージの一貫性も確保できます。
            </p>
          </div>
        </div>
      </section>

      {/* プラン比較 */}
      <section className="bg-[#F6F4F1] py-20 max-lg:py-12">
        <div className="max-w-[1040px] mx-auto px-6">
          {/* SP: recommended first */}
          <div className="lg:hidden space-y-5">
            {[plans[1], plans[0], plans[2]].map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          {/* PC: 3 columns */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* 費用対効果 */}
      <section className="bg-white py-20 max-lg:py-12">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <h2 className="text-[22px] max-lg:text-[18px] font-bold text-[#222222] mb-8 max-lg:mb-6">
            バラバラに発注した場合との比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-[600px] mx-auto">
              <tbody>
                {[
                  ["会社紹介動画（5分）", "50〜150万円"],
                  ["アニメーション動画（1分）", "30〜80万円"],
                  ["会社パンフレット（6P）", "30〜80万円"],
                  ["企業WEBページ制作", "30〜100万円"],
                ].map(([item, cost], i) => (
                  <tr key={i} className="border-b border-[#E0DDD8]">
                    <td className="py-3.5 text-[14px] text-[#222222]">{item}</td>
                    <td className="py-3.5 text-[14px] text-[#5A5A5A] text-right">{cost}</td>
                  </tr>
                ))}
                <tr className="bg-[#F6F4F1]">
                  <td className="py-3.5 text-[14px] font-bold text-[#222222]">合計</td>
                  <td className="py-3.5 text-[14px] font-bold text-[#222222] text-right">140〜410万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[15px] text-[#5A5A5A] leading-[1.8]">
            Bizreaでは、ひとつのインタビューから一括制作するため、<br className="max-lg:hidden" />
            バラバラ発注と比較して大幅にコストを抑えられます。<br />
            さらに、メッセージの統一感も確保。詳しくは無料相談でお見積もりいたします。
          </p>
        </div>
      </section>

      {/* オプション */}
      <section className="bg-[#F6F4F1] py-16 max-lg:py-10">
        <div className="max-w-[720px] mx-auto px-6">
          <h2 className="text-[22px] max-lg:text-[18px] font-bold text-[#222222] mb-6 max-lg:mb-[18px]">
            オプション
          </h2>
          <div className="space-y-3">
            {[
              "雑誌の追加印刷（100部単位）",
              "社員インタビュー動画の追加制作",
              "写真撮影（商品・現場・社員）",
              "SNS用ショート動画の編集",
              "WEBページの更新・記事追加",
              "活用コンサルティングの延長",
            ].map((item, i) => (
              <p key={i} className="text-[15px] text-[#222222]">
                <span className="text-accent mr-2">+</span>{item}
              </p>
            ))}
          </div>
          <p className="mt-5 text-[13px] text-[#5A5A5A]">
            料金はオプション内容により異なります。詳しくはお問い合わせください。
          </p>
        </div>
      </section>

      <CtaSection
        heading="まずは無料でお見積もりいたします。"
        subtext="御社の課題をお聞きした上で、最適なプランと概算費用をご提案します。見積もりだけでもお気軽にどうぞ。"
        buttonText="無料で見積もりを依頼する"
      />
    </main>
  );
}

function PlanCard({ plan }: { plan: typeof plans[number] }) {
  return (
    <div
      className={`bg-white rounded-[4px] p-8 max-lg:p-6 ${
        plan.recommended
          ? "border-t-[3px] border-t-accent shadow-[0_4px_24px_rgba(0,0,0,0.08)] lg:scale-[1.03]"
          : ""
      }`}
    >
      {plan.recommended && (
        <span className="inline-block bg-accent text-white text-[12px] font-bold px-3.5 py-1 rounded-sm mb-3">
          おすすめ
        </span>
      )}
      <h3 className="text-[20px] font-bold text-[#222222]">{plan.name}</h3>
      <p className="text-[14px] text-[#5A5A5A] mt-2">{plan.desc}</p>
      <p className="mt-6 text-[36px] max-lg:text-[28px] font-bold text-[#222222]" style={{ fontFamily: "Inter, sans-serif" }}>
        {plan.recommended ? <span className="text-[#1B2D4F]">要お見積もり</span> : "要お見積もり"}
      </p>
      <div className="mt-6 space-y-2.5">
        {plan.includes.map((item, i) => (
          <p key={i} className="text-[14px] text-[#222222] flex items-start gap-2">
            <span className="text-accent mt-0.5">✓</span>{item}
          </p>
        ))}
        {plan.excludes.map((item, i) => (
          <p key={i} className="text-[14px] text-[#AAAAAA] flex items-start gap-2">
            <span>—</span>{item}
          </p>
        ))}
      </div>
      <Link
        href={plan.href}
        className={`block w-full text-center mt-6 py-3.5 rounded-[4px] text-[14px] font-medium transition-colors ${
          plan.recommended
            ? "bg-accent text-white hover:bg-accent-dark"
            : "border border-[#1B2D4F] text-[#1B2D4F] hover:bg-[#1B2D4F] hover:text-white"
        }`}
      >
        このプランで相談する
      </Link>
    </div>
  );
}
