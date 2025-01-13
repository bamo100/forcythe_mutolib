import BestCall from "@/components/best-call/BestCall";
import Blog from "@/components/blog/Blog";
import ContactUs from "@/components/contactus/ContactUs";
import CopyRight from "@/components/copyright/CopyRight";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import ProjectNumber from "@/components/project-numbers/ProjectNumber";
import Spotlight from "@/components/spotlight/Spotlight";
import StartupStories from "@/components/startup-stories/StartupStories";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full mt-[6.8rem]">
        <HeroSection />
        <StartupStories />
        <Spotlight />
        <BestCall />
        <ProjectNumber />
        <Blog />
        <ContactUs />
      </main>
      <Footer />
      <CopyRight />
    </div>
  );
}
