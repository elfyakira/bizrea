'use client';

import Link from 'next/link';
import { getCompanyById } from '@data/companies';
import { FadeInUp } from './animations';

const COMPANY_ID = 'norida-garden';

// このセクションでのみ名前の上に添える所属表記（カード一覧・詳細ページには出さない）
const AFFILIATION = 'nobodyknows＋ 所属メンバー';

/**
 * メインビジュアル直下の人物紹介セクション。
 * 左に写真（インタビュアー表記を重ねる）、右に肩書き・氏名・言葉・紹介文を置く。
 */
export default function PresidentMessage() {
  const company = getCompanyById(COMPANY_ID);
  if (!company) return null;

  const quote = company.quotes[0] ?? company.catchphrase;

  return (
    <section className="relative bg-[#F6F4F1] py-[120px] max-lg:py-[64px] overflow-hidden">
      {/* 背景の飾り */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] max-lg:w-[260px] max-lg:h-[260px] rounded-full bg-accent/[0.07]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 lg:flex lg:items-center lg:gap-16">
        {/* 左: 写真 */}
        <FadeInUp duration={900} distance={24} className="lg:w-[45%] shrink-0">
          <div className="relative">
            <div className="absolute -left-4 -bottom-4 w-full h-full rounded-[6px] border border-accent/30 max-lg:hidden" />
            <div className="relative aspect-[4/5] max-lg:aspect-[4/3] rounded-[6px] overflow-hidden shadow-[0_16px_40px_rgba(27,45,79,0.15)]">
              <img
                className="w-full h-full object-cover object-center"
                src="/images/companies/norida-garden-message.jpg"
                alt={`${company.name} ${company.president}`}
              />
              {/* 写真の上にも肩書きを重ね、ひと目で「この人がインタビュアー」と分かるようにする */}
              <div className="absolute inset-x-0 bottom-0 pt-20 pb-5 px-5 max-lg:pb-4 max-lg:px-4 bg-gradient-to-t from-[#1B2D4F]/90 via-[#1B2D4F]/45 to-transparent">
                <p className="text-[11px] max-lg:text-[10px] font-bold tracking-[0.22em] text-accent">
                  INTERVIEWER
                </p>
                <p className="mt-1 text-[20px] max-lg:text-[16px] font-bold text-white leading-snug">
                  {company.president}
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* 右: テキスト */}
        <FadeInUp delay={150} duration={900} distance={24} className="lg:flex-1 mt-12 lg:mt-0 min-w-0">
          <div className="relative">
            {/* 背面の大きな英字 */}
            <span
              aria-hidden
              className="absolute -top-8 max-lg:-top-5 -left-2 text-[64px] max-lg:text-[36px] font-bold text-accent/10 leading-none select-none whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              INTERVIEWER
            </span>

            {/* 肩書き → 氏名の順で先に見せ、インタビュアーであることを主役にする */}
            <div className="relative flex items-center gap-4">
              <span className="inline-flex items-center shrink-0 bg-accent text-white text-[18px] max-lg:text-[15px] font-bold tracking-[0.12em] rounded-full px-6 py-2.5 max-lg:px-5 max-lg:py-2">
                Bizrea インタビュアー
              </span>
              <span className="h-px flex-1 bg-accent/25" aria-hidden />
            </div>

            <p className="relative mt-5 max-lg:mt-4 text-[13px] max-lg:text-[12px] text-[#5A5A5A]">
              {company.name}
            </p>
            <p className="relative text-[13px] max-lg:text-[12px] text-[#999999]">{AFFILIATION}</p>
            <p className="relative mt-2 text-[28px] max-lg:text-[20px] font-bold text-[#222222] leading-snug">
              {company.president}
            </p>
            <p className="relative mt-3 text-[14px] max-lg:text-[13px] text-[#5A5A5A]">
              代表者への取材を担当しています。
            </p>

            <h2
              className="relative mt-8 max-lg:mt-6 pt-8 max-lg:pt-6 border-t border-[#E0DDD8] text-[32px] max-lg:text-[22px] font-medium text-[#222222] leading-[1.6]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              {quote}
            </h2>

            <p className="mt-8 max-lg:mt-6 text-[16px] max-lg:text-[14px] leading-[2] text-[#5A5A5A]">
              {company.desc}
            </p>

            <div className="mt-8 max-lg:mt-6">
              <Link
                href={`/cases/${company.id}`}
                className="group inline-flex items-center gap-6 max-lg:gap-4 bg-accent text-white text-[15px] max-lg:text-[14px] font-bold tracking-[0.14em] px-8 py-4 max-lg:px-6 max-lg:py-[14px] rounded-full hover:bg-accent-dark transition-colors duration-200"
              >
                インタビューを読む
                {/* 丸囲みの矢印。ホバーで少しだけ右に出す */}
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center shrink-0 w-7 h-7 max-lg:w-6 max-lg:h-6 rounded-full border border-white/70 text-[12px] max-lg:text-[11px] leading-none transition-transform duration-200 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
