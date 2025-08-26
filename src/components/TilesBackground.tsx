'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const TilesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle mouse updates for better performance
    if (animationRef.current) return
    
    animationRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      animationRef.current = undefined
    })
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // Reduced number of tiles for better performance
    const tileSize = 120
    const cols = Math.ceil(window.innerWidth / tileSize)
    const rows = Math.ceil(window.innerHeight / tileSize)
    
    interface CanvasTile {
      x: number
      y: number
      baseOpacity: number
    }
    
    const tiles: CanvasTile[] = []
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        tiles.push({
          x: j * tileSize,
          y: i * tileSize,
          baseOpacity: Math.random() * 0.1 + 0.02
        })
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      tiles.forEach(tile => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - (tile.x + tileSize/2), 2) + 
          Math.pow(mousePosition.y - (tile.y + tileSize/2), 2)
        )
        
        const maxDistance = 200
        const influence = Math.max(0, 1 - distance / maxDistance)
        
        if (influence > 0.01) { // Only render tiles with significant influence
          const opacity = tile.baseOpacity + influence * 0.15
          const glowSize = 10 + influence * 30
          
          // Create gradient
          const gradient = ctx.createRadialGradient(
            tile.x + tileSize/2, tile.y + tileSize/2, 0,
            tile.x + tileSize/2, tile.y + tileSize/2, glowSize
          )
          gradient.addColorStop(0, `rgba(14, 165, 233, ${opacity * 0.8})`)
          gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.4})`)
          gradient.addColorStop(1, `rgba(14, 165, 233, 0)`)
          
          ctx.fillStyle = gradient
          ctx.fillRect(tile.x, tile.y, tileSize, tileSize)
          
          // Add border effect for high influence tiles
          if (influence > 0.3) {
            ctx.strokeStyle = `rgba(14, 165, 233, ${influence * 0.3})`
            ctx.lineWidth = 1
            ctx.strokeRect(tile.x + 10, tile.y + 10, tileSize - 20, tileSize - 20)
          }
        }
      })
      
      requestAnimationFrame(render)
    }
    
    render()

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mounted, mousePosition, handleMouseMove])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        opacity: 0.6,
        mixBlendMode: 'screen'
      }}
    />
  )
}

export default TilesBackground
