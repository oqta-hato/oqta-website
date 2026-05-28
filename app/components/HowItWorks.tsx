import SectionWrapper from "./SectionWrapper";

const steps = [
  { step: "1", label: "アプリをダウンロード", detail: "iOS App Storeから無料でダウンロードできます。" },
  { step: "2", label: "サークルを作る", detail: "大切な人とつながるグループを作ります。何人でも招待できます。" },
  { step: "3", label: "Heart Poppoを設置", detail: "受け取る側の自宅に置き時計を置きます。電源を入れるだけで準備完了。" },
  { step: "4", label: "ハートを送る", detail: "アプリのボタンを押すだけ。それだけです。" },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-32 bg-[#edf1f7]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2540] mb-16">
            はじめ方
          </h2>
        </SectionWrapper>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-3 bottom-3 w-px bg-[#d0daea] hidden md:block" />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <SectionWrapper key={s.step} delay={i * 0.12}>
                <div className="flex gap-8 items-start">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#003da6] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-bold text-[#1a2540] text-lg mb-1">{s.label}</h3>
                    <p className="text-[#4a5a78] text-sm leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
