"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { company, contact, navigation } from "@/lib/site";

const navItems = navigation.main;
const ctaButton = navigation.cta;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* PC Header */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-[100] bg-[#1B2D4F]">
        <div className="flex items-center justify-between h-20 px-10">
          <Link href="/" className="flex items-center">
            <span
              className="text-[28px] font-extrabold text-white tracking-[-0.02em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Bizrea
            </span>
          </Link>

          <nav className="flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] tracking-[0.04em] transition-colors duration-200 ml-9 ${
                  pathname === item.href
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {ctaButton.label && (
              <Link
                href={ctaButton.href}
                className="bg-accent text-white px-6 py-2.5 rounded-[4px] text-[13px] font-bold transition-colors duration-200 hover:bg-accent-dark ml-9"
              >
                {ctaButton.label}
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* SP Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[100] bg-[#1B2D4F]">
        <div className="flex items-center justify-between h-16 px-5">
          <Link href="/" className="flex items-center">
            <span
              className="text-[22px] font-extrabold text-white tracking-[-0.02em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Bizrea
            </span>
          </Link>

          <button
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-[2px] w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] rotate-45" : "top-[5px]"
                }`}
              />
              <span
                className={`absolute left-[2px] top-[11px] w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-[2px] w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] -rotate-45" : "top-[17px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[99] bg-black/30 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 z-[99] w-[80vw] max-w-[300px] h-full bg-white transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="モバイルナビゲーション"
      >
        <div className="flex flex-col items-center justify-center h-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-[20px] font-medium text-[#222222] tracking-[0.04em] mb-7 transition-colors hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {ctaButton.label && (
            <Link
              href={ctaButton.href}
              className="block text-[20px] font-medium text-accent tracking-[0.04em] transition-colors hover:text-accent-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              {ctaButton.label}
            </Link>
          )}
          {contact.phone && (
            <a
              href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
              className="text-sm text-[#5A5A5A] mt-10"
            >
              TEL: {contact.phoneFormatted || contact.phone}
            </a>
          )}
        </div>
      </nav>
    </>
  );
}
