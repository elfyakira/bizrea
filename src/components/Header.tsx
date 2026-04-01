"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { company, contact, images, navigation } from "@/lib/site";

const navItems = navigation.main;
const ctaButton = navigation.cta;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // メニュー開閉時にページ遷移でメニューを閉じる
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* PC Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "h-16 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "h-20 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-full px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "BIZREA"}
              width={160}
              height={36}
              className={`transition-all duration-300 ${
                isScrolled ? "h-[30px] w-auto" : "h-[36px] w-auto brightness-0 invert"
              }`}
              style={{ height: isScrolled ? 30 : 36, width: "auto" }}
            />
          </Link>

          {/* Navigation + CTA */}
          <div className="flex items-center">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[14px] font-medium transition-colors duration-200 hover:text-accent ${
                    pathname === item.href
                      ? "text-accent"
                      : isScrolled
                      ? "text-[#222222]"
                      : "text-white/90"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {ctaButton.label && (
              <Link
                href={ctaButton.href}
                className="ml-6 bg-accent text-white px-6 py-2.5 rounded-[4px] text-[13px] font-bold transition-colors duration-200 hover:bg-accent-dark"
              >
                {ctaButton.label}
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* SP Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[100] h-[60px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between h-full px-5">
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "BIZREA"}
              width={120}
              height={28}
              className="h-[28px] w-auto"
              style={{ height: 28, width: "auto" }}
            />
          </Link>

          {/* Hamburger Button */}
          <button
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="relative w-[18px] h-[14px]">
              <span
                className={`absolute left-0 w-[18px] h-[2px] bg-[#222222] transition-all duration-300 ${
                  isMenuOpen ? "top-[6px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] w-[18px] h-[2px] bg-[#222222] transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-[18px] h-[2px] bg-[#222222] transition-all duration-300 ${
                  isMenuOpen ? "top-[6px] -rotate-45" : "top-[12px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* SP Mobile Menu - Full Screen Slide */}
      <div
        className={`lg:hidden fixed inset-0 z-[99] bg-white transition-transform duration-350 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="モバイルナビゲーション"
      >
        {/* Top bar with logo and close */}
        <div className="flex items-center justify-between h-[60px] px-5">
          <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "BIZREA"}
              width={120}
              height={28}
              className="h-[28px] w-auto"
              style={{ height: 28, width: "auto" }}
            />
          </Link>
          <button
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
            aria-label="メニューを閉じる"
          >
            <div className="relative w-[18px] h-[14px]">
              <span className="absolute left-0 top-[6px] w-[18px] h-[2px] bg-[#222222] rotate-45" />
              <span className="absolute left-0 top-[6px] w-[18px] h-[2px] bg-[#222222] -rotate-45" />
            </div>
          </button>
        </div>

        {/* Nav items */}
        <nav className="mt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-5 text-[18px] font-medium text-[#222222] border-b border-[#E0DDD8] transition-colors active:bg-[#F6F4F1]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/faq"
            className="block px-6 py-5 text-[18px] font-medium text-[#222222] border-b border-[#E0DDD8] transition-colors active:bg-[#F6F4F1]"
            onClick={() => setIsMenuOpen(false)}
          >
            よくある質問
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="px-6 mt-6">
          {ctaButton.label && (
            <Link
              href={ctaButton.href}
              className="block w-full py-[18px] text-center bg-accent text-white text-[16px] font-bold rounded-[4px] transition-colors hover:bg-accent-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              {ctaButton.label}
            </Link>
          )}
          {contact.phone && (
            <a
              href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
              className="block text-center mt-4 text-[16px] font-medium text-[#5A5A5A]"
            >
              TEL: {contact.phoneFormatted || contact.phone}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
