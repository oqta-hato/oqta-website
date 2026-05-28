"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#003da6] overflow-hidden">
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/20"
          initial={{ width: 120, height: 120, opacity: 0.6 }}
          animate={{ width: 480, height: 480, opacity: 0 }}
          transition={{
            duration: 3.5,
            ease: "easeOut",
            repeat: Infinity,
            delay: i * 1.1,
          }}
        />
      ))}

      {/* Center dot */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-white/80"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-[family-name:var(--font-italianno)] text-white/60 text-xl mb-4 tracking-widest"
        >
          OQTA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          想っている、を
          <br />
          そっと届ける。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed"
        >
          離れて暮らす大切な人に、
          <br className="hidden md:block" />
          ボタン一つで「想いのかたち」を届けます。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://apps.apple.com"
            className="px-8 py-3.5 bg-white text-[#003da6] font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            App Store でダウンロード
          </a>
          <a
            href="#concept"
            className="px-8 py-3.5 border border-white/40 text-white rounded-full hover:bg-white/10 transition-colors"
          >
            詳しく見る
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          className="w-px h-10 bg-white/30"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
