import { THEME } from "@/components/blocks/services"
import { HeroHeader } from "@/components/hero-header"
import { FooterSection } from "@/components/blocks/footer"

const toRgba = (color: string, alpha: number) => {
  if (color.startsWith("rgb")) {
    const [r = "0", g = "0", b = "0"] = color.match(/\d+/g) ?? []
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return color
}

const project = {
  title: "Medical Coding",
  description:
    "Comprehensive medical coding solution with 99.9% accuracy and 100% production efficiency. This project streamlined the entire coding process for a major healthcare provider.",
  year: "2022",
  stats: [
    { label: "Charts Coded", value: "1.4M+", detail: "Multi-specialty encounters processed annually" },
    { label: "Audit Accuracy", value: "99.98%", detail: "Dual-pass QA keeps compliance nearly perfect" },
    { label: "Clean-Claim Success", value: "98.7%", detail: "Payer-ready submissions on the first pass" },
  ],
  tags: ["Medical Coding", "Healthcare", "Automation"],
  highlights: [
    "Implemented dual-review automation to eliminate coding discrepancies.",
    "Integrated compliance monitoring to align with payer-specific policies.",
    "Produced real-time dashboards for operational leaders and client stakeholders.",
  ],
  outcomes: [
    "Reduced claim rejections by 38% within the first quarter.",
    "Accelerated reimbursement cycles through clean claim submission.",
    "Enabled rapid onboarding of new specialties via reusable coding templates.",
  ],
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: THEME.backgroundLight }}>
      <HeroHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border px-6 py-10 shadow-xl sm:px-10" style={{ backgroundColor: THEME.backgroundSection, borderColor: toRgba(THEME.secondary, 0.15) }}>
          {/* <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: THEME.secondary }}>Case Study · {project.year}</p> */}
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl" style={{ color: THEME.textPrimary }}>
            {project.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg" style={{ color: THEME.textSecondary }}>
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full px-4 py-1 text-sm font-semibold" style={{ backgroundColor: toRgba(THEME.primary, 0.15), color: THEME.secondary }}>
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border p-6 shadow-sm sm:grid-cols-3" style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: "white" }}>
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border px-4 py-5 text-center" style={{ borderColor: toRgba(THEME.secondary, 0.1), backgroundColor: THEME.backgroundSection }}>
              <p className="text-3xl font-bold" style={{ color: THEME.textPrimary }}>{stat.value}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em]" style={{ color: THEME.textSecondary }}>{stat.label}</p>
              <p className="mt-2 text-xs" style={{ color: THEME.textSecondary }}>{stat.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 rounded-3xl border px-6 py-10 shadow-sm lg:grid-cols-2" style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: "white" }}>
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: THEME.textPrimary }}>Solution Highlights</h2>
            <ul className="mt-4 space-y-3 text-base" style={{ color: THEME.textSecondary }}>
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: THEME.secondary }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: THEME.textPrimary }}>Business Impact</h2>
            <ul className="mt-4 space-y-3 text-base" style={{ color: THEME.textSecondary }}>
              {project.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: THEME.secondary }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
