import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const cards = [
  {
    img: "/assets/product-front.jpg",
    text: "関係がこじれた実家に、遠隔で鳴かせる「鳩時計」を設置したら起こった、想像以上のできごと。",
    href: "https://note.com/simpeiidea/n/nc052ec307c23",
  },
  {
    img: "/assets/founder-interview.jpg",
    text: "おもちゃクリエイター 高橋 晋平氏が人生を賭ける鳩時計『OQTA HATO（オクタ ハト）』があたたかい",
    href: "https://iotnews.jp/archives/105606",
  },
  {
    img: "/assets/media-portrait.jpg",
    text: "見せる育児に共感。漫画家・宮川サトシさんのストレス解消法は「夜会」にあり",
    href: "https://www.lifehacker.jp/article/173544how_i_parent_miyagawa/",
  },
];

export default function MediaCards() {
  return (
    <section id="media" className="py-16 md:py-20 bg-[#edf1f7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <SectionWrapper>
          <p className="text-[#003da6] text-[18px] md:text-[20px] font-bold text-center mb-2">Media</p>
          <h2 className="text-[#003da6] text-[30px] md:text-[42px] font-bold text-center mb-10 md:mb-14">OQTAに寄せられた声</h2>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <SectionWrapper key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[16px] md:rounded-[20px] shadow-[0px_5px_20px_0px_rgba(4,67,176,0.05)] overflow-hidden">
                <div className="h-[200px] md:h-[196px] overflow-hidden bg-[#efefef]">
                  <Image
                    src={c.img}
                    alt={c.text}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[#003da6] text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] mb-5 md:mb-6">{c.text}</p>
                  <a
                    href={c.href}
                    className="flex items-center justify-center w-full h-[50px] md:h-[57px] border border-[#003da6] rounded-[60px] text-[#003da6] text-[17px] md:text-[20px] font-bold hover:bg-[#003da6] hover:text-white transition-colors"
                  >
                    つづきを読む
                  </a>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
