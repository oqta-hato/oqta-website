import SectionWrapper from "./SectionWrapper";

const news = [
  {
    date: "2026/05/14",
    text: "Androidアプリ（暫定版）の配布を開始しました",
    href: "https://oqta.com/app/",
  },
  {
    date: "2026/04/27",
    text: "経営メディア「経道（KEIDO）」に代表インタビューが掲載されました",
    href: "https://kei-do.com/interview2/01777/",
  },
  {
    date: "2026/03/20",
    text: "SXSW 2026 に出展しました",
    href: "https://oqta.com/sxsw-2026.html",
  },
  {
    date: "2026/03/09",
    text: "海外向けモデル「INORI Clock」のZINEが完成しました",
    href: "https://oqta.com/INORIbook1.pdf",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <SectionWrapper>
          <p className="text-[#003da6] text-[18px] md:text-[20px] font-bold mb-2">News</p>
          <h2 className="text-[#003da6] text-[32px] md:text-[42px] font-bold leading-tight mb-10 md:mb-12">
            OQTAの現在地
          </h2>
        </SectionWrapper>

        <div className="divide-y divide-[#003da6]/10">
          {news.map((item, i) => (
            <SectionWrapper key={i} delay={i * 0.06}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-5 group hover:opacity-70 transition-opacity"
              >
                <time className="text-[#7488a9] text-[13px] md:text-[14px] font-medium tabular-nums flex-shrink-0">
                  {item.date}
                </time>
                <span className="text-[#003da6] text-[15px] md:text-[17px] leading-[26px] group-hover:underline underline-offset-2">
                  {item.text}
                </span>
              </a>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
