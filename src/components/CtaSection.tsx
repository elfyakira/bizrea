import Link from "next/link";
import { contact } from "@/lib/site";

interface CtaSectionProps {
  heading: string;
  subtext?: string;
  buttonText?: string;
  showPhone?: boolean;
  relatedLinks?: { label: string; href: string }[];
}

export default function CtaSection({
  heading,
  subtext,
  buttonText = "無料で相談してみる",
  showPhone = false,
  relatedLinks,
}: CtaSectionProps) {
  return (
    <section className="bg-[#1B2D4F] py-20 max-lg:py-14">
      <div className="max-w-[680px] mx-auto px-6 text-center">
        <h2
          className="text-[28px] max-lg:text-[22px] font-medium text-white"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {heading}
        </h2>
        {subtext && (
          <p className="mt-3 text-[15px] max-lg:text-[14px] text-white/70 leading-[1.7]">
            {subtext}
          </p>
        )}
        <div className="mt-7 max-lg:mt-5">
          <Link
            href="/contact"
            className="inline-block bg-accent text-white text-[17px] max-lg:text-[16px] font-bold px-12 py-5 max-lg:py-[18px] max-lg:w-full max-lg:max-w-[400px] rounded-[4px] hover:bg-accent-dark transition-colors duration-200"
          >
            {buttonText}
          </Link>
        </div>
        {showPhone && contact.phone && (
          <div className="mt-6">
            <a
              href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
              className="text-[20px] max-lg:text-[18px] font-medium text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              TEL: {contact.phoneFormatted || contact.phone}
            </a>
            <p className="text-[13px] text-white/50 mt-1">
              受付時間: {contact.hours || "平日 9:00〜18:00"}
            </p>
          </div>
        )}
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="mt-8 max-lg:mt-6 flex items-center justify-center gap-4 text-[14px] text-white/50">
            {relatedLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && <span className="mr-4">|</span>}
                <Link href={link.href} className="hover:text-white/90 transition-colors">
                  {link.label} →
                </Link>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
