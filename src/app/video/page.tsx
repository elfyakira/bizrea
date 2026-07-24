'use client';

import { useState } from "react";
import Link from "next/link";
import { companies } from "@data/companies";

const videosCompanies = companies.filter((c) => c.videoId && !c.hidden);

function VideoCard({ company }: { company: typeof companies[number] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white rounded-[4px] overflow-hidden shadow-sm">
      {/* 動画 / サムネイル */}
      <div className="relative aspect-video bg-[#E0DDD8] overflow-hidden">
        {playing ? (
          <video
            className="w-full h-full object-cover"
            src={`/videos/${company.id}.mp4`}
            autoPlay
            controls
            playsInline
          />
        ) : (
          <>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${company.image}')` }}
            />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label={`${company.name}の動画を再生`}
            >
              <div className="w-16 h-16 max-lg:w-12 max-lg:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-200">
                <svg className="w-6 h-6 max-lg:w-5 max-lg:h-5 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </>
        )}
      </div>
      {/* テキスト */}
      <div className="p-5 max-lg:p-4">
        <p className="text-[16px] max-lg:text-[14px] font-medium text-[#222222]">
          {company.name}
        </p>
        <p className="mt-1.5 text-[13px] max-lg:text-[12px] text-[#5A5A5A]">
          {company.president}
        </p>
        <div className="mt-2 flex gap-1.5">
          <span className="text-[10px] text-[#5A5A5A] border border-[#E0DDD8] rounded-sm px-1.5 py-px">
            {company.region}
          </span>
          <span className="text-[10px] text-[#5A5A5A] border border-[#E0DDD8] rounded-sm px-1.5 py-px">
            {company.industry}
          </span>
        </div>
        <Link
          href={`/cases/${company.id}`}
          className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-accent-dark transition-colors"
        >
          詳しく見る
          <span className="text-[11px]">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default function VideoPage() {
  return (
    <main>
      {/* ===== ヒーロー ===== */}
      <section className="relative pt-32 pb-20 max-lg:pt-24 max-lg:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[#1B2D4F]">
          <div className="absolute inset-0 bg-[url('/images/hero-video.jpg')] bg-cover bg-center opacity-25" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-[15px] max-lg:text-[13px] text-accent tracking-[0.15em]">
            VIDEO
          </p>
          <h1
            className="mt-4 text-[36px] max-lg:text-[24px] font-medium text-white leading-[1.6]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            動画
          </h1>
          <p className="mt-8 text-[17px] max-lg:text-[15px] leading-[2.2] text-white/80">
            Bizreaは、代表者の想いを引き出し、Web・雑誌・SNSを通じて届けています。<br />
            なかでも動画は、文字だけでは伝わらない代表者の人柄——声のトーン、表情、言葉を選ぶ間——をそのまま届けることができるメディアです。<br />
            代表者一人ひとりの生き様を、ぜひご覧ください。
          </p>
        </div>
      </section>

      {/* ===== Video Archive ===== */}
      <section
        className="relative py-[120px] max-lg:py-[72px] bg-white overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(27,45,79,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(27,45,79,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-[15px] max-lg:text-[13px] text-accent tracking-[0.15em] text-center">
            VIDEO ARCHIVE
          </p>
          <h2
            className="mt-3 text-[32px] max-lg:text-[22px] font-medium text-[#222222] text-center leading-[1.6]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            インタビュー動画一覧
          </h2>

          <div className="mt-14 max-lg:mt-10 grid grid-cols-3 max-lg:grid-cols-1 gap-6 max-lg:gap-4">
            {videosCompanies.map((c) => (
              <VideoCard key={c.id} company={c} />
            ))}
          </div>

          {videosCompanies.length === 0 && (
            <p className="mt-14 text-center text-[15px] text-[#5A5A5A]">
              動画コンテンツは準備中です。
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
