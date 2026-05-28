"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    q: "Heart Poppoはどこで手に入りますか？",
    a: "現在はOQTAパートナー経由でのご提供となります。詳細はお問い合わせください。",
  },
  {
    q: "送り主が誰かは本当にわからないのですか？",
    a: "はい。受け取る方の端末には「誰かが想いを送ってくれた」という事実のみが届きます。送り主の名前はOQTAのサーバーのみが知っており、受け取る方はもちろん、運営側にも表示されません。",
  },
  {
    q: "何人でも送れますか？",
    a: "サークルに参加しているメンバー全員が送ることができます。受け取る側には合算で届きます。",
  },
  {
    q: "インターネット環境が必要ですか？",
    a: "送る側はスマートフォンのデータ通信が必要です。Heart Poppoは自宅のWi-Fiに接続して使います。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionWrapper>
          <p className="text-[#7488a9] text-sm tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2540] mb-12">
            よくある質問
          </h2>
        </SectionWrapper>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <SectionWrapper key={i} delay={i * 0.08}>
              <div className="border border-[#e5ecf6] rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#f5f7fc] transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-medium text-[#1a2540]">{item.q}</span>
                  <span className="text-[#7488a9] text-xl flex-shrink-0">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-[#4a5a78] leading-relaxed text-sm">
                    {item.a}
                  </div>
                )}
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
