"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { THEME } from "@/components/blocks/services";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Users,
  Rocket,
  Heart,
  Medal,
  TrendingUp,
  Clock,
  MapPin,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Mail,
  Stethoscope,
  ClipboardList,
  SquareActivity,
} from "lucide-react";
import { HeroHeader } from "@/components/hero-header";
import { FooterSection } from "@/components/blocks/footer";

const toRgba = (color: string, alpha: number) => {
  const rgb = color.match(/(\d+),\s*(\d+),\s*(\d+)/);
  if (!rgb) return color;
  return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, ${alpha})`;
};

type SimpleCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  icon: LucideIcon;
};

const values: SimpleCard[] = [
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in everything we do, constantly seeking to improve and innovate.",
    icon: Medal,
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and fostering an environment where diverse perspectives thrive.",
    icon: Users,
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical practices in every interaction.",
    icon: Heart,
  },
  {
    title: "Innovation",
    description:
      "We embrace creative thinking and technology to solve complex challenges faster.",
    icon: Rocket,
  },
];

const benefits: SimpleCard[] = [
  {
    title: "Career Growth",
    description:
      "Continuous learning opportunities and clear paths for advancement.",
    icon: TrendingUp,
  },
  {
    title: "Flexible Schedule",
    description: "Work-life balance with remote and flexible working options.",
    icon: Clock,
  },
  {
    title: "Competitive Compensation",
    description: "Salary packages that recognize your skills and experience.",
    icon: DollarSign,
  },
  {
    title: "Collaborative Culture",
    description: "Supportive team environment that values every voice.",
    icon: Users,
  },
];

const heroHighlights = [
  {
    value: "120+",
    label: "Specialists",
    caption: "Medical coders & engineers",
  },
  {
    value: "50+",
    label: "Happy Clients",
    caption: "Healthcare & fintech teams",
  },
  {
    value: "99.9%",
    label: "QA Accuracy",
    caption: "Audit-ready deliverables",
  },
  {
    value: "24/7",
    label: "Support",
    caption: "Global delivery coverage",
  },
];

const jobs: Job[] = [
  {
    id: 1,
    title: "Junior Medical Coder",
    department: "Healthcare",
    location: "Hyderabad, Capital Park 4th floor, Madhapur",
    type: "Full-time",
    salary: "₹3–5 LPA",
    description:
      "Join our growing healthcare team! We're looking for a detail-oriented and motivated Junior Medical Coder to help ensure accurate coding and billing practices.",
    responsibilities: [
      "Learn and apply medical coding standards",
      "Review patient records for accurate code assignment",
      "Support the billing team with coding-related queries",
      "Participate in ongoing training and education",
      "Maintain patient confidentiality and data security",
    ],
    requirements: [
      "Knowledge of ICD-10, CPT, and HCPCS (a plus, not required)",
      "Good attention to detail",
      "Willingness to learn and grow",
      "Basic computer skills",
      "Strong work ethic and reliability",
    ],
    icon: Stethoscope,
  },
  {
    id: 2,
    title: "Senior Medical Coder",
    department: "Healthcare",
    location: "Hyderabad, Capital Park 4th floor, Madhapur",
    type: "Full-time",
    salary: "₹5–8 LPA",
    description:
      "Seeking an experienced Medical Coder (1+ year) to join our dynamic healthcare team!",
    responsibilities: [
      "Assign accurate medical codes using ICD-10, CPT, and HCPCS",
      "Review and validate coding work for accuracy and compliance",
      "Identify and resolve coding discrepancies",
      "Assist in training junior coding staff",
      "Stay current with coding guidelines and regulations",
    ],
    requirements: [
      "Minimum 1 year coding experience",
      "Proficiency in ICD-10, CPT, HCPCS",
      "Accuracy & attention to detail",
      "Knowledge of medical terminology",
      "Familiarity with healthcare compliance regulations",
    ],
    icon: ClipboardList,
  },
  {
    id: 3,
    title: "Group Coach",
    department: "Health Care",
    location: "Hyderabad, Capital Park 4th floor, Madhapur",
    type: "Full-time",
    salary: "₹4–6 LPA",
    description:
      "We're looking for an energetic Group Coach with 1+ year of experience to lead fun, effective sessions and inspire our community!",
    responsibilities: [
      "Lead engaging group fitness sessions",
      "Create and adapt workout programs for various fitness levels",
      "Provide guidance on proper form and technique",
      "Build rapport with clients and foster community",
      "Track client progress and provide motivational support",
    ],
    requirements: [
      "Minimum 1 year group coaching experience",
      "Great communication & leadership skills",
      "Passion for fitness and people",
      "Relevant fitness certifications",
      "Ability to motivate and inspire participants",
    ],
    icon: SquareActivity,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const accentGradient = `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`;

  const handleToggle = (id: number) =>
    setExpandedJob((prev) => (prev === id ? null : id));

  const scrollToRoles = () => {
    document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroHeader />
      <main
        className="min-h-screen pt-32"
        style={{ backgroundColor: THEME.backgroundSection }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] border px-8 py-14 text-left shadow-2xl backdrop-blur-xl"
            style={{
              borderColor: toRgba(THEME.secondary, 0.25),
              backgroundColor: toRgba(THEME.primary, 0.16),
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(0,86,209,0.25), transparent 55%)",
              }}
            />
            <div
              className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-[140px]"
              style={{ backgroundImage: accentGradient, opacity: 0.45 }}
            />
            <div
              className="relative flex flex-col gap-12 lg:flex-row lg:items-center"
              style={{ color: THEME.textPrimary }}
            >
              <div className="space-y-6 lg:w-1/2">
                <p
                  className="text-sm font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "rgba(15, 23, 42, 0.7)" }}
                >
                  Careers
                </p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                  Join our smart & caring team
                </h1>
                <p
                  className="text-base md:text-lg"
                  style={{ color: "rgba(15, 23, 42, 0.78)" }}
                >
                  Be part of a team that&apos;s redefining cybersecurity and healthcare
                  revenue management with automation, empathy, and precision.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    size="lg"
                    className="px-8 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
                    style={{
                      backgroundImage: accentGradient,
                      border: "none",
                    }}
                    onClick={scrollToRoles}
                  >
                    View open roles
                  </Button>
                  <div
                    className="rounded-2xl border px-4 py-3 text-sm backdrop-blur"
                    style={{
                      borderColor: "rgba(15,23,42,0.15)",
                      backgroundColor: "rgba(255,255,255,0.85)",
                      color: THEME.textPrimary,
                    }}
                  >
                    <p className="font-semibold">Hyderabad · Hybrid</p>
                    <p style={{ color: "rgba(15, 23, 42, 0.75)" }}>Impact-first culture</p>
                  </div>
                </div>
              </div>
              <div className="grid w-full gap-4 sm:grid-cols-2 lg:w-1/2">
                {heroHighlights.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border p-5 backdrop-blur"
                    style={{
                      borderColor: "rgba(15,23,42,0.15)",
                      backgroundColor: "rgba(255,255,255,0.92)",
                      color: THEME.textPrimary,
                    }}
                  >
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm font-semibold">{stat.label}</p>
                    <p
                      className="mt-1 text-xs uppercase tracking-wide"
                      style={{ color: "rgba(15, 23, 42, 0.65)" }}
                    >
                      {stat.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] border bg-white/85 px-6 py-10 shadow-sm backdrop-blur"
            style={{ borderColor: "rgba(15,23,42,0.08)" }}
          >
            <div className="mb-10 text-center">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: THEME.secondary }}
              >
                Our Values
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Principles that guide us
              </h2>
              <p className="mt-3 text-base text-slate-600">
                The principles that drive us to excellence and innovation.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {values.map((value) => (
                <motion.div key={value.title} variants={itemVariants}>
                  <Card className="h-full border-none bg-white px-5 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <value.icon
                      className="h-8 w-8"
                      style={{ color: THEME.secondary }}
                    />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] border bg-white/80 px-6 py-10 shadow-sm backdrop-blur"
            style={{ borderColor: "rgba(15,23,42,0.08)" }}
          >
            <div className="mb-10 text-center">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: THEME.secondary }}
              >
                Benefits
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Why work with us
              </h2>
              <p className="mt-3 text-base text-slate-600">
                We offer more than just a job — we provide a career with purpose
                and growth.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-4 md:grid-cols-2"
            >
              {benefits.map((benefit) => (
                <motion.div key={benefit.title} variants={itemVariants}>
                  <Card className="flex h-full items-start gap-4 border border-slate-200/80 bg-white px-5 py-5 shadow-sm">
                    <div className="rounded-2xl bg-slate-100 p-3">
                      <benefit.icon
                        className="h-6 w-6"
                        style={{ color: THEME.secondary }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            id="open-roles"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] border bg-white px-6 py-10 shadow-xl"
            style={{ borderColor: "rgba(15,23,42,0.08)" }}
          >
            <div className="mb-10 text-center">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: THEME.secondary }}
              >
                Open Positions
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Find your next opportunity
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Browse roles that match your skills and career goals.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {jobs.map((job) => {
                const Icon = job.icon;
                return (
                  <motion.div key={job.id} variants={itemVariants}>
                    <Card className="overflow-hidden border border-slate-200/80 bg-white/95 shadow-sm">
                      <button
                        type="button"
                        aria-expanded={expandedJob === job.id}
                        onClick={() => handleToggle(job.id)}
                        className="flex w-full flex-col gap-5 px-6 py-5 text-left sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex items-start gap-4">
                          <div className="rounded-2xl bg-slate-100 p-3">
                            <Icon
                              className="h-6 w-6"
                              style={{ color: THEME.secondary }}
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900">
                              {job.title}
                            </h3>
                            <div className="mt-2 flex flex-wrap gap-3 text-xs font-medium text-slate-600">
                              <span className="inline-flex items-center gap-1">
                                <Briefcase className="h-3.5 w-3.5" />
                                {job.department}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5" />
                                {job.location}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-sm font-semibold text-slate-700 sm:justify-end">
                          <span className="inline-flex items-center gap-1">
                            {job.salary}
                          </span>
                          {expandedJob === job.id ? (
                            <ChevronUp className="h-5 w-5 text-slate-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-500" />
                          )}
                        </div>
                      </button>

                      {expandedJob === job.id && (
                        <div className="border-t border-slate-200/80 bg-white/95 px-6 py-5 text-sm text-slate-600">
                          <p className="mb-4">{job.description}</p>

                          <div className="mb-4 space-y-2">
                            <h4 className="text-base font-semibold text-slate-900">
                              Responsibilities
                            </h4>
                            <ul className="list-disc space-y-1 pl-5">
                              {job.responsibilities.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6 space-y-2">
                            <h4 className="text-base font-semibold text-slate-900">
                              Requirements
                            </h4>
                            <ul className="list-disc space-y-1 pl-5">
                              {job.requirements.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            asChild
                            className="w-full border-none font-semibold text-white shadow-md transition hover:opacity-90 md:w-auto"
                            style={{ backgroundImage: accentGradient }}
                          >
                            <a
                              href={`mailto:hr@smartcluestech.com?subject=Application for ${encodeURIComponent(
                                job.title
                              )}`}
                              className="flex items-center gap-2"
                            >
                              <Mail className="h-4 w-4" />
                              Apply via email
                            </a>
                          </Button>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.section>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
