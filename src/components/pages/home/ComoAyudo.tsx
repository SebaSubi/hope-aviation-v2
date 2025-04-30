'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'


const title = "¿Cómo puedo ayudar?"

export default function ComoAyudo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [showCursor, setShowCursor] = useState(true)
  const [displayTitle, setDisplayTitle] = useState('')


  useEffect(() => {
    if (inView) {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= title.length) {
          setDisplayTitle(title.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setShowCursor(false)
        }
      }, 100)

      return () => {
        clearInterval(interval)
        setShowCursor(false)
      }
    }
  }, [inView])

  return (
    <div ref={ref} className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      {/*<img
        alt=""
        src="/ElianDonation.jpg"
        className="absolute inset-0 -z-10 size-full object-cover opacity-15"
      />*/}
      
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
  <span className="bg-gradient-to-r from-indigo-900 via-orange-500 to-gray-300 bg-clip-text text-transparent animate-gradient">
    {displayTitle}
    {showCursor && <span className="animate-pulse">|</span>}
  </span>
</h2>

        </motion.div>
      </div>
    </div>
  )
}
  