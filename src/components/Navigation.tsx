'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Contact', href: '/contact' },
]

const themes = ['light', 'dark', 'colorful'] as const
type Theme = typeof themes[number]

function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('pref-theme-v2') as Theme
    if (saved && themes.includes(saved)) {
      setCurrentTheme(saved)
    } else {
      setCurrentTheme('light')
    }
  }, [])

  const switchTheme = () => {
    const currentIndex = themes.indexOf(currentTheme)
    const nextIndex = (currentIndex + 1) % themes.length
    const nextTheme = themes[nextIndex]
    
    setCurrentTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    localStorage.setItem('pref-theme-v2', nextTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="hidden md:block fixed top-4 right-4 z-[60]">
      <button
        onClick={switchTheme}
        className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-0.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        aria-label={`Current theme: ${currentTheme}. Click to switch themes.`}
      >
        <div className="relative bg-black/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
          {/* Animated indicator */}
          <div 
            className="absolute left-0.5 top-0.5 bottom-0.5 w-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${themes.indexOf(currentTheme) * 16}px)`
            }}
          />
          
          {/* Theme labels */}
          <div className="relative z-10 flex items-center gap-2 text-xs font-medium">
            {themes.map((theme) => (
              <span
                key={theme}
                className={`transition-colors duration-300 capitalize px-0.5 ${
                  currentTheme === theme ? 'text-white' : 'text-gray-400'
                }`}
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </button>
    </div>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activePath, setActivePath] = useState('/')

  useEffect(() => {
    setActivePath(window.location.pathname)
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
  <nav className={`site-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      {/* Theme Toggle - Positioned in top right */}
      <ThemeToggle />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
          >
            {personalInfo.name.split(' ').map(name => name[0]).join('')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 nav-link ${
                    activePath === item.href ? 'is-active' : ''
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
              className={`block px-3 py-2 text-base font-medium transition-all duration-200 rounded-md nav-link ${activePath===item.href?'is-active':''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
