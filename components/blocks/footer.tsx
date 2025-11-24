"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { IconBrandInstagram, IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
} as const

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const toRgba = (color: string, alpha: number) => {
  if (color.startsWith("rgb")) {
    const [r = "0", g = "0", b = "0"] = color.match(/\d+/g) ?? []
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  let hex = color.replace("#", "")
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("")
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
]

const serviceLinks = [
  { label: "IT Services", href: "/services" },
  { label: "Web Development", href: "/services" },
  { label: "Healthcare Solutions", href: "/services" },
  { label: "Security Solutions", href: "/services" },
]

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Guides & Tutorials", href: "/guides-and-tutorials" },
  { label: "FAQ", href: "/faq" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
]

const socialLinks = [
  { label: "Instagram", href: "#", icon: IconBrandInstagram },
  { label: "Twitter", href: "#", icon: IconBrandTwitter },
  { label: "LinkedIn", href: "#", icon: IconBrandLinkedin },
  { label: "GitHub", href: "#", icon: IconBrandGithub },
]

export function FooterSection() {
  return (
    <footer
      className="w-full border-t py-10 max-w-7xl mx-auto"
      >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container grid gap-3 px-4 py-10 md:px-6 lg:grid-cols-4 border-x rounded-3xl"
        style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: THEME.backgroundSection }}
      >
        <div className="space-y-3">
          <Link href="/" className="flex items-center space-x-3" style={{ color: THEME.textPrimary }}>
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative w-54 h-12  rounded-3xl bg-white/80 px-10 overflow-hidden  shadow-lg"
            >
              <Image
                src="/imagelogo.png"
                alt="Smartclues Logo"
                fill
                className="object-contain py-1"
                priority
              />
            </motion.div>
            <span className="sr-only">Smartclues</span>
          </Link>
          <p className="text-sm" style={{ color: THEME.textSecondary }}>
            Innovative IT services and Revenue Cycle Management solutions
              powered by AI and automation, enhancing business efficiency and
              security since 2020.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <motion.div key={label} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href={href}
                  className="transition-colors hover:opacity-70"
                  style={{
                    color: THEME.textSecondary,
                  }}
                >
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="text-lg font-medium" style={{ color: THEME.textPrimary }}>
              Company
            </h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              {companyLinks.map(({ label, href }) => (
                <Link key={label} href={href} className="text-muted-foreground hover:text-foreground">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium" style={{ color: THEME.textPrimary }}>
              Services
            </h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              {serviceLinks.map(({ label, href }) => (
                <Link key={label} href={href} className="text-muted-foreground hover:text-foreground">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="text-lg font-medium" style={{ color: THEME.textPrimary }}>
              Resources
            </h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              {resourceLinks.map(({ label, href }) => (
                <Link key={label} href={href} className="text-muted-foreground hover:text-foreground">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium" style={{ color: THEME.textPrimary }}>
              Legal
            </h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              {legalLinks.map(({ label, href }) => (
                <Link key={label} href={href} className="text-muted-foreground hover:text-foreground">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium" style={{ color: THEME.textPrimary }}>
            Subscribe to our newsletter
          </h3>
          <p className="text-sm" style={{ color: THEME.textSecondary }}>
            Stay updated with our latest projects, design tips, and company news.
          </p>
          <form className="flex space-x-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1 rounded-3xl"
              style={{
                backgroundColor: THEME.backgroundLight,
                borderColor: toRgba(THEME.secondary, 0.2),
                color: THEME.textPrimary,
              }}
            />
            <Button
              type="submit"
              className="rounded-3xl border-0"
              style={{
                backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`,
                color: THEME.textPrimary,
              }}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </motion.div>
      <div className="border-t" style={{ borderColor: toRgba(THEME.secondary, 0.12) }}>
        <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs" style={{ color: THEME.textSecondary }}>
            &copy; {new Date().getFullYear()} Smartclues Technologies LLP. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: THEME.textSecondary }}>
            Developed by Smartclues Technologies LLP
          </p>
        </div>
      </div>
    </footer>
  )
}
