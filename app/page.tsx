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

export default function Home() {
  const [colorPreset, setColorPreset] = useState<string[]>(["#7C444F", "#9F5255", "#E16A54", "#F39E60"]);

  return (
    <div className="relative min-h-dvh w-full">
      <HeroHeader onColorPresetChange={setColorPreset} />

      {/* Hero Content */}
      <div className="relative z-10">
        <HeroSection linesGradient={colorPreset} />
        <div className="mt-24 flex flex-col gap-32 lg:gap-24">
          <AboutSection />
          <FeaturesSectionWithHoverEffects />
          
          <FeaturedProjectsSection />
          <TestimonialsSection />
          <ContactsSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
