import type { Metadata } from "next";
import { seo, company } from "@/lib/site";

export const SITE_URL = seo.siteUrl;

const DEFAULT_OG_IMAGE = "/opengraph-image";

const INDEX_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

const NOINDEX_ROBOTS: Metadata["robots"] = { index: false, follow: true };

type PageMetadataInput = {
  title?: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

// ページごとの canonical・OGP・Twitter Card をまとめて組み立てる。
// ルートや親の layout で指定した値は子ページへそのまま引き継がれるため、各ページで必ず上書きする
// （robots も毎回明示する。親が noindex でも子ページを検索対象に戻せるようにするため）
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noindex,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title}${seo.titleSuffix}` : seo.defaultTitle;
  const images = [image || DEFAULT_OG_IMAGE];

  return {
    // 親の layout が title を持つとルートの template が効かなくなるため、完成形のタイトルを直接指定する
    ...(title ? { title: { absolute: fullTitle } } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: company.name,
      locale: "ja_JP",
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
    robots: noindex ? NOINDEX_ROBOTS : INDEX_ROBOTS,
  };
}
