import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export const metadata = {
  title: "制作の流れ",
  description: "BIZREAの制作プロセスをご紹介。無料相談から納品・活用サポートまで、社長にご負担いただくのは取材の半日だけです。",
};

const steps = [
  {
    num: "01",
    period: "所要時間: 60〜90分",
    title: "無料相談・ヒアリング",
    body: "御社の課題・目的・ターゲットをお聞きし、BIZREAでどんな成果が期待できるかをご説明します。オンラインでも対面でもOK。この段階では費用は一切かかりません。",
    task: "相談日時の調整のみ",
    highlight: true,
  },
  {
    num: "02",
    period: "約2〜3週間",
    title: "企画・構成の設計",
    body: "ヒアリング内容をもとに、インタビューの構成、雑誌のページ構成、動画の絵コンテを制作します。\"社長のどんな言葉を引き出すか\"を設計する、BIZREAで最も重要な工程です。",
    task: "企画書の確認・フィードバック（メールまたはオンラインで30分程度）",
  },
  {
    num: "03",
    period: "半日〜1日",
    title: "取材・撮影",
    body: "プロのインタビュアー、カメラマン、撮影クルーが御社に訪問。社長インタビューを中心に、社内・現場の撮影も行います。\n\n台本はありません。インタビュアーとの自然な対話の中で、社長の想い・ビジョン・こだわりを引き出していきます。\"話すのが苦手\"という方でも、まったく問題ありません。",
    task: "取材日の確保（半日〜1日）、撮影場所の手配",
  },
  {
    num: "04",
    period: "約4〜6週間",
    title: "制作・編集",
    body: "インタビュー内容をもとに、雑誌記事のライティング・デザイン、動画の編集・テロップ・BGM挿入、WEBページの構築を進めます。すべてを一つのチームで制作するため、メッセージの統一感が保たれます。",
    task: "初稿の確認・修正依頼（各制作物1〜2回程度）",
  },
  {
    num: "05",
    period: "約1週間",
    title: "納品・公開",
    body: "雑誌の印刷物・PDFデータ、動画データ、WEBページの公開をまとめて行います。QRコードの設置位置や、各コンテンツの活用方法も具体的にご案内します。",
    task: "最終確認の承認",
  },
  {
    num: "06",
    period: "継続",
    title: "活用サポート",
    body: "納品して終わりではありません。\"商談前にこう使う\"\"面接前にこう送る\"——具体的な活用方法のアドバイスを継続的に行います。WEBページのアクセスレポートも定期的にお届けします。",
    task: "日々の営業・採用活動で活用するだけ",
  },
];

export default function FlowPage() {
  return (
    <main>
      <PageHero
        title="制作の流れ"
        subtitle="社長にご負担いただくのは、取材の半日だけ。あとはすべてお任せください。"
      />

      {/* タイムライン */}
      <section className="bg-white py-[120px] max-lg:py-[72px]">
        <div className="max-w-[780px] mx-auto px-6">
          <div className="relative">
            {/* 縦線 */}
            <div className="absolute left-[19px] max-lg:left-[11px] top-5 bottom-5 w-px bg-[#E0DDD8]" />

            <div className="space-y-14 max-lg:space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="relative pl-[72px] max-lg:pl-14">
                  {/* 番号円 */}
                  <div
                    className={`absolute left-0 max-lg:left-[-8px] top-0 w-10 h-10 max-lg:w-[24px] max-lg:h-[24px] rounded-full flex items-center justify-center text-[14px] max-lg:text-[10px] font-bold ${
                      step.highlight
                        ? "bg-accent text-white"
                        : "bg-white border-2 border-accent text-accent"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[20px] max-lg:text-[18px] font-bold text-[#222222]">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-[#5A5A5A] mt-1">{step.period}</p>
                    <p className="mt-3 text-[15px] max-lg:text-[14px] leading-[1.8] text-[#5A5A5A] whitespace-pre-line">
                      {step.body}
                    </p>
                    <p className="mt-3 text-[13px] font-medium text-[#1B2D4F]">
                      御社にしていただくこと: {step.task}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* よくある不安 */}
      <section className="bg-[#F6F4F1] py-20 max-lg:py-12">
        <div className="max-w-[720px] mx-auto px-6">
          <h2 className="text-[22px] max-lg:text-[18px] font-bold text-[#222222] text-center mb-8 max-lg:mb-6">
            よくいただくご不安
          </h2>
          <div className="space-y-7 max-lg:space-y-5">
            {[
              { q: "社長が話すのが苦手なのですが...", a: "問題ありません。BIZREAのインタビューは台本を読むものではなく、プロのインタビュアーとの自然な対話です。\"話すのが苦手\"とおっしゃっていた社長ほど、飾らない言葉が出て良いインタビューになることが多いです。" },
              { q: "取材に丸一日かかるのは厳しいのですが...", a: "半日（3〜4時間）で完了するプランもご用意しています。御社のスケジュールに合わせて柔軟に調整しますので、ご安心ください。" },
              { q: "制作物のイメージが合わなかったらどうなりますか？", a: "各制作物について確認・修正のステップを設けています。初稿でご納得いただけない場合は、方向性を調整して再制作いたします。ご満足いただけるまで対応します。" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-[16px] max-lg:text-[15px] font-bold text-[#222222]">{item.q}</p>
                <p className="mt-2 text-[15px] max-lg:text-[14px] leading-[1.8] text-[#5A5A5A]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="まずは無料相談から始めてみませんか？"
        subtext="オンラインでも対面でもOK。60分程度で、御社に合った活用プランをご提案します。"
        buttonText="無料相談を申し込む"
      />
    </main>
  );
}
