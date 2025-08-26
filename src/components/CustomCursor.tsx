'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const shouldScale = !!(target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.classList.contains('cursor-pointer'));
      
      if (shouldScale !== isHovering.current) {
        isHovering.current = shouldScale;
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${cursorPosition.current.x - 10}px, ${cursorPosition.current.y - 10}px) scale(${shouldScale ? 2 : 1})`;
        }
      }
    };

    const animateCursor = () => {
      if (!cursorRef.current) return;

      // Smooth interpolation for cursor movement
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * 0.15;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * 0.15;

      cursorRef.current.style.transform = `translate(${cursorPosition.current.x - 10}px, ${cursorPosition.current.y - 10}px) scale(${isHovering.current ? 2 : 1})`;

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Start animation loop
    requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'transform 0.1s ease-out',
        willChange: 'transform',
      }}
    />
  );
}
