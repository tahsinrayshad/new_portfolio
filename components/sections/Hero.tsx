"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Facebook,
  ExternalLink,
  Phone,
  Mail,
  Download,
  ArrowDown,
  Sparkles,
  Code,
  Award,
} from "lucide-react"
import Link from "next/link"
import { personalInfo } from "@/lib/data"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-40">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200/40 dark:bg-blue-800/40 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/40 dark:bg-purple-800/40 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Additional floating icons */}
      <motion.div
        className="absolute top-1/4 right-1/4 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Code className="h-8 w-8 text-blue-600" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 opacity-20"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Award className="h-6 w-6 text-purple-600" />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div className="max-w-5xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          {/* Enhanced Header with Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full mb-6 border border-blue-200/50 dark:border-blue-700/50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" /> */}
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
            >
              {personalInfo.name.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mr-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Enhanced Title with Gradient */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-lg md:text-xl text-white font-semibold">{personalInfo.title}</p>
            </motion.div>
          </motion.div>

          {/* Enhanced Bio */}
          <motion.div
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: personalInfo.bio }}
          />

          {/* Enhanced Contact Info Cards */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.div
              className="flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                <Phone className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">{personalInfo.phone}</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">{personalInfo.email}</span>
            </motion.div>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link href="#contact">
                  Get In Touch
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                asChild
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                asChild
              >
                <Link href="https://drive.google.com/file/d/1CPkwv7qRf6OR01CMT2ci5G2l8WgxxuDA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5 mr-2" />
                  Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-20">
            {[
              {
                href: personalInfo.socialLinks.linkedin,
                icon: Linkedin,
                color: "hover:text-blue-600",
                bg: "hover:bg-blue-50 dark:hover:bg-blue-900/50",
              },
              {
                href: personalInfo.socialLinks.github,
                icon: Github,
                color: "hover:text-gray-900 dark:hover:text-white",
                bg: "hover:bg-gray-50 dark:hover:bg-gray-700",
              },
              {
                href: personalInfo.socialLinks.facebook,
                icon: Facebook,
                color: "hover:text-blue-600",
                bg: "hover:bg-blue-50 dark:hover:bg-blue-900/50",
              },
              {
                href: personalInfo.socialLinks.kaggle,
                icon: ExternalLink,
                color: "hover:text-orange-500",
                bg: "hover:bg-orange-50 dark:hover:bg-orange-900/50",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  className={`text-gray-600 dark:text-gray-300 ${social.color} ${social.bg} transition-all duration-300 p-4 rounded-full backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg block`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer group"
            >
              <Link
                href="#about"
                className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                <span className="text-sm font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                  Scroll to explore
                </span>
                <div className="p-3 rounded-full border-2 border-gray-400 dark:border-gray-500 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg">
                  <ArrowDown className="h-5 w-5" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
