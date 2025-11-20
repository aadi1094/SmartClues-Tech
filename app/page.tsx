"use client";

import HeroSection from "@/components/hero-section";
import { HeroHeader } from "@/components/hero-header";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { useState } from "react";
import About from "@/components/about";
import { Gallery4 } from "@/components/blocks/gallery4";

export default function Home() {
  const [colorPreset, setColorPreset] = useState<string[]>(["#7C444F", "#9F5255", "#E16A54", "#F39E60"]);

  return (
    <div className="relative min-h-dvh w-full bg-background">
      <HeroHeader onColorPresetChange={setColorPreset} />

      {/* Hero Content */}
      <div className="relative z-10">
        <HeroSection linesGradient={colorPreset} />
        <FeaturesSectionWithHoverEffects linesGradient={colorPreset} />
        <About linesGradient={colorPreset} />
        <Gallery4 linesGradient={colorPreset} />
      </div>
    </div>
  );
}
