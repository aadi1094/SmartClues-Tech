"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroHeader } from "@/components/hero-header"
import { FooterSection } from "@/components/blocks/footer"

const THEME = {
  primary: "rgb(0, 223, 255)",
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

const timeline = [
  { year: "2020", title: "Founded in Hyderabad", detail: "Smartclues launches with a focus on Cyber Security, Digital Forensics, and IT development." },
  { year: "2021", title: "Service Expansion", detail: "Broadened delivery footprint and strengthened core engineering + security practices." },
  { year: "2022", title: "Entered U.S. Healthcare RCM", detail: "Launched end-to-end medical billing, coding, and healthcare support services." },
  { year: "2023", title: "Operational Scale-Up", detail: "Recognized for technology-enabled efficiency, reliability, and healthcare domain expertise." },
  { year: "Today", title: "Diversified Technology Partner", detail: "Serving global clients with secure IT, cyber defense, and high-accuracy RCM programs." },
]

const partners = [
  { name: "Ashok Naga Sai Pabbathi", role: "Chief Executive Officer" },
  { name: "Naveen Naga Sai Pabbathi", role: "Chief Operating Officer" },
  { name: "Mrs. Bharathi Devi Pabbathi", role: "Designated Partner" },
  { name: "Mr. Srinivas Pabbathi", role: "Designated Partner" },
  { name: "HARITHRA ENGINEERING & CONSTRUCTIONS Pvt. Ltd.", role: "Designated Partner (Rep. by Mr. Sai Anvesh Reddy)" },
]

const teamMembers = [
  {
    name: "Ashok Naga Sai Pabbathi",
    role: "Chief Executive Officer",
    image: "/Ashok.png",
    bio:
      "Certified Ethical Hacker and Cyber Forensic Expert with 10+ years across Cyber Security and Digital Forensics to various government entities in India. Leads Smartclues to evolve into secure, intelligent and smart in global market in cyber security and US Healthcare RCM.",
  },
  {
    name: "Naveen Naga Sai Pabbathi",
    role: "Chief Operating Officer",
    image: "/Naveen.png",
    bio:
      "Chief Operation Officer…. With 10+ years of Experience in Operating & streamlinig Revenue cycle management and HCC department in US  Market and Global Operations.",
  },
  {
    name: "Anvesh Reddy Inaganti",
    role: "Executive Director",
    image: "/Anvesh.jpeg",
    bio:
      "With 15+ Years of Experience in multiple disciplines drives for operational clarity in Smartclues. Entrepreneur blending with disciplined execution in long term strategic growth plans.",
  },
  // {
  //   name: "Balaji Meda",
  //   role: "Operations Head",
  //   image: "/Balaji.png",
  //   bio:
  //     "With an MBA in Finance and a strong operations background, I ensure Smartclues runs with efficiency, discipline, and financial clarity.",
  // },
  // {
  //   name: "Dr Ravuru Parthasarathi Rao",
  //   role: "Vice President – Revenue Management Strategist (Overseas)",
  //   image: "/Rao.png",
  //   bio:
  //     "My expertise lies in U.S. Healthcare RCM and global operational strategy. At Smartclues, I focus on optimizing revenue cycles, improving financial outcomes, and leading high-performing teams across international markets.",
  // },
  // {
  //   name: "Deepak Chopra",
  //   role: "Vice President – Business Development",
  //   image: "/Deepak.png",
  //   bio:
  //     "Having completed my Master’s from Oxford University, I bring a global perspective to business expansion. My goal at Smartclues is to build strong partnerships, enter new markets, and position the company as a trusted leader in technology and RCM services worldwide.",
  // },
  // {
  //   name: "V V S Kishore",
  //   role: "Financial Controller ",
  //   image: "/Kishore.png",
  //   bio:
  //     "Chartered Accountant with 8 years of comprehensive experience in financial management, auditing, and compliance. Joined Smartclues in 2024 to strengthen our financial operations, ensure regulatory compliance, and drive strategic financial planning across our healthcare and technology services divisions.",
  // },

]

const communityImages = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
]

export default function AboutPage() {
  const [activeMember, setActiveMember] = useState<(typeof teamMembers)[number] | null>(null)
  
  // Filter partners to only include those who are also team members
  const teamMemberPartners = partners.filter(partner => 
    teamMembers.some(member => member.name === partner.name)
  )

  return (
    <div className="min-h-screen" style={{ backgroundColor: THEME.backgroundLight }}>
      <HeroHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="grid gap-10 rounded-3xl border px-6 py-10 shadow-xl sm:px-10 lg:grid-cols-[1.1fr_0.9fr]" style={{ backgroundColor: THEME.backgroundSection, borderColor: toRgba(THEME.secondary, 0.15) }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <span className="inline-flex items-center rounded-3xl px-4 py-1 text-sm font-semibold" style={{ backgroundColor: toRgba(THEME.primary, 0.18), color: THEME.secondary }}>
              About Us
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: THEME.textPrimary }}>
              Building secure, intelligent, impact-driven solutions since 2020
            </h1>
            <p className="text-base sm:text-lg" style={{ color: THEME.textSecondary }}>
              Smartclues Technologies LLP started as a Cyber Security and IT Services startup and has grown into a global partner for secure IT, digital forensics, and U.S. Healthcare Revenue Cycle Management.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className="rounded-3xl border-0"
                style={{ backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`, color: THEME.textPrimary }}
                asChild
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-3xl border-2"
                style={{ borderColor: THEME.secondary, color: THEME.secondary, backgroundColor: toRgba(THEME.primary, 0.05) }}
                asChild
              >
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative h-72 overflow-hidden rounded-3xl md:h-full">
            <Image src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80" alt="Smartclues team" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${toRgba(THEME.overlayDark, 0.15)}, ${toRgba(THEME.overlayDark, 0.75)})` }} />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 text-sm shadow-lg">
              <p className="font-semibold" style={{ color: THEME.textPrimary }}>Global technology partner</p>
              <p className="text-xs" style={{ color: THEME.textSecondary }}>Secure IT • Cyber Defense • Healthcare RCM</p>
            </div>
          </motion.div>
        </section>

        {/* Story */}
        <section
          className="rounded-3xl border px-6 py-12 shadow-sm sm:px-12"
          style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: "white" }}
        >
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-8 text-base leading-relaxed" style={{ color: THEME.textSecondary }}>
            <h2 className="text-3xl font-bold" style={{ color: THEME.textPrimary }}>Our Story</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border p-6" style={{ borderColor: toRgba(THEME.secondary, 0.1) }}>
                <p>
                  Smartclues Technologies LLP is a multi-disciplinary technology company founded in 2020 with a vision to deliver secure, innovative, and impact-driven digital solutions. What began as a Cyber Security and IT Services startup has now evolved into a diversified global technology partner serving clients across industries and geographies.
                </p>
              </div>
              <div className="rounded-3xl border p-6" style={{ borderColor: toRgba(THEME.secondary, 0.1) }}>
                <p>
                 Smartclues initially focused on Cyber Security, Digital Forensics, and core IT development. Guided by a commitment to solving modern digital challenges, we rapidly expanded both service lines and operational scale.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border p-6" style={{ borderColor: toRgba(THEME.secondary, 0.1) }}>
              <p>
                In 2022, we entered the U.S. Healthcare Revenue Cycle Management sector, delivering end-to-end medical billing, coding, and healthcare support services. Today, Smartclues is recognized for reliability, domain expertise, and technology-enabled operational excellence in RCM.
              </p>
            </div>
          </motion.div>
        </section>

        <section
          className="rounded-3xl border px-6 py-12 shadow-sm sm:px-12"
          style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: THEME.backgroundSection }}
        >
          <div className="flex flex-col gap-10">
            <div className="text-center">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: THEME.secondary }}
              >
                Meet Our Team
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl" style={{ color: THEME.textPrimary }}>
                People behind the craft
              </h2>
              <p className="mt-3 text-base" style={{ color: THEME.textSecondary }}>
                The leaders blending cybersecurity, healthcare, and engineering expertise to power Smartclues.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={320}
                    height={420}
                    className="h-[360px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 space-y-3 p-4"
                    style={{
                      background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark, 0)} 0%, ${toRgba(
                        THEME.overlayDark,
                        0.85
                      )} 100%)`,
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
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="rounded-3xl border px-6 py-12 shadow-sm sm:px-12" style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: THEME.backgroundSection }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: THEME.textPrimary }}>Leadership & Designated Partners</h2>
              <p className="mt-3 text-base" style={{ color: THEME.textSecondary }}>
                Smartclues is guided by its strategic partners, blending cyber expertise, operational rigor, and infrastructure experience.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {teamMemberPartners.map((partner) => (
                <div key={partner.name} className="rounded-3xl border px-5 py-4" style={{ borderColor: toRgba(THEME.secondary, 0.1), backgroundColor: "white" }}>
                  <p className="text-lg font-semibold" style={{ color: THEME.textPrimary }}>{partner.name}</p>
                  <p className="text-sm" style={{ color: THEME.textSecondary }}>{partner.role}</p>
                </div>
              ))}
            </div>
            {/* <div className="rounded-3xl border px-6 py-6 md:px-8" style={{ borderColor: toRgba(THEME.secondary, 0.1), backgroundColor: "white" }}>
              <h3 className="text-2xl font-semibold" style={{ color: THEME.textPrimary }}>Executive Director Spotlight</h3>
              <p className="mt-3 text-base" style={{ color: THEME.textSecondary }}>
                We’re honored to welcome Mr. Sai Anvesh Reddy Inaganti, as Executive Director. He brings strong leadership, operational depth, and a strategic growth vision to Smartclues.
              </p>
            </div> */}
          </motion.div>
        </section>

        {/* Timeline */}
        <section
          className="rounded-3xl border px-6 py-12 shadow-sm sm:px-12"
          style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: "white" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold" style={{ color: THEME.textPrimary }}>
                Journey & Milestones
              </h2>
              <p className="mt-3 text-base" style={{ color: THEME.textSecondary }}>
                How Smartclues evolved from a cyber-focused startup into a diversified technology and RCM partner.
              </p>
            </div>
            <div
              className="mx-auto flex max-w-4xl flex-col gap-5 rounded-[28px] border p-5 sm:p-8"
              style={{ borderColor: toRgba(THEME.secondary, 0.08), backgroundColor: THEME.backgroundSection }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-5 rounded-2xl border bg-white p-4 shadow-sm"
                  style={{ borderColor: toRgba(THEME.secondary, 0.08) }}
                >
                  <div className="flex flex-col items-center">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ backgroundColor: toRgba(THEME.primary, 0.18), color: THEME.secondary }}
                    >
                      {item.year}
                    </span>
                    {index !== timeline.length - 1 && (
                      <span
                        className="mt-3 hidden h-full w-px sm:block"
                        style={{ backgroundColor: toRgba(THEME.secondary, 0.2) }}
                      />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold" style={{ color: THEME.textPrimary }}>
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: THEME.textSecondary }}>
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

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
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border bg-white shadow-2xl"
              style={{ borderColor: toRgba(THEME.secondary, 0.2) }}
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
                      background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark, 0.1)} 0%, ${toRgba(
                        THEME.overlayDark,
                        0.65
                      )} 100%)`,
                    }}
                  />
                </div>
                <div className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-1">
                  <div>
                    <h4 className="text-3xl font-bold" style={{ color: THEME.textPrimary }}>
                      {activeMember.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: THEME.secondary }}>
                      {activeMember.role}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: THEME.textSecondary }}>
                    {activeMember.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  )
}
