import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {

  const [state, handleSubmit] = useForm("mlgvneka");

  if (state.succeeded) {
    return (
      <p className='text-green-500 text-center pt-20'>
        Thanks for your message!
      </p>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id='contact-us'
      className='flex flex-col items-center gap-7 px-4 
      sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'
    >

      <Title
        title='Reach out to us'
        desc='from strategy to execution, we craft digital solutions that move your business forward.'
      />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >

        {/* Name */}
        <div className='flex flex-col'>
          <p className='mb-2 text-sm font-medium'>Your Name</p>

          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt='' />

            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='w-full p-3 text-sm outline-none'
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className='flex flex-col'>
          <p className='mb-2 text-sm font-medium'>Email id</p>

          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt='' />

            <input
              id='email'
              type='email'
              name='email'
              placeholder='Enter your email'
              className='w-full p-3 text-sm outline-none'
              required
            />
          </div>

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        {/* Message */}
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>

          <textarea
            id='message'
            name='message'
            rows={8}
            placeholder='Enter your message'
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'
            required
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className='w-max flex gap-2 bg-primary text-white
          text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'
        >
          {state.submitting ? "Sending..." : "Submit"}

          <img src={assets.arrow_icon} className='w-4' alt='' />
        </button>

      </motion.form>
    </motion.div>
  )
}

export default ContactUs