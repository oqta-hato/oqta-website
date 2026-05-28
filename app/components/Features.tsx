import SectionWrapper from "./SectionWrapper";

const features = [
  {
    num: "01",
    title: "ボタン一つで届く",
    body: "アプリを開いてハートを押すだけ。文章を考える必要はありません。「想っている」という気持ちだけを、そのまま送れます。",
  },
  {
    num: "02",
    title: "誰から、はわからない",
    body: "受け取った側には「誰かが想ってくれた」という事実だけが届きます。送り主の名前は表示されません。だから、気負わず送れる。",
  },
  {
    num: "03",
    title: "置き時計が静かに知らせる",
    body: "「Heart Poppo」は日常の中に自然に溶け込む置き時計です。ハートが届いたとき、かすかな音と光でそっと教えてくれます。",
  },
  {
    num: "04",
    title: "距離は関係ない",
    body: "海外でも、深夜でも届きます。お互いの都合を合わせる必要もありません。思い立ったそのときに、送ればいい。",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2540] mb-16">
            OQTAができること
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((f, i) => (
            <SectionWrapper key={f.num} delay={i * 0.1}>
              <div className="flex gap-6">
                <span className="font-[family-name:var(--font-italianno)] text-5xl text-[#e5ecf6] leading-none select-none">
                  {f.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#1a2540] mb-3">
                    {f.title}
                  </h3>
                  <p className="text-[#4a5a78] leading-relaxed text-sm">
                    {f.body}
                  </p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
