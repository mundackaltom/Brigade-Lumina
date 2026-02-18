"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function useIsIOS() {
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const ua = window.navigator.userAgent
    const iOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)

    setIsIOS(iOS)
  }, [])

  return isIOS
}

interface SafeMotionProps {
  children: React.ReactNode
  delay?: number
  y?: number
  duration?: number
}

export default function SafeMotion({ 
  children, 
  delay = 0, 
  y = 60, 
  duration = 0.8 
}: SafeMotionProps) {
  const isIOS = useIsIOS()

  if (isIOS) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay, duration, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  )
}