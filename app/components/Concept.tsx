import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function Concept() {
  return (
    <section id="concept" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-4">Concept</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003da6] leading-tight mb-16">
            電話より気軽に、メールより温かく。
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionWrapper>
            <div className="space-y-6 text-[#4a5a78] leading-[2] text-[1.05rem]">
              <p>
                「元気にしているかな」と思うとき、電話をかけるには少し勇気がいる。
                メッセージを打つほどの用事でもない。
              </p>
              <p>
                そんな「言葉にならない想い」を、ボタン一つで届けるために
                OQTAは生まれました。
              </p>
              <p>
                受け取る側には、専用の置き時計「Heart Poppo」があります。
                誰かが想いを送るたびに、かすかな音と光で、それを知らせます。
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.15}>
            <div className="relative flex justify-center">
              <Image
                src="/assets/mask-group.png"
                alt="OQTAアプリ画面"
                width={300}
                height={360}
                className="rounded-3xl shadow-xl"
              />
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
