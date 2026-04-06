'use client';

import { useState } from "react";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

function FaqItem({ q, a, isLast, defaultOpen = false }: { q: string; a: string; isLast: boolean; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={!isLast ? "border-b border-[#E0DDD8]" : ""}>
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[17px] max-lg:text-[16px] font-medium text-[#222222] pr-8">{q}</span>
        <span className={`text-[#5A5A5A] text-xl flex-shrink-0 transition-transform duration-250 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-400 ease-out"
        style={{ maxHeight: open ? 500 : 0 }}
      >
        <p className="pb-6 pr-12 text-[15px] max-lg:text-[14px] text-[#5A5A5A] leading-[1.8]">{a}</p>
      </div>
    </div>
  );
}

const categories = [
  {
    title: "費用・料金について",
    items: [
      { q: "具体的な費用はいくらですか？", a: "プランや制作内容により異なりますが、雑誌・動画・WEBの三位一体パッケージで、一般的な個別発注と比較してトータルコストを大幅に抑えられる設計です。無料相談にて、御社の課題と規模に合わせたお見積もりをご提案します。" },
      { q: "追加費用が後から発生することはありますか？", a: "お見積もり時にすべての費用を明示します。制作途中での追加費用は、お客様から追加のご要望があった場合のみ発生します。その場合も、事前にご了承を得てから進めます。" },
      { q: "分割払いは可能ですか？", a: "はい、対応しています。契約時・中間・納品時の3回分割など、御社のご都合に合わせてご相談いただけます。" },
    ],
  },
  {
    title: "インタビュー・取材について",
    items: [
      { q: "社長が話すのが苦手でも大丈夫ですか？", a: "まったく問題ありません。Bizreaのインタビューは\"台本を読む\"ものではなく、プロのインタビュアーとの自然な対話です。普段通りに話していただくだけで、プロが言葉を引き出し、\"伝わる形\"に構成します。実は、\"話すのが苦手\"とおっしゃる社長ほど、飾らない言葉で良いインタビューになることが多いです。" },
      { q: "取材にはどのくらい時間がかかりますか？", a: "インタビュー取材は2〜3時間、撮影を含めて半日〜1日が目安です。御社のスケジュールに合わせて柔軟に調整しますので、ご安心ください。" },
      { q: "社員のインタビューも撮影できますか？", a: "はい。プレミアムプランでは社員インタビュー動画の制作が含まれています。他プランでもオプションとして追加可能です。" },
    ],
  },
  {
    title: "制作物について",
    items: [
      { q: "完成した動画や雑誌を自社HPやSNSで使えますか？", a: "はい、ご自由にお使いいただけます。自社HPへの掲載、SNSでのシェア、採用サイトへの転載、商談先への送付など、活用方法に制限はありません。" },
      { q: "雑誌の追加印刷はできますか？", a: "はい、100部単位で追加印刷を承っています。営業活動や採用活動で配布数が増えた際にも柔軟に対応します。" },
      { q: "WEBページの内容を後から更新できますか？", a: "はい、対応可能です。役員交代、事業内容の変更など、掲載情報の更新は随時承ります。" },
      { q: "制作物の方向性が合わなかった場合は修正できますか？", a: "はい。各制作物について確認・修正のステップを設けています。初稿の段階でフィードバックをいただき、方向性を調整して再制作いたします。ご満足いただけるまで対応します。" },
    ],
  },
  {
    title: "Bizreaのサービスについて",
    items: [
      { q: "他の制作会社との違いは何ですか？", a: "Bizreaは\"制作会社\"ではなく\"成果ツールの提供\"です。動画だけ、パンフレットだけを納品するサービスとは異なり、社長インタビューを軸に雑誌・動画・WEBを一気通貫で制作し、営業・採用・定着のすべてに活用できる設計にしています。つくって終わりではなく、\"使って成果を出す\"ところまでが私たちの仕事です。" },
      { q: "愛知県以外でも対応できますか？", a: "東海エリア（愛知・岐阜・三重）を中心に対応しています。それ以外の地域についてもご相談ください。取材はオンラインでも対応可能です。" },
      { q: "Bizreaのサイトに掲載されることのメリットは何ですか？", a: "Bizreaサイト上に御社のページが掲載されることで、企業名や業種での検索流入が期待できます。さらに、掲載企業が増えるほどサイト全体のSEO評価が上がり、御社のページへのアクセスも増加します。コンテンツが\"資産\"として価値を持ち続ける構造です。" },
    ],
  },
  {
    title: "お問い合わせ・契約について",
    items: [
      { q: "無料相談後に、しつこい営業はありませんか？", a: "一切ありません。無料相談はあくまで御社の課題をお聞きし、Bizreaが合うかどうかをお互いに確認する場です。合わないと判断された場合も、その後のご連絡は差し上げません。" },
      { q: "契約前にサンプルを見ることはできますか？", a: "はい。導入事例ページで実際の掲載企業の記事・動画をご覧いただけます。無料相談時には、御社の業種に近い事例をご紹介しながら、完成イメージをお伝えします。" },
      { q: "契約からどのくらいで完成しますか？", a: "取材から納品まで約2〜3ヶ月が目安です。取材日程の調整状況により前後することがあります。詳細なスケジュールは無料相談時にご案内します。" },
    ],
  },
];

export default function FaqPage() {
  return (
    <main>
      <PageHero
        title="よくある質問"
        subtitle="お問い合わせ前に、気になるポイントをまとめました。"
      />

      <section className="bg-white py-[100px] max-lg:py-14">
        <div className="max-w-[780px] mx-auto px-6">
          {categories.map((cat, ci) => (
            <div key={ci} className={ci > 0 ? "mt-16 max-lg:mt-10" : ""}>
              <h2 className="text-[20px] max-lg:text-[18px] font-bold text-[#1B2D4F] mb-6">
                {cat.title}
              </h2>
              <div>
                {cat.items.map((item, i) => (
                  <FaqItem
                    key={i}
                    q={item.q}
                    a={item.a}
                    isLast={i === cat.items.length - 1}
                    defaultOpen={i === 0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        heading="ここに載っていない質問も、お気軽にどうぞ。"
        subtext="無料相談では、どんな些細なご質問にもお答えします。"
      />
    </main>
  );
}
