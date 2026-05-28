import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function MediaCoverage() {
  return (
    <section id="media" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionWrapper>
          <Image
            src="/assets/jisseki.png"
            alt="メディア掲載・受賞歴 — WINK2024最優秀賞, 経産省JHeC2018優秀賞, Edge2024ファイナリスト, ACC広告賞ファイナリスト, 読売新聞, クロワッサン, 日本経済新聞朝刊, テレ東WBS, NHKおはよう日本, TBSマツコの知らない世界"
            width={1400}
            height={500}
            className="w-full"
          />
        </SectionWrapper>
      </div>
    </section>
  );
}
