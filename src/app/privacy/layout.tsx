import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "プライバシーポリシー",
  description:
    "Bizreaのプライバシーポリシー（個人情報保護方針）。お問い合わせや取材・掲載のお申し込みでお預かりした個人情報の取り扱いについてご説明します。",
  path: "/privacy",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
