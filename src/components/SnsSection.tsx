import { social } from "@/lib/site";
import { InstagramColorIcon, TikTokColorIcon, YouTubeColorIcon } from "./SocialIcons";
import { FadeInUp } from "./animations";

// フッターの直前に出す、公式SNSアカウントの案内（全ページ共通）
export default function SnsSection() {
  const accounts = [
    { name: "Instagram", url: social.instagram, Icon: InstagramColorIcon },
    { name: "TikTok", url: social.tiktok, Icon: TikTokColorIcon },
    { name: "YouTube", url: social.youtube, Icon: YouTubeColorIcon },
  ].filter((a) => a.url);
  if (accounts.length === 0) return null;

  // 背景はフッターと同じ紺。境目の線は引かず、前後の紺のセクションとつなげて見せる
  return (
    <section className="bg-[#1B2D4F] py-16 max-lg:py-12">
      <div className="max-w-[680px] mx-auto px-6 text-center">
        {/* 見出し → アイコンの順に下からふわっと出す */}
        <FadeInUp waitForTop={false} duration={900} distance={24}>
          <h2
            className="text-[24px] max-lg:text-[19px] font-medium text-white leading-[1.6]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            BIZREAの最新情報をSNSでチェック
          </h2>
          <p className="text-[15px] max-lg:text-[13px] text-white tracking-[0.15em] mt-2">
            \ FOLLOW US /
          </p>
        </FadeInUp>
        <FadeInUp waitForTop={false} delay={200} duration={900} distance={24}>
          <div className="mt-8 max-lg:mt-6 flex items-center justify-center gap-14 max-lg:gap-10">
            {accounts.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Bizrea 公式${name}`}
                className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                <Icon className="w-11 h-11 max-lg:w-10 max-lg:h-10" />
                <span
                  className="text-[13px] font-medium tracking-[0.05em]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {name}
                </span>
              </a>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
