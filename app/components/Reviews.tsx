import SectionWrapper from "./SectionWrapper";

const reviews = [
  {
    title: "55年の親子関係が変わった",
    author: "大久保知裕さん",
    text: "施設に入所した母との連絡手段がなくなり喪失感を感じていました。ハートポッポを導入してからは1日に4、5回も使うようになり、「これまでの2年とは全く景色が変わりました」。「LINEやメールとは全く違います。言葉にしなくても良い安心感があって、私たちのようなサバサバした親子関係にも新たな絆をもたらしてくれました。」アナログの優しい音色が、言葉にできない気持ちを伝える架け橋になってくれています。",
  },
  {
    title: "7年経っても色褪せない感動",
    author: "山中一司さん",
    text: "2018年から7年間毎日使い続けています。母はいまだに「ハトが鳴った、ありがとう」と喜んでくれて、その感動が全く色あせません。ハートポッポの最大の魅力は「コミュニケーションコストの低さ」。特に高齢の母親にとって、スマートフォンの操作や文字の読み書きよりもずっと負担が少なく、「鳴ったことで元気だと分かる」という安心感をもたらしてくれています。",
  },
  {
    title: "OQTAを押せている自分が好き",
    author: "WAOさん",
    text: "LINEスタンプとの違いは「ネガティブな理由で鳴ることは絶対ない」「自分がやらなければいけないことが何もない」こと。デジタルに不慣れな両親でも使えるシンプルさが、家族の会話のきっかけを生み出してくれます。ハートポッポは単なる連絡ツールではなく「感情のやりとり」ができる存在。「ポッポ」の音が日常に溶け込み、家族間のコミュニケーション頻度が自然と増えました。必要最低限のやりとりができる安心感が習慣になっています。",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-14 md:py-20 bg-[#edf1f7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">

        <SectionWrapper>
          <p className="text-[#003da6] text-[16px] md:text-[18px] font-bold mb-10 md:mb-12">
            レビュー
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 xl:gap-12">
          {reviews.map((r, i) => (
            <SectionWrapper key={i} delay={i * 0.1}>
              <article>
                {/* 上部アクセントライン */}
                <div className="h-[1px] bg-[#003da6]/20 mb-6" />

                {/* タイトル */}
                <h3 className="text-[#003da6] text-[17px] md:text-[18px] font-bold leading-tight mb-1">
                  {r.title}
                </h3>

                {/* 投稿者 */}
                <p className="text-[#7488a9] text-[13px] mb-5">
                  {r.author}
                </p>

                {/* 本文 */}
                <p className="text-[#003da6] text-[14px] md:text-[15px] leading-[28px] md:leading-[30px]">
                  {r.text}
                </p>
              </article>
            </SectionWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}
