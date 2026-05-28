import SectionWrapper from "./SectionWrapper";

const awards = [
  "WINK2024 最優秀賞",
  "経産省JHeC2018 優秀賞",
  "Edge2024「ソーシャルビジネスコンテスト」 ファイナリスト",
  "総務省「異能ジェネレーションアワード」 ノミネート",
  "ACC広告賞 ファイナリスト",
];

const media = [
  "読売新聞",
  "クロワッサン",
  "日本経済新聞朝刊",
  "テレ東 WBS",
  "モーニングサテライト",
  "NHKおはよう日本",
  "TBSマツコの知らない世界",
];

export default function MediaCoverage() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <SectionWrapper>

          {/* セクション見出し */}
          <h2 className="text-[#003da6] text-[22px] md:text-[28px] font-bold mb-8 md:mb-10">
            メディア掲載・受賞歴
          </h2>

          {/* 受賞歴 */}
          <div className="mb-8 md:mb-10">
            <p className="text-[#7488a9] text-[12px] md:text-[13px] font-medium uppercase tracking-widest mb-4">
              Awards
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {awards.map((award) => (
                <span
                  key={award}
                  className="inline-flex items-center px-4 py-[7px] rounded-full
                             bg-[#e5ecf6] text-[#003da6]
                             text-[13px] md:text-[14px] font-medium"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>

          {/* 区切り */}
          <div className="border-t border-[#003da6]/10 mb-8 md:mb-10" />

          {/* メディア掲載 */}
          <div>
            <p className="text-[#7488a9] text-[12px] md:text-[13px] font-medium uppercase tracking-widest mb-4">
              Media
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8 md:gap-y-3">
              {media.map((name) => (
                <span
                  key={name}
                  className="text-[#003da6] text-[14px] md:text-[15px]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

        </SectionWrapper>
      </div>
    </section>
  );
}
