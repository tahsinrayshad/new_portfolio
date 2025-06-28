"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, User, ArrowRight, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { RevealAnimation } from "@/components/ui/reveal-animation"
import { projects } from "@/lib/data"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Web Development", "Mobile", "AI/ML", "Blockchain"]

  const getProjectCategory = (technologies: string[]) => {
    if (technologies.some((tech) => ["React", "Next.js", "Laravel", "PHP"].includes(tech))) return "Web Development"
    if (technologies.some((tech) => ["Python", "AI", "ML"].includes(tech))) return "AI/ML"
    if (technologies.some((tech) => ["Blockchain", "Smart Contracts"].includes(tech))) return "Blockchain"
    return "Web Development"
  }

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => getProjectCategory(project.technologies) === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)",
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
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-600 dark:text-blue-400 font-medium">Featured Work</span>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Innovative solutions built with cutting-edge technologies and creative problem-solving
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

          {/* Category Filter */}
          {/* <RevealAnimation delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </RevealAnimation> */}

          {/* Projects Grid - Properly Centered for Odd Numbers */}
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={selectedCategory} className="w-full max-w-6xl">
                {filteredProjects.length % 2 === 1 ? (
                  // For odd number of projects, use flexbox layout
                  <div className="flex flex-wrap justify-center gap-8">
                    {filteredProjects.map((project, index) => (
                      <RevealAnimation key={project.title} delay={index * 0.1}>
                        <motion.div
                          className="group relative w-full max-w-lg"
                          onHoverStart={() => setHoveredProject(index)}
                          onHoverEnd={() => setHoveredProject(null)}
                          whileHover={{ y: -10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-full">
                            <Card className="h-full overflow-hidden border-0 shadow-xl bg-white dark:bg-gray-900 relative">
                              {/* Rest of the card content remains the same */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-lg" />

                              <CardContent className="p-8 relative z-10">
                                {/* Project Header */}
                                <div className="flex items-start justify-between mb-6">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <motion.div
                                        className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                      >
                                        <Zap className="h-5 w-5 text-white" />
                                      </motion.div>
                                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {project.title}
                                      </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                      <Calendar className="h-4 w-4" />
                                      <span>{project.period}</span>
                                      <Badge
                                        variant={project.status === "In Progress" ? "default" : "secondary"}
                                        className={`ml-2 ${
                                          project.status === "In Progress"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        }`}
                                      >
                                        {project.status}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>

                                {/* Project Description */}
                                <motion.p
                                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                                  initial={{ opacity: 0.8 }}
                                  animate={{ opacity: hoveredProject === index ? 1 : 0.8 }}
                                >
                                  {project.description}
                                </motion.p>

                                {/* Technologies */}
                                <div className="mb-6">
                                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Technologies
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                      <motion.div
                                        key={techIndex}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: techIndex * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                      >
                                        <Badge
                                          variant="outline"
                                          className="bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                          {tech}
                                        </Badge>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>

                                {/* Supervisors */}
                                <div className="mb-6">
                                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    Supervised by
                                  </h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {project.supervisors.join(", ")}
                                  </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                  {project.github ? (
                                    <a 
                                      href={project.github} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="flex-1 block"
                                    >
                                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer transition-all duration-200 hover:scale-105">
                                        <Github className="h-4 w-4 mr-2" />
                                        View Code
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                      </Button>
                                    </a>
                                  ) : (
                                    <div className="flex-1">
                                      <Button
                                        disabled
                                        className="w-full bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                      >
                                        <Github className="h-4 w-4 mr-2" />
                                        Coming Soon
                                      </Button>
                                    </div>
                                  )}
                                  
                                  {project.demo ? (
                                    <a 
                                      href={project.demo} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                    >
                                      <Button
                                        variant="outline"
                                        className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent cursor-pointer transition-all duration-200 hover:scale-105"
                                      >
                                        <ExternalLink className="h-4 w-4" />
                                      </Button>
                                    </a>
                                  ) : project.github ? (
                                    <Button
                                      disabled
                                      variant="outline"
                                      className="border-2 bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                    </Button>
                                  ) : null}
                                </div>

                                {/* Hover Effect Overlay */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg pointer-events-none"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                                  transition={{ duration: 0.3 }}
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </motion.div>
                      </RevealAnimation>
                    ))}
                  </div>
                ) : (
                  // For even number of projects, use grid layout
                  <div className="grid lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                      <RevealAnimation key={project.title} delay={index * 0.1}>
                        <motion.div
                          className="group relative"
                          onHoverStart={() => setHoveredProject(index)}
                          onHoverEnd={() => setHoveredProject(null)}
                          whileHover={{ y: -10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-full">
                            <Card className="h-full overflow-hidden border-0 shadow-xl bg-white dark:bg-gray-900 relative">
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-lg" />

                              <CardContent className="p-8 relative z-10">
                                {/* Project Header */}
                                <div className="flex items-start justify-between mb-6">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <motion.div
                                        className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                      >
                                        <Zap className="h-5 w-5 text-white" />
                                      </motion.div>
                                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {project.title}
                                      </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                      <Calendar className="h-4 w-4" />
                                      <span>{project.period}</span>
                                      <Badge
                                        variant={project.status === "In Progress" ? "default" : "secondary"}
                                        className={`ml-2 ${
                                          project.status === "In Progress"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        }`}
                                      >
                                        {project.status}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>

                                {/* Project Description */}
                                <motion.p
                                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                                  initial={{ opacity: 0.8 }}
                                  animate={{ opacity: hoveredProject === index ? 1 : 0.8 }}
                                >
                                  {project.description}
                                </motion.p>

                                {/* Technologies */}
                                <div className="mb-6">
                                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Technologies
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                      <motion.div
                                        key={techIndex}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: techIndex * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                      >
                                        <Badge
                                          variant="outline"
                                          className="bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                          {tech}
                                        </Badge>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>

                                {/* Supervisors */}
                                <div className="mb-6">
                                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    Supervised by
                                  </h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {project.supervisors.join(", ")}
                                  </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                  {project.github ? (
                                    <a 
                                      href={project.github} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="flex-1 block"
                                    >
                                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer transition-all duration-200 hover:scale-105">
                                        <Github className="h-4 w-4 mr-2" />
                                        View Code
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                      </Button>
                                    </a>
                                  ) : (
                                    <div className="flex-1">
                                      <Button
                                        disabled
                                        className="w-full bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                      >
                                        <Github className="h-4 w-4 mr-2" />
                                        Coming Soon
                                      </Button>
                                    </div>
                                  )}
                                  
                                  {project.demo ? (
                                    <a 
                                      href={project.demo} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                    >
                                      <Button
                                        variant="outline"
                                        className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent cursor-pointer transition-all duration-200 hover:scale-105"
                                      >
                                        <ExternalLink className="h-4 w-4" />
                                      </Button>
                                    </a>
                                  ) : project.github ? (
                                    <Button
                                      disabled
                                      variant="outline"
                                      className="border-2 bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                    </Button>
                                  ) : null}
                                </div>

                                {/* Hover Effect Overlay */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                                  transition={{ duration: 0.3 }}
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </motion.div>
                      </RevealAnimation>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Call to Action */}
          <RevealAnimation delay={0.8}>
            <div className="text-center mt-16">
              <Link href="https://github.com/tahsinrayshad" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View All Projects on GitHub</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
