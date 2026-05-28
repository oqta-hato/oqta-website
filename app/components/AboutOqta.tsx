import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const paragraphs = [
  "OQTA Heart Poppoは、スマホからワンタップで実家の鳩時計を鳴らせるサービスです。",
  "「お母さんのことを思ったら、このハトを鳴らすね」",
  "鳩時計の音を聴くたび（今、自分のことを思ってくれたんだ）と家族の絆を感じて嬉しそう",
  "言葉を交わさなくても、つながっている安心感を届けることができる。",
  "それが、OQTA Heart Poppo です。",
];

export default function AboutOqta() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#edf1f7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">

        {/* 見出し */}
        <SectionWrapper>
          <h2 className="text-[#003da6] text-[28px] md:text-[32px] font-bold text-center mb-8 md:mb-10">
            OQTA Heart Poppo
          </h2>
        </SectionWrapper>

        {/* 説明文 */}
        <SectionWrapper delay={0.05}>
          <div className="max-w-[674px] mx-auto text-center space-y-3 mb-12 md:mb-16">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-[#003da6] text-[15px] md:text-[16px] leading-[30px]"
              >
                {para}
              </p>
            ))}
          </div>
        </SectionWrapper>

        {/* 製品画像 */}
        <SectionWrapper delay={0.15}>
          <div className="flex justify-center">
            <Image
              src="/assets/hato-white-angle.jpg"
              alt="OQTA Heart Poppo"
              width={600}
              height={426}
              className="w-full max-w-[480px] md:max-w-[560px] h-auto rounded-[24px] shadow-[0_4px_24px_rgba(0,61,166,0.10)]"
              sizes="(max-width: 767px) calc(100vw - 48px), 560px"
            />
          </div>
        </SectionWrapper>

      </div>
    </section>
  );
}
