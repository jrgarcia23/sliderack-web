import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ScrollReveal";

const sectorPhotos = [
  "/images/sliderack/photos/taller-completo.jpg",
  "/images/sliderack/photos/garaje-bmw.jpg",
  "/images/sliderack/photos/epis-chalecos.jpg",
];

export default function LevrackAccessories() {
  const t = useTranslations("sectors");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <span
            className="mb-3 block text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("eyebrow")}
          </span>
          <h2
            className="text-[28px] font-bold uppercase text-[#201F20] sm:text-[34px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="overflow-hidden bg-white shadow-md transition-shadow duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={sectorPhotos[index]}
                    alt={`Sliderack — ${item.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3
                    className="absolute bottom-4 left-5 text-[22px] font-bold uppercase text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 flex-1">
                  <p
                    className="text-[15px] leading-[1.7] text-[#555]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
