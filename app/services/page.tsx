"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code,
  Database,
  Shield,
  Server,
  Brain,
  Clock,
  ChartBar,
  Smartphone,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroHeader } from "@/components/hero-header"
import { FooterSection } from "@/components/blocks/footer"
import Link from "next/link"

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

const serviceCategories = [
  { id: "it-services", name: "IT Services", description: "Our comprehensive IT services span from software development to systems integration." },
  { id: "healthcare-solutions", name: "Healthcare Solutions", description: "Specialized technology solutions designed for healthcare providers and facilities." },
  { id: "security", name: "Security Solutions", description: "Advanced cybersecurity and physical security solutions for modern enterprises." },
]

const services = [
  { id: 1, category: "it-services", title: "Custom Software Development", description: "Tailor-made software solutions designed to address your specific business challenges and requirements.", icon: Code, features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"] },
  { id: 2, category: "it-services", title: "Cloud Solutions", description: "Comprehensive cloud services to help you migrate, optimize, and manage your applications in the cloud.", icon: Server, features: ["Cloud Migration", "AWS/Azure Solutions", "Cloud Architecture", "Serverless Applications"] },
  { id: 3, category: "it-services", title: "AI & Machine Learning", description: "Harness the power of artificial intelligence to automate processes.", icon: Brain, features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "AI Integration"] },
  { id: 4, category: "healthcare-solutions", title: "Medical Coding", description: "Accurate and efficient medical coding services with 99.9% accuracy.", icon: Database, features: ["ICD-10 Coding", "CPT Coding", "HCPCS Coding", "Medical Billing Support"] },
  { id: 5, category: "healthcare-solutions", title: "Healthcare Analytics", description: "Data-driven insights to improve patient outcomes, operational efficiency, and financial performance.", icon: ChartBar, features: ["Clinical Analytics", "Financial Analytics", "Operational Analytics", "Population Health"] },
  { id: 6, category: "healthcare-solutions", title: "Telehealth Solutions", description: "Enable virtual healthcare delivery with our secure, user-friendly telehealth platforms.", icon: Smartphone, features: ["Virtual Consultations", "Remote Monitoring", "Patient Portals", "Medical IoT"] },
  { id: 7, category: "security", title: "Cyber Security", description: "Comprehensive security solutions to protect your digital assets from evolving cyber threats.", icon: Shield, features: ["Threat Detection", "Vulnerability Assessment", "Penetration Testing", "Security Training"] },
  { id: 8, category: "security", title: "Compliance Solutions", description: "Ensure your organization meets industry regulations and compliance requirements.", icon: Clock, features: ["HIPAA Compliance", "GDPR Compliance", "ISO 27001", "PCI DSS"] },
  { id: 9, category: "security", title: "Global Security Operations", description: "24/7 monitoring and security management services to keep your business protected at all times.", icon: Globe, features: ["Security Monitoring", "Incident Response", "Threat Intelligence", "Security Audits"] },
]

const heroStats = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Healthcare Records Secured", value: "12M+" },
  { label: "RCM Accuracy", value: "99.9%" },
]

type ServiceCardProps = {
  service: (typeof services)[number]
}

const TabButton = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-3xl px-5 py-2 text-sm font-semibold transition-all"
    style={{
      color: active ? THEME.textPrimary : THEME.textSecondary,
      backgroundImage: active ? `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})` : undefined,
      backgroundColor: active ? undefined : toRgba(THEME.primary, 0.08),
      boxShadow: active ? "0 10px 30px rgba(0,0,0,0.08)" : undefined,
    }}
  >
    {label}
  </button>
)

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon
  const categoryLabel = serviceCategories.find((category) => category.id === service.category)?.name ?? "Service"

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative h-full focus-within:outline-none"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(0,223,255,0.35)] via-[rgba(0,86,209,0.2)] to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
      />
      <div
        className="relative flex h-full flex-col justify-between rounded-[26px] border bg-white/95 p-6 shadow-lg ring-1 ring-black/5 transition duration-300 group-hover:-translate-y-1 group-focus-within:-translate-y-1"
        style={{ borderColor: toRgba(THEME.secondary, 0.18) }}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-2xl p-3" style={{ backgroundColor: toRgba(THEME.primary, 0.16) }}>
            <Icon className="h-6 w-6" style={{ color: THEME.secondary }} />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: THEME.textSecondary }}>
            {categoryLabel}
          </span>
        </div>
        <div className="mt-5 space-y-3">
          <h3 className="text-xl font-semibold" style={{ color: THEME.textPrimary }}>
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: THEME.textSecondary }}>
            {service.description}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: toRgba(THEME.primary, 0.12), color: THEME.textPrimary }}
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold" style={{ color: THEME.secondary }}>
            Explore capabilities
          </span>
          <Button
            variant="ghost"
            className="rounded-full px-4 text-sm font-semibold"
            style={{ color: THEME.secondary }}
            asChild
          >
            <Link href="/contact" className="inline-flex items-center gap-1">
              Let&apos;s talk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id)
  const filteredServices = useMemo(() => services.filter((svc) => svc.category === activeCategory), [activeCategory])

  return (
    <div className="min-h-screen" style={{ backgroundColor: THEME.backgroundLight }}>
      <HeroHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <section id="services" className="rounded-3xl border px-6 py-12 shadow-xl sm:px-12" style={{ backgroundColor: THEME.backgroundSection, borderColor: toRgba(THEME.secondary, 0.18) }}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              <span className="inline-flex items-center rounded-3xl px-4 py-1 text-sm font-semibold" style={{ backgroundColor: toRgba(THEME.primary, 0.18), color: THEME.secondary }}>
                Our Expertise
              </span>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: THEME.textPrimary }}>
                Secure, Scalable Solutions for <span className="block text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`, WebkitBackgroundClip: "text" }}>Modern Enterprises</span>
              </h1>
              <p className="text-base sm:text-lg" style={{ color: THEME.textSecondary }}>
                We combine deep domain experience with product-grade engineering to deliver IT, healthcare, and security services that feel crafted for your business.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="rounded-3xl border-0"
                  style={{ backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`, color: THEME.textPrimary }}
                  asChild
                >
                  <Link href="/contact">
                    Book a Consult
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-3xl border-2"
                  style={{ borderColor: THEME.secondary, color: THEME.secondary, backgroundColor: toRgba(THEME.primary, 0.05) }}
                  asChild
                >
                  <Link href="#work">See Case Studies</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative overflow-hidden rounded-3xl p-8 text-white" style={{ backgroundImage: `linear-gradient(150deg, ${THEME.gradientEnd}, ${THEME.gradientStart})` }}>
              <div className="grid gap-6 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-sm text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-white/10 p-4 text-sm backdrop-blur-sm">
                Trusted by enterprises and healthcare leaders for resilient infrastructure, airtight compliance, and measurable ROI.
              </div>
            </motion.div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-wrap gap-3 rounded-3xl border bg-white/80 p-4 shadow-sm justify-center" role="tablist" style={{ borderColor: toRgba(THEME.secondary, 0.12) }}>
            {serviceCategories.map((category) => (
              <TabButton key={category.id} label={category.name} active={activeCategory === category.id} onClick={() => setActiveCategory(category.id)} />
            ))}
          </div>
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center">
            <h2 className="text-2xl font-bold" style={{ color: THEME.textPrimary }}>
              {serviceCategories.find((cat) => cat.id === activeCategory)?.name}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base" style={{ color: THEME.textSecondary }}>
              {serviceCategories.find((cat) => cat.id === activeCategory)?.description}
            </p>
          </motion.div>
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </section>

        <section className="rounded-3xl border px-6 py-12 shadow-xl sm:px-12" style={{ borderColor: toRgba(THEME.secondary, 0.15), backgroundColor: THEME.backgroundSection }}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-4">
              <h3 className="text-3xl font-bold" style={{ color: THEME.textPrimary }}>
                Need a tailored engagement?
              </h3>
              <p className="text-base" style={{ color: THEME.textSecondary }}>
                Our consultants co-create with your teams to design secure architectures, optimize revenue operations, and deliver digital products that scale confidently.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="rounded-3xl border-0"
                  style={{ backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`, color: THEME.textPrimary }}
                  asChild
                >
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-3xl border-2"
                  style={{ borderColor: THEME.secondary, color: THEME.secondary }}
                  asChild
                >
                  <Link href="mailto:hello@smartclues.com">Email Our Team</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl p-6 text-white" style={{ backgroundImage: `linear-gradient(160deg, ${THEME.gradientEnd}, ${THEME.gradientStart})` }}>
              <p className="text-lg font-semibold">
                “Smartclues helped us modernize our infrastructure and tighten our revenue operations. Their mix of security-first engineering and healthcare expertise is unmatched.”
              </p>
              <p className="mt-4 text-sm text-white/80">Director of Operations · Fortune 500 Healthcare Client</p>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
