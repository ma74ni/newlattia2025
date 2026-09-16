"use client";

import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const ConfettiOnLoad = () => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      startVelocity: 45,
      origin: { y: 0.6 },
      colors: ['#964091', '#f18700', '#fff6a0'],
    })
  }, [])

  return null
}

export default ConfettiOnLoad
