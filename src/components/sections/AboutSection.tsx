import Image from "next/image";
import React from "react";
import Profes from "../../../public/profes.jpg";
import { LuCalendarClock } from "react-icons/lu";
import { useTranslations } from "next-intl";

const AboutSection = () => {
const t = useTranslations('AboutSection');
const t1 = useTranslations('Query');
  return (
    <section className="w-full max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-32 mb-10">
      <Image
        src={Profes}
        width={0}
        height={0}
        sizes="100vw"
        alt="Profesores"
        className="w-80 lg:w-96 h-auto drop-shadow-2xl rounded-3xl"
      />

      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h3 className="text-2xl lg:text-3xl font-light">
          {t('title')} <span className="font-semibold">{t('teachers')} </span>
        </h3>
        <p className="font-light w-full max-w-xs md:max-w-sm">Laura y Jorge - Caminito, Buenos Aires</p>
        <p className="font-light text-sm w-full max-w-xs md:max-w-sm lg:max-w-md">
          {t('description1')}
          <br />
          {t('description2')}
          <br />
          {t('description3')}
          <br />
          {t('description4')}
          <br />
          {t('description5')}
          <br />
          {t('description6')}
          <br />
          {t('description7')}

        </p>
        <p className="text-xl lg:text-2xl font-black text-laurenBlue">
          {t('number')}
        </p>

        <button className="rounded-2xl bg-laurenBlue w-full py-4 text-s font-bold text-white transition-all duration-300 ease-in-out hover:bg-laurenBlue/80 flex items-center justify-center gap-2">
          {t1('query')} <LuCalendarClock size={24} />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
