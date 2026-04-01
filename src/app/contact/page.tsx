'use client';

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { contact } from "@/lib/site";

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageInner />
    </Suspense>
  );
}

function ContactPageInner() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    inquiry: "",
    company: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    privacy: false,
  });

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan) {
      setForm((prev) => ({ ...prev, inquiry: "BIZREAへの掲載について相談したい" }));
    }
  }, [searchParams]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.inquiry) e.inquiry = "ご相談内容をお選びください";
    if (!form.company.trim()) e.company = "会社名をご入力ください";
    if (!form.name.trim()) e.name = "ご担当者名をご入力ください";
    if (!form.email.trim()) e.email = "メールアドレスをご入力ください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスをご入力ください";
    if (!form.privacy) e.privacy = "プライバシーポリシーへの同意が必要です";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: `【ご相談内容】${form.inquiry}\n\n${form.message}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrors({ general: "送信中にエラーが発生しました。お手数ですが、もう一度お試しください。" });
      }
    } catch {
      setErrors({ general: "送信中にエラーが発生しました。お手数ですが、もう一度お試しください。" });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main>
        <div className="pt-40 pb-40 max-lg:pt-20 max-lg:pb-20">
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <h1 className="text-[28px] max-lg:text-[22px] font-bold text-[#222222]">
              お問い合わせありがとうございます。
            </h1>
            <p className="mt-5 text-[16px] text-[#5A5A5A] leading-[1.8]">
              内容を確認のうえ、1営業日以内にメールにてご連絡いたします。<br />
              しばらくお待ちください。
            </p>
            <p className="mt-4 text-[14px] text-[#5A5A5A] leading-[1.8]">
              ※メールが届かない場合は、迷惑メールフォルダをご確認いただくか、<br />
              お電話（{contact.phoneFormatted || contact.phone}）にてお問い合わせください。
            </p>
            <Link
              href="/"
              className="inline-block mt-10 text-[15px] font-medium text-accent hover:underline underline-offset-4"
            >
              TOPページに戻る →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero (shorter) */}
      <section className="w-full bg-[#1B2D4F] flex flex-col items-center justify-center h-[320px] max-lg:h-[240px] px-6">
        <h1
          className="text-[36px] max-lg:text-[24px] font-medium text-white text-center"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          お問い合わせ・無料相談
        </h1>
        <p className="mt-3 text-[17px] max-lg:text-[14px] text-white/70 text-center">
          御社の課題をお聞かせください。最適な活用プランをご提案します。
        </p>
        <p className="mt-6 text-[13px] text-white/50 text-center">
          相談だけでもOK <span className="mx-2">|</span> 無理な営業は一切なし <span className="mx-2">|</span> オンライン対応可
        </p>
      </section>

      {/* Form */}
      <section className="bg-white py-20 max-lg:py-12">
        <div className="max-w-[1040px] mx-auto px-6 lg:px-10">
          <div className="lg:flex lg:gap-16">
            {/* Left: Form */}
            <div className="lg:w-[60%]">
              <h2 className="text-[22px] max-lg:text-[18px] font-bold text-[#222222] mb-8 max-lg:mb-6">
                お問い合わせフォーム
              </h2>

              {errors.general && (
                <p className="mb-6 text-[14px] text-accent">{errors.general}</p>
              )}

              <form onSubmit={handleSubmit} className="space-y-7 max-lg:space-y-6">
                {/* 相談内容 */}
                <div>
                  <label className="flex items-center gap-2 text-[14px] font-medium text-[#222222] mb-2">
                    ご相談内容 <span className="text-[11px] font-medium text-accent">必須</span>
                  </label>
                  <select
                    value={form.inquiry}
                    onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                    className={`w-full border-0 border-b ${errors.inquiry ? "border-b-accent" : "border-b-[#E0DDD8]"} focus:border-b-[#1B2D4F] bg-transparent py-3 text-[16px] text-[#222222] outline-none transition-colors duration-250`}
                  >
                    <option value="">選択してください</option>
                    <option>BIZREAへの掲載について相談したい</option>
                    <option>掲載企業との取引・採用について</option>
                    <option>料金・プランについて聞きたい</option>
                    <option>まずは話を聞いてみたい</option>
                    <option>その他</option>
                  </select>
                  {errors.inquiry && <p className="mt-1 text-[13px] text-accent">{errors.inquiry}</p>}
                </div>

                {/* 会社名 */}
                <div>
                  <label className="flex items-center gap-2 text-[14px] font-medium text-[#222222] mb-2">
                    会社名 <span className="text-[11px] font-medium text-accent">必須</span>
                  </label>
                  <input
                    type="text"
                    placeholder="例: 株式会社○○"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={`w-full border-0 border-b ${errors.company ? "border-b-accent" : "border-b-[#E0DDD8]"} focus:border-b-[#1B2D4F] bg-transparent py-3 text-[16px] text-[#222222] placeholder-[#AAAAAA] outline-none transition-colors duration-250`}
                  />
                  {errors.company && <p className="mt-1 text-[13px] text-accent">{errors.company}</p>}
                </div>

                {/* 担当者名 */}
                <div>
                  <label className="flex items-center gap-2 text-[14px] font-medium text-[#222222] mb-2">
                    ご担当者名 <span className="text-[11px] font-medium text-accent">必須</span>
                  </label>
                  <input
                    type="text"
                    placeholder="例: 山田 太郎"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full border-0 border-b ${errors.name ? "border-b-accent" : "border-b-[#E0DDD8]"} focus:border-b-[#1B2D4F] bg-transparent py-3 text-[16px] text-[#222222] placeholder-[#AAAAAA] outline-none transition-colors duration-250`}
                  />
                  {errors.name && <p className="mt-1 text-[13px] text-accent">{errors.name}</p>}
                </div>

                {/* 電話番号 */}
                <div>
                  <label className="text-[14px] font-medium text-[#222222] mb-2 block">電話番号</label>
                  <input
                    type="tel"
                    placeholder="例: 052-000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-0 border-b border-b-[#E0DDD8] focus:border-b-[#1B2D4F] bg-transparent py-3 text-[16px] text-[#222222] placeholder-[#AAAAAA] outline-none transition-colors duration-250"
                  />
                  <p className="mt-1 text-[12px] text-[#5A5A5A]">※ 任意です。お電話での折り返しをご希望の場合にご記入ください。</p>
                </div>

                {/* メールアドレス */}
                <div>
                  <label className="flex items-center gap-2 text-[14px] font-medium text-[#222222] mb-2">
                    メールアドレス <span className="text-[11px] font-medium text-accent">必須</span>
                  </label>
                  <input
                    type="email"
                    placeholder="例: info@example.co.jp"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full border-0 border-b ${errors.email ? "border-b-accent" : "border-b-[#E0DDD8]"} focus:border-b-[#1B2D4F] bg-transparent py-3 text-[16px] text-[#222222] placeholder-[#AAAAAA] outline-none transition-colors duration-250`}
                  />
                  {errors.email && <p className="mt-1 text-[13px] text-accent">{errors.email}</p>}
                </div>

                {/* 詳細 */}
                <div>
                  <label className="text-[14px] font-medium text-[#222222] mb-2 block">ご相談内容の詳細</label>
                  <textarea
                    rows={4}
                    placeholder="現在の課題や、気になっていることがあればお気軽にご記入ください。空欄でもOKです。"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-0 border-b border-b-[#E0DDD8] focus:border-b-[#1B2D4F] bg-transparent py-3 text-[16px] text-[#222222] placeholder-[#AAAAAA] outline-none transition-colors duration-250 resize-none"
                  />
                  <p className="mt-1 text-[12px] text-[#5A5A5A]">※ 任意です。空欄でもお気軽にお送りください。</p>
                </div>

                {/* プライバシーポリシー */}
                <div className="pt-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.privacy}
                      onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                      className="mt-0.5 w-[18px] h-[18px] rounded-sm border border-[#E0DDD8] accent-[#1B2D4F]"
                    />
                    <span className="text-[14px] text-[#5A5A5A]">
                      <Link href="/privacy" target="_blank" className="text-accent hover:underline">プライバシーポリシー</Link>に同意する
                    </span>
                  </label>
                  {errors.privacy && <p className="mt-1 text-[13px] text-accent">{errors.privacy}</p>}
                </div>

                {/* 送信ボタン */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-5 bg-accent text-white text-[17px] font-bold rounded-[4px] hover:bg-accent-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "送信中..." : "無料相談を申し込む"}
                </button>
              </form>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:w-[35%] mt-12 lg:mt-0">
              <div className="bg-[#F6F4F1] p-8 rounded-[4px]">
                <h3 className="text-[16px] font-bold text-[#222222] mb-4">ご相談の流れ</h3>
                <div className="space-y-4">
                  {[
                    "フォーム送信後、1営業日以内にメールでご連絡します",
                    "日程を調整し、オンラインまたは対面で無料相談を実施",
                    "御社の課題に合わせた活用プランをご提案",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[14px] font-medium text-accent flex-shrink-0" style={{ fontFamily: "Inter, sans-serif" }}>{i + 1}.</span>
                      <p className="text-[14px] text-[#5A5A5A] leading-[1.7]">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[14px] text-[#5A5A5A] leading-[1.7]">
                  相談だけでもOKです。<br />
                  無理な営業は一切しません。<br />
                  お気軽にお送りください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 電話・連絡先 */}
      <section className="bg-[#F6F4F1] py-14 max-lg:py-10">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <h2 className="text-[18px] max-lg:text-[16px] font-bold text-[#222222]">
            お電話でのお問い合わせ
          </h2>
          <a
            href={`tel:${contact.phoneTel || contact.phone?.replace(/-/g, "")}`}
            className="block mt-4 text-[28px] max-lg:text-[24px] font-medium text-[#1B2D4F]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            TEL: {contact.phoneFormatted || contact.phone}
          </a>
          <p className="mt-2 text-[14px] text-[#5A5A5A]">
            受付時間: {contact.hours || "平日 9:00〜18:00"}（土日祝休み）
          </p>
          {contact.email && (
            <p className="mt-5 text-[15px] text-[#222222]">
              メール: <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">{contact.email}</a>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
