import { social } from "@/lib/site";
import { InstagramIcon, TikTokIcon } from "./SocialIcons";
import { FadeInUp } from "./animations";

// フッターの直前に出す、公式SNSアカウントの案内（全ページ共通）
export default function SnsSection() {
  const accounts = [
    { name: "Instagram", url: social.instagram, Icon: InstagramIcon },
    { name: "TikTok", url: social.tiktok, Icon: TikTokIcon },
  ].filter((a) => a.url);
  if (accounts.length === 0) return null;

  // 直前が同じ背景色のページ（お問い合わせ等）でも区切りが分かるよう上に線を引く
  return (
    <section className="bg-[#F6F4F1] border-t border-[#E0DDD8] py-16 max-lg:py-12">
      <div className="max-w-[680px] mx-auto px-6 text-center">
        {/* 見出し → アイコンの順に下からふわっと出す */}
        <FadeInUp waitForTop={false} duration={900} distance={24}>
          <p className="text-[15px] max-lg:text-[13px] text-accent tracking-[0.15em]">
            FOLLOW US
          </p>
          <h2
            className="mt-3 text-[24px] max-lg:text-[19px] font-medium text-[#1B2D4F] leading-[1.6]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            BIZREAの最新情報をSNSでチェック。
          </h2>
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
                className="flex flex-col items-center gap-2 text-[#1B2D4F] hover:text-accent transition-colors duration-200"
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
