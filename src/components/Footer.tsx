'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-arctic-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-arctic-300 mb-6 leading-relaxed">
              {personalInfo.title} passionate about creating innovative web solutions 
              and beautiful user experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-arctic-800 rounded-lg hover:bg-arctic-700 transition-colors group"
              >
                <Github className="w-5 h-5 text-arctic-300 group-hover:text-white" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-arctic-800 rounded-lg hover:bg-arctic-700 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-arctic-300 group-hover:text-white" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-arctic-800 rounded-lg hover:bg-arctic-700 transition-colors group"
              >
                <Mail className="w-5 h-5 text-arctic-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-arctic-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-arctic-400 text-sm">Email</p>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-arctic-300 hover:text-white transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-arctic-400 text-sm">Phone</p>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-arctic-300 hover:text-white transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-arctic-400 text-sm">Location</p>
                <p className="text-arctic-300">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-arctic-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-arctic-400 mb-4 md:mb-0">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span>and lots of coffee ☕</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-ice-600 to-frost-600 rounded-lg hover:from-ice-500 hover:to-frost-500 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-arctic-800 text-center">
          <p className="text-arctic-400 text-sm">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. 
            Deployed on Vercel.
          </p>
          <p className="text-arctic-500 text-xs mt-2">
            This portfolio is open source. Feel free to check out the code on{' '}
            <a 
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ice-400 hover:text-ice-300 transition-colors underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
