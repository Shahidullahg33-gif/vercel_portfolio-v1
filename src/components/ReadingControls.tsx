'use client'
import { useEffect, useState } from 'react'

export default function ReadingControls(){
  const [scale,setScale] = useState<string>('base')
  const [reading,setReading] = useState(false)

  useEffect(()=>{
    const root = document.documentElement
    root.classList.remove('font-scale-lg','font-scale-xl')
    if(scale==='lg') root.classList.add('font-scale-lg')
    if(scale==='xl') root.classList.add('font-scale-xl')
    localStorage.setItem('pref-font-scale', scale)
  },[scale])

  useEffect(()=>{
    const stored = localStorage.getItem('pref-font-scale')
    if(stored) setScale(stored)
    const r = localStorage.getItem('pref-reading-mode')==='1'
    setReading(r)
    if(r) document.documentElement.classList.add('reading-mode')
  },[])

  function toggleReading(){
    const r = !reading
    setReading(r)
    document.documentElement.classList.toggle('reading-mode', r)
    localStorage.setItem('pref-reading-mode', r?'1':'0')
  }

  return (
    <div className="fixed bottom-4 right-4 z-[1100] flex flex-col gap-2 bg-[var(--c-surface)]/80 backdrop-blur-md border border-[var(--c-border)] rounded-md p-2 shadow-lg">
      <div className="flex gap-1" aria-label="Font size controls">
        {['base','lg','xl'].map(s => (
          <button key={s} aria-pressed={scale===s} onClick={()=>setScale(s)} className={`text-xs px-2 py-1 rounded border ${scale===s?'bg-[var(--c-accent)] text-white border-[var(--c-accent)]':'bg-transparent border-[var(--c-border)]'}`}>{s==='base'?'A':s==='lg'?'A+':'A++'}</button>
        ))}
      </div>
  <button onClick={toggleReading} aria-pressed={reading} className={`text-xs px-2 py-1 rounded border ${reading?'bg-[var(--c-accent)] text-white border-[var(--c-accent)]':'bg-transparent border-[var(--c-border)]'}`}>{reading?'Reading ✓':'Reading'}</button>
    </div>
  )
}