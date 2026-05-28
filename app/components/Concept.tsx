import SectionWrapper from "./SectionWrapper";

export default function Concept() {
  return (
    <section id="concept" className="py-32 bg-[#edf1f7]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-4">
            Story
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2540] leading-tight mb-10">
            電話より気軽に、
            <br />
            メールより温かく。
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.15}>
          <div className="grid md:grid-cols-2 gap-12 text-[#4a5a78] leading-[2] text-[1.05rem]">
            <p>
              「元気にしているかな」と思うとき、電話をかけるには少し勇気がいる。
              メッセージを打つほどの用事でもない。
              <br /><br />
              そんな「言葉にならない想い」を、ボタン一つで届けるために
              OQTAは生まれました。
            </p>
            <p>
              受け取る側には、専用の置き時計「Heart Poppo」が届きます。
              誰かが想いを送るたびに、かすかな音と光で、それを知らせます。
              <br /><br />
              送った人が誰かは、わかりません。
              でも、「誰かが想ってくれた」ことは、確かに届きます。
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
