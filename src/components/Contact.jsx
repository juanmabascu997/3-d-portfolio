import { motion } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const formRef = useRef()
  const [loading, setLoading] = useState(false)

  const handledChange = (event) =>{
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_1fcpi9m',
      "template_6sfz2g9", 
      {
        from_name: form.name,
        to_name: 'Juanma',
        from_email: form.email,
        to_email: 'jmb972012@gmail.com',
        message: form.message
      },
      'jJ_V6LqlDe_hsHW7a'
    ).then( () => {
      alert('Thanks for your message!')
      setForm({
        name: '',
        email: '',
        message: '',
      })
      setLoading(false)
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong, please try again!')   
    })
  }
  
  return (
    <div
      className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-1000 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text"
              name='name'
              value={form.name}
              onChange={handledChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email"
              name='email'
              value={form.email}
              onChange={handledChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handledChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>  
  )
}

export default SectionWrapper(Contact, "contact")