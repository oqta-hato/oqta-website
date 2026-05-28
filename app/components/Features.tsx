import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const features = [
  {
    num: "01",
    title: "贈る",
    text: `想いを届けるストーリーは、相手にHeart Poppoをプレゼントするところから始まります。設定自体は簡単で、専用アプリを使いBluetoothとWi-Fiの接続設定を完了したら、あとは世界中どの場所からも、アプリのボタンを押すだけ。相手のハトを鳴かせられるようになります。

「あなたのことを想ったらこのハトが鳴くからね。」と伝えて眼の前で鳴らせば、その時からハトの音の意味は時報から"想い"に変わります。`,
    img: "/assets/mask-group.png",
    imgAlt: "OQTAアプリでハートを贈る",
    reverse: false,
  },
  {
    num: "02",
    title: "想う",
    text: `ふと相手を思い出したら、ボタンをタップする。

鳩時計からの返信はできませんし、履歴も残りません。もちろん鳴いたとき相手が家にいないこともあるでしょう。聞いているかもしれないし、聞いていないかもしれない。だから、気楽に押せるし、相手は返事をしなければならないプレッシャーも感じません。余白のある距離感が、ゆっくりと絆を育みます。

鳩を鳴かせた履歴は自分のアプリだけに記録。「こんなタイミングで、こんなに相手のことを想ったのか」と、想いの数だけ振り返ることができます。`,
    img: "/assets/hato-white-angle.jpg",
    imgAlt: "Heart Poppo — 想いをのせて",
    reverse: true,
  },
  {
    num: "03",
    title: "繋がる",
    text: `1対1から1対8まで。いろいろなカタチの絆が作れます。

メールやQRコードによる招待で、ボタンを押せる人を最大8人まで増やすことが可能。私たちはこの「8」という数が、純粋な想いを送るコミュニティとして、ちょうどいい上限だと考えています。

「ハトを鳴かせてくれたのは誰だろう？」「ハトが鳴ったよ」「鳴かせてみて？」「ハト鳴いてる？」なんでもない日常にHeart Poppoがあることで、誰もがほっこりするコミュニケーションが生まれます。`,
    img: "/assets/founder-interview.jpg",
    imgAlt: "つながりを育む",
    reverse: false,
  },
  {
    num: "04",
    title: "眺める",
    text: `ハトを鳴らしたあと、お祈りマップを開いてみてください。
あなたの想いが飛んでいく軌跡を、宇宙視点で眺めることができます。

この祈りの軌跡は、GPS情報からリアルタイムに反映されていて、今この瞬間、誰かが誰かを思っている様子がわかります。

国境も言語も人種も関係なくみんなの「想い」が飛び交う様子を楽しんでください。お祈りマップは今後も進化していきます。`,
    img: "/assets/video-thumbnail.png",
    imgAlt: "お祈りマップ",
    reverse: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#edf1f7]">
      <div className="max-w-[1440px] mx-auto">
        <SectionWrapper>
          <p className="text-center text-[#003da6] text-[32px] font-bold pt-20 pb-4">
            OQTA Heart Poppo の特徴
          </p>
        </SectionWrapper>

        {features.map((f, i) => (
          <div key={f.num} className={`relative py-20 px-14 ${i % 2 === 0 ? "bg-[#edf1f7]" : "bg-white"}`}>
            {/* Decorative number */}
            <p
              className="absolute top-8 pointer-events-none select-none font-[family-name:var(--font-italianno)] text-[180px] leading-none text-[#c5cdda]"
              style={{ left: f.reverse ? "auto" : "5%", right: f.reverse ? "5%" : "auto" }}
            >
              {f.num}
            </p>

            <div className={`relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center ${f.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
              {/* Text */}
              <SectionWrapper delay={0.1}>
                <h3 className="text-[#003da6] text-[42px] font-bold leading-[40px] mb-8">{f.title}</h3>
                <p className="text-[#003da6] text-[16px] leading-[30px] whitespace-pre-line">{f.text}</p>
              </SectionWrapper>

              {/* Image */}
              <SectionWrapper delay={0.2}>
                <div className="rounded-[36px] overflow-hidden shadow-lg">
                  <Image
                    src={f.img}
                    alt={f.imgAlt}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </SectionWrapper>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
