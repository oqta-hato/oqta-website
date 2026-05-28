import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function Product() {
  return (
    <section id="product" className="py-20 bg-[#edf1f7]">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionWrapper>
          <div className="border border-[#003da6] rounded-[50px] bg-white p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <p className="text-[#003da6] text-[20px] font-bold mb-2">Service</p>
                <h2 className="text-[#003da6] text-[42px] font-bold leading-tight mb-6">OQTA HATO しろ</h2>
                <p className="text-[#003da6] text-[16px] leading-[30px] mb-10">
                  丸みを帯びたシンプルなデザイン。<br />
                  成形品でありながら、仕上げにこだわった石膏像のようなマットなテクスチャ。<br />
                  鳩の声は笛を吹くように空気を押し出して音が鳴るこだわりのふいご式。ふいご機構は国内唯一のリズム時計工業製。<br />
                  電子音とは違う柔らかな鳩の声が部屋に響きます。
                </p>
                <a
                  href="https://oqta.com"
                  className="inline-flex items-center justify-center w-[220px] h-[57px] bg-[#003da6] text-white text-[20px] font-bold rounded-[60px] hover:bg-[#1a52b8] transition-colors"
                >
                  商品を購入する
                </a>
              </div>
              {/* Image */}
              <div>
                <Image
                  src="/assets/hato-white-angle.jpg"
                  alt="OQTA HATO しろ"
                  width={558}
                  height={396}
                  className="w-full rounded-[50px] shadow-lg"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
