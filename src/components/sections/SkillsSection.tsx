import Image from "next/image";
import React from "react";
import Profes2 from "../../../public/profes2.jpg";
import { useTranslations } from "next-intl";


const skills: { title: string; text: string }[] = [
  
  {
    title: "Juan & Maria",
    text: "pic",
  },
  {
    title: "Stefan & Lorena ",
    text: "pic",
  },
  {
    title: "Johan & Samantha",
    text: "pic",
  },
  {
    title: "Anibal & Francesca",
    text: "pic",
  },
  {
    title: "Eren & Mikasa",
    text: "pic",
  },
  {
    title: "Jean & Claude",
    text: "pic",
  },
];

const SkillsSection = () => {
  const t = useTranslations('SkillSection');
  return (
    <section className="mb-10 w-full max-w-[90%] mx-auto">
      <Image
        src={Profes2}
        width={0}
        height={0}
        sizes="100vw"
        alt="Profes2"
        className="w-full h-full max-h-44 md:max-h-screen object-cover rounded-t-3xl"
      />

      <div className="bg-[#F5F5F5] w-full h-fit flex flex-col items-center justify-center py-10 rounded-b-3xl">
        <h2 className="font-semibold text-xl md:text-2xl text-center">
          <span className="font-light">{t('students')} </span> Expresión Tango
        </h2>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[90%] lg:w-[60rem] mx-auto ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-2 w-full max-w-xs md:max-w-none mx-auto"
            >
              <h3 className="font-bold text-laurenBlue text-xl">
                {skill.title}
              </h3>
              <p className="font-light text-sm lg:px-20 ">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
