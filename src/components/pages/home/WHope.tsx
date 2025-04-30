'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  { name: 'Partner projects', value: 12, suffix: '' },
  { name: 'Students worldwide', value: 300, suffix: '+' },
  { name: 'Hours per week', value: 40, suffix: '' },
  { name: 'Paid time off', value: 0, suffix: 'Unlimited' },
]

export default function WHope() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 segundos
      const steps = 60
      const intervals = stats.map((stat, index) => {
        const increment = stat.value / steps
        let current = 0

        return setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
          }
          setCounters(prev => {
            const newCounters = [...prev]
            newCounters[index] = Math.floor(current)
            return newCounters
          })
        }, duration / steps)
      })

      return () => intervals.forEach(interval => clearInterval(interval))
    }
  }, [inView])

  return (
    <div ref={ref} className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="/diversosCursos.jpg"
        className="absolute inset-0 -z-10 size-full opacity-15 object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
          >
            Who are we?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8"
          >
            The first integral program to prepare volunteers and pilots for humanitarian projects with aircrafts.
          </motion.p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col-reverse gap-1"
              >
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.name === 'Paid time off' ? 'Unlimited' : `${counters[index].toLocaleString()}${stat.suffix}`}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

