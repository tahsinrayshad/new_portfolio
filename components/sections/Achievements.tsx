"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Calendar, Users, Globe, Target, Flag } from "lucide-react"
import { RevealAnimation } from "@/components/ui/reveal-animation"
import { achievements } from "@/lib/data"
import Image from "next/image"

export default function Achievements() {
  const getIcon = (index: number) => {
    const icons = [Trophy, Medal, Award]
    return icons[index] || Award
  }

  const getGradient = (index: number) => {
    const gradients = ["from-yellow-400 to-orange-500", "from-orange-400 to-red-500", "from-blue-400 to-purple-500"]
    return gradients[index] || gradients[0]
  }

  const getImpactMetrics = (index: number) => {
    const metrics = [
      { icon: Flag, label: "National Recognition", value: "National Level" },
      { icon: Globe, label: "Competition Scale", value: "International Level" },
      { icon: Target, label: "World Ranking", value: "Top 100 Globally" },
    ]
    return metrics[index] || metrics[0]
  }

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 dark:bg-yellow-800/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <RevealAnimation>
            <div className="text-center mb-16">
              {/* <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                <span className="text-yellow-600 dark:text-yellow-400 font-medium">Recognition & Awards</span>
              </motion.div> */}

              <motion.h2
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Achievements
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                International recognition and awards that showcase excellence in technology and innovation
              </motion.p>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </RevealAnimation>

          {/* Hero Achievement with Photo */}
          <RevealAnimation delay={0.3}>
            <motion.div className="mb-12" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Photo Section */}
                    <div className="relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20"
                        animate={{
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="relative h-80 lg:h-full">
                        <Image
                          src={achievements[0].image}
                          alt="Tahsin Islam - Award Winner"
                          fill
                          className="object-cover"
                          unoptimized
                          onError={(e) => {
                            console.log('Hero image failed to load:', achievements[0].image)
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Floating Award Badge */}
                        <motion.div
                          className="absolute top-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Trophy className="h-6 w-6 text-yellow-500" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            className={`p-3 bg-gradient-to-r ${getGradient(0)} rounded-full shadow-lg`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Trophy className="h-8 w-8 text-white" />
                          </motion.div>
                          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            Latest Achievement
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {achievements[0].title}
                        </h3>
                        <p className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4">
                          {achievements[0].event}
                        </p>

                        <div className="flex items-center gap-4 mb-6 text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{achievements[0].date}</span>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {achievements[0].type}
                          </Badge>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {achievements[0].description}
                        </p>

                        <motion.div
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trophy className="h-4 w-4" />
                          <span>International Recognition</span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </RevealAnimation>

          {/* Other Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.slice(1).map((achievement, index) => {
              const IconComponent = getIcon(index + 1)
              const actualIndex = index + 1
              const impactMetric = getImpactMetrics(index)
              return (
                <RevealAnimation key={actualIndex} delay={0.4 + index * 0.1}>
                  <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="h-full overflow-hidden border-0 shadow-xl bg-white dark:bg-gray-900 relative">
                      {/* Animated Background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${getGradient(actualIndex)} opacity-5`}
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Achievement Image - Above title */}
                      {achievement.image && (
                        <div className="relative overflow-hidden">
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${getGradient(actualIndex)} opacity-20`}
                            animate={{
                              opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />
                          <div className="relative h-80">
                            <Image
                              src={achievement.image}
                              alt={`${achievement.title} - ${achievement.event}`}
                              fill
                              className="object-cover"
                              unoptimized
                              onError={(e) => {
                                console.log('Image failed to load:', achievement.image)
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                            {/* Floating Award Badge */}
                            <motion.div
                              className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
                              animate={{
                                y: [0, -5, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            >
                              <IconComponent className="h-4 w-4 text-yellow-500" />
                            </motion.div>
                          </div>
                        </div>
                      )}

                      <CardHeader className="relative z-10">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <motion.div
                              className={`p-4 bg-gradient-to-r ${getGradient(actualIndex)} rounded-full shadow-lg`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <IconComponent className="h-8 w-8 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {achievement.title}
                              </h3>
                              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                {achievement.event}
                              </p>
                            </div>
                          </div>
                          <Badge
                            className={`${
                              achievement.type === "International"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            }`}
                          >
                            {achievement.type}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{achievement.date}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {achievement.description}
                        </p>

                        {/* Impact & Recognition */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <impactMetric.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                {impactMetric.label}
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                              {impactMetric.value}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </RevealAnimation>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
