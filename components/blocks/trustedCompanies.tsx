"use client";

import { useState } from "react";
import { THEME } from "./services";

const LOGOS = [
  {
    src: "/7EF0244E-C092-4101-9DB6-6C4EDC5DBC44.png",
    alt: "WIPRO",
  },
  {
    src: "/52CAEB00-7AE7-4BDF-950D-3D7011C6CCAE.png",
    alt: "VEE HEALTHTEK",
  },
  {
    src: "/89B3D171-0FD6-40E6-A5BA-AEB3FE80C29F.jpg",
    alt: "DGGI",
  },
  {
    src: "/89391C1C-D2D9-468A-9425-0F202AF82F6A.png",
    alt: "DIRECTORATE OF REVENUE INTELLIGENCE",
  },
  {
    src: "/45232351-AFC6-4F48-9999-0FE46E77F87F.png",
    alt: "MEDCODE SERVICES",
  },
  {
    src: "/B66F737B-433F-49D8-B8CE-74418BFCAB9F.png",
    alt: "NYX HEALTH",
  },
  {
    src: "/D9FC4536-35CE-4A8B-BFEC-4237B65E7650.png",
    alt: "INCOME TAX DEPARTMENT",
  },
  {
    src: "/D6853AA7-F373-4B9F-B830-9FB72888E6FA.jpg",
    alt: "SPYHEALTH",
  },
  {
    src: "/D684749A-8FA9-420E-A5AC-B7355D23425C.jpg",
    alt: "CLARUS",
  },
];

export function TrustedBySection() {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeLogos = [...LOGOS, ...LOGOS];

  return (
    <section
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: THEME.backgroundLight }}
    >
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <p
          className="text-sm font-semibold tracking-[0.2em] uppercase"
          style={{ color: THEME.secondary }}
        >
          Trusted by innovative companies
        </p>
        {/* <h2
          className="text-3xl font-semibold md:text-4xl"
          style={{ color: THEME.textPrimary }}
        >
          Brands that rely on Smartclues for secure, scalable solutions.
        </h2>
        <p
          className="text-base md:text-lg"
          style={{ color: THEME.textSecondary }}
        >
          From emerging startups to enterprise leaders, teams count on us to
          deliver resilient platforms that scale confidently.
        </p> */}
      </div>

      <div className="relative mt-12">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16"
          style={{
            background: `linear-gradient(90deg, ${THEME.backgroundLight}, transparent)`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16"
          style={{
            background: `linear-gradient(270deg, ${THEME.backgroundLight}, transparent)`,
          }}
          aria-hidden
        />
        <div
          className="group/carousel relative overflow-x-auto md:overflow-hidden rounded-[32px] border border-white/50 bg-white/5 backdrop-blur-xl touch-pan-x"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchCancel={() => setIsPaused(false)}
        >
          <div
            className="trusted-marquee-track flex w-max items-center gap-6 py-6 pr-6"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="group/logo flex h-28 min-w-[190px] flex-shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/90 px-8 shadow-[0_15px_35px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 w-full max-w-[160px] object-contain transition duration-300 ease-out group-hover/logo:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes trusted-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .trusted-marquee-track {
            animation: trusted-marquee 26s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .trusted-marquee-track {
              animation-play-state: paused;
            }
          }
        `}
      </style>
    </section>
  );
}
