
import AboutSection from "@/components/sections/AboutSection";
import ClinicSection from "@/components/sections/ClinicSection";
import DepoSection from "@/components/sections/DepoSection";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { unstable_setRequestLocale } from "next-intl/server";

 
export default function Index({params: {locale} }) {
  unstable_setRequestLocale(locale);
  
  return (
    <main>      
      <HeroSection />
      {/* <SkillsSection /> */}
      <AboutSection />
      <ClinicSection />
      <DepoSection />
    </main>
  )
}