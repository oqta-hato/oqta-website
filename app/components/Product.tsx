import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const PURCHASE_URL = "https://oqta.shop-pro.jp/?pid=143680804";

const description = [
  "丸みを帯びたシンプルなデザイン。成形品でありながら、仕上げにこだわった石膏像のようなマットなテクスチャ。",
  "鳩の声は笛を吹くように空気を押し出して音が鳴るこだわりのふいご式。ふいご機構は国内唯一のリズム時計工業製。",
  "電子音とは違う柔らかな鳩の声が部屋に響きます。",
];

export default function Product() {
  return (
    <section id="product" className="py-14 md:py-20 bg-[#edf1f7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <SectionWrapper>
          <div className="bg-white border border-[#003da6] rounded-[30px] md:rounded-[50px] overflow-hidden">
            <div className="grid xl:grid-cols-2 xl:gap-0 items-center">

              {/* 製品写真 — DOM 先頭（mobile: 上部表示、PC: 右カラム） */}
              <div className="order-1 xl:order-2">
                <Image
                  src="/assets/hato-white-angle.jpg"
                  alt="OQTA HATO しろ — アングルショット"
                  width={1116}
                  height={792}
                  className="w-full h-auto xl:rounded-l-none"
                  sizes="(max-width: 1279px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* テキスト — DOM 2番目（mobile: 写真の下、PC: 左カラム） */}
              <div className="order-2 xl:order-1 p-8 md:p-12 xl:p-14">

                {/* ラベル */}
                <p className="text-[#003da6] text-[15px] md:text-[16px] font-bold mb-2 md:mb-3">
                  Service
                </p>

                {/* 製品名 */}
                <h2 className="text-[#003da6] text-[28px] md:text-[38px] font-bold leading-tight mb-5 md:mb-6">
                  OQTA HATO しろ
                </h2>

                {/* 説明文 */}
                <div className="space-y-4 mb-6 md:mb-8">
                  {description.map((p, i) => (
                    <p
                      key={i}
                      className="text-[#003da6] text-[15px] md:text-[16px] leading-[30px] md:leading-[32px]"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={PURCHASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-[60px] bg-[#003da6]
                    text-white font-bold
                    text-[15px] px-8 h-[52px]
                    md:text-[17px] md:px-10 md:h-[57px]
                    hover:bg-[#1a52b8]
                    transition-colors duration-200
                    whitespace-nowrap
                  "
                >
                  商品を購入する
                </a>

              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
