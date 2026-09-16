"use client";

import { useEffect, useRef, useState } from 'react'
import Banner from './Banner'
import AniversarioBanner from './AniversarioBanner'

const AUTOPLAY_MS = 8000
const FADE_MS = 300

const slides = [AniversarioBanner, Banner]

const HomeCarousel = () => {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [paused, setPaused] = useState(false)
  const fadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (next: number) => {
    if (next === index) return
    setVisible(false)
    fadeTimeout.current = setTimeout(() => {
      setIndex(next)
      setVisible(true)
    }, FADE_MS)
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      goTo((index + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, index])

  useEffect(() => {
    return () => {
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current)
    }
  }, [])

  const Slide = slides[index]

  return (
    <div
      className="max-w-6xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <Slide />
      </div>

      <div className="flex justify-center gap-2 pt-4 pb-6">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            aria-current={i === index}
            className={`w-2.5 h-2.5 rounded-full transition cursor-pointer ${
              i === index ? 'bg-purpleMain' : 'bg-purpleMain/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HomeCarousel
