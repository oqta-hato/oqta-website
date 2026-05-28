"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#edf1f7]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-[family-name:var(--font-italianno)] text-3xl text-[#003da6] tracking-wide">
          OQTA
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#7488a9]">
          <a href="#concept" className="hover:text-[#003da6] transition-colors">コンセプト</a>
          <a href="#features" className="hover:text-[#003da6] transition-colors">機能</a>
          <a href="#how" className="hover:text-[#003da6] transition-colors">使い方</a>
          <a href="#faq" className="hover:text-[#003da6] transition-colors">よくある質問</a>
          <a
            href="https://apps.apple.com"
            className="px-4 py-2 bg-[#003da6] text-white rounded-full text-sm hover:bg-[#1a52b8] transition-colors"
          >
            はじめる
          </a>
        </nav>
      </div>
    </header>
  );
}
