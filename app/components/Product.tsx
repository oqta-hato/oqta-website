import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function Product() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionWrapper>
            <Image
              src="/assets/product-front.jpg"
              alt="OQTA Heart Poppo — 正面"
              width={640}
              height={480}
              className="w-full rounded-3xl shadow-xl"
            />
          </SectionWrapper>

          <SectionWrapper delay={0.15}>
            <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-4">Product</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003da6] leading-tight mb-6">
              OQTA Heart Poppo
            </h2>
            <p className="text-[#4a5a78] leading-[2] mb-8">
              静かに、でも確かに。
              <br />
              テーブルの上に置いておくだけで、
              大切な人からのハートをいつでも受け取れます。
            </p>
            <ul className="space-y-3 text-[#4a5a78] text-sm">
              {[
                "Wi-Fi接続で自動受信",
                "電源を入れるだけですぐ使える",
                "インテリアに馴染むシンプルデザイン",
                "音と光でそっとお知らせ",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#003da6] text-white flex items-center justify-center text-xs flex-shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
