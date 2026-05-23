import React from 'react'
import assets from '../assets/assets'
import Title from '../components/Title'
import Servicecard from './Servicecard'
import {motion} from "motion/react"
const Services = () => {

  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions...',
      icon: assets.ads_icon
    },
    {
      title: 'Content Marketing',
      description: 'We turn bold ideas into powerful digital solutions...',
      icon: assets.marketing_icon
    },
    {
      title: 'Content Writing',
      description: 'We turn bold ideas into powerful digital solutions...',
      icon: assets.content_icon
    },
    {
      title: 'Social Media',
      description: 'We turn bold ideas into powerful digital solutions...',
      icon: assets.social_icon
    }
  ]

  return (
    <motion.div 
          initial="hidden"
whileInView="visible"
transition={{staggerChildren:0.2}}
viewport={{once:true}}
    
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white'>

      <img 
        src={assets.bgImage2} 
        alt=""  
        className='absolute -top-110 -left-70 -z-10 dark:hidden'
      />

      <Title 
        title='How can we help?'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      {/* ✅ CARDS HERE (INSIDE RETURN) */}
      <div className="flex flex-wrap justify-center mt-10">
        {servicesData.map((item, index) => (
          <Servicecard key={index} service={item} />
        ))}
      </div>

    </motion.div>
  )
}

export default Services