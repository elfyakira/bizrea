'use client';

import Link from 'next/link';
import { getCompanyById } from '@data/companies';
import { FadeInUp } from './animations';

const COMPANY_ID = 'norida-garden';

// このセクションでのみ名前の上に添える所属表記（カード一覧・詳細ページには出さない）
const AFFILIATION = 'nobodyknows＋ 所属メンバー';

/**
 * メインビジュアル直下の人物紹介セクション。
 * 左に代表者の写真、右に「Message」＋言葉と紹介文を置く。
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
            </div>
          </div>
        </FadeInUp>

        {/* 右: テキスト */}
        <FadeInUp delay={150} duration={900} distance={24} className="lg:flex-1 mt-12 lg:mt-0 min-w-0">
          <div className="relative">
            {/* 背面の大きな英字 */}
            <span
              aria-hidden
              className="absolute -top-10 max-lg:-top-6 -left-2 text-[86px] max-lg:text-[52px] font-bold text-accent/10 leading-none select-none"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Message
            </span>

            <p className="relative text-[15px] max-lg:text-[13px] text-accent tracking-[0.15em]">
              INTERVIEWER
            </p>
            <h2
              className="relative mt-4 text-[32px] max-lg:text-[22px] font-medium text-[#222222] leading-[1.6]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              {quote}
            </h2>

            <p className="mt-8 max-lg:mt-6 text-[16px] max-lg:text-[14px] leading-[2] text-[#5A5A5A]">
              {company.desc}
            </p>

            <div className="mt-8 max-lg:mt-6 pt-6 border-t border-[#E0DDD8]">
              <span className="inline-block bg-[#1B2D4F] text-white text-[11px] max-lg:text-[10px] font-bold tracking-[0.08em] rounded-sm px-2.5 py-1 mb-3">
                Bizrea インタビュアー
              </span>
              <p className="text-[13px] max-lg:text-[12px] text-[#5A5A5A]">{company.name}</p>
              <p className="text-[13px] max-lg:text-[12px] text-[#999999]">
                {AFFILIATION}
              </p>
              <p className="mt-1.5 text-[20px] max-lg:text-[17px] font-bold text-[#222222]">
                {company.president}
              </p>
            </div>

            <div className="mt-8 max-lg:mt-6">
              <Link
                href={`/cases/${company.id}`}
                className="inline-flex items-center gap-2 bg-accent text-white text-[15px] max-lg:text-[14px] font-bold px-9 py-4 max-lg:px-7 max-lg:py-[14px] rounded-full hover:bg-accent-dark transition-colors duration-200"
              >
                インタビューを読む
                <span className="text-[13px]">&rarr;</span>
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
