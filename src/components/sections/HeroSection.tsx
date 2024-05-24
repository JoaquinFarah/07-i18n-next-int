import Image from "next/image";
import React from "react";
import Profes1 from "../../../public/profes1.jpg";
import { useTranslations } from "next-intl";

const HeroSection = () => {
const t = useTranslations('HeroSection');
  return (
    <section className="w-full max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-32 mb-10">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h1 className="uppercase text-2xl md:text-4xl font-black text-laurenBlue">
          Expresión Tango, <br />
          {t('title')}
        </h1>
        <p className="font-light text-xl md:text-2xl w-full max-w-xs md:max-w-sm">
          {t('subtitle')}
        </p>
        <p className="font-light text-s">
          {t('description')}
        <br/>
        <br/>
          {t('description1')}
        <br/>
        <br/>
          {t('description2')}
        </p>
      </div>

      <Image
        src={Profes1}
        width={0}
        height={0}
        sizes="100vw"
        alt="Profes1"
        className="w-80 lg:w-96 h-auto rounded-2xl shadow-2xl"
      />
    </section>
  );
};

export default HeroSection;
