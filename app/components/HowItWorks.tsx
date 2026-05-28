import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#edf1f7] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <SectionWrapper key={n} delay={(n - 1) * 0.12}>
              <Image
                src={`/assets/STEP${n}.png`}
                alt={`STEP ${n}`}
                width={400}
                height={400}
                className="w-full max-w-[398px] mx-auto"
              />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
