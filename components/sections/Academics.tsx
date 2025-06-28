"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, MapPin, Calendar, Code, Target, Lightbulb, Clock, CheckCircle } from "lucide-react"
import { RevealAnimation } from "@/components/ui/reveal-animation"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { education, achievements, projects, experiences } from "@/lib/data"

export default function About() {
  // Calculate dynamic stats from actual data
  const calculateStats = () => {
    // Years of Experience - based on earliest start date from experiences
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1 // JavaScript months are 0-indexed
    
    const startYears = experiences.map(exp => {
      const match = exp.duration.match(/\d{4}/)
      return match ? parseInt(match[0]) : currentYear
    })
    const earliestYear = Math.min(...startYears)
    const yearsExperience = currentYear - earliestYear

    // Count completed projects and Codeforces problems solved
    const completedProjects = projects.filter(project => 
      project.status === "Completed"
    ).length

    // Codeforces problems solved (static value for now, can be made dynamic with API)
    const codeforcesProblemsSolved = 200

    // Count international awards
    const internationalAwards = achievements.filter(achievement => 
      achievement.type === "International"
    ).length

    return {
      yearsExperience,
      codeforcesProblemsSolved,
      completedProjects,
      internationalAwards
    }
  }

  const dynamicStats = calculateStats()

  const stats = [
    { label: "Years of Experience", value: dynamicStats.yearsExperience, suffix: "+", icon: Clock },
    { label: "Solved on Codeforces", value: dynamicStats.codeforcesProblemsSolved, suffix: "+", icon: Code },
    { label: "Projects Completed", value: dynamicStats.completedProjects, suffix: "", icon: CheckCircle },
    { label: "International Awards", value: dynamicStats.internationalAwards, suffix: "", icon: Award },
  ]

  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Building solutions that make a real impact in education and technology",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Exploring blockchain, AI, and emerging technologies for future applications",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in MERN stack, Next.js, and modern web technologies",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="academics" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <RevealAnimation>
            <div className="text-center mb-16">
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Academics
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </RevealAnimation>

          {/* Stats Section */}
          <RevealAnimation delay={0.2}>
            <div className="flex justify-center mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute top-2 right-2 opacity-20"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      <AnimatedCounter end={stat.value as number} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealAnimation>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <RevealAnimation direction="left">
              <div className="space-y-6">
                <motion.h3
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  My Journey
                </motion.h3>

                <div className="space-y-6">
                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    I'm a passionate Software Engineering student at Islamic University of Technology (IUT) with a
                    strong foundation in full-stack development and a keen interest in emerging technologies like
                    blockchain and AI.
                  </motion.p>

                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    With experience in multiple programming languages and frameworks, I enjoy building innovative
                    solutions that solve real-world problems. My projects range from educational platforms to financial
                    management tools.
                  </motion.p>

                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Beyond coding, I'm actively involved in university societies, organizing events, and contributing to
                    the tech community through various leadership roles.
                  </motion.p>
                </div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Based in Dhaka, Bangladesh</span>
                </motion.div>
              </div>
            </RevealAnimation>

            <RevealAnimation direction="right">
              <div className="space-y-6">
                <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <motion.div
                        className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                    </div>
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <motion.div
                          key={index}
                          className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-700"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">{edu.degree}</h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {edu.period}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RevealAnimation>
          </div>

          {/* Full-width Recent Achievements and Highlights */}
          <RevealAnimation delay={0.6}>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Achievements */}
              <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Achievements</h3>
                  </div>
                  <div className="space-y-4">
                    {achievements.slice(0, 3).map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-700 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-2xl">
                          {index === 0 && "🏆"} {index === 1 && "🥉"} {index === 2 && "🌍"}
                        </span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{achievement.event}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Highlights */}
              <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Highlights</h3>
                  </div>
                  <div className="space-y-4">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`p-2 bg-gradient-to-r ${highlight.color} rounded-lg`}>
                          <highlight.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{highlight.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
