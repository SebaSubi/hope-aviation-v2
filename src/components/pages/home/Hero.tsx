'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div id="hero-section" className="bg-white w-full h-full object-cover relative overflow-hidden">
      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        src="/Hero1.svg"
        alt="Hero Image"
        className="w-full h-[104%] object-cover -my-[2%]"
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-1/3 left-[14%]"
      >
        <h1
          className="text-white text-center"
          style={{
            fontSize: 80,
            lineHeight: 1.3,
            fontWeight: 300,
          }}
        >
          HOPE
          <br />
          AVIATION
        </h1>
        <p className="text-white text-xl m-[-10px]">
          Humanitarian Outreach through Pilot Education
        </p>
      </motion.div>
    </div>
  );
}
