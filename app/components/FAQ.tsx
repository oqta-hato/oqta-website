"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    q: "利用するのにインターネットは必要ですか？",
    a: "はい。送る側はスマートフォンのインターネット接続が必要です。Heart Poppoはご自宅のWi-Fiに接続してご利用ください。",
  },
  {
    q: "デバイスの音量は調節する事ができますか？",
    a: "はい。Heart Poppo本体のつまみで音量を調節できます。消音（0）に設定することも可能です。",
  },
  {
    q: "外出中に音が鳴っていたかどうか後から確認することは出来ますか？",
    a: "送った側のアプリには履歴が残ります。ただし、受け取った側には履歴は残りません。この「余白」がOQTAらしさです。",
  },
  {
    q: "時計としても使えますか？",
    a: "はい。Heart Poppoはアナログ時計として日常的にお使いいただけます。",
  },
  {
    q: "鳩時計が鳴かないと寂しくなるのではないですか？",
    a: "その感覚こそが、誰かに想ってもらえることのありがたさを教えてくれます。鳴らない日も、この時計があるだけで「誰かが想ってくれるかもしれない」という温かさを感じていただけます。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#edf1f7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
          {/* Left label */}
          <SectionWrapper>
            <p className="text-[#003da6] text-[18px] md:text-[20px] font-bold mb-2">FAQ</p>
            <h2 className="text-[#003da6] text-[34px] md:text-[42px] font-bold leading-tight">よくある質問</h2>
          </SectionWrapper>

          {/* Right: Q list */}
          <div className="space-y-3 md:space-y-4">
            {faqs.map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.06}>
                <div className="bg-white border border-[#003da6] rounded-[16px] md:rounded-[20px] overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 md:px-7 py-[18px] md:py-[22px] text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-[#003da6] text-[15px] md:text-[18px] font-bold pr-4">Q. {item.q}</span>
                    <span className={`flex-shrink-0 text-[#003da6] text-[24px] font-light transition-transform ${open === i ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {open === i && (
                    <div className="px-5 md:px-7 pb-4 md:pb-5 text-[#003da6] text-[14px] md:text-[16px] leading-[28px] md:leading-[30px]">
                      {item.a}
                    </div>
                  )}
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
