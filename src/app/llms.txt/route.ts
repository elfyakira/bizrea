import { companiesNewestFirst } from "@data/companies";
import { company, contact, seo } from "@/lib/site";

export const dynamic = "force-static";

const BASE_URL = seo.siteUrl;

// AI（ChatGPT・Claude・Perplexity など）向けのサイト案内。掲載企業は companies から自動生成する
export function GET(): Response {
  const interviews = companiesNewestFirst
    .filter((c) => !c.hidden)
    .map(
      (c) =>
        `- [${c.name} ${c.president}](${BASE_URL}/cases/${c.id}): ${c.region}・${c.industry}。${c.desc}`
    )
    .join("\n");

  const body = `# ${company.name}

> ${seo.defaultDescription}

${company.name}は、代表者へのインタビューを軸に、動画・雑誌・WEBで企業の想いや本質を発信するサービスです。掲載企業の多くは愛知県を中心とした東海地方の企業で、各記事には代表者の原体験・経営観・今後のビジョンがインタビュー形式でまとめられています。

## 主なページ

- [トップ](${BASE_URL}/): サービス概要と掲載企業の一覧
- [雑誌](${BASE_URL}/magazine): 代表者インタビューを収録した企業雑誌「Bizrea」のバックナンバー
- [動画](${BASE_URL}/video): 代表者インタビュー動画のアーカイブ
- [お問い合わせ](${BASE_URL}/contact): 掲載・制作のご相談

## 代表者インタビュー

${interviews}

## 連絡先

- メール: ${contact.email}
- 電話: ${contact.phone}（${contact.hours}）
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
