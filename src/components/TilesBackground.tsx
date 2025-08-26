'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface Tile {
  id: number
  x: number
  y: number
  baseRotation: number
  animationDelay: number
}

const TilesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [tiles, setTiles] = useState<Tile[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const createTiles = () => {
      const tilesArray: Tile[] = []
      const tileSize = 80
      const cols = Math.ceil(window.innerWidth / tileSize) + 3
      const rows = Math.ceil(window.innerHeight / tileSize) + 3

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          tilesArray.push({
            id: i * cols + j,
            x: j * tileSize - tileSize,
            y: i * tileSize - tileSize,
            baseRotation: Math.random() * 360,
            animationDelay: Math.random() * 2000
          })
        }
      }
      setTiles(tilesArray)
    }

    createTiles()
    window.addEventListener('resize', createTiles)

    return () => {
      window.removeEventListener('resize', createTiles)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    animationRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [handleMouseMove])

  const getTileStyle = useCallback((tile: Tile) => {
    const centerX = tile.x + 40
    const centerY = tile.y + 40
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) + 
      Math.pow(mousePosition.y - centerY, 2)
    )
    
    const maxDistance = 180
    const influence = Math.max(0, Math.min(1, 1 - distance / maxDistance))
    
    const mouseAngle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX)
    const rotationX = Math.sin(mouseAngle) * influence * 25
    const rotationY = Math.cos(mouseAngle) * influence * 25
    const scale = 1 + influence * 0.3
    const translateZ = influence * 30
    const glowIntensity = influence * 0.9
    const opacity = 0.02 + influence * 0.15

    return {
      transform: `
        translate3d(${tile.x}px, ${tile.y}px, ${translateZ}px) 
        rotateX(${rotationX}deg) 
        rotateY(${rotationY}deg) 
        rotateZ(${tile.baseRotation + influence * 45}deg)
        scale3d(${scale}, ${scale}, ${scale})
      `,
      opacity,
      boxShadow: `
        0 0 ${15 + glowIntensity * 30}px rgba(14, 165, 233, ${glowIntensity * 0.6}),
        0 0 ${30 + glowIntensity * 60}px rgba(59, 130, 246, ${glowIntensity * 0.3}),
        inset 0 0 ${10 + glowIntensity * 20}px rgba(14, 165, 233, ${glowIntensity * 0.2})
      `,
      filter: `blur(${Math.max(0, 2 - influence * 2)}px) brightness(${1 + influence * 0.5})`
    }
  }, [mousePosition])

  if (!mounted) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ 
        perspective: '1200px',
        perspectiveOrigin: '50% 50%'
      }}
    >
      <div className="tiles-container w-full h-full">
        {tiles.map((tile) => {
          const style = getTileStyle(tile)
          return (
            <div
              key={tile.id}
              className="tile-3d interactive-tile absolute w-20 h-20"
              style={{
                ...style,
                background: `
                  linear-gradient(135deg, 
                    rgba(14, 165, 233, 0.12) 0%, 
                    rgba(59, 130, 246, 0.08) 30%,
                    rgba(147, 51, 234, 0.04) 60%,
                    rgba(14, 165, 233, 0.02) 100%
                  )
                `,
                backdropFilter: 'blur(12px) saturate(150%)',
                border: '1px solid rgba(14, 165, 233, 0.15)',
                borderRadius: '12px',
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity, box-shadow',
                transition: 'opacity 0.3s ease, filter 0.3s ease',
                animationDelay: `${tile.animationDelay}ms`
              }}
            >
              {/* Inner geometric pattern */}
              <div 
                className="absolute inset-2 rounded-lg opacity-40"
                style={{
                  background: `
                    linear-gradient(45deg, 
                      transparent 30%, 
                      rgba(14, 165, 233, 0.2) 50%, 
                      transparent 70%
                    ),
                    linear-gradient(-45deg, 
                      transparent 30%, 
                      rgba(59, 130, 246, 0.15) 50%, 
                      transparent 70%
                    )
                  `,
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(1px)'
                }}
              />
              
              {/* Center dot */}
              <div 
                className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-cyan-400 opacity-60"
                style={{
                  transform: 'translate(-50%, -50%) translateZ(2px)',
                  boxShadow: '0 0 4px rgba(14, 165, 233, 0.8)'
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TilesBackground
