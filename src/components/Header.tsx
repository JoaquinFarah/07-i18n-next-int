'use client'
import Image from "next/image";
import { LuCalendarClock } from "react-icons/lu";
import { useTranslations } from "next-intl";
import logo from '../../public/Tangologo.jpg'
import Link from "next/link";
import LocalSwitcher from "./local-switcher";
import { TbWorld } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";



const Header = () => {
const t = useTranslations("Query");



  return (
    <header className="mx-auto flex w-full md:max-w-[80%] flex-1 flex-wrap items-center justify-end p-4 gap-5 md:gap-2 mb-5">
      <Link href="/"> 
        <Image
          src={logo}
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-44"
          priority
        />
      </Link>
      <div className=" flex ">        
          <TbWorld /> 
          <LocalSwitcher/>          
      </div>
      <Link href="`${locale}`/students">
        <button className="rounded-2xl bg-laurenBlue   p-4 text-s font-bold text-white transition-all duration-300 ease-in-out hover:bg-laurenBlue/80 flex items-center justify-center gap-2">
            Estudiantes <FaPeopleGroup size={24} />
        </button>
      </Link>  
      <Link href="`/${locale}/wikiTango`">
        <button className="rounded-2xl bg-laurenBlue   p-4 text-s font-bold text-white transition-all duration-300 ease-in-out hover:bg-laurenBlue/80 flex items-center justify-center gap-2">
            Wikitango <FaBookBookmark size={24} />
        </button>
      </Link>
      <Link href="/">
        <button className="rounded-2xl bg-laurenBlue   p-4 text-s font-bold text-white transition-all duration-300 ease-in-out hover:bg-laurenBlue/80 flex items-center justify-center gap-2">
          {t('query')} <LuCalendarClock size={24} />
        </button>
      </Link>
    </header>
  );
};

export default Header;
