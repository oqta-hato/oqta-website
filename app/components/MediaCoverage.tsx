import SectionWrapper from "./SectionWrapper";

const awards = [
  { event: "WINK2024", result: "最優秀賞" },
  { event: "経産省JHeC2018", result: "優秀賞" },
  { event: "Edge2024「ソーシャルビジネスコンテスト」", result: "ファイナリスト" },
  { event: "総務省「異能ジェネレーションアワード」", result: "ノミネート" },
  { event: "ACC広告賞", result: "ファイナリスト" },
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
          <h2 className="text-center text-[#003da6] text-[22px] md:text-[28px] font-bold mb-10 md:mb-12">
            メディア掲載・受賞歴
          </h2>

          {/* 受賞歴: 年号(小)＋結果(太字)の2行表記を中央揃えで横並び */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-8 mb-10 md:mb-12">
            {awards.map((a) => (
              <div key={a.event} className="text-center">
                <p className="text-[#7488a9] text-[12px] md:text-[13px] mb-1">{a.event}</p>
                <p className="text-[#003da6] text-[16px] md:text-[18px] font-bold leading-tight">
                  {a.result}
                </p>
              </div>
            ))}
          </div>

          {/* メディア掲載: 中央揃えで横並び */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-10 md:gap-y-4">
            {media.map((name) => (
              <span
                key={name}
                className="text-[#003da6] text-[15px] md:text-[17px] font-medium"
              >
                {name}
              </span>
            ))}
          </div>

        </SectionWrapper>
      </div>
    </section>
  );
}
