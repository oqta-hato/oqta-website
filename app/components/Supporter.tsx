import SectionWrapper from "./SectionWrapper";

// TODO: 「今すぐサポーターとして応援する」のリンク先を確認する → docs/todo.md #9
const SUPPORTER_URL =
  "https://www.amazon.co.jp/?&linkCode=sl2&tag=oqtaplus-22&linkId=d8008af6815773a9b20b410eb114e161&language=ja_JP&ref_=as_li_ss_tl";
const AMAZON_URL =
  "https://www.amazon.co.jp/?&linkCode=sl2&tag=oqtaplus-22&linkId=d8008af6815773a9b20b410eb114e161&language=ja_JP&ref_=as_li_ss_tl";

const bodyParagraphs = [
  "私たちのサービスは、「大切な人に想いを届けたい」「親に感謝の気持ちを伝えたい」と思うサポーターの皆様からの寄付と支援により成り立っています。",
  "いただいたご支援は、新機能の開発や日本人が大切にする余白文化の世界展開など、インターネットの未来を変える活動に活用させていただきます。",
  "便利さよりも温かさを。情報よりも感情を。言葉よりも想いを。\nOQTAが大切にする価値を守り、広げるために、あなたの力を貸してください。",
];

const benefits = [
  "開発の舞台裏や今後の展望をいち早くお届け",
  "サポーター限定のオンラインイベントにご招待",
  "新機能のベータテストへの参加権",
  "ご芳名板へのお名前掲載（任意）",
];

export default function Supporter() {
  return (
    <section id="supporter" className="py-16 md:py-20 bg-[#edf1f7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">

        {/* 本文 + お礼ボックス */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-8 md:mb-10">

          {/* 左: テキスト */}
          <SectionWrapper>
            <p className="text-[#003da6] text-[16px] md:text-[18px] font-bold mb-3">
              Supporter
            </p>
            <h2 className="text-[#003da6] text-[28px] md:text-[38px] font-bold leading-tight mb-6 md:mb-8">
              あなたもOQTAを支える<br />仲間になりませんか？
            </h2>
            <div className="space-y-5">
              {bodyParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[#003da6] text-[15px] md:text-[16px] leading-[30px] md:leading-[32px] whitespace-pre-line"
                >
                  {p}
                </p>
              ))}
            </div>
          </SectionWrapper>

          {/* 右: お礼ボックス */}
          <SectionWrapper delay={0.1}>
            <div className="bg-[#e5ecf6] border border-[#003da6] rounded-[24px] md:rounded-[30px] p-7 md:p-9">
              <p className="text-[#003da6] text-[16px] md:text-[18px] font-bold mb-5">
                OQTAからのお礼
              </p>
              <ul className="space-y-3 mb-5">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="text-[#003da6] text-[14px] md:text-[15px] leading-[26px] flex items-start gap-3"
                  >
                    <span className="mt-[5px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-[#003da6]/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {/* and more */}
              <p className="text-[#7488a9] text-[13px] font-medium">and more</p>
            </div>
          </SectionWrapper>
        </div>

        {/* CTA ボタン */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <SectionWrapper delay={0.15}>
            <a
              href={SUPPORTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-between
                px-6 h-[60px] md:h-[64px]
                bg-[#003da6] rounded-[12px]
                hover:bg-[#1a52b8] transition-colors
              "
            >
              <p className="text-white text-[14px] md:text-[15px] font-medium">
                今すぐサポーターとして応援する
                <span className="ml-2 text-white/80 text-[13px]">550円〜</span>
              </p>
              <span className="text-white text-[18px] flex-shrink-0 ml-3">›</span>
            </a>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-between
                px-6 h-[60px] md:h-[64px]
                bg-white border border-[#003da6] rounded-[12px]
                hover:bg-[#edf1f7] transition-colors
              "
            >
              <p className="text-[#003da6] text-[14px] md:text-[15px] font-medium">
                Amazonアフィリエイトでお買い物して応援する
              </p>
              <span className="text-[#003da6] text-[18px] flex-shrink-0 ml-3">›</span>
            </a>
          </SectionWrapper>
        </div>

      </div>
    </section>
  );
}
