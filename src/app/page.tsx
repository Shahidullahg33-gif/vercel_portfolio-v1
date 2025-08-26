'use client'

import { Suspense } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      
      <Footer />
    </main>
  )
}
