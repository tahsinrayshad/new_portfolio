"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  Zap,
  ChevronLeft,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { projects } from "@/lib/data";

// This page uses its own layout without the floating navbar
export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Mobile",
    "AI/ML",
    "Blockchain",
  ];

  const getProjectCategory = (technologies: string[]) => {
    if (
      technologies.some((tech) =>
        ["React", "Next.js", "Laravel", "PHP"].includes(tech)
      )
    )
      return "Web Development";
    if (technologies.some((tech) => ["Python", "AI", "ML"].includes(tech)))
      return "AI/ML";
    if (
      technologies.some((tech) =>
        ["Blockchain", "Smart Contracts"].includes(tech)
      )
    )
      return "Blockchain";
    return "Web Development";
  };

  // Function to parse period and get start date for sorting
  const parseProjectDate = (period: string) => {
    // Extract start date from period (e.g., "Jun 2025 - Present" -> "Jun 2025")
    const startPart = period.split(" - ")[0].trim();

    // Convert month abbreviation to number
    const monthMap: { [key: string]: number } = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };

    const [month, year] = startPart.split(" ");
    const monthNum = monthMap[month] || 1;
    const yearNum = parseInt(year) || 2024;

    return new Date(yearNum, monthNum - 1); // Month is 0-indexed in Date constructor
  };

  // Sort projects by start date (most recent first)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = parseProjectDate(a.period);
    const dateB = parseProjectDate(b.period);
    return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
  });

  const filteredProjects =
    selectedCategory === "All"
      ? sortedProjects
      : sortedProjects.filter(
          (project) =>
            getProjectCategory(project.technologies) === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
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
            {/* Navigation Back */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </motion.div>

            {/* Header */}
            <RevealAnimation>
              <div className="text-center mb-16">
                {/* <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Complete Portfolio</span>
                </motion.div> */}

                <motion.h1
                  className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  All Projects
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Explore my complete collection of projects, from web
                  applications to innovative solutions. Each project represents
                  a journey of learning, creativity, and technical expertise.
                </motion.p>

                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </RevealAnimation>

            {/* Project Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 border border-blue-200 dark:border-blue-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {projects.length}
                </div>
                <div className="text-gray-700 dark:text-gray-200 font-medium">
                  Total Projects
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 border border-green-200 dark:border-green-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {projects.filter((p) => p.status === "Completed").length}
                </div>
                <div className="text-gray-700 dark:text-gray-200 font-medium">
                  Completed
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30 border border-orange-200 dark:border-orange-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {projects.filter((p) => p.status === "In Progress").length}
                </div>
                <div className="text-gray-700 dark:text-gray-200 font-medium">
                  In Progress
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            {/* <RevealAnimation delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 mr-4">
                  <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    Filter by:
                  </span>
                </div>
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

            {/* Projects Grid */}
            <motion.div
              key={selectedCategory}
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full max-w-6xl">
                {filteredProjects.length % 2 === 1 ? (
                  // For odd number of projects, use flexbox to center the last card
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
                          <Card className="h-full overflow-hidden border-0 shadow-xl bg-white dark:bg-gray-900 relative">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                            />
                            <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-lg" />

                            <CardContent className="p-8 relative z-20">
                              {/* ...existing code... */}

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
                                      variant={
                                        project.status === "In Progress"
                                          ? "default"
                                          : "secondary"
                                      }
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
                                animate={{
                                  opacity: hoveredProject === index ? 1 : 0.8,
                                }}
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
                                      animate={{ opacity: 1, scale: 1 }}
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
                              <div className="flex gap-3 relative z-30">
                                {project.github ? (
                                  <Button
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer transition-all duration-200 hover:scale-105 relative z-40"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      window.open(
                                        project.github,
                                        "_blank",
                                        "noopener,noreferrer"
                                      );
                                    }}
                                  >
                                    <Github className="h-4 w-4 mr-2" />
                                    View Code
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                  </Button>
                                ) : (
                                  <Button
                                    disabled
                                    className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                  >
                                    <Github className="h-4 w-4 mr-2" />
                                    Coming Soon
                                  </Button>
                                )}

                                {project.demo && project.demo !== "#" ? (
                                  <Button
                                    variant="outline"
                                    className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent cursor-pointer transition-all duration-200 hover:scale-105 relative z-40"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      window.open(
                                        project.demo,
                                        "_blank",
                                        "noopener,noreferrer"
                                      );
                                    }}
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </Button>
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
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg pointer-events-none z-10"
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: hoveredProject === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              />
                            </CardContent>
                          </Card>
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
                          <Card className="h-full overflow-hidden border-0 shadow-xl bg-white dark:bg-gray-900 relative">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                            />
                            <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-lg" />

                            <CardContent className="p-8 relative z-20">
                              {/* ...existing code... */}

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
                                      variant={
                                        project.status === "In Progress"
                                          ? "default"
                                          : "secondary"
                                      }
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
                                animate={{
                                  opacity: hoveredProject === index ? 1 : 0.8,
                                }}
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
                                      animate={{ opacity: 1, scale: 1 }}
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
                              <div className="flex gap-3 relative z-30">
                                {project.github ? (
                                  <Button
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer transition-all duration-200 hover:scale-105 relative z-40"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      window.open(
                                        project.github,
                                        "_blank",
                                        "noopener,noreferrer"
                                      );
                                    }}
                                  >
                                    <Github className="h-4 w-4 mr-2" />
                                    View Code
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                  </Button>
                                ) : (
                                  <Button
                                    disabled
                                    className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                  >
                                    <Github className="h-4 w-4 mr-2" />
                                    Coming Soon
                                  </Button>
                                )}

                                {project.demo && project.demo !== "#" ? (
                                  <Button
                                    variant="outline"
                                    className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent cursor-pointer transition-all duration-200 hover:scale-105 relative z-40"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      window.open(
                                        project.demo,
                                        "_blank",
                                        "noopener,noreferrer"
                                      );
                                    }}
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </Button>
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
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg pointer-events-none z-10"
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: hoveredProject === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              />
                            </CardContent>
                          </Card>
                        </motion.div>
                      </RevealAnimation>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* No Projects Found */}
            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-gray-400 dark:text-gray-600 mb-4">
                  <Sparkles className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    No Projects Found
                  </h3>
                  <p>
                    Try selecting a different category to see more projects.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
