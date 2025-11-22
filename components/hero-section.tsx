import React from "react";
import Link from "next/link";
import FloatingLines from "@/components/floating-lines";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

type HeroSectionProps = {
  linesGradient?: string[];
};

const DEFAULT_GRADIENT = ["#7C444F", "#9F5255", "#E16A54", "#F39E60"];

export default function HeroSection({ linesGradient = DEFAULT_GRADIENT }: HeroSectionProps) {
  return (
    <>
      <main className="overflow-x-hidden bg-white text-black">
        <section className="relative isolate bg-white">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <FloatingLines
              linesGradient={linesGradient}
              enabledWaves={["bottom", "middle", "top"]}
              lineCount={[4, 6, 3]}
              lineDistance={[8, 5, 10]}
              animationSpeed={0.8}
              interactive={true}
              bendRadius={5.0}
              bendStrength={-0.5}
              mouseDamping={0.05}
              parallax={true}
              parallaxStrength={0.15}
              mixBlendMode="screen"
            />
          </div>
          <div className="py-26 md:py-34 lg:py-54 min-h-screen">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="font-serif mt-4 max-w-2xl text-balance text-5xl text-black md:text-6xl lg:mt-0 xl:text-7xl font-semibold">
                  Empowering Businesses with Intelligent Digital Solutions
                </h1>
                <p className="mt-8 max-w-2xl text-balance text-lg text-black/70">
                  Smartclues Technologies delivers cutting-edge IT services and revenue cycle management solutions powered by AI and automation to enhance business efficiency and security.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base bg-black text-white hover:bg-black/90"
                  >
                    <Link href="/services">
                      <span className="text-nowrap">Explore Services</span>
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full px-5 text-base text-black bg-black/10 hover:bg-black/20 border border-black/15"
                  >
                    <Link href="/about">
                      <span className="text-nowrap">About us</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
