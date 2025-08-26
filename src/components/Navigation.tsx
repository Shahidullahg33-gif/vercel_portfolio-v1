'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      let current = 'home'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
          }
        }
      }
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="#home" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
          >
            {personalInfo.name.split(' ').map(name => name[0]).join('')}
          </Link>

          {/* Theme Switcher */}
          <form className="hidden md:flex gap-2 items-center mr-6" aria-label="Theme selector">
            {['dark','soothing','light','minimalist','colorful'].map(t => (
              <label key={t} className="text-xs text-gray-300 cursor-pointer flex items-center gap-1">
                <input
                  type="radio"
                  name="theme"
                  value={t}
                  defaultChecked={t==='dark'}
                  onChange={(e)=>{document.documentElement.dataset.theme=e.target.value;localStorage.setItem('pref-theme-v2',e.target.value);}}
                  className="accent-pink-500"
                  aria-label={`Switch to ${t} theme`}
                />
                {t}
              </label>
            ))}
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-ice-600 ${
                    activeSection === item.href.slice(1)
                      ? 'text-ice-600 border-b-2 border-ice-600'
                      : 'text-arctic-700 hover:border-b-2 hover:border-ice-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-arctic-700 hover:text-ice-600 hover:bg-arctic-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ice-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                }`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-md border-t border-arctic-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className={`block px-3 py-2 text-base font-medium transition-all duration-200 rounded-md ${
                activeSection === item.href.slice(1)
                  ? 'text-ice-600 bg-ice-50'
                  : 'text-arctic-700 hover:text-ice-600 hover:bg-arctic-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
