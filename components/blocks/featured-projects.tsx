"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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

const galleryData = [
  {
    id: "medical-coding",
    title: "Medical Coding",
    description:
      "Comprehensive medical coding solution with 99.9% accuracy and 100% production efficiency. This project streamlined the entire coding process for a major healthcare provider.",
    href: "/case-studies/medical-coding",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHx8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics Solutions",
    description:
      "Advanced digital forensics solution for secure data recovery and analysis. This project helped clients recover critical data while maintaining chain of custody.",
    href: "/case-studies/digital-forensics",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHx8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description:
      "End-to-end cybersecurity infrastructure deployment with automated compliance monitoring and incident response capabilities.",
    href: "/case-studies/cyber-security",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHx8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "hospital-management",
    title: "Hospital Management Tool",
    description:
      "Comprehensive hospital management system with integrated patient records, appointment scheduling, and real-time analytics. Streamlined operations for improved patient care and administrative efficiency.",
    href: "/case-studies/hospital-management",
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "ai-operations",
    title: "AI Ops Dashboard",
    description:
      "Unified AI-driven operations dashboard offering predictive maintenance insights and anomaly detection across distributed systems.",
    href: "/case-studies/ai-ops",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function FeaturedProjectsSection() {
  const [primary, ...secondary] = galleryData;
  return (
    <section
      id="work"
      className="w-full  max-w-7xl mx-auto"
    >
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
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              style={{ color: THEME.textPrimary }}
            >
              Our Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              style={{ color: THEME.textSecondary }}
            >
              A showcase of our recent projects and collaborations
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl gap-3 py-12 md:grid-cols-3"
        >
          {/* Primary feature */}
          <motion.a
            href={primary.href}
            variants={itemFadeIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl md:col-span-2 h-[360px]"
          >
            <Image
              src={primary.image}
              alt={primary.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Always visible shade */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark, 0)} 0%, ${toRgba(THEME.overlayDark, 0.85)} 100%)`,
              }}
            />
            {/* Faint gradient overlay on hover */}
            <div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 h-full w-full pointer-events-none"
              style={{
                background: `linear-gradient(to top, ${toRgba(THEME.overlayDark, 0.3)}, transparent)`,
              }}
            />
            {/* Additional shade on hover */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark, 0)} 0%, ${toRgba(THEME.overlayDark, 0.25)} 100%)`,
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold">{primary.title}</h3>
              <p className="text-sm">{primary.description}</p>
              {/* {primary.stats && (
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {primary.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl px-3 py-1 backdrop-blur-sm"
                      style={{ backgroundColor: toRgba(THEME.primary, 0.2) }}
                    >
                      <span className="font-semibold">{stat.value}</span>
                      <span className="ml-1 opacity-80">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )} */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-3xl border transition-all"
                  style={{
                    borderColor: toRgba(THEME.primary, 0.8),
                    color: THEME.textPrimary,
                    backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`,
                  }}
                  asChild
                >
                  <Link href="/projects">
                    View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.a>

          {/* Secondary features */}
          {secondary.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              variants={itemFadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl h-[240px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Always visible shade */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark, 0)} 0%, ${toRgba(THEME.overlayDark, 0.8)} 100%)`,
                }}
              />
              {/* Faint gradient overlay on hover */}
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 h-full w-full pointer-events-none"
                style={{
                  background: `linear-gradient(to bottom, ${toRgba(THEME.overlayDark, 0.28)}, transparent)`,
                }}
              />
              {/* Additional shade on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark, 0)} 0%, ${toRgba(THEME.overlayDark, 0.22)} 100%)`,
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
                {/* {item.stats && (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {item.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl px-2 py-0.5 backdrop-blur-sm"
                        style={{ backgroundColor: toRgba(THEME.primaryHover, 0.22) }}
                      >
                        <span className="font-semibold">{stat.value}</span>
                        <span className="ml-1 opacity-80">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )} */}
              </div>
            </motion.a>
          ))}
        </motion.div>
        <div className="flex justify-center pb-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="rounded-3xl group border-0 transition-transform"
              style={{
                backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`,
                color: THEME.textPrimary,
              }}
              asChild
            >
              <Link href="/services?category=rcm-services" className="flex items-center">
                View All Projects
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
