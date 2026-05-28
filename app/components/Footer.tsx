import Image from "next/image";

const navLinks = [
  { label: "OQTA Heart Poppoとは", href: "#about" },
  { label: "特徴", href: "#features" },
  { label: "製品紹介", href: "#product" },
  { label: "OQTAに込めた想い", href: "#philosophy" },
  { label: "OQTAの現在地", href: "#news" },
  { label: "サポーター募集", href: "#supporter" },
  { label: "よくある質問", href: "#faq" },
];

const externalLinks = [
  { label: "note", href: "https://note.com/oqta/" },
  { label: "ZINE", href: "https://oqta.com/INORIbook1.pdf" },
  { label: "App", href: "https://oqta.com/app/" },
  { label: "お問い合わせ", href: "mailto:kiopi@oqta.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#edf1f7] border-t border-[#003da6]/10 py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-10 md:mb-12">
          {/* Left: Logo + nav */}
          <div>
            <Image
              src="/assets/logo-blue.png"
              alt="OQTA"
              width={168}
              height={43}
              className="h-8 md:h-9 w-auto mb-6 md:mb-8"
            />
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#003da6] text-[15px] md:text-[18px] font-bold hover:opacity-70 transition-opacity">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: external links */}
          <div className="flex flex-col justify-start gap-3 pt-0 md:pt-12">
            {externalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between px-6 h-[52px] border border-[#003da6] rounded-[60px] text-[#003da6] text-[14px] md:text-[16px] font-bold hover:bg-[#003da6] hover:text-white transition-colors"
              >
                <span>{l.label}</span>
                <span className="text-[18px]">›</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#003da6]/10">
          <p className="text-[#b1b1b1] text-[12px] tracking-[1.2px]">©︎2025OQTA</p>
          <div className="flex gap-6 text-[12px] text-[#003da6]">
            <a href="https://oqta.com/company.html" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">会社概要</a>
            <a href="https://oqta.com/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">プライバシーポリシー</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
