import SectionWrapper from "./SectionWrapper";

export default function Philosophy() {
  return (
    <section className="py-40 bg-[#003da6]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionWrapper>
          <p className="font-[family-name:var(--font-italianno)] text-white/40 text-xl tracking-widest mb-12">
            Philosophy
          </p>
          <blockquote className="text-white text-2xl md:text-4xl font-bold leading-[1.8] tracking-wide">
            「送った人が誰かは、わからない。
            <br />
            でも、誰かが想ってくれた。」
          </blockquote>
          <p className="mt-10 text-white/60 leading-[2] text-[1rem]">
            OQTAのサーバーだけが知っている。
            <br />
            私たちも知らない。だからこそ、純粋な想いとして届く。
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
}
