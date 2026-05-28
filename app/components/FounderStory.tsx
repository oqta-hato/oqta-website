import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function FounderStory() {
  return (
    <section className="py-32 bg-[#edf1f7]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-4">Founder</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003da6] mb-16">
            つくった人
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-12">
          <SectionWrapper>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/founder-interview.jpg"
                alt="代表インタビュー"
                width={640}
                height={480}
                className="w-full"
              />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.15}>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/media-portrait.jpg"
                alt="メディア取材"
                width={640}
                height={480}
                className="w-full"
              />
            </div>
          </SectionWrapper>
        </div>

        <SectionWrapper delay={0.2}>
          <div className="mt-12 max-w-2xl text-[#4a5a78] leading-[2]">
            <p>
              「父が亡くなる前、もっと気軽に連絡できていたら」——
              そんな後悔から、OQTAは生まれました。
            </p>
            <p className="mt-4">
              電話でもLINEでもない、もっと軽くて温かいつながりの形を
              探し続けてたどり着いたのが、この小さな鳩時計です。
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
