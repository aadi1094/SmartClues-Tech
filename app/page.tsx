"use client";

import HeroSection from "@/components/hero-section";
import { HeroHeader } from "@/components/hero-header";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/services";
import { useState } from "react";
import { FeaturedProjectsSection } from "@/components/blocks/featured-projects";
import { AboutSection } from "@/components/blocks/about";
import { TestimonialsSection } from "@/components/blocks/testimonials";
import { ContactsSection } from "@/components/blocks/contacts";
import { FooterSection } from "@/components/blocks/footer";
import { CertificatesGrid } from "@/components/blocks/certficates";
import { TrustedBySection } from "@/components/blocks/trustedCompanies";

export default function Home() {
  const [colorPreset, setColorPreset] = useState<string[]>(["#7C444F", "#9F5255", "#E16A54", "#F39E60"]);

  return (
    <div className="relative min-h-dvh w-full overflow-x-hidden">
      <HeroHeader onColorPresetChange={setColorPreset} />

      <div className="relative z-10  ">
        <HeroSection linesGradient={colorPreset} />

        <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-24 flex w-full max-w-7xl flex-col gap-24 lg:gap-20">
          <AboutSection />
          <FeaturesSectionWithHoverEffects />
          
          <FeaturedProjectsSection />
          <TrustedBySection />
          <TestimonialsSection />
          <CertificatesGrid />
          <ContactsSection />
          <FooterSection />

        </div>
      </div>
    </div>
  );
}
