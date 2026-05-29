import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

type Feature = {
  num: string;
  title: string;
  paragraphs: string[];
  img: string | null;
  imgAlt: string;
  imgSide: "right-bleed" | "left-bleed" | null;
};

const features: Feature[] = [
  {
    num: "01",
    title: "贈る",
    paragraphs: [
      "想いを届けるストーリーは、相手にHeart Poppoをプレゼントするところから始まります。設定自体は簡単で、専用アプリを使いBluetoothとWi-Fiの接続設定を完了したら、あとは世界中どの場所からも、アプリのボタンを押すだけ。相手のハトを鳴かせられるようになります。",
      '「あなたのことを想ったらこのハトが鳴くからね。」と伝えて眼の前で鳴らせば、その時からハトの音の意味は時報から“想い”に変わります。',
    ],
    img: "/assets/mask-group.png",
    imgAlt: "スマホアプリで祖母を想う",
    imgSide: "right-bleed",
  },
  {
    num: "02",
    title: "想う",
    paragraphs: [
      "ふと相手を思い出したら、ボタンをタップする。",
      "鳩時計からの返信はできませんし、履歴も残りません。もちろん鳴いたとき相手が家にいないこともあるでしょう。聞いているかもしれないし、聞いていないかもしれない。だから、気楽に押せるし、相手は返事をしなければならないプレッシャーも感じません。余白のある距離感が、ゆっくりと絆を育みます。",
      "鳩を鳴かせた履歴は自分のアプリだけに記録。「こんなタイミングで、こんなに相手のことを想ったのか」と、想いの数だけ振り返ることができます。",
    ],
    img: null,
    imgAlt: "",
    imgSide: null,
  },
  {
    num: "03",
    title: "繋がる",
    paragraphs: [
      "1対1から1対8まで。いろいろなカタチの絆が作れます。",
      "メールやQRコードによる招待で、ボタンを押せる人を最大8人まで増やすことが可能。私たちはこの「8」という数が、純粋な想いを送るコミュニティとして、ちょうどいい上限だと考えています。",
      "「ハトを鳴かせてくれたのは誰だろう？」「ハトが鳴ったよ」「鳴かせてみて？」「ハト鳴いてる？」なんでもない日常にHeart Poppoがあることで、誰もがほっこりするコミュニケーションが生まれます。",
    ],
    img: null,
    imgAlt: "",
    imgSide: null,
  },
  {
    num: "04",
    title: "眺める",
    paragraphs: [
      "ハトを鳴らしたあと、お祈りマップを開いてみてください。あなたの想いが飛んでいく軌跡を、宇宙視点で眺めることができます。",
      "この祈りの軌跡は、GPS情報からリアルタイムに反映されていて、今この瞬間、誰かが誰かを思っている様子がわかります。",
      "国境も言語も人種も関係なくみんなの「想い」が飛び交う様子を楽しんでください。お祈りマップは今後も進化していきます。",
    ],
    img: "/assets/lifestyle-clock-room.png",
    imgAlt: "室内に置かれたHeart Poppo",
    imgSide: "left-bleed",
  },
];

function FeatureText({ num, title, paragraphs }: { num: string; title: string; paragraphs: string[] }) {
  return (
    <>
      <h3 className="text-[#003da6] text-[30px] md:text-[38px] xl:text-[42px] font-bold leading-tight mb-5">
        {title}
      </h3>
      <div className="space-y-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[#003da6] text-[15px] md:text-[16px] leading-[30px] md:leading-[32px]">
            {p}
          </p>
        ))}
      </div>
    </>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-[#edf1f7]">

      {/* セクション見出し */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-14 pt-16 md:pt-20 pb-6">
        <SectionWrapper>
          <p className="text-center text-[#003da6] text-[16px] md:text-[18px] font-bold mb-2">
            Features
          </p>
          <h2 className="text-center text-[#003da6] text-[28px] md:text-[36px] font-bold">
            OQTA Heart Poppo の特徴
          </h2>
        </SectionWrapper>
      </div>

      {features.map((f) => (
        <div
          key={f.num}
          className="relative overflow-hidden py-14 md:py-20"
        >
          {/* 装飾数字 */}
          <p
            className={[
              "absolute -top-3 pointer-events-none select-none z-0",
              "font-[family-name:var(--font-italianno)]",
              "text-[90px] md:text-[160px] xl:text-[180px] leading-none text-[#c5cdda]",
              f.num === "04"
                ? "right-3 md:right-6 xl:right-10"
                : "left-3 md:left-6 xl:left-10",
            ].join(" ")}
          >
            {f.num}
          </p>

          {/* 01 贈る: テキスト左 + 楕円画像右ブリード */}
          {f.imgSide === "right-bleed" && (
            <div className="relative max-w-[1200px] mx-auto px-6 md:px-14">
              <SectionWrapper delay={0.1}>
                <div className="relative z-10 pt-16 md:pt-20 xl:max-w-[560px]">
                  <FeatureText num={f.num} title={f.title} paragraphs={f.paragraphs} />
                </div>
              </SectionWrapper>

              {/* 楕円画像: PC のみ、右端ブリード */}
              <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-[-6%] w-[45%] max-w-[564px] pointer-events-none select-none z-0">
                <Image
                  src={f.img!}
                  alt={f.imgAlt}
                  width={1069}
                  height={955}
                  className="w-full h-auto"
                />
              </div>

              {/* モバイル: テキスト下に小さめ表示 */}
              <div className="xl:hidden mt-8 flex justify-end pr-0">
                <div className="w-[200px] md:w-[280px] overflow-hidden rounded-full shadow-[0_4px_16px_rgba(0,61,166,0.10)]">
                  <Image
                    src={f.img!}
                    alt={f.imgAlt}
                    width={1069}
                    height={955}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 02 想う: テキスト左、画像なし */}
          {f.imgSide === null && f.num === "02" && (
            <div className="relative max-w-[1200px] mx-auto px-6 md:px-14">
              <SectionWrapper delay={0.1}>
                <div className="relative z-10 pt-16 md:pt-20 xl:max-w-[560px]">
                  <FeatureText num={f.num} title={f.title} paragraphs={f.paragraphs} />
                </div>
              </SectionWrapper>
            </div>
          )}

          {/* 03 繋がる: テキスト左、画像なし */}
          {f.imgSide === null && f.num === "03" && (
            <div className="relative max-w-[1200px] mx-auto px-6 md:px-14">
              <SectionWrapper delay={0.1}>
                <div className="relative z-10 pt-16 md:pt-20 xl:max-w-[560px]">
                  <FeatureText num={f.num} title={f.title} paragraphs={f.paragraphs} />
                </div>
              </SectionWrapper>
            </div>
          )}

          {/* 04 眺める: 楕円画像左ブリード + テキスト右 */}
          {f.imgSide === "left-bleed" && (
            <div className="relative max-w-[1200px] mx-auto px-6 md:px-14">
              {/* 楕円画像: PC のみ、左端ブリード */}
              <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 left-[-6%] w-[45%] max-w-[602px] pointer-events-none select-none z-0">
                <div
                  className="w-full overflow-hidden shadow-[0_4px_24px_rgba(0,61,166,0.10)]"
                  style={{ borderRadius: "50% 50% 50% 50% / 48% 48% 52% 52%", aspectRatio: "602/471" }}
                >
                  <Image
                    src={f.img!}
                    alt={f.imgAlt}
                    width={602}
                    height={471}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <SectionWrapper delay={0.1}>
                <div className="relative z-10 pt-16 md:pt-20 xl:max-w-[560px] xl:ml-auto">
                  <FeatureText num={f.num} title={f.title} paragraphs={f.paragraphs} />
                </div>
              </SectionWrapper>

              {/* モバイル: テキスト下に小さめ表示 */}
              <div className="xl:hidden mt-8">
                <div
                  className="w-[240px] md:w-[320px] overflow-hidden shadow-[0_4px_16px_rgba(0,61,166,0.10)]"
                  style={{ borderRadius: "50%", aspectRatio: "4/3" }}
                >
                  <Image
                    src={f.img!}
                    alt={f.imgAlt}
                    width={360}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      ))}
    </section>
  );
}
