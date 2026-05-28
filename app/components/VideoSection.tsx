import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function VideoSection() {
  return (
    <section className="py-24 bg-[#edf1f7]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-4 text-center">
            Story
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003da6] text-center mb-10">
            実家にハトを贈ろう
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative rounded-3xl overflow-hidden shadow-xl group"
          >
            <Image
              src="/assets/video-thumbnail.png"
              alt="OQTA 紹介動画"
              width={1280}
              height={720}
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <Image src="/assets/youtube.png" alt="再生" width={36} height={36} />
              </div>
            </div>
          </a>
        </SectionWrapper>
      </div>
    </section>
  );
}
