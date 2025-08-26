'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { Github, Linkedin, Mail, Download, ExternalLink, Users, BookOpen, Globe } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  if (!mounted) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="spinner" />
      </section>
    )
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-sm text-pink-400 font-medium">
              Content Writer & Storyteller
            </span>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-gradient text-glow">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-medium faded mb-8"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-alt mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {personalInfo.heroDescription}
          </motion.p>

          {/* Featured stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 text-alt">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span className="text-sm">500+ Articles</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-alt">
              <Users className="w-5 h-5 text-pink-400" />
              <span className="text-sm">50+ Clients</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-alt">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-sm">10+ Languages</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 on-accent font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 pulse-button cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Your Move!
            </Link>

            <Link
              href={personalInfo.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 border-2 border-pink-500/50 text-pink-400 font-medium rounded-full transition-all duration-300 hover:bg-pink-500/10 hover:border-pink-500 hover:scale-105 glass cursor-pointer"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <Link
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10 group cursor-pointer"
            >
              <Github className="w-6 h-6 icon-muted group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10 group cursor-pointer"
            >
              <Linkedin className="w-6 h-6 icon-muted group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href={personalInfo.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10 group cursor-pointer"
            >
              <Users className="w-6 h-6 icon-muted group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="p-3 glass rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10 group cursor-pointer"
            >
              <Mail className="w-6 h-6 icon-muted group-hover:text-primary transition-colors" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
