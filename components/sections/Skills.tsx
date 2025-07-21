"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Code2, Database, Palette, Settings, FileText, Layers, Sparkles, Star, Zap } from "lucide-react"

// Skills data with enhanced information
const skillsData = [
  {
    id: "backend",
    category: "Back End",
    icon: Database,
    skills: [
      { name: "C/C++", level: 90, experience: "4+ years" },
      { name: "C#", level: 85, experience: "3+ years" },
      { name: "Java", level: 88, experience: "3+ years" },
      { name: "PHP", level: 82, experience: "2+ years" },
      { name: "Python", level: 75, experience: "2+ years" },
    ],
    gradient: "from-blue-400 via-blue-500 to-blue-600",
    glowColor: "shadow-blue-500/25",
    description: "Server-side development and system programming",
  },
  {
    id: "frontend",
    category: "Front End",
    icon: Code2,
    skills: [
      { name: "HTML", level: 95, experience: "5+ years" },
      { name: "CSS", level: 90, experience: "4+ years" },
      { name: "JavaScript", level: 88, experience: "3+ years" },
      { name: "React", level: 85, experience: "2+ years" },
      { name: "TypeScript", level: 75, experience: "1+ years" },
    ],
    gradient: "from-emerald-400 via-emerald-500 to-emerald-600",
    glowColor: "shadow-emerald-500/25",
    description: "User interface and experience development",
  },
  {
    id: "database",
    category: "DBMS",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 80, experience: "2+ years" },
      { name: "MySQL", level: 85, experience: "3+ years" },
      { name: "Oracle", level: 75, experience: "1+ years" },
    ],
    gradient: "from-purple-400 via-purple-500 to-purple-600",
    glowColor: "shadow-purple-500/25",
    description: "Database design and management systems",
  },
  {
    id: "framework",
    category: "Framework",
    icon: Layers,
    skills: [
      { name: "Bootstrap", level: 88, experience: "3+ years" },
      { name: "MERN Stack", level: 82, experience: "2+ years" },
      { name: "Laravel", level: 80, experience: "2+ years" },
      { name: "Next.JS", level: 85, experience: "2+ years" },
      { name: ".NET", level: 78, experience: "1+ years" },
    ],
    gradient: "from-orange-400 via-orange-500 to-orange-600",
    glowColor: "shadow-orange-500/25",
    description: "Development frameworks and libraries",
  },
  {
    id: "devtools",
    category: "Dev Tools",
    icon: Settings,
    skills: [
      { name: "Git", level: 90, experience: "4+ years" },
      { name: "GitHub", level: 88, experience: "3+ years" },
    ],
    gradient: "from-gray-400 via-gray-500 to-gray-600",
    glowColor: "shadow-gray-500/25",
    description: "Development tools and version control",
  },
  {
    id: "docs",
    category: "Documentation",
    icon: FileText,
    skills: [
      { name: "LaTeX", level: 85, experience: "3+ years" },
      { name: "Office 365", level: 92, experience: "5+ years" },
      { name: "Google Workspace", level: 90, experience: "4+ years" },
    ],
    gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    glowColor: "shadow-indigo-500/25",
    description: "Documentation and productivity tools",
  },
  {
    id: "design",
    category: "Design Tools",
    icon: Palette,
    skills: [
      { name: "Figma", level: 80, experience: "2+ years" },
      { name: "Canva", level: 85, experience: "3+ years" },
    ],
    gradient: "from-pink-400 via-pink-500 to-pink-600",
    glowColor: "shadow-pink-500/25",
    description: "UI/UX design and visual creation tools",
  },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [orbs, setOrbs] = useState<Array<{
    id: number
    color: string
    width: number
    height: number
    left: number
    top: number
    animateX: number
    animateY: number
    duration: number
  }>>([])

  // Generate stable orb data on client side only
  useEffect(() => {
    const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ef4444"]
    const orbData = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      color: colors[i],
      width: Math.random() * 400 + 200,
      height: Math.random() * 400 + 200,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animateX: Math.random() * 100 - 50,
      animateY: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10,
    }))
    setOrbs(orbData)
  }, [])

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Simplified Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-green-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-green-900/10" />
      
      {/* Static decorative orbs */}
            {/* Static decorative orbs */}
      <div className="absolute inset-0 dark:block hidden">
        {orbs.slice(0, 3).map((orb, index) => (
          <div
            key={orb.id}
            className="absolute rounded-full opacity-20"
            style={{
              background: orb.color,
              width: `${orb.width}px`,
              height: `${orb.height}px`,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h2>


            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              From mobile development to web technologies, here are the tools and technologies I work with
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillsData.map((category, index) => {
              const IconComponent = category.icon
              // Check if this is the last card and if it's alone in its row
              const isLastCard = index === skillsData.length - 1
              const remainderCards = skillsData.length % 3
              const isAloneInLastRow = isLastCard && remainderCards === 1

              return (
                <motion.div
                  key={category.id}
                  className={`relative group ${isAloneInLastRow ? 'md:col-start-2' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                  layoutId={`skill-card-${category.id}`}
                >
                  {/* Glassmorphism Card */}
                  <motion.div
                    className="relative p-6 bg-white dark:bg-gray-900 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-700 ease-in-out hover:shadow-2xl hover:scale-105"
                    whileHover={{ y: -5 }}
                    layout
                    transition={{
                      layout: { duration: 0.6, ease: "easeInOut" },
                      default: { duration: 0.3 }
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                    />

                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{category.skills.length} technologies</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills Preview */}
                    <motion.div 
                      className="space-y-2 mb-4"
                      layout
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ 
                            delay: skillIndex * 0.05,
                            duration: 0.3,
                            ease: "easeOut"
                          }}
                          layout
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-yellow-500" />
                            <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-600 dark:text-gray-400">{skill.experience}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(skill.level / 20)
                                      ? "text-yellow-500 fill-current"
                                      : "text-gray-400 dark:text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Category Description */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="border-t border-gray-200 dark:border-gray-700 pt-4"
                    >
                      <motion.p 
                        className="text-gray-600 dark:text-gray-300 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {category.description}
                      </motion.p>
                    </motion.div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { label: "Categories", value: skillsData.length, icon: Layers },
              {
                label: "Technologies",
                value: skillsData.reduce((acc, cat) => acc + cat.skills.length, 0),
                icon: Code2,
              },
              { label: "Avg Experience", value: "3+ Years", icon: Star },
              { label: "Proficiency", value: "Expert", icon: Zap },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-white dark:bg-gray-900 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
