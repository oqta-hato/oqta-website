import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function FounderStory() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-14">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <SectionWrapper>
            <p className="text-[#003da6] text-[16px] leading-[40px] whitespace-pre-line">
              {`ぼくには、愛媛県でひとり暮らしをしている高齢の母親がいます。
元気にしてるかな？と思ってたまに電話すると、最後の方なんだか謎のお説教をされたりするんですよね。母親の愛情と心配は紙一重。しょうがないと半ば諦めていました。

なぜそのようなことが起こるのでしょうか？
例えば電話やLINEといったこれまでの通信手段は、"ことばを使って相手に主張を伝える"という設計。なので、やりとりにコミュニケーションコストが発生するんです。

感謝や愛情をシンプルに伝えるのって意外と難しい。でもこのまま母親が死んでしまったら「もっと感謝を伝えたかったな…」と後悔することでしょう。

OQTAの鳩時計はスマホのボタンを押すだけで鳴らすことができるんです。実家の母親にプレゼントして「お母さんのことを思ったらこのハトを鳴らすね」と言って鳴らすと「あ！いま自分のことを思ってくれた」と大喜び。7年たった今でも「飽きない」んだそう。

愛情の反対は無関心。そこにコトバは必ずしも必要ではなかったのです。
それがOQTA Heart Poppoなのです。

ハトの音に乗って届くあなたの想いが、誰かの寂しさを癒やす効果をぜひ味わってください。`}
            </p>
          </SectionWrapper>

          {/* App screenshot */}
          <SectionWrapper delay={0.15}>
            <div className="flex justify-center">
              <Image
                src="/assets/mask-group.png"
                alt="OQTAアプリ画面"
                width={400}
                height={432}
                className="rounded-[50px] shadow-xl w-full max-w-[400px]"
              />
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
