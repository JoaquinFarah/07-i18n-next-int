import Image from "next/image";
import Link from "next/link";
import logo from '../../public/Tangologo.jpg'
import { useTranslations } from "next-intl";

const Footer = () => {
const t = useTranslations('Footer');

  return (
    <footer className="mx-auto flex w-full flex-1 flex-wrap items-center justify-around p-4 gap-5 md:gap-0 bg-[#F5F5F5]">
      <Link href="/">  
        <Image
          src={logo}
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-36 drop-shadow-2xl rounded-lg"
          priority
        />
      </Link>
      <div className="flex flex-col items-center justify-center gap-1 cursor-default select-none">
        <p className="text-xs font-light"> {t('copyright')}</p>
        <p className="text-xs font-light">
          Created by <Link className="transition-all duration-300 hover:text-laurenBlue" href="https://www.linkedin.com/in/joaquin-farah-695a15213/" target="_blank">Joaquin Farah</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
