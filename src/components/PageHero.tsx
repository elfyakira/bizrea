interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="w-full bg-[#1B2D4F] flex items-center justify-center h-[400px] max-lg:h-[280px]">
      <div className="text-center px-6">
        <h1
          className="text-[40px] max-lg:text-[26px] font-medium text-white"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-lg:mt-3 text-[17px] max-lg:text-[14px] text-white/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
