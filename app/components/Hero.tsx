import Image from "next/image";

const PURCHASE_URL = "https://oqta.shop-pro.jp/?pid=143680804";
const SUPPORTER_URL =
  "https://www.amazon.co.jp/?&linkCode=sl2&tag=oqtaplus-22&linkId=d8008af6815773a9b20b410eb114e161&language=ja_JP&ref_=as_li_ss_tl";

export default function Hero() {
  return (
    <section
      className="
        relative isolate overflow-hidden bg-[#edf1f7]
        h-[640px] md:h-[840px] xl:h-[1050px]
      "
    >
      {/* kv_img1: 鳩シルエット — 背景レイヤー */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/assets/kv_img1.png"
          alt=""
          fill
          priority
          className="object-contain object-right-top opacity-55"
          sizes="100vw"
        />
      </div>

      {/* kv_img3: 右上デコレーション (PC のみ) */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none select-none hidden xl:block">
        <Image
          src="/assets/kv_img3.png"
          alt=""
          width={422}
          height={140}
          className="w-[29vw] max-w-[422px] h-auto"
        />
      </div>

      {/* 製品動画サムネイル: 中央〜右寄りに配置 (Figma: x=323,y=288, 792×447, rounded-36px) */}
      <div
        className="
          absolute z-[1] pointer-events-none select-none
          hidden md:block
          top-1/2 -translate-y-1/2
          left-[22%] xl:left-[22%]
          w-[60%] xl:w-[55%] max-w-[792px]
        "
      >
        <Image
          src="/assets/video-thumbnail.png"
          alt="OQTA Heart Poppo — 実家にハトを贈ろう"
          width={1585}
          height={895}
          priority
          className="w-full h-auto rounded-[36px] shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
          sizes="(max-width: 1279px) 60vw, 792px"
        />
      </div>

      {/* ヒーロー本文 + CTA: 左下固定 */}
      <div
        className="
          absolute z-10 flex flex-col
          gap-[6px] md:gap-2
          bottom-10 left-5
          md:bottom-14 md:left-10
          xl:bottom-16 xl:left-[8%]
        "
      >
        {/* キャッチコピー */}
        <span
          className="
            inline-block rounded-[5px] border border-[#003da6] bg-white
            px-3 text-[#003da6] font-bold
            text-[26px] leading-[44px]
            md:text-[34px] md:leading-[54px]
            xl:text-[46px] xl:leading-[64px]
          "
        >
          実家に
        </span>
        <span
          className="
            inline-block rounded-[5px] border border-[#003da6] bg-white
            px-3 text-[#003da6] font-bold
            text-[26px] leading-[44px]
            md:text-[34px] md:leading-[54px]
            xl:text-[46px] xl:leading-[64px]
          "
        >
          ハトを贈ろう。
        </span>
        <span
          className="
            inline-block rounded-[5px] border border-[#003da6] bg-white
            px-3 text-[#003da6] font-medium
            text-[13px] leading-[28px]
            md:text-[15px] md:leading-[30px]
            xl:text-[17px] xl:leading-[32px]
          "
        >
          想いを届ける鳩時計「OQTA Heart Poppo」
        </span>

        {/* CTA ボタン群 */}
        <div className="flex flex-wrap items-center gap-3 mt-3 md:mt-4">
          <a
            href={PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              rounded-[5px] border border-[#003da6] bg-white
              text-[#003da6] font-medium
              text-[13px] px-4 h-[38px]
              md:text-[14px] md:px-5 md:h-[42px]
              hover:bg-[#003da6] hover:text-white
              transition-colors duration-200
              whitespace-nowrap
            "
          >
            商品を購入する
          </a>
          <a
            href={SUPPORTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              text-[#003da6] opacity-70
              text-[13px] md:text-[14px]
              hover:opacity-100 transition-opacity duration-200
              whitespace-nowrap
            "
          >
            OQTAを応援する
            <span className="ml-1 text-[11px]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
