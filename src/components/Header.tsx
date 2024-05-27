'use client'
import Image from "next/image";
import { LuCalendarClock } from "react-icons/lu";
import { useTranslations } from "next-intl";
import logo from '../../public/Tangologo.jpg'
import Link from "next/link";
import LocalSwitcher from "./local-switcher";
import { TbWorld } from "react-icons/tb";
import { FaPeopleGroup, FaBookBookmark } from "react-icons/fa6";




const Header = () => {
const t = useTranslations("Query");


  return (
    <header className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 mx-auto flex w-full md:max-w-[100%] flex-1 flex-wrap items-center justify-center p-4 gap-5 md:gap-2 mb-5">
      <Link href="/"> 
        <Image
          src={logo}
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-2xl h-auto w-44"
          priority
        />
      </Link>
      <div className=" flex ">        
          <TbWorld /> 
          <LocalSwitcher/>          
      </div>
      <Link href="/students">
        <button className="rounded-2xl bg-laurenBlue   p-4 text-s font-bold text-white transition-all duration-300 ease-in-out hover:bg-laurenBlue/80 flex items-center justify-center gap-2">
            {t('students')} <FaPeopleGroup size={24} />
        </button>
      </Link>  
      <Link href="https://es.wikipedia.org/wiki/Tango">
        <button className="rounded-2xl bg-laurenBlue   p-4 text-s font-bold text-white transition-all duration-300 ease-in-out hover:bg-laurenBlue/80 flex items-center justify-center gap-2">
            WikiTango <FaBookBookmark size={24} />
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
