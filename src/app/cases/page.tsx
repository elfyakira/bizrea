'use client';

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

const companies = [
  { id: "company-a", name: "株式会社○○製作所", industry: "製造業", region: "愛知県", desc: "精密部品メーカー。社長インタビューを通じて、ものづくりへのこだわりを言語化。営業ツールとして活用中。" },
  { id: "company-b", name: "○○建設株式会社", industry: "建設業", region: "岐阜県", desc: "地域密着の総合建設会社。BIZREAの記事を商談前に送付し、成約率が大幅に向上。" },
  { id: "company-c", name: "株式会社○○物流", industry: "物流業", region: "三重県", desc: "東海エリアを中心とした物流企業。採用サイトにBIZREA動画を導入し、応募者の質が変化。" },
  { id: "company-d", name: "○○食品株式会社", industry: "食品製造業", region: "愛知県", desc: "老舗食品メーカー。社長の想いを雑誌化し、取引先への信頼構築ツールとして活用。" },
  { id: "company-e", name: "株式会社○○テック", industry: "IT・通信業", region: "愛知県", desc: "成長中のIT企業。BIZREAを活用した採用ブランディングで、エンジニア採用に成功。" },
  { id: "company-f", name: "○○工業株式会社", industry: "製造業", region: "岐阜県", desc: "自動車部品メーカー。社員教育ツールとしてBIZREA雑誌を活用し、定着率が向上。" },
];

const industries = ["すべて", "製造業", "建設業", "物流業", "食品製造業", "IT・通信業"];
const regions = ["すべて", "愛知県", "岐阜県", "三重県"];

export default function CasesPage() {
  const [industry, setIndustry] = useState("すべて");
  const [region, setRegion] = useState("すべて");

  const filtered = companies.filter((c) => {
    if (industry !== "すべて" && c.industry !== industry) return false;
    if (region !== "すべて" && c.region !== region) return false;
    return true;
  });

  return (
    <main>
      <PageHero
        title="導入事例"
        subtitle="BIZREAを導入した企業の声と、その成果をご紹介します。"
      />

      {/* フィルター */}
      <section className="bg-white py-10 max-lg:py-6">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-[14px] font-medium text-[#5A5A5A] mr-2">業種:</span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setIndustry(ind)}
                className={`text-[13px] px-4 py-2 rounded-[4px] transition-colors ${
                  industry === ind
                    ? "bg-[#1B2D4F] text-white"
                    : "bg-[#F6F4F1] text-[#5A5A5A] hover:bg-[#E0DDD8]"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 items-center mt-4">
            <span className="text-[14px] font-medium text-[#5A5A5A] mr-2">地域:</span>
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setRegion(reg)}
                className={`text-[13px] px-4 py-2 rounded-[4px] transition-colors ${
                  region === reg
                    ? "bg-[#1B2D4F] text-white"
                    : "bg-[#F6F4F1] text-[#5A5A5A] hover:bg-[#E0DDD8]"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 企業一覧 */}
      <section className="bg-[#F6F4F1] py-16 max-lg:py-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <p className="text-center text-[16px] text-[#5A5A5A] py-20">
              該当する企業が見つかりませんでした。
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((company) => (
                <Link
                  key={company.id}
                  href={`/cases/${company.id}`}
                  className="block bg-white rounded-[4px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[16/10] bg-[#E0DDD8]">
                    <div className="w-full h-full bg-[url('/images/case-placeholder.jpg')] bg-cover bg-center" />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="text-[12px] px-2 py-1 bg-[#F6F4F1] text-[#5A5A5A] rounded-sm">
                        {company.industry}
                      </span>
                      <span className="text-[12px] px-2 py-1 bg-[#F6F4F1] text-[#5A5A5A] rounded-sm">
                        {company.region}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#222222] mb-2">{company.name}</h3>
                    <p className="text-[14px] text-[#5A5A5A] leading-[1.7]">{company.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection
        heading="御社でも、同じ成果を実現しませんか？"
        subtext="無料相談で、御社に合った活用プランをご提案します。"
      />
    </main>
  );
}
