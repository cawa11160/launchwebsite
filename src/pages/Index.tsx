import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";

import FeaturesSection from "@/components/FeaturesSection";
import MerchSection from "@/components/MerchSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <WhatWeDoSection />
      
      <FeaturesSection />
      <MerchSection />
      <AboutSection />
    </main>
    <Footer />
  </>
);

export default Index;
