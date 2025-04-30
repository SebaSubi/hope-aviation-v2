'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const donationOptions = [
  {
    id: 1,
    title: 'Donación General',
    description: 'Apoya nuestros programas de capacitación y operaciones generales.',
    amount: '$50',
    side: 'left',
  },
  {
    id: 2,
    title: 'Beca de Piloto',
    description: 'Ayuda a financiar la formación de un piloto humanitario.',
    amount: '$500',
    side: 'right',
  },
  {
    id: 3,
    title: 'Proyecto Específico',
    description: 'Elige un proyecto específico para apoyar.',
    amount: '$100',
    side: 'left',
  },
]

export default function Donations() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Haz tu donación
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Tu contribución hace posible nuestra misión
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {donationOptions.map((option) => (
              <motion.div
                key={option.id}
                initial={{ 
                  opacity: 0, 
                  x: option.side === 'left' ? -100 : 100 
                }}
                animate={inView ? { 
                  opacity: 1, 
                  x: 0 
                } : { 
                  opacity: 0, 
                  x: option.side === 'left' ? -100 : 100 
                }}
                transition={{ 
                  duration: 0.8,
                  delay: option.id * 0.2
                }}
                className="flex flex-col bg-gray-800/50 p-8 rounded-xl"
              >
                <dt className="text-xl font-semibold leading-7 text-white">
                  {option.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{option.description}</p>
                  <p className="mt-6">
                    <span className="text-2xl font-semibold text-white">
                      {option.amount}
                    </span>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 