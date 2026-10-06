import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "お問い合わせ",
  description:
    "Bizreaへのお問い合わせ・ご相談はこちら。代表者インタビューを軸にした動画・雑誌・WEBの企業ブランディングコンテンツについて、お気軽にご相談ください。",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
