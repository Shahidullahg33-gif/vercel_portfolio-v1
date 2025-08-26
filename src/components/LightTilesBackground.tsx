'use client'

import { useEffect, useRef, useState } from 'react'

const LightTilesBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const throttleRef = useRef<number>()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse updates to 30fps for better performance
      if (throttleRef.current) return
      
      throttleRef.current = window.setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        throttleRef.current = undefined
      }, 33) // ~30fps
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (throttleRef.current) {
        clearTimeout(throttleRef.current)
      }
    }
  }, [mounted])

  if (!mounted) return null

  // Create fewer, larger tiles for better performance
  const tileSize = 150
  const cols = Math.ceil(window.innerWidth / tileSize) + 1
  const rows = Math.ceil(window.innerHeight / tileSize) + 1

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(14, 165, 233, 0.1) 0%, 
              rgba(59, 130, 246, 0.05) 30%, 
              transparent 60%
            )
          `
        }}
      />
      
      {/* Simplified tile grid */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: Math.min(rows * cols, 50) }, (_, i) => {
          const row = Math.floor(i / cols)
          const col = i % cols
          const x = col * tileSize - tileSize/2
          const y = row * tileSize - tileSize/2
          
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - (x + tileSize/2), 2) + 
            Math.pow(mousePosition.y - (y + tileSize/2), 2)
          )
          
          const influence = Math.max(0, 1 - distance / 300)
          const opacity = influence * 0.1
          
          if (opacity < 0.01) return null
          
          return (
            <div
              key={i}
              className="absolute transition-opacity duration-500 ease-out"
              style={{
                left: x,
                top: y,
                width: tileSize,
                height: tileSize,
                opacity,
                background: `
                  radial-gradient(circle at center, 
                    rgba(14, 165, 233, 0.2) 0%, 
                    rgba(59, 130, 246, 0.1) 50%, 
                    transparent 80%
                  )
                `,
                borderRadius: '50%',
                filter: `blur(${Math.max(2, 8 - influence * 6)}px)`
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LightTilesBackground
