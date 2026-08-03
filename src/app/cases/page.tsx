'use client';

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import { companiesNewestFirst } from "@data/companies";

const industries = ["すべて", "製造業", "建設業", "物流業", "食品製造業", "IT・通信業", "採用支援", "農業", "飲食業", "サービス業", "その他"];
const regions = ["すべて", "愛知県", "岐阜県", "三重県", "その他"];

const ITEMS_PER_PAGE = 12;

export default function CasesPage() {
  const [industry, setIndustry] = useState("すべて");
  const [region, setRegion] = useState("すべて");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filtered = companiesNewestFirst.filter((c) => {
    if (c.hidden) return false;
    if (industry !== "すべて" && c.industry !== industry) return false;
    if (region !== "すべて" && c.region !== region) return false;
    return true;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <main>
      {/* ページヒーロー */}
      <section className="w-full bg-[#1B2D4F] flex flex-col items-center justify-center h-[400px] max-lg:h-[280px]">
        <div className="text-center px-6">
          <h1
            className="text-[40px] max-lg:text-[26px] font-medium text-white"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            導入事例
          </h1>
          <p className="mt-4 max-lg:mt-3 text-[17px] max-lg:text-[14px] text-white/70">
            Bizreaを導入した企業のリアルな声と成果。
          </p>
          <p
            className="mt-6 max-lg:mt-4 text-[20px] max-lg:text-[16px] font-bold text-white"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            掲載企業 50社以上
          </p>
        </div>
      </section>

      {/* フィルター */}
      <section className="bg-white py-14 max-lg:py-9">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-10">
          <div className="flex gap-2 items-center max-lg:overflow-x-auto max-lg:flex-nowrap max-lg:pb-2 flex-wrap">
            <span className="text-[14px] font-medium text-[#5A5A5A] mr-2 flex-shrink-0">業種:</span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => { setIndustry(ind); setVisibleCount(ITEMS_PER_PAGE); }}
                className={`text-[14px] font-medium px-5 py-2 rounded-full transition-colors flex-shrink-0 ${
                  industry === ind
                    ? "bg-[#1B2D4F] text-white"
                    : "bg-[#F6F4F1] text-[#222222] hover:bg-[#E0DDD8]"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center mt-3 max-lg:overflow-x-auto max-lg:flex-nowrap max-lg:pb-2 flex-wrap">
            <span className="text-[14px] font-medium text-[#5A5A5A] mr-2 flex-shrink-0">地域:</span>
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => { setRegion(reg); setVisibleCount(ITEMS_PER_PAGE); }}
                className={`text-[14px] font-medium px-5 py-2 rounded-full transition-colors flex-shrink-0 ${
                  region === reg
                    ? "bg-[#1B2D4F] text-white"
                    : "bg-[#F6F4F1] text-[#222222] hover:bg-[#E0DDD8]"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 企業一覧 */}
      <section className="bg-[#F6F4F1] pb-20 max-lg:pb-12">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <p className="text-center text-[16px] text-[#5A5A5A] py-20">
              該当する企業が見つかりませんでした。
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-lg:gap-5">
                {visible.map((company) => (
                  <Link
                    key={company.id}
                    href={`/cases/${company.id}`}
                    className="group block bg-white rounded-[4px] overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300"
                  >
                    <div className="aspect-[3/2] bg-[#E0DDD8] overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-[1.02] transition-transform duration-400 ease-out"
                        style={{ backgroundImage: `url('${company.listImage ?? company.image}')` }}
                      />
                    </div>
                    <div className="px-5 py-6">
                      <span className="text-[12px] font-medium text-accent">
                        {company.industry}
                      </span>
                      <h3 className="text-[18px] font-bold text-[#222222] mt-2">{company.name}</h3>
                      <p className="text-[13px] text-[#5A5A5A] mt-1">{company.president}</p>
                      <p className="text-[14px] text-[#222222] leading-[1.6] mt-3 line-clamp-2">
                        {company.catchphrase}
                      </p>
                      <p className="text-[12px] text-[#5A5A5A] mt-3">{company.region}</p>
                    </div>
                  </Link>
                ))}
              </div>
              {hasMore && (
                <div className="text-center mt-12 max-lg:mt-8">
                  <button
                    onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
                    className="text-[15px] font-medium text-[#1B2D4F] border border-[#1B2D4F] bg-transparent px-10 py-[14px] rounded-[4px] hover:bg-[#1B2D4F] hover:text-white transition-colors duration-200"
                  >
                    さらに表示する
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* 掲載検討企業向けCTA */}
      <section className="bg-white py-20 max-lg:py-12">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="text-[22px] max-lg:text-[18px] font-bold text-[#222222]">
            Bizreaへの掲載に興味がある企業様へ
          </h2>
          <p className="mt-4 text-[15px] text-[#5A5A5A] leading-[1.8]">
            御社の魅力を&ldquo;伝わる形&rdquo;にする方法を、無料でご提案します。<br />
            まずはお気軽にご相談ください。
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white text-[16px] font-bold px-11 py-[18px] max-lg:py-4 max-lg:w-full max-lg:max-w-[360px] rounded-[4px] hover:bg-accent-dark transition-colors duration-200"
            >
              掲載について相談する
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        heading="御社も、Bizreaに掲載しませんか？"
        subtext="無料相談で、御社に合った活用プランをご提案します。"
      />
    </main>
  );
}
