'use client'

import { Suspense } from 'react'
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span data-parallax="0.25" className="decor absolute top-24 left-6 text-9xl font-black opacity-[0.02] select-none">STORY</span>
        <span data-parallax="0.45" className="decor absolute bottom-32 right-10 text-8xl font-black opacity-[0.02] select-none">STRATEGY</span>
      </div>
      
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
