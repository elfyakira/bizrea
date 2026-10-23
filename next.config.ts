import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // P-Loco を1人1カードに分けたため、旧URLは小林さんのページへ
      { source: "/cases/p-loco", destination: "/cases/p-loco-kobayashi", permanent: true },
      // でらっくす・ボーイズを1人1カードに分けたため、旧URLは代表の本田さんのページへ
      { source: "/cases/nagoya-okoshi", destination: "/cases/nagoya-okoshi-honda", permanent: true },
    ];
  },
};

export default nextConfig;
