"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { HeroHeader } from "@/components/hero-header"
import { FooterSection } from "@/components/blocks/footer"
import { THEME } from "@/components/blocks/services"

const toRgba = (color: string, alpha: number) => {
  const rgb = color.match(/(\d+),\s*(\d+),\s*(\d+)/)
  if (!rgb) return color
  return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, ${alpha})`
}

const galleryImages = [
  {
    id: 1,
    src: "/gallery1.png",
    alt: "Law Enforcement Training Program - Session 1",
    title: "Expert Knowledge Sharing",
  },
  {
    id: 2,
    src: "/gallery6.png",
    alt: "Law Enforcement Training Program - Session 2",
    title: "Senior Officials Training",
  },
  {
    id: 3,
    src: "/gallery3.png",
    alt: "Law Enforcement Training Program - Session 3",
    title: "Police Department Collaboration",
  },
  {
    id: 4,
    src: "/gallery4.png",
    alt: "Law Enforcement Training Program - Session 4",
    title: "DGP and ACP Sessions",
  },
  {
    id: 5,
    src: "/gallery5.png",
    alt: "Law Enforcement Training Program - Session 5",
    title: "High-Ranking Officers Training",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: THEME.backgroundLight }}>
      <HeroHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        {/* Compact Hero Section */}
        <section className="relative overflow-hidden rounded-[32px] border shadow-xl" style={{ backgroundColor: THEME.backgroundSection, borderColor: toRgba(THEME.secondary, 0.18) }}>
          {/* Background decoration */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, ${toRgba(THEME.primary, 0.12)}, transparent 50%), 
                               radial-gradient(circle at 70% 70%, ${toRgba(THEME.secondary, 0.08)}, transparent 50%)`
            }}
          />
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20"
            style={{ 
              backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`
            }}
          />
          
          <div className="relative px-6 py-12 sm:px-8 sm:py-14">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="space-y-6 text-center max-w-4xl mx-auto"
            >
              {/* Badge */}
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold shadow-md" 
                style={{ 
                  backgroundColor: toRgba(THEME.primary, 0.15), 
                  color: THEME.secondary,
                  border: `1px solid ${toRgba(THEME.secondary, 0.2)}`
                }}
              >
                🏛️ Training Excellence Gallery
              </motion.span>
              
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl leading-tight" style={{ color: THEME.textPrimary }}>
                  Law Enforcement{" "}
                  <span 
                    className="block text-transparent bg-clip-text"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`,
                      WebkitBackgroundClip: "text"
                    }}
                  >
                    Training Programs
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mx-auto max-w-3xl"
              >
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: toRgba(THEME.textSecondary, 0.9) }}>
                  Smartclues Technologies has actively participated in{" "}
                  <span className="font-semibold" style={{ color: THEME.secondary }}>
                    Law Enforcement Training Programs
                  </span>
                  , delivering expert knowledge-sharing sessions for the Police Department, including senior officials such as{" "}
                  <span className="font-semibold" style={{ color: THEME.secondary }}>
                    DGPs, ACPs, and other high-ranking officers
                  </span>
                  .
                </p>
              </motion.div>

              
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="space-y-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: THEME.textPrimary }}>
              Training Sessions Gallery
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base" style={{ color: THEME.textSecondary }}>
              Highlights from our collaborative training sessions with law enforcement agencies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-lg"
                  style={{ borderColor: toRgba(THEME.secondary, 0.18) }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(180deg, ${toRgba(THEME.overlayDark || "15, 23, 42", 0)} 0%, ${toRgba(THEME.overlayDark || "15, 23, 42", 0.7)} 100%)`,
                    }}
                  />
                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section className="rounded-3xl border px-6 py-12 shadow-xl sm:px-12" style={{ borderColor: toRgba(THEME.secondary, 0.15), backgroundColor: THEME.backgroundSection }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center space-y-6">
            <h3 className="text-2xl font-bold sm:text-3xl" style={{ color: THEME.textPrimary }}>
              Partner with Us for Training Programs
            </h3>
            <p className="mx-auto max-w-2xl text-base" style={{ color: THEME.textSecondary }}>
              Interested in organizing cybersecurity and digital forensics training for your organization? Contact us to learn more about our specialized programs.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/contact"
                className="inline-flex items-center rounded-3xl px-8 py-3 text-base font-semibold text-white transition-all hover:opacity-90"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`,
                }}
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
