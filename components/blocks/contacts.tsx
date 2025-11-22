"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Facebook, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const contactItems = [
  { icon: MapPin, title: "Our Location", value: "Smartclues Technologies LLP, Hyderabad, India" },
  { icon: Phone, title: "Phone Number", value: "+91 8977752573" },
  { icon: Mail, title: "Email Address", value: "info@smartcluestech.com" },
  { icon: Clock, title: "Working Hours", value: "Monday - Friday: 9:00 AM - 6:00 PM" },
]



export function ContactsSection() {
  return (
    <section
      id="contact"
      className="w-full  max-w-7xl mx-auto"
      
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container grid items-center gap-3 px-4 md:px-6 lg:grid-cols-2 border rounded-3xl"
        style={{ borderColor: toRgba(THEME.secondary, 0.12), backgroundColor: THEME.backgroundSection }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 p-6"
        >
          <div className="inline-block rounded-3xl px-3 py-1 text-sm" style={{ backgroundColor: toRgba(THEME.primary, 0.15), color: THEME.secondary }}>
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight" style={{ color: THEME.textPrimary }}>
            Let's Work Together
          </h2>
          <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" style={{ color: THEME.textSecondary }}>
            Ready to start your next project? Get in touch with us to discuss how we can help bring your vision to life.
          </p>
          <div className="mt-8 space-y-4">
            {contactItems.map((item) => (
              <motion.div key={item.title} whileHover={{ x: 5 }} className="flex items-start gap-3">
                <div className="rounded-3xl p-2" style={{ backgroundColor: toRgba(THEME.primary, 0.15) }}>
                  <item.icon className="h-5 w-5" style={{ color: THEME.secondary }} />
                </div>
                <div>
                  <h3 className="font-medium" style={{ color: THEME.textPrimary }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: THEME.textSecondary }}>
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border p-6 shadow-sm"
          style={{ borderColor: toRgba(THEME.secondary, 0.15), backgroundColor: THEME.backgroundLight }}
        >
          <h3 className="text-xl font-bold" style={{ color: THEME.textPrimary }}>
            Send Us a Message
          </h3>
          <p className="text-sm" style={{ color: THEME.textSecondary }}>
            Fill out the form below and we'll get back to you shortly.
          </p>
          <form className="mt-6 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium leading-none" style={{ color: THEME.textPrimary }}>
                  First name
                </label>
                <Input id="first-name" placeholder="Enter your first name" className="rounded-3xl" style={{ backgroundColor: THEME.backgroundSection, borderColor: toRgba(THEME.secondary, 0.2), color: THEME.textPrimary }} />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium leading-none" style={{ color: THEME.textPrimary }}>
                  Last name
                </label>
                <Input id="last-name" placeholder="Enter your last name" className="rounded-3xl" style={{ backgroundColor: THEME.backgroundSection, borderColor: toRgba(THEME.secondary, 0.2), color: THEME.textPrimary }} />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none" style={{ color: THEME.textPrimary }}>
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" className="rounded-3xl" style={{ backgroundColor: THEME.backgroundSection, borderColor: toRgba(THEME.secondary, 0.2), color: THEME.textPrimary }} />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none" style={{ color: THEME.textPrimary }}>
                Message
              </label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[120px] rounded-3xl" style={{ backgroundColor: THEME.backgroundSection, borderColor: toRgba(THEME.secondary, 0.2), color: THEME.textPrimary }} />
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full rounded-3xl border-0"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${THEME.gradientStart}, ${THEME.gradientEnd})`,
                  color: THEME.textPrimary,
                }}
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
