"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const THEME = {
  primary: "rgb(0, 223, 255)",
  primaryHover: "rgb(0, 249, 255)",
  secondary: "rgb(0, 86, 209)",
  gradientStart: "rgb(0, 223, 255)",
  gradientEnd: "rgb(0, 86, 209)",
  backgroundLight: "#F9FAFB",
  backgroundSection: "#F2F4F7",
  textPrimary: "#0F172A",
  textSecondary: "#475569",
  overlayDark: "rgb(15, 23, 42)",
} as const

const toRgba = (color: string, alpha: number) => {
  const rgb = color.match(/(\d+),\s*(\d+),\s*(\d+)/)
  if (!rgb) return color
  return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, ${alpha})`
}

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const itemFadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export function AboutSection() {
  const heroImage = "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
  const communityImages = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  ]

  return (
    <section id="about" className="w-full  max-w-7xl mx-auto" >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container px-4 md:px-6 border rounded-3xl"
        style={{
          borderColor: toRgba(THEME.secondary, 0.12),
          backgroundColor: THEME.backgroundSection,
        }}
      >
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 p-6"
          >
            <div className="inline-block rounded-3xl px-3 py-1 text-sm" style={{ backgroundColor: toRgba(THEME.primary, 0.15), color: THEME.secondary }}>
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ color: THEME.textPrimary }}>
              Our Story
            </h2>
            <p className="md:text-xl/relaxed" style={{ color: THEME.textSecondary }}>
              <span className="font-bold">Smartclues</span> Technologies LLP is a multi-disciplinary, innovation-led technology and healthcare services company specializing in secure IT solutions and end-to-end U.S. Healthcare Revenue Cycle Management (RCM).
            </p>
            <p className="md:text-xl/relaxed" style={{ color: THEME.textSecondary }}>
              Headquartered in Hyderabad with a growing global footprint, we combine cyber security expertise with deep healthcare domain knowledge to deliver measurable business outcomes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="rounded-3xl border-2 transition-colors hover:opacity-90"
                style={{
                  borderColor: THEME.secondary,
                  color: THEME.secondary,
                  backgroundColor: toRgba(THEME.primary, 0.05),
                }}
              >
                Our Process
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-3xl border-0 transition-all hover:shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`,
                  color: THEME.textPrimary,
                }}
                asChild
              >
                <Link href="/careers" className="block text-center">
                  Join Our Team
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl">
              <Image src={heroImage} alt="PrebuiltUI showcase" fill className="object-cover" />
              {/* Always visible shade */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark, 0)} 0%, ${toRgba(THEME.overlayDark, 0.85)} 100%)`,
                }}
              />
              <div
                className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 rounded-2xl p-4 text-sm shadow-lg backdrop-blur"
                style={{
                  backgroundColor: toRgba(THEME.backgroundLight, 0.9),
                  color: THEME.textPrimary,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    {communityImages.map((src, idx) => (
                      <Image
                        key={src}
                        src={src}
                        alt={`Community member ${idx + 1}`}
                        width={36}
                        height={36}
                        className="rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <div
                      className="flex size-9 items-center justify-center rounded-full border-2 border-white text-xs font-semibold"
                      style={{ backgroundColor: THEME.secondary, color: "white" }}
                    >
                      50+
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium" style={{ color: THEME.textPrimary }}>
                  Join our developer community
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
