"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RevealAnimation } from "@/components/ui/reveal-animation"
import { skills } from "@/lib/data"
import { Code, Database, Palette, Settings, Globe } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: skills.languages,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
      icon: Code,
    },
    {
      title: "Frameworks & Libraries",
      skills: skills.frameworks,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400",
      icon: Globe,
    },
    {
      title: "Databases",
      skills: skills.databases,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
      icon: Database,
    },
    {
      title: "Development Tools",
      skills: skills.devTools,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400",
      icon: Settings,
    },
    {
      title: "Design Tools",
      skills: skills.designTools,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      textColor: "text-pink-600 dark:text-pink-400",
      icon: Palette,
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <RevealAnimation>
            <div className="text-center mb-16">
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Technical Skills
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
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

          {/* Centered Skills Grid */}
          <div className="flex justify-center">
            <div className="max-w-5xl w-full">
              {/* First Row - 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {skillCategories.slice(0, 3).map((category, index) => (
                  <RevealAnimation key={index} delay={index * 0.1}>
                    <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card className="h-full border-0 shadow-xl overflow-hidden bg-white dark:bg-gray-900">
                        <CardHeader className={`${category.bgColor} relative overflow-hidden`}>
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10`}
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />
                          <div className="flex items-center gap-3 relative z-10">
                            <motion.div
                              className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <category.icon className={`h-6 w-6 ${category.textColor}`} />
                            </motion.div>
                            <CardTitle className={`text-lg ${category.textColor} font-bold`}>
                              {category.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: skillIndex * 0.05,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 cursor-default"
                                >
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </RevealAnimation>
                ))}
              </div>

              {/* Second Row - 2 cards centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                  {skillCategories.slice(3, 5).map((category, index) => (
                    <RevealAnimation key={index + 3} delay={(index + 3) * 0.1}>
                      <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="h-full border-0 shadow-xl overflow-hidden bg-white dark:bg-gray-900">
                          <CardHeader className={`${category.bgColor} relative overflow-hidden`}>
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10`}
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            />
                            <div className="flex items-center gap-3 relative z-10">
                              <motion.div
                                className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              >
                                <category.icon className={`h-6 w-6 ${category.textColor}`} />
                              </motion.div>
                              <CardTitle className={`text-lg ${category.textColor} font-bold`}>
                                {category.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="flex flex-wrap gap-3">
                              {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skillIndex}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: skillIndex * 0.05,
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 cursor-default"
                                  >
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skill Level Indicators */}
          <RevealAnimation delay={0.8}>
            <div className="mt-16 flex justify-center">
              <div className="max-w-5xl w-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Proficiency Levels
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { level: "Expert", skills: ["JavaScript", "React", "Next.js", "PHP", "Java"], color: "bg-green-500" },
                    { level: "Advanced", skills: ["Python", "Laravel", "MERN", "MySQL", "C#" , "C++"], color: "bg-blue-500" },
                    { level: "Intermediate", skills: [".NET", "Oracle"], color: "bg-yellow-500" },
                  ].map((group, index) => (
                    <motion.div
                      key={index}
                      className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-4 h-4 ${group.color} rounded-full`}></div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{group.level}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
