"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { RevealAnimation } from "@/components/ui/reveal-animation"
import { workExperiences } from "@/lib/data"
import { useState } from "react"

interface WorkExperience {
  id: number
  company: string
  role: string
  period: string
  location?: string
  logo: string
  description: string
  highlights?: string[]
}

export default function Experience() {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <RevealAnimation>
            <div className="text-center mb-16">
              

              <motion.h2
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Work Experience
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A timeline of my professional roles and contributions
              </motion.p>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </RevealAnimation>

          {/* Experience Cards */}
          <div className="space-y-6">
            {workExperiences.map((exp, index) => (
              <RevealAnimation key={exp.id} delay={index * 0.15}>
                <motion.div
                  onHoverStart={() => setHoveredExperience(exp.id)}
                  onHoverEnd={() => setHoveredExperience(null)}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 overflow-hidden relative">
                    {/* Hover Border Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredExperience === exp.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-lg" />

                    <CardContent className="p-8 relative z-10">
                      <div className="flex gap-6">
                        {/* Company Logo */}
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 shadow-md">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          {/* Header with Role & Company */}
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.role}
                            </h3>
                            <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                              {exp.company}
                            </p>

                            {/* Period and Location */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              {exp.location && (
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{exp.location}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Description */}
                          <motion.p
                            className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            animate={{ opacity: hoveredExperience === exp.id ? 1 : 0.8 }}
                          >
                            {exp.description}
                          </motion.p>

                          {/* Highlights */}
                          {exp.highlights && exp.highlights.length > 0 && (
                            <ul className="space-y-2">
                              {exp.highlights.map((highlight, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                  <span>{highlight}</span>
                                </motion.li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredExperience === exp.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </RevealAnimation>
            ))}
          </div>

          {/* Empty State */}
          {workExperiences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No work experience entries yet. Add your professional journey!
              </p>
            </div>
          )}

          {/* Summary */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {workExperiences.length} position{workExperiences.length !== 1 ? "s" : ""} • Growing professional experience
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
