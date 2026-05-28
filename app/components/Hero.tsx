"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#edf1f7] overflow-hidden flex items-center">
      {/* Pink blob decoration */}
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none select-none">
        <Image
          src="/assets/pink-blob.png"
          alt=""
          fill
          className="object-contain object-right-top opacity-60"
          priority
        />
      </div>

      {/* Pigeon outline watermark */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30">
        <Image
          src="/assets/kv_img1.png"
          alt=""
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/assets/hero-headline.png"
                alt="実家にハトを贈ろう。想いを届ける鳩時計「OQTA Heart Poppo」"
                width={520}
                height={180}
                className="w-full max-w-md"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-[#4a5a78] leading-relaxed text-base max-w-sm"
            >
              離れて暮らす大切な人に、ボタン一つで「想っているよ」を届けます。
              言葉がなくても、気持ちは届く。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://apps.apple.com"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#003da6] text-white font-semibold rounded-full hover:bg-[#1a52b8] transition-colors"
              >
                App Store でダウンロード
              </a>
              <a
                href="#concept"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#003da6] text-[#003da6] rounded-full hover:bg-[#003da6]/5 transition-colors"
              >
                詳しく見る
              </a>
            </motion.div>
          </div>

          {/* Right: product image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-72 md:w-96">
              <Image
                src="/assets/hato-white-angle.jpg"
                alt="OQTA Heart Poppo"
                width={640}
                height={640}
                className="w-full rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-px h-10 bg-[#003da6]/30"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
