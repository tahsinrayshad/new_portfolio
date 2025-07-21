"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  Calendar,
  User,
  Home,
  Hash,
  Heart,
  Coffee,
  Code,
  Camera,
  Music,
  Book,
  Award,
  Globe,
} from "lucide-react"
import Image from "next/image"
import { RevealAnimation } from "@/components/ui/reveal-animation"
import MyPhoto from "@/public/photo.jpg"
import { personalInfo, projects, experiences } from "@/lib/data"

export default function PersonalInfo() {
  // Personal details with birth date
  const personalDetails = [
    {
      icon: User,
      label: "Name",
      value: personalInfo.name,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Calendar,
      label: "Date of Birth",
      value: personalInfo.birthDate,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Home,
      label: "Address",
      value: personalInfo.location,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
  ]

  // Calculate dynamic stats from actual data
  const calculateQuickFacts = () => {
    // Extract birth date from personalInfo
    const birthDate = new Date(personalInfo.birthDate)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    // Calculate years of experience from experiences data
    const currentYear = new Date().getFullYear()
    const startYears = experiences.map(exp => {
      const match = exp.duration.match(/\d{4}/)
      return match ? parseInt(match[0]) : currentYear
    })
    const earliestYear = Math.min(...startYears)
    const yearsExperience = currentYear - earliestYear

    // Count total projects
    const totalProjects = projects.length

    // Count active societies
    const activeSocieties = experiences.length

    return {
      age,
      yearsExperience,
      totalProjects,
      activeSocieties
    }
  }

  const dynamicFacts = calculateQuickFacts()

  const interests = [
    { icon: Code, label: "Programming", color: "text-blue-600" },
    { icon: Camera, label: "Photography", color: "text-green-600" },
    { icon: Music, label: "Music", color: "text-purple-600" },
    { icon: Book, label: "Reading", color: "text-orange-600" },
    { icon: Coffee, label: "Coffee", color: "text-amber-600" },
    { icon: Award, label: "Competitions", color: "text-red-600" },
  ]

  const quickFacts = [
    { label: "Age", value: dynamicFacts.age.toString(), icon: Calendar },
    { label: "Experience", value: `${dynamicFacts.yearsExperience}+ Years`, icon: Code },
    { label: "Projects", value: `${dynamicFacts.totalProjects}+`, icon: Award },
    { label: "Societies", value: dynamicFacts.activeSocieties.toString(), icon: Heart },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Simplified Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-green-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-green-900/10" />

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
                About Me
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Get to know me better - my background, interests, and what drives my passion for technology
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

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Photo, Quick Facts, and Languages */}
            <RevealAnimation direction="left">
              <div className="space-y-8">
                {/* Profile Photo Card - Image Only */}
                <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <motion.div
                        className="relative w-48 h-48 mx-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-2">
                            <Image
                              src={MyPhoto}
                              alt="Tahsin Islam"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                        </div>
                        {/* Floating Elements */}
                        <motion.div
                          className="absolute -top-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg"
                          animate={{
                            y: [0, -5, 0],
                            rotate: [0, 10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Code className="h-4 w-4" />
                        </motion.div>
                        <motion.div
                          className="absolute -bottom-2 -left-2 bg-purple-500 text-white p-2 rounded-full shadow-lg"
                          animate={{
                            y: [0, 5, 0],
                            rotate: [0, -10, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Award className="h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Facts */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      Quick Facts
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {quickFacts.map((fact, index) => (
                        <motion.div
                          key={index}
                          className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300,
                            duration: 0.6, 
                            delay: index * 0.1 
                          }}
                          viewport={{ once: true }}
                        >
                          <fact.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">{fact.value}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{fact.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Languages */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-700">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                      <motion.div
                        className="p-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Globe className="h-6 w-6 text-white" />
                      </motion.div>
                      Languages
                    </h4>
                    <div className="space-y-4">
                      {[
                        { language: "Bengali", level: "Native", proficiency: 100 },
                        { language: "English", level: "Fluent", proficiency: 90 },
                        { language: "German", level: "Beginner", proficiency: 20 },
                      ].map((lang, index) => (
                        <motion.div
                          key={index}
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900 dark:text-white">{lang.language}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{lang.level}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${lang.proficiency}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RevealAnimation>

            {/* Right Column - Contact Details and Interests */}
            <RevealAnimation direction="right">
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-700">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                      <motion.div
                        className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <User className="h-6 w-6 text-white" />
                      </motion.div>
                      Contact Details
                    </h4>
                    <div className="space-y-4">
                      {personalDetails.map((detail, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-start gap-4 p-4 rounded-xl ${detail.bgColor} hover:shadow-lg transition-all duration-300`}
                          whileHover={{ scale: 1.02, x: 5 }}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className={`p-3 bg-gradient-to-r ${detail.color} rounded-full shadow-lg flex-shrink-0`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <detail.icon className="h-5 w-5 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">{detail.label}</h5>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{detail.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Interests & Hobbies */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-700">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                      <motion.div
                        className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart className="h-6 w-6 text-white" />
                      </motion.div>
                      Interests & Hobbies
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {interests.map((interest, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <interest.icon className={`h-5 w-5 ${interest.color}`} />
                          <span className="font-medium text-gray-900 dark:text-white">{interest.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
