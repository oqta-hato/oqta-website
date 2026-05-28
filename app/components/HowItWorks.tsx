import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    img: "/assets/STEP1.png",
    label: "誰かを想ったらアプリをタップする",
  },
  {
    img: "/assets/STEP2.png",
    label: "想いをのせた鳩が飛び立つ",
  },
  {
    img: "/assets/STEP3.png",
    label: "受け取った人を笑顔にする",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-32 bg-[#edf1f7]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003da6] mb-16">
            使い方
          </h2>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <SectionWrapper key={i} delay={i * 0.12}>
              <Image
                src={s.img}
                alt={s.label}
                width={400}
                height={400}
                className="w-full max-w-xs mx-auto"
              />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
