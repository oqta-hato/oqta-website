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

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#edf1f7]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-14 h-[85px] flex items-center justify-between">
        <a href="#">
          <Image src="/assets/logo-blue.png" alt="OQTA" width={168} height={43} className="h-9 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-[14px] text-[#003da6]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-70 transition-opacity whitespace-nowrap">{l.label}</a>
          ))}
        </nav>
        <a href="#supporter" className="hidden lg:flex items-center justify-center px-6 h-[42px] bg-[#003da6] text-white text-[16px] font-bold rounded-[30px] hover:bg-[#1a52b8] transition-colors whitespace-nowrap">
          OQTAを応援する
        </a>
      </div>
    </header>
  );
}
