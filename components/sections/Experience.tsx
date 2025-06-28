"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Camera,
  Palette,
  Calendar,
  Clock,
  Star,
  Award,
  Monitor
} from "lucide-react"
import { RevealAnimation } from "@/components/ui/reveal-animation"
import { experiences } from "@/lib/data"

export default function Experience() {
  // Calculate dynamic stats from experiences data
  const calculateStats = () => {
    const activeSocieties = experiences.length
    const totalEvents = experiences.reduce((total, exp) => total + exp.events.length, 0)
    
    // Calculate years of experience based on the earliest start date
    const currentYear = new Date().getFullYear()
    const startYears = experiences.map(exp => {
      // Extract year from duration field (e.g., "Aug 2022" -> 2022)
      const match = exp.duration.match(/\d{4}/)
      return match ? parseInt(match[0]) : currentYear
    })
    const earliestYear = Math.min(...startYears)
    const yearsExperience = currentYear - earliestYear
    
    // Estimate lives touched based on events and leadership roles
    // Using a conservative estimate of 50-100 people per major event
    const livesTouched = totalEvents * 75 // Average of 75 people per event
    
    return {
      activeSocieties,
      totalEvents,
      yearsExperience,
      livesTouched
    }
  }

  const stats = calculateStats()
  const getIcon = (organization: string) => {
    switch (organization) {
      case "IUT Computer Society":
        return Monitor
      case "IUT Photographic Society":
        return Camera
      case "IUT Arts and Cultural Society":
        return Palette
      default:
        return Users
    }
  }

  const getGradient = (organization: string) => {
    switch (organization) {
      case "IUT Computer Society":
        return "from-blue-500 to-cyan-500"
      case "IUT Photographic Society":
        return "from-green-500 to-emerald-500"
      case "IUT Arts and Cultural Society":
        return "from-red-600 to-red-800"
      default:
        return "from-blue-500 to-cyan-500"
    }
  }

  const getTypeColor = (organization: string) => {
    switch (organization) {
      case "IUT Computer Society":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "IUT Photographic Society":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "IUT Arts and Cultural Society":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <RevealAnimation>
            <div className="text-center mb-16">
              {/* <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-600 dark:text-blue-400 font-medium">Leadership Journey</span>
              </motion.div> */}

              <motion.h2
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Extracurricular Activities
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Building communities, organizing events, and leading teams across multiple university societies
              </motion.p>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </RevealAnimation>

          <div className="flex justify-center">
            <div className="relative w-full max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-8">
                {experiences.map((exp, index) => {
                  const IconComponent = getIcon(exp.organization)
                  const gradient = getGradient(exp.organization)
                  const typeColor = getTypeColor(exp.organization)
                  const isLastOdd = experiences.length % 2 === 1 && index === experiences.length - 1

                  const card = (
                    <RevealAnimation key={index} delay={index * 0.2}>
                      <motion.div
                        className="w-full"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="overflow-hidden border-0 shadow-2xl bg-white dark:bg-gray-900 relative h-full max-w-xl w-full mx-auto">
                          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} p-[2px] rounded-2xl`}>
                            <div className="bg-white dark:bg-gray-900 rounded-2xl h-full w-full"></div>
                          </div>

                          <div className="relative z-10 p-8">
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-4">
                                <motion.div
                                  className={`p-4 bg-gradient-to-r ${gradient} rounded-2xl shadow-lg`}
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <IconComponent className="h-8 w-8 text-white" />
                                </motion.div>
                                <div>
                                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {exp.organization}
                                  </h3>
                                  <Badge className={`${typeColor} mt-1`}>{exp.position}</Badge>
                                </div>
                              </div>
                              <div className="text-right space-y-1 min-w-0 flex-shrink-0">
                                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                                  <span className="text-xs font-medium">{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                  <Clock className="h-3.5 w-3.5 shrink-0" />
                                  <span className="text-xs font-medium">Since {exp.duration}</span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                                <Star className="h-5 w-5 text-yellow-500" />
                                Key Events & Achievements
                              </h4>

                              <div className="grid gap-4">
                                {exp.events.map((event, eventIndex) => (
                                  <motion.div
                                    key={eventIndex}
                                    className="group p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-blue-500"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, x: index % 2 === 0 ? 5 : -5 }}
                                  >
                                    <div className="flex items-start justify-between mb-3">
                                      <div className="flex-1">
                                        <h5 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                          {event.name}
                                        </h5>
                                        <div className="flex items-start gap-3 mt-2">
                                          <div className="flex flex-wrap gap-1">
                                            {event.role.split(',').map((role, roleIndex) => (
                                              <Badge key={roleIndex} variant="outline" className="text-xs">
                                                {role.trim()}
                                              </Badge>
                                            ))}
                                          </div>
                                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap shrink-0">
                                            <Calendar className="h-3 w-3 shrink-0" />
                                            <span>{event.date}</span>
                                          </div>
                                        </div>
                                      </div>
                                      <motion.div
                                        className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                      </motion.div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                                      {event.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                                        Leadership
                                      </span>
                                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full">
                                        Event Management
                                      </span>
                                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                                        Team Coordination
                                      </span>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </RevealAnimation>
                  )

                  return isLastOdd ? (
                    <div key={index} className="lg:col-span-2 flex justify-center">{card}</div>
                  ) : (
                    card
                  )
                })}
              </div>
            </div>
          </div>

          <RevealAnimation delay={0.8}>
            <div className="mt-20 text-center">
              <motion.div
                className="inline-flex items-center gap-8 px-12 py-8 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {stats.activeSocieties}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Active Societies</div>
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stats.totalEvents}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Major Events</div>
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {stats.yearsExperience}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
