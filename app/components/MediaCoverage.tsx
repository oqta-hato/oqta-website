import SectionWrapper from "./SectionWrapper";

const media = [
  "読売新聞",
  "日本経済新聞",
  "クロワッサン",
  "テレビ東京 WBS",
  "NHK おはよう日本",
  "TBS マツコの知らない世界",
];

export default function MediaCoverage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase text-center mb-12">
            Media Coverage
          </p>
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {media.map((name) => (
              <div
                key={name}
                className="h-16 rounded-xl bg-[#f5f7fc] flex items-center justify-center text-[#7488a9] text-sm font-medium"
              >
                {name}
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
