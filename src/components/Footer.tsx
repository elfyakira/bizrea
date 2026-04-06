import Link from "next/link";
import { company, contact } from "@/lib/site";

const footerNav = [
  { label: "ホーム", href: "/" },
  { label: "雑誌", href: "/magazine" },
  { label: "動画", href: "/video" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2D4F] text-white">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-6 lg:pb-8">
        {/* PC: 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-[40%_30%_30%] lg:gap-8 mb-10">
          {/* Left: Logo + Description */}
          <div>
            <Link href="/">
              <span
                className="text-[28px] font-extrabold text-white tracking-[-0.02em]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Bizrea
              </span>
            </Link>
            <p className="mt-5 text-[13px] leading-[1.7] text-white/60 max-w-[280px]">
              社長の想いを引き出し、
              <br />
              &ldquo;伝わる言葉&rdquo;に整え、届ける。
            </p>
          </div>

          {/* Center: Site Map */}
          <div>
            <p className="text-[13px] font-bold text-white/40 tracking-[0.1em] mb-4">
              サイトマップ
            </p>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <p className="text-[13px] font-bold text-white/40 tracking-[0.1em] mb-4">
              お問い合わせ
            </p>
            {contact.phone && (
              <>
                <a
                  href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
                  className="text-[16px] font-medium text-white"
                >
                  TEL: {contact.phoneFormatted || contact.phone}
                </a>
                {contact.hours && (
                  <p className="text-[12px] text-white/50 mt-1">
                    {contact.hours}
                  </p>
                )}
              </>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="block mt-3 text-[13px] text-white/70 hover:text-white transition-colors duration-200"
              >
                {contact.email}
              </a>
            )}
            <Link
              href="/contact"
              className="inline-block mt-5 px-6 py-2.5 text-[13px] font-medium text-white/80 border border-white/30 rounded-[4px] hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              まずは話を聞いてみる
            </Link>
          </div>
        </div>

        {/* SP: Stacked layout */}
        <div className="lg:hidden text-center mb-8">
          <Link href="/" className="inline-block">
            <span
              className="text-[24px] font-extrabold text-white tracking-[-0.02em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Bizrea
            </span>
          </Link>
          <p className="mt-4 text-[13px] leading-[1.7] text-white/60">
            社長の想いを引き出し、
            <br />
            &ldquo;伝わる言葉&rdquo;に整え、届ける。
          </p>

          {/* Nav */}
          <ul className="flex justify-center gap-6 mt-8">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="mt-8">
            {contact.phone && (
              <a
                href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
                className="text-[16px] font-medium text-white"
              >
                TEL: {contact.phoneFormatted || contact.phone}
              </a>
            )}
            {contact.hours && (
              <p className="text-[12px] text-white/50 mt-1">{contact.hours}</p>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="block mt-3 text-[13px] text-white/70 hover:text-white transition-colors duration-200"
              >
                {contact.email}
              </a>
            )}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="block mx-6 mt-6 py-3 text-[13px] font-medium text-white/80 border border-white/30 rounded-[4px] hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            まずは話を聞いてみる
          </Link>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/[0.08] pt-6 mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[12px] text-white/30">
              &copy; {currentYear} {company.name || "Bizrea"}. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-[12px] text-white/30 hover:text-white/70 transition-colors duration-200"
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
