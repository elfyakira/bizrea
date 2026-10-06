import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "よくある質問",
  description:
    "Bizreaの費用・取材・制作物・サービス内容・ご契約についてよくいただくご質問をまとめました。",
  path: "/faq",
  // 現在はナビゲーションから辿れないページのため検索対象から外す
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
