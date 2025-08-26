'use client'
import { useEffect } from 'react'

export default function ParallaxDecor(){
  useEffect(()=>{
    if(!matchMedia('(pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    const onMove = (e:MouseEvent)=>{
      const { innerWidth:w, innerHeight:h } = window
      const rx = (e.clientX / w - .5)
      const ry = (e.clientY / h - .5)
      layers.forEach(el=>{
        const depth = parseFloat(el.dataset.parallax||'0')
        const tx = -rx * depth * 20
        const ty = -ry * depth * 20
        el.style.transform = `translate3d(${tx}px,${ty}px,0)`
      })
    }
    window.addEventListener('pointermove', onMove, { passive:true })
    return ()=> window.removeEventListener('pointermove', onMove)
  },[])
  return null
}