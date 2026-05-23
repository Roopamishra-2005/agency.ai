import React, { useState } from 'react'
import { motion } from "framer-motion"

const Servicecard = ({ service, index }) => {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}

      className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border 
      border-gray-200 dark:border-gray-700 hover:border-blue-500 
      transition-all duration-300'

      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >

      {/* ✨ Directional Glow */}
      <div
        className={`pointer-events-none absolute rounded-full 
        bg-blue-500/30 blur-xl transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          top: position.y - 60,
          left: position.x - 60,
          width: "120px",
          height: "120px"
        }}
      />

      {/* Content */}
      <div className='flex items-center gap-6 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur relative z-10'>
        
        <div className='bg-gray-100 p-2 rounded-full'>
          <img src={service.icon} alt="" className='w-12 h-12' />
        </div>

        <div>
          <h3 className='font-bold'>{service.title}</h3>
          <p className='text-sm mt-2'>{service.description}</p>
        </div>

      </div>

    </motion.div>
  )
}

export default Servicecard