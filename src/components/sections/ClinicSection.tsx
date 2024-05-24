import Image from "next/image";
import React from "react";
import Tangocalle from "../../../public/tangocalle1.jpeg";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useTranslations } from "next-intl";


const ClinicSection = () => {
const t = useTranslations('ClinicSection');
  return (
    <section className="w-full max-w-[90%] mx-auto bg-[#F5F5F5] pt-8 rounded-3xl">
      <h2 className="font-light text-2xl md:text-4xl text-center">
        {t('phrase')} <br/> <span className="font-sans from-neutral-400 text-lg">{t('yorch')} </span>
      </h2>
      <div className="mb-10 bg-[#F5F5F5] flex flex-col lg:flex-row items-center justify-around pb-10 px-5 rounded-3xl gap-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-start py-6 gap-6"> 

              <div className="flex items-center justify-center gap-6 p-2 w-full max-w-md">
                <span>
                  <BsFillPatchCheckFill size={70} className="text-laurenBlue" />
                </span>
                <div className="flex flex-col items-start justify-start gap-1 w-full"> 
                  <h3 className=" md:text-xl font-medium">{t('place')} </h3>
                  <p className="font-light text-sm">{t('description')} </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 p-2 w-full max-w-md">
                <span>
                  <BsFillPatchCheckFill size={70} className="text-laurenBlue" />
                </span>
                <div className="flex flex-col items-start justify-start gap-1 w-full"> 
                  <h3 className=" md:text-xl font-medium">{t('place1')} </h3>
                  <p className="font-light text-sm">{t('description1')} </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 p-2 w-full max-w-md">
                <span>
                  <BsFillPatchCheckFill size={70} className="text-laurenBlue" />
                </span>
                <div className="flex flex-col items-start justify-start gap-1 w-full"> 
                  <h3 className=" md:text-xl font-medium">{t('place2')} </h3>
                  <p className="font-light text-sm">{t('description2')} </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 p-2 w-full max-w-md">
                <span>
                  <BsFillPatchCheckFill size={70} className="text-laurenBlue" />
                </span>
                <div className="flex flex-col items-start justify-start gap-1 w-full"> 
                  <h3 className=" md:text-xl font-medium">{t('place3')} </h3>
                  <p className="font-light text-sm">{t('description3')} </p>
                </div>
              </div>

          </div>
        </div>

        <Image
          src={Tangocalle}
          width={0}
          height={0}
          sizes="100vw"
          alt="tangocalle"
          className="w-full lg:max-w-[60%] h-full object-cover md:px-10 lg:px-10 drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default ClinicSection;
