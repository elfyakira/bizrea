import Image from "next/image";
import Link from "next/link";
import { company, contact, images, navigation } from "@/lib/site";

const footerNavLeft = [
  { label: "BIZREAとは", href: "/about" },
  { label: "導入メリット", href: "/merit" },
  { label: "コンテンツ紹介", href: "/content" },
  { label: "導入事例", href: "/cases" },
];

const footerNavRight = [
  { label: "料金・プラン", href: "/pricing" },
  { label: "制作の流れ", href: "/flow" },
  { label: "よくある質問", href: "/faq" },
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
              <Image
                src={images.logo || "/images/logo.png"}
                alt={company.name || "BIZREA"}
                width={160}
                height={32}
                className="h-[32px] w-auto brightness-0 invert"
                style={{ height: 32, width: "auto" }}
              />
            </Link>
            <p className="mt-5 text-[13px] leading-[1.7] text-white/60 max-w-[280px]">
              社長インタビューを軸にした動画・雑誌・WEBで、
              <br />
              企業の&ldquo;本質&rdquo;を&ldquo;伝わる形&rdquo;にする。
            </p>
          </div>

          {/* Center: Site Map */}
          <div>
            <p className="text-[13px] font-bold text-white/40 tracking-[0.1em] mb-4">
              サイトマップ
            </p>
            <div className="flex gap-8">
              <ul className="space-y-2.5">
                {footerNavLeft.map((item) => (
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
              <ul className="space-y-2.5">
                {footerNavRight.map((item) => (
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
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "BIZREA"}
              width={120}
              height={28}
              className="h-[28px] w-auto brightness-0 invert mx-auto"
              style={{ height: 28, width: "auto" }}
            />
          </Link>
          <p className="mt-4 text-[13px] leading-[1.7] text-white/60">
            社長インタビューを軸にした動画・雑誌・WEBで、
            <br />
            企業の&ldquo;本質&rdquo;を&ldquo;伝わる形&rdquo;にする。
          </p>

          {/* Nav 2 columns */}
          <div className="flex justify-center gap-8 mt-8">
            <ul className="space-y-2.5 text-left">
              {footerNavLeft.map((item) => (
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
            <ul className="space-y-2.5 text-left">
              {footerNavRight.map((item) => (
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
        <div className="border-t border-white/[0.08] pt-6 lg:pt-6 mt-10 lg:mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[12px] text-white/30">
              &copy; {currentYear} Bizrea. All rights reserved.
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
