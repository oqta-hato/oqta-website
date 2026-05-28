import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

// Figma 24:38「使い方」— セクション見出しなし、カード3枚のみ
// カード寸法: 398×405px / STEP y=70 / desc y=124 / illus y=204（フレーム相対）
const steps = [
  {
    num: "STEP.1",
    img: "/assets/STEP1.png",
    text: "誰かを想ったらアプリをタップする",
  },
  {
    num: "STEP.2",
    img: "/assets/STEP2.png",
    text: "想いをのせた鳩が飛び立つ",
  },
  {
    num: "STEP.3",
    img: "/assets/STEP3.png",
    text: "受け取った人を笑顔にする",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#edf1f7] py-7 md:py-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <SectionWrapper key={step.num} delay={i * 0.1}>
              {/* カード: bg-white, border, rounded-50px / 内部は top~45px でSTEP始まり */}
              <div className="bg-white border border-[#003da6] rounded-[50px] flex flex-col items-center px-6 pt-11 pb-14">

                {/* STEP ラベル — 30px bold, y=70(frame)→45px from card top */}
                <p className="text-[#003da6] text-[26px] md:text-[30px] font-bold text-center leading-[40px] mb-[15px]">
                  {step.num}
                </p>

                {/* 説明文 — 20px, y=124(frame)→99px from card top */}
                <p className="text-[#003da6] text-[16px] md:text-[20px] leading-[30px] text-center mb-[50px]">
                  {step.text}
                </p>

                {/* イラスト — y=204(frame)→179px from card top, centered */}
                <Image
                  src={step.img}
                  alt={step.num}
                  width={400}
                  height={400}
                  className="w-full max-w-[155px] md:max-w-[175px] h-auto"
                />

              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
