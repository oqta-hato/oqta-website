import Image from "next/image";

const footerLinks = [
  { label: "OQTA Heart Poppoとは", href: "#about" },
  { label: "OQTA Heart Poppo の特徴", href: "#features" },
  { label: "製品紹介", href: "#product" },
  { label: "OQTAに込めた想い", href: "#philosophy" },
  { label: "メディア掲載", href: "#media" },
  { label: "サポーター募集", href: "#supporter" },
  { label: "よくある質問", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#edf1f7] border-t border-[#003da6]/10 py-16">
      <div className="max-w-[1200px] mx-auto px-14">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Logo + nav */}
          <div>
            <Image
              src="/assets/logo-blue.png"
              alt="OQTA"
              width={168}
              height={43}
              className="h-9 w-auto mb-8"
            />
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#003da6] text-[18px] font-bold hover:opacity-70 transition-opacity">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right links */}
          <div className="flex flex-col justify-end items-end gap-3 text-[14px] text-[#003da6]">
            <a href="mailto:kiopi@oqta.com" className="hover:opacity-70 transition-opacity">お問い合わせ</a>
            <a href="#" className="hover:opacity-70 transition-opacity">会社概要</a>
            <a href="#" className="hover:opacity-70 transition-opacity">プライバシーポリシー</a>
          </div>
        </div>

        <p className="text-[#b1b1b1] text-[12px] tracking-[1.2px]">©︎2025OQTA</p>
      </div>
    </footer>
  );
}
