"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "OQTA Heart Poppoとは", href: "#about" },
  { label: "特徴", href: "#features" },
  { label: "製品紹介", href: "#product" },
  { label: "OQTAに込めた想い", href: "#philosophy" },
  { label: "サポーター募集", href: "#supporter" },
  { label: "よくある質問", href: "#faq" },
];

const SUPPORTER_URL =
  "https://www.amazon.co.jp/?&linkCode=sl2&tag=oqtaplus-22&linkId=d8008af6815773a9b20b410eb114e161&language=ja_JP&ref_=as_li_ss_tl";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#edf1f7]/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-14 h-[68px] md:h-[80px] flex items-center justify-between">
          <a href="#" onClick={() => setMenuOpen(false)}>
            <Image
              src="/assets/logo-blue.png"
              alt="OQTA"
              width={140}
              height={36}
              className="h-8 w-auto"
            />
          </a>

          {/* デスクトップ nav */}
          <nav className="hidden xl:flex items-center gap-[18px] text-[13px] text-[#003da6]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={SUPPORTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center justify-center px-5 h-[40px] bg-[#003da6] text-white text-[14px] font-bold rounded-[30px] hover:bg-[#1a52b8] transition-colors whitespace-nowrap"
          >
            OQTAを応援する
          </a>

          {/* ハンバーガー（モバイル） */}
          <button
            className="xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span
              className={`block w-6 h-[2px] bg-[#003da6] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#003da6] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#003da6] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* モバイルドロワー */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-[#edf1f7] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } pt-[68px]`}
        >
          <nav className="flex flex-col px-8 pt-8 gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#003da6] text-[18px] font-bold hover:opacity-70 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={SUPPORTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center h-[52px] bg-[#003da6] text-white text-[16px] font-bold rounded-[30px] hover:bg-[#1a52b8] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              OQTAを応援する
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
