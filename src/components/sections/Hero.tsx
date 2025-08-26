'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
  }

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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-arctic-50 via-ice-50 to-frost-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ice-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-frost-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animation-delay-2000" />
        <div className="absolute -bottom-10 left-20 w-72 h-72 bg-arctic-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl floating">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-ice-300 opacity-30" />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-arctic-600 mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-arctic-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.heroDescription}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-ice-500 to-frost-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg pulse-button"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Link>

            <Link
              href={personalInfo.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 border-2 border-ice-500 text-ice-600 font-medium rounded-full transition-all duration-300 hover:bg-ice-500 hover:text-white hover:scale-105"
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
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-arctic-600 group-hover:text-ice-600 transition-colors" />
            </Link>
            <Link
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-arctic-600 group-hover:text-ice-600 transition-colors" />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-arctic-600 group-hover:text-ice-600 transition-colors" />
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
          <span className="text-sm text-arctic-500 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-arctic-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-arctic-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
