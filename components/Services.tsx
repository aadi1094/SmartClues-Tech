'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Shield, Zap, Users, BarChart3, Cog } from 'lucide-react'

type ServicesProps = {
  linesGradient?: string[]
}

const DEFAULT_GRADIENT = ["#7C444F", "#9F5255", "#E16A54", "#F39E60"]

const services = [
  {
    icon: Code,
    title: "Product Development",
    description: "Custom-built solutions tailored to your business needs with AI-driven automation."
  },
  {
    icon: Shield,
    title: "Testing & Security",
    description: "Comprehensive testing and security solutions to protect your digital assets."
  },
  {
    icon: Zap,
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies."
  },
  {
    icon: Users,
    title: "Blockchain Services",
    description: "Innovative blockchain solutions for secure and transparent transactions."
  },
  {
    icon: BarChart3,
    title: "Revenue Cycle Management",
    description: "Specialized in medical coding with 99.9% quality and 100% production."
  },
  {
    icon: Cog,
    title: "Database Management",
    description: "Efficient database solutions for optimal data storage and retrieval."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 20,
      duration: 0.8
    }
  }
}

export default function Services({ linesGradient = DEFAULT_GRADIENT }: ServicesProps) {
  const primaryColor = linesGradient[2] || DEFAULT_GRADIENT[2]
  const secondaryColor = linesGradient[1] || DEFAULT_GRADIENT[1]
  const accentColor = linesGradient[3] || DEFAULT_GRADIENT[3]

  return (
    <section id="services" className="py-16 bg-white relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
           style={{ backgroundColor: primaryColor }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
           style={{ backgroundColor: accentColor }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium"
            style={{ 
              background: `linear-gradient(135deg, ${primaryColor}15, ${accentColor}15)`,
              color: primaryColor,
              border: `1px solid ${primaryColor}20`
            }}
          >
            Our Services
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 lg:text-6xl">
            What We{' '}
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`
              }}
            >
              Deliver
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to accelerate your business growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 25 }
                }}
                className="group cursor-pointer"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden bg-white/80 backdrop-blur-sm">
                  {/* Gradient Border Effect */}
                  <div 
                    className="absolute inset-0 rounded-lg p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor}40, ${accentColor}40)`
                    }}
                  >
                    <div className="w-full h-full bg-white rounded-lg" />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`
                    }}
                  />

                  <CardHeader className="pb-6 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mb-6 inline-block"
                    >
                      <div 
                        className="p-4 rounded-2xl shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}15, ${accentColor}15)`,
                          border: `1px solid ${primaryColor}20`
                        }}
                      >
                        <Icon 
                          className="h-7 w-7" 
                          style={{ color: primaryColor }}
                        />
                      </div>
                    </motion.div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-6 relative z-10">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button 
                        variant="ghost" 
                        className="text-sm font-semibold group/btn justify-start p-0 h-auto hover:bg-transparent"
                        style={{ color: primaryColor }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          {/* <Button 
            size="lg"
            className="h-14 px-10 text-base font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ 
              background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
            }}
          >
            <span>Explore All Services</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
        </motion.div>
      </div>
    </section>
  )
}
