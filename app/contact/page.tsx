"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HeroHeader } from "@/components/hero-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Linkedin, Facebook, ArrowRight } from "lucide-react"
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
} as const

const toRgba = (color: string, alpha: number) => {
  const rgb = color.match(/(\d+),\s*(\d+),\s*(\d+)/)
  if (!rgb) return color
  return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, ${alpha})`
}

const contactItems = [
  { icon: MapPin, title: "Our Location", value: "Smartclues Technologies LLP, Hyderabad, India" },
  { icon: Phone, title: "Phone Number", value: "+91 8977752573" },
  { icon: Mail, title: "Email Address", value: "info@smartcluestech.com" },
  { icon: Clock, title: "Working Hours", value: "Monday - Friday · 9:00 AM - 6:00 PM" },
]

const socials = [
  { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
  { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
  { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: THEME.backgroundLight }}>
      <HeroHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <section className="rounded-3xl border px-6 py-12 shadow-xl sm:px-12" style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: THEME.backgroundSection }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-3xl px-4 py-1 text-sm font-semibold" style={{ backgroundColor: toRgba(THEME.primary, 0.2), color: THEME.secondary }}>
                Contact Smartclues
              </span>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: THEME.textPrimary }}>
                Let&apos;s build secure, intelligent solutions together
              </h1>
              <p className="text-base sm:text-lg" style={{ color: THEME.textSecondary }}>
                Reach out for project inquiries, partnerships, or support. Our Hyderabad leadership team responds within one business day.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="rounded-3xl border-0"
                  style={{ backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`, color: THEME.textPrimary }}
                  asChild
                >
                  <Link href="mailto:info@smartcluestech.com">
                    Email Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-3xl border-2"
                  style={{ borderColor: THEME.secondary, color: THEME.secondary, backgroundColor: toRgba(THEME.primary, 0.05) }}
                  asChild
                >
                  <Link href="tel:+918977752573">Call Us Directly</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border bg-white/90 p-6 shadow-lg" style={{ borderColor: toRgba(THEME.secondary, 0.1) }}>
              <h3 className="text-xl font-semibold" style={{ color: THEME.textPrimary }}>
                Quick Details
              </h3>
              <p className="mt-2 text-sm" style={{ color: THEME.textSecondary }}>
                Prefer meeting in person or via video call? Share a note and we’ll arrange it.
              </p>
              <div className="mt-6 grid gap-4">
                {contactItems.map((item) => (
                  <div key={item.title} className="flex gap-3 rounded-2xl border p-3" style={{ borderColor: toRgba(THEME.secondary, 0.08) }}>
                    <div className="rounded-2xl p-2" style={{ backgroundColor: toRgba(THEME.primary, 0.18) }}>
                      <item.icon className="h-5 w-5" style={{ color: THEME.secondary }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: THEME.textSecondary }}>
                        {item.title}
                      </p>
                      <p className="text-sm font-medium" style={{ color: THEME.textPrimary }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="rounded-3xl border px-6 py-12 shadow-sm sm:px-12" style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: "white" }}>
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold" style={{ color: THEME.textPrimary }}>
                  Visit, call, or follow us
                </h2>
                <p className="mt-3 text-base" style={{ color: THEME.textSecondary }}>
                  Our Hyderabad HQ powers global operations. Connect on social to see our latest RCM and security updates.
                </p>
              </div>
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <motion.div key={item.title} whileHover={{ x: 4 }} className="flex gap-4 rounded-2xl border p-4" style={{ borderColor: toRgba(THEME.secondary, 0.08), backgroundColor: THEME.backgroundSection }}>
                    <item.icon className="h-5 w-5 flex-shrink-0" style={{ color: THEME.secondary }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: THEME.textPrimary }}>
                        {item.title}
                      </p>
                      <p className="text-sm" style={{ color: THEME.textSecondary }}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.div key={social.label} whileHover={{ y: -4, scale: 1.05 }}>
                    <button
                      type="button"
                      className="rounded-3xl border p-2"
                      style={{ borderColor: toRgba(THEME.secondary, 0.15), backgroundColor: THEME.backgroundLight, color: THEME.textSecondary }}
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl border p-6 shadow-sm" style={{ borderColor: toRgba(THEME.secondary, 0.15), backgroundColor: THEME.backgroundSection }}>
              <h3 className="text-xl font-bold" style={{ color: THEME.textPrimary }}>
                Send us a message
              </h3>
              <p className="text-sm" style={{ color: THEME.textSecondary }}>
                Tell us about the project, timeline, or any questions you have.
              </p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium" style={{ color: THEME.textPrimary }}>
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" className="rounded-3xl" style={{ backgroundColor: THEME.backgroundLight, borderColor: toRgba(THEME.secondary, 0.2) }} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium" style={{ color: THEME.textPrimary }}>
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" className="rounded-3xl" style={{ backgroundColor: THEME.backgroundLight, borderColor: toRgba(THEME.secondary, 0.2) }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium" style={{ color: THEME.textPrimary }}>
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="you@company.com" className="rounded-3xl" style={{ backgroundColor: THEME.backgroundLight, borderColor: toRgba(THEME.secondary, 0.2) }} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium" style={{ color: THEME.textPrimary }}>
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project or question" className="min-h-[140px] rounded-3xl" style={{ backgroundColor: THEME.backgroundLight, borderColor: toRgba(THEME.secondary, 0.2) }} />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full rounded-3xl border-0"
                    style={{ backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`, color: THEME.textPrimary }}
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
