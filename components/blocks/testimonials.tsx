"use client"

import { motion } from "framer-motion"

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const itemFadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

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

const toRgba = (color: string, alpha: number) => {
  const match = color.match(/(\d+),\s*(\d+),\s*(\d+)/)
  if (match) return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${alpha})`
  const hex = color.replace("#", "")
  const bigint = parseInt(hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const testimonials = [
  {
    quote: "Smartclues Technologies has been instrumental in optimizing our medical coding processes. Their attention to detail and commitment to quality is exceptional.",
    author: "Geetha Lakshmi",
    company: "CEO, TechStart",
  },
  {
    quote: "The team at Smartclues delivered our project on time and with exceptional quality. Their expertise in medical coding has significantly improved our operational efficiency.",
    author: "Chocko Valliappa",
    company: "Marketing Director, GrowthCo",
  },
  {
    quote: "Working with Smartclues has been a game-changer for our digital forensics needs. Their technical knowledge and problem-solving abilities are outstanding.",
    author: "Abhishek kumar",
    company: "Product Manager, InnovateLabs",
  },
  {
    quote: "The GST system implemented by Smartclues has streamlined our compliance processes and saved us countless hours of manual work. Highly recommended!",
    author: "Prashant Patil",
    company: "Founder, NextWave",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full  py-10 max-w-7xl mx-auto"
      
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-3xl px-3 py-1 text-sm"
              style={{ backgroundColor: toRgba(THEME.primary, 0.15), color: THEME.secondary }}
            >
              Testimonials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              style={{ color: THEME.textPrimary }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              style={{ color: THEME.textSecondary }}
            >
              Don't just take our word for it - hear from some of our satisfied clients
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-3 py-12 lg:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemFadeIn}
              whileHover={{ y: -10 }}
              className="flex flex-col justify-between rounded-3xl border p-6 shadow-sm"
              style={{
                borderColor: toRgba(THEME.secondary, 0.15),
                backgroundColor: THEME.backgroundLight,
              }}
            >
              <div>
                <div
                  className="flex gap-0.5"
                  style={{ color: THEME.primary }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote
                  className="mt-4 text-lg font-medium leading-relaxed"
                  style={{ color: THEME.textPrimary }}
                >
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="mt-6 flex items-center">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{ backgroundColor: toRgba(THEME.primary, 0.3) }}
                />
                <div className="ml-4">
                  <p className="font-medium" style={{ color: THEME.textPrimary }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm" style={{ color: THEME.textSecondary }}>
                    {/* {testimonial.company} */}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
