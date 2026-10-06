import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "動画",
  description:
    "Bizreaが制作した代表者インタビュー動画のアーカイブ。声のトーンや表情、言葉を選ぶ間まで、文字だけでは伝わらない代表者の人柄と生き様をご覧いただけます。",
  path: "/video",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
