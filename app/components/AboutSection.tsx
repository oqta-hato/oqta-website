"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const tabs = [
  {
    label: "1.問題提起",
    heading: "インターネットは人類を幸せにしたのか？",
    body: `インターネットが登場して30年、私たちの生活は飛躍的に便利になりました。しかし、その一方で誹謗中傷、分断、ゴシップ、フェイクニュースの氾濫など、人々を苦しめる側面も生まれています。

私たちは本当に幸せになったのでしょうか？ これ以上のスピードや便利さを追い求めるのではなく、むしろ「人と人が心でつながる」新しい形のコミュニケーションを模索すべきではないかと考えています。`,
  },
  {
    label: "2.ビジョン",
    heading: "インフォメーションからエモーションへ",
    body: `私たちのビジョンは、情報を伝えるだけでなく、感情を届けるコミュニケーションの新しい形を作ることです。

言葉を使わなくても、「想っている」という気持ちはちゃんと届く。OQTAはその可能性を追い続けています。`,
  },
  {
    label: "3.OQTAの価値",
    heading: "余白のあるつながり",
    body: `返信しなくていい。履歴も残らない。ただ「誰かが想ってくれた」ことだけが届く。

この余白が、プレッシャーのない温かいつながりを生み出します。OQTAは"便利さ"ではなく"温かさ"を届けるサービスです。`,
  },
  {
    label: "4.未来像",
    heading: "想いが飛び交う世界へ",
    body: `国境も言語も人種も関係なく、誰かが誰かを想う瞬間がリアルタイムに可視化される世界。

お祈りマップには、今この瞬間も、世界中の「想い」が飛び交っています。OQTAはその地図を、もっと豊かにしていきます。`,
  },
];

export default function AboutSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="philosophy" className="py-16 md:py-20 bg-[#edf1f7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <SectionWrapper>
          <p className="text-[#003da6] text-[18px] md:text-[20px] font-bold mb-2">Philosophy</p>
          <h2 className="text-[#003da6] text-[32px] md:text-[42px] font-bold mb-8 md:mb-10">OQTAに込めた想い</h2>

          {/* Tabs */}
          <div className="flex gap-2 md:gap-3 flex-wrap mb-8 md:mb-10">
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-[48px] md:h-[57px] px-4 md:px-6 rounded-[60px] text-[14px] md:text-[18px] font-bold border border-[#003da6] transition-colors ${
                  i === active
                    ? "bg-white text-[#003da6]"
                    : "bg-[#e5ecf6] text-[#7488a9]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-[575px]">
            <h3 className="text-[#003da6] text-[22px] md:text-[26px] font-bold mb-5 md:mb-6">{tabs[active].heading}</h3>
            <p className="text-[#003da6] text-[15px] md:text-[16px] leading-[36px] md:leading-[40px] whitespace-pre-line">{tabs[active].body}</p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
