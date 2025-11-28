import Image from "next/image"
import { THEME } from "@/components/blocks/services"

const toRgba = (color: string, alpha: number) => {
  const rgb = color.match(/(\d+),\s*(\d+),\s*(\d+)/)
  if (!rgb) return color
  return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, ${alpha})`
}

const certifications = [
    {
      title: "HIPAA Compliant",
      description:
        "Smartclues is committed to strict HIPAA compliance, safeguarding patient information with the highest standards of security and privacy.",
      image: "/image10 copy.png",
    },
    {
        title: "ISO 27001 Certified",
        description:
        "Smartclues upholds ISO 27001 compliance to ensure secure, resilient, and well-governed information management.",
        image: "/image12 copy.png",
    },
    {
        title: "SOC 2 Ready",
        description:
        "Smartclues stands for SOC 2 compliance—delivering secure, reliable, and trust-centered service operations.",
        image: "/image11 copy.png",
    },
    {
      title: "GDPR Compliant",
      description:
        "Smartclues is committed to GDPR compliance, prioritizing privacy rights and secure data processing at every step.",
      image: "/image13 copy.png",
    },
]

export function CertificatesGrid() {
  return (
    <section
      className="w-full max-w-7xl mx-auto rounded-[32px] px-4 md:px-6 lg:px-8 py-12"
      style={{ backgroundColor: THEME.backgroundSection }}
    >
      <div className="text-center space-y-3 mb-10">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.35em]" style={{ color: THEME.secondary }}>
          Compliance & Trust
        </p> */}
        <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: THEME.textPrimary }}>
          Certified for Enterprise Confidence
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: THEME.textSecondary }}>
          Our security-first delivery model is reinforced by globally recognized compliance badges.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col items-center rounded-3xl border bg-white/90 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ borderColor: toRgba(THEME.secondary, 0.12) }}
          >
            <div className="relative mb-4 h-20 w-20">
              <Image src={item.image} alt={item.title} fill className="object-contain" />
            </div>
            <h3 className="text-lg font-semibold" style={{ color: THEME.textPrimary }}>
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: THEME.textSecondary }}>
              {item.description}
            </p>
            <div
              className="mt-5 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20"
              style={{
                backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`,
                boxShadow: `0 8px 20px ${toRgba(THEME.secondary, 0.25)}`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
