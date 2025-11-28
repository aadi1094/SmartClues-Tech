"use client"

import { Suspense, useMemo, useState } from "react"
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
import { useSearchParams } from "next/navigation"

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
  { id: "rcm-services", name: "End-to-End RCM Services", description: "Our comprehensive RCM solutions streamline financial operations from patient access to final reimbursement—enhancing efficiency, reducing denials, and improving cash flow." },
  { id: "security", name: "Cyber Security and Digital Forensics", description: "Advanced cybersecurity, digital forensics, and cyber crime investigation solutions for modern enterprises." },
]

const services = [
  { id: 1, category: "it-services", title: "Custom Software Development", description: "Tailor-made software solutions designed to address your specific business challenges and requirements.", icon: Code, features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"] },
  { id: 2, category: "it-services", title: "Cloud Solutions", description: "Comprehensive cloud services to help you migrate, optimize, and manage your applications in the cloud.", icon: Server, features: ["Cloud Migration", "AWS/Azure Solutions", "Cloud Architecture", "Serverless Applications"] },
  { id: 3, category: "it-services", title: "AI & Machine Learning", description: "Harness the power of artificial intelligence to automate processes.", icon: Brain, features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "AI Integration"] },
  {
    id: 4,
    category: "rcm-services",
    title: "Patient Access & Front-End Services",
    description:
      "Front-office specialists streamline scheduling, registration, eligibility checks, prior auths, counseling, and compliance for frictionless intake.",
    icon: Smartphone,
    features: [
      "Scheduling",
      "Registration",
      "Eligibility Verification",
      "Pre-Authorization",
      "Financial Counseling",
      "Compliance Checks",
    ],
  },
  {
    id: 5,
    category: "rcm-services",
    title: "Medical Coding Services",
    description:
      "Certified coders manage ICD-10, CPT, HCPCS, HCC, specialty reviews, documentation audits, and CMS alignment to safeguard revenue integrity.",
    icon: Database,
    features: [
      "ICD-10",
      "CPT",
      "HCPCS",
      "HCC Coding",
      "Documentation Review",
      "Audits",
      "CMS Guidelines",
    ],
  },
  {
    id: 6,
    category: "rcm-services",
    title: "Charge Capture & Documentation",
    description:
      "Charge capture pods reconcile entries, validate documentation, and plug leakage before claims leave your system.",
    icon: Server,
    features: [
      "Charge Entry",
      "Reconciliation",
      "Documentation Validation",
      "Revenue Leakage Prevention",
    ],
  },
  {
    id: 7,
    category: "rcm-services",
    title: "Claims Management",
    description:
      "We craft clean claims, monitor every submission, correct rejections, and run payer-specific scrubs for faster adjudication.",
    icon: Shield,
    features: [
      "Clean Claim Creation",
      "Submission",
      "Tracking",
      "Corrections",
      "Payer Scrubbing",
    ],
  },
  {
    id: 8,
    category: "rcm-services",
    title: "Payment Posting",
    description:
      "Revenue ops teams post ERA/EOB data, reconcile balances, flag underpayments, and clarify patient responsibility in real time.",
    icon: ChartBar,
    features: [
      "ERA/EOB Posting",
      "Reconciliation",
      "Underpayment Detection",
      "Patient Responsibility",
    ],
  },
  {
    id: 9,
    category: "rcm-services",
    title: "Denial Management",
    description:
      "Denial squads pinpoint root causes, build airtight appeals, engage payers, and harden prevention playbooks.",
    icon: Brain,
    features: [
      "Root Cause Analysis",
      "Appeals",
      "Payer Follow-Up",
      "Denial Prevention",
    ],
  },
  {
    id: 10,
    category: "rcm-services",
    title: "Accounts Receivable (A/R) Follow-Up",
    description:
      "A/R analysts chase insurer responses, work aging buckets, escalate blockers, and coordinate patient statements to accelerate cash.",
    icon: Clock,
    features: [
      "Insurance Follow-Up",
      "Aged A/R Management",
      "Escalation",
      "Patient Statements",
    ],
  },
  {
    id: 11,
    category: "rcm-services",
    title: "Compliance & Quality Assurance",
    description:
      "Governance leads enforce HIPAA, SOC 2, payer rules, privacy standards, and QA checks across every workflow.",
    icon: Globe,
    features: ["HIPAA", "SOC 2", "Payer Guidelines", "Data Privacy", "QA Checks"],
  },
  {
    id: 12,
    category: "rcm-services",
    title: "Reporting & Analytics",
    description:
      "Ops intelligence delivers dashboards, KPI tracking, denial insights, A/R aging views, and custom executive reporting.",
    icon: Code,
    features: ["Dashboards", "KPIs", "Denial Trends", "A/R Aging", "Custom Reports"],
  },
  {
    id: 13,
    category: "security",
    title: "Cyber Security (VAPT)",
    description:
      "Comprehensive Vulnerability Assessment and Penetration Testing services to identify and mitigate security risks.",
    icon: Shield,
    features: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Audits",
      "Risk Analysis",
    ],
  },
  {
    id: 14,
    category: "security",
    title: "Cyber Crime Investigations & Trainings",
    description:
      "Expert cyber crime investigation services and comprehensive security training programs.",
    icon: Clock,
    features: [
      "Digital Evidence Collection",
      "Incident Investigation",
      "Security Training",
      "Forensic Analysis",
    ],
  },
  {
    id: 15,
    category: "security",
    title: "Digital Forensic Services",
    description:
      "Professional digital forensics services for legal proceedings and incident response.",
    icon: Globe,
    features: [
      "Mobile Forensics",
      "Computer Forensics",
      "Network Forensics",
      "Expert Witness Services",
    ],
  },
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
          {/* <span className="text-sm font-semibold" style={{ color: THEME.secondary }}>
            Explore capabilities
          </span> */}
          <Button
            variant="ghost"
            className="rounded-full px-4 text-sm font-semibold"
            style={{ color: THEME.secondary }}
            asChild
          >
            {/* <Link href="/contact" className="inline-flex items-center gap-1">
              Let&apos;s talk
              <ArrowRight className="h-4 w-4" />
            </Link> */}
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

function ServicesContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") ?? serviceCategories[0].id
  const [activeCategory, setActiveCategory] = useState(initialCategory)
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

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen" style={{ backgroundColor: THEME.backgroundLight }} />
      }
    >
      <ServicesContent />
    </Suspense>
  )
}
