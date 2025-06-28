"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        // Show header when About section is in view or when scrolled past hero
        setIsVisible(rect.top <= window.innerHeight * 0.8)
      }

      // Update active section based on scroll position
      const sections = ["hero","about", "academics",  "skills", "projects", "achievements", "experience", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#academics", label: "Academics" },    
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50"
          style={{ margin: 0, padding: 0 }}
        >
          <motion.nav
            layout
            className="w-full backdrop-blur-md border-b bg-white/90 dark:bg-gray-900/90 border-gray-200/50 dark:border-gray-700/50 shadow-xl"
          >
            <div className="px-6 py-4">
              <div className="flex items-center justify-center">
                {/* Desktop Navigation - Centered */}
                <div className="hidden lg:flex items-center space-x-1">
                  {navItems.map((item) => (
                    <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={item.href}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          activeSection === item.href.slice(1)
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Theme Toggle */}
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleTheme}
                      className="ml-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <motion.div initial={false} animate={{ rotate: isDark ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      </motion.div>
                    </Button>
                  </motion.div>
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="lg:hidden flex items-center justify-between w-full">
                  <div></div> {/* Spacer for centering */}
                  <div className="flex items-center space-x-2">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-xl">
                        <motion.div
                          initial={false}
                          animate={{ rotate: isDark ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </motion.div>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded-xl"
                      >
                        <motion.div
                          initial={false}
                          animate={{ rotate: isMenuOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className={`block py-3 px-4 rounded-xl text-center font-medium transition-colors ${
                              activeSection === item.href.slice(1)
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
