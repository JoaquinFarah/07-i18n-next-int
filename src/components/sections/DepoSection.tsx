import Image from "next/image";
import React from "react";
import { HiStar, HiLocationMarker, HiPhone } from "react-icons/hi";
import Profes3 from "../../../public/profes3.jpg";
import { LuCalendarClock } from "react-icons/lu";
import { useTranslations } from "next-intl";

const depos: { name: string; text: string }[] = [
  {
    name: "John Wayne",
    text: "I'm so happy with this school that I could barely express myself. I've learn so mucho from Laura & Jorge. Beautiful partners, good people and always smiling. Best place to dance!",
  },
  {
    name: "Martha Stwart",
    text: "Within all my years (I'm 79 now) I've never found a dancing school like this. Their dancing techniques are the best I ever seen. I recommend this school with all my heart.",
  },
  {
    name: "Zoe Santos",
    text: "Laura mudou minha vida. O cuidado e a atenção que ela oferece são incomparáveis. Estou radiante com meu novo skill. Sem dúvida, a melhor escolha!",
  },
  {
    name: "Martin Zapata",
    text: "Toda mi vida quise aprender Tango y siempre fui reacio a participar de grandes grupos. Jorge y Laura hicieron de mis clases particulares una experiencia única.",
  },
];

const convenios: { src: string }[] = [
  {
    src: "/escuela2.png",
  },
  {
    src: "/convenio-02.png",
  },
  {
    src: "/escuela1.png",
  },
  {
    src: "/convenio-01.png",
  },
  {
    src: "/escuela3.png",
  },
];

const DepoSection = () => {
const t = useTranslations('DepoSection');
const t1 = useTranslations('Query');
  return (
    <section className="w-full max-w-[90%] mx-auto min-h-screen">
      <h3 className="font-black text-laurenBlue text-center text-2xl uppercase">
        {t('phrase')}
      </h3>
      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 my-7 select-none">
        {depos.map((depo, index) => (
          <div
            key={index}
            className="lg:w-[400px] md:w-full h-fit rounded-3xl bg-[#F5F5F5] flex flex-col items-center justify-center text-center p-5 gap-3"
          >
            <h4 className="font-semibold text-lg">{depo.name}</h4>
            <p className="text-sm">{depo.text}</p>
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <HiStar key={index} size={30} className="text-yellow-400" />
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 mb-7">
        {convenios.map((convenio, index) => (
          <Image
            src={convenio.src}
            alt="Convenio"
            key={index}
            width={0}
            height={0}
            sizes="100vw"
            className="w-28 md:w-44 h-auto aspect-video object-contain"
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">
        <Image
          src={Profes3}
          alt="Profes3"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full md:max-w-[40%] h-auto object-contain rounded-3xl shadow-2xl"
        />

        <div className="flex flex-col items-start justify-start text-center md:text-start gap-3 w-full md:max-w-[60%]">
          <span className="font-light text-2xl justify-center items-center mx-auto md:mx-0">
            {t('contact')}
          </span>
          <h3 className="font-bold text-2xl md:text-3xl lg:text-5xl">
            Expresión Tango, {t('school')} 
          </h3>

          <div className="flex items-center justify-center gap-2">
            <HiLocationMarker size={30} className="text-laurenBlue" />

            <p className="text-xs md:text-sm">
              Avenida Santa Fé, 456 - Caminito, Buenos Aires
            </p>
          </div>

          <div className="flex items-start justify-start gap-2">
            <HiPhone size={30} className="text-laurenBlue" />

            <p className="text-xs md:text-sm">
              +54 (11) 4398-2000 | +54 (11) 4900-7544
            </p>
          </div>

          <button className="rounded-2xl bg-laurenBlue w-full py-4 text-s font-bold text-white transition-all duration-300 ease-in-out hover:bg-laurenBlue/80 flex items-center justify-center gap-2">
            {t1('query')} <LuCalendarClock size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DepoSection;
