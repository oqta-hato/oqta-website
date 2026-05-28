import SectionWrapper from "./SectionWrapper";

const benefits = [
  "開発の舞台裏や今後の展望をいち早くお届け",
  "サポーター限定のオンラインイベントにご招待",
  "新機能のベータテストへの参加権",
  "ご芳名板へのお名前掲載（任意）",
];

export default function Supporter() {
  return (
    <section id="supporter" className="py-20 bg-[#edf1f7]">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionWrapper>
          <p className="text-[#003da6] text-[20px] font-bold mb-2">Supporter</p>
          <h2 className="text-[#003da6] text-[42px] font-bold leading-[60px] mb-6">
            あなたもOQTAを支える<br />仲間になりませんか？
          </h2>
          <p className="text-[#003da6] text-[16px] leading-[30px] max-w-[575px] mb-12">
            私たちのサービスは、「大切な人に想いを届けたい」「親に感謝の気持ちを伝えたい」と思うサポーターの皆様からの寄付と支援により成り立っています。<br /><br />
            いただいたご支援は、新機能の開発や日本人が大切にする余白文化の世界展開など、インターネットの未来を変える活動に活用させていただきます。<br /><br />
            便利さよりも温かさを。 情報よりも感情を。 言葉よりも想いを。<br />
            OQTAが大切にする価値を守り、広げるために、あなたの力を貸してください。
          </p>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Primary CTA */}
          <SectionWrapper delay={0.1}>
            <a
              href="#"
              className="flex flex-col justify-center items-start p-10 bg-[#003da6] rounded-[50px] h-[208px] hover:bg-[#1a52b8] transition-colors group"
            >
              <p className="text-white text-[26px] font-bold leading-[38px]">
                今すぐサポーターとして応援する<br />
                550円〜
              </p>
            </a>
          </SectionWrapper>

          {/* Secondary CTA */}
          <SectionWrapper delay={0.15}>
            <a
              href="#"
              className="flex flex-col justify-center items-start p-10 bg-white border border-[#003da6] rounded-[50px] h-[208px] hover:bg-[#edf1f7] transition-colors"
            >
              <p className="text-[#003da6] text-[26px] font-bold leading-[38px]">
                Amazonアフィリエイトで<br />
                お買い物して応援する
              </p>
            </a>
          </SectionWrapper>
        </div>

        {/* Benefits */}
        <SectionWrapper delay={0.2}>
          <div className="bg-[#e5ecf6] border border-[#003da6] rounded-[50px] p-10">
            <p className="text-[#003da6] text-[20px] font-bold mb-6">OQTAからのお礼</p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="text-[#003da6] text-[20px] flex items-start gap-3">
                  <span className="mt-1">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
