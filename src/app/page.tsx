import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import ExploreLevrack from "@/components/ExploreLevrack";
import LeadersBanner from "@/components/LeadersBanner";
import WhoUsesLevrack from "@/components/WhoUsesLevrack";
import ExploreWorkstations from "@/components/ExploreWorkstations";
import LevrackAccessories from "@/components/LevrackAccessories";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExploreLevrack />
        <LeadersBanner />
        <WhoUsesLevrack />
        <ExploreWorkstations />
        <LevrackAccessories />
        <FAQSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
