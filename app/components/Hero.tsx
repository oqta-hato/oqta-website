"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#edf1f7] overflow-hidden" style={{ minHeight: "980px" }}>
      {/* Pigeon watermark — fills background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/assets/kv_img1.png"
          alt=""
          fill
          className="object-contain object-left-top opacity-20"
          priority
        />
      </div>

      {/* Nav spacer */}
      <div className="h-[85px]" />

      {/* Main video card — centered */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative mx-auto mt-10"
        style={{ maxWidth: "792px", width: "calc(100% - 3rem)" }}
      >
        <div className="relative rounded-[36px] overflow-hidden shadow-2xl" style={{ aspectRatio: "792/447" }}>
          <Image
            src="/assets/video-thumbnail.png"
            alt="OQTA 実家にハトを贈ろう"
            fill
            className="object-cover"
            priority
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            >
              <Image src="/assets/youtube.png" alt="再生" width={28} height={28} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Headline bordered boxes — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-16 left-[8%] flex flex-col gap-2"
      >
        <div className="inline-flex">
          <span className="bg-white border border-[#003da6] rounded-[5px] px-3 text-[#003da6] font-medium text-[38px] leading-[53px]">
            実家に
          </span>
        </div>
        <div className="inline-flex">
          <span className="bg-white border border-[#003da6] rounded-[5px] px-3 text-[#003da6] font-medium text-[38px] leading-[53px]">
            ハトを贈ろう。
          </span>
        </div>
        <div className="inline-flex">
          <span className="bg-white border border-[#003da6] rounded-[5px] px-3 text-[#003da6] font-medium text-[17px] leading-[32px]">
            想いを届ける鳩時計「OQTA Heart Poppo」
          </span>
        </div>
      </motion.div>
    </section>
  );
}
