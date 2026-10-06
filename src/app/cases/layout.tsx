import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "掲載企業一覧",
  description:
    "Bizreaに掲載している企業・代表者インタビューの一覧です。業種・地域別に、代表者の想いと企業の本質をご覧いただけます。",
  path: "/cases",
  // 現在はナビゲーションから辿れないページのため検索対象から外す
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
