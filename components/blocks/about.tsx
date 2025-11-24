"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, X } from "lucide-react"

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

type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
}

export function AboutSection() {
  const heroImage = "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
  const communityImages = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  ]

  const team: TeamMember[] = [
    {
      name: "Ashok Naga Sai Pabbathi",
      role: "Founder & CEO",
      image: "/Ashok.png",
      bio:
        "Certified Ethical Hacker and Cyber Forensic Investigator with 10+ years across Cyber Security and Digital Forensics. Leads Smartclues’ evolution into secure, intelligent, globally scalable tech spanning cyber security and U.S. Healthcare RCM.",
    },
    {
      name: "Naveen Naga Sai Pabbathi",
      role: "Co-Founder & COO",
      image: "/Naveen.png",
      bio:
        "Mechanical engineer turned operations specialist focused on precision at scale. Streamlines U.S. RCM workflows so Smartclues runs with operational excellence every day.",
    },
    {
      name: "Anvesh Reddy Innaganti",
      role: "Executive Director",
      image: "/Anvesh.jpeg",
      bio:
        "Civil engineer and entrepreneur blending innovation with disciplined execution. Drives strategic growth, operational clarity, and long-term structure for Smartclues.",
    },
    {
    name: "V V S Kishore",
    role: "Financial Controller ",
    image: "/Kishore.png",
    bio:
      "Chartered Accountant with 8 years of comprehensive experience in financial management, auditing, and compliance. Joined Smartclues in 2024 to strengthen our financial operations, ensure regulatory compliance, and drive strategic financial planning across our healthcare and technology services divisions.",
  },
  ]

  const [activeMember, setActiveMember] = useState<TeamMember | null>(null)

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
        <div className="mt-16 px-6 pb-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tighter sm:text-3xl"
            style={{ color: THEME.textPrimary }}
          >
            Meet Our Team
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemFadeIn}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 space-y-3 p-4"
                  style={{
                    background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark, 0)} 0%, ${toRgba(THEME.overlayDark, 0.85)} 100%)`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveMember(member)}
                    className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
                  >
                    View Profile
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <div>
                    <h4 className="font-bold text-white">{member.name}</h4>
                    <p className="text-sm text-gray-200">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <AnimatePresence>
          {activeMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            >
              <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border shadow-2xl"
                style={{
                  borderColor: toRgba(THEME.secondary, 0.2),
                  backgroundColor: THEME.backgroundLight,
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveMember(null)}
                  className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-slate-600 transition hover:bg-white"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="flex flex-col gap-6 p-6 md:flex-row">
                  <div className="relative h-72 w-full flex-shrink-0 overflow-hidden rounded-2xl md:h-[360px] md:w-[320px]">
                    <Image src={activeMember.image} alt={activeMember.name} fill className="object-cover" />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark, 0.1)} 0%, ${toRgba(THEME.overlayDark, 0.65)} 100%)`,
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-1 mt-5">
                    <div>
                      <h4 className="text-3xl font-bold" style={{ color: THEME.textPrimary }}>
                        {activeMember.name}
                      </h4>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: THEME.secondary }}>
                        {activeMember.role}
                      </p>
                    </div>
                    <p className="text-base leading-relaxed text-xl" style={{ color: THEME.textSecondary }}>
                      {activeMember.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
