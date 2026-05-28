import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function MediaCoverage() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <SectionWrapper>
          <Image
            src="/assets/jisseki.png"
            alt="メディア掲載・受賞歴 — WINK2024最優秀賞, 経産省JHeC2018優秀賞, ACC広告賞ファイナリスト, 読売新聞, クロワッサン, 日本経済新聞朝刊, テレ東WBS, NHKおはよう日本, TBSマツコの知らない世界"
            width={1440}
            height={501}
            className="w-full"
          />
        </SectionWrapper>
      </div>
    </section>
  );
}
