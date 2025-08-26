'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const pageAccents: Record<string,string> = {
  '/': 'var(--c-accent)',
  '/portfolio': 'hsl(190 70% 45%)',
  '/services': 'hsl(14 90% 55%)',
  '/articles': 'hsl(280 70% 55%)',
  '/contact': 'hsl(340 80% 55%)',
  '/about': 'hsl(210 70% 50%)'
}

export default function Enhancements(){
  const pathname = usePathname()

  useEffect(()=>{
    // Reduced motion class
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion')
    }

    // Accent per page
    const base = pathname.replace(/\/$/,'') || '/'
    const accent = pageAccents[base] || 'var(--c-accent)'
    document.documentElement.style.setProperty('--c-accent-dynamic', accent)

    // Intersection reveal
    const reveals = Array.from(document.querySelectorAll('.reveal'))
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) } })
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
      reveals.forEach(r => io.observe(r))
    } else {
      reveals.forEach(r => r.classList.add('is-in'))
    }

    // Tilt cards (disabled for minimalist theme or reduced-motion)
    const root = document.documentElement
    const isMinimalist = root.dataset.theme === 'minimalist'
    if (!isMinimalist && !root.classList.contains('reduced-motion') && matchMedia('(pointer:fine)').matches){
      const cards = document.querySelectorAll<HTMLElement>('.tilt')
      const max = 8
      cards.forEach(card => {
        function move(e:PointerEvent){
          const r = card.getBoundingClientRect();
          const x = ((e.clientX - r.left)/r.width - .5)*2
          const y = ((e.clientY - r.top)/r.height - .5)*2
          card.style.transform = `translateZ(0) rotateX(${-y*max}deg) rotateY(${x*max}deg)`
        }
        function leave(){ card.style.transform = '' }
        card.addEventListener('pointermove', move)
        card.addEventListener('pointerleave', leave)
      })
    }
  }, [pathname])

  return null
}
