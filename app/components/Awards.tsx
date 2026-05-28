import SectionWrapper from "./SectionWrapper";

const awards = [
  { year: "2024", name: "WINK 最優秀賞" },
  { year: "2018", name: "経済産業省 JHeC 優秀賞" },
  { year: "2019", name: "ACC 広告賞 ファイナリスト" },
];

export default function Awards() {
  return (
    <section className="py-24 bg-[#edf1f7]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-12">
            Awards
          </p>
        </SectionWrapper>
        <div className="flex flex-col gap-4">
          {awards.map((a, i) => (
            <SectionWrapper key={a.name} delay={i * 0.1}>
              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl">
                <span className="font-[family-name:var(--font-italianno)] text-4xl text-[#e5ecf6] w-16 flex-shrink-0">
                  {a.year}
                </span>
                <span className="text-[#1a2540] font-medium">{a.name}</span>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
