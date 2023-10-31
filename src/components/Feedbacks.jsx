import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials as testimonials_en } from '../constants/index'
import { testimonials as testimonials_es } from '../constants/index_es'
import { useLanguage } from '../hoc/LanguageContext'

const FeedbacksCard = ({index, testimonial, name, designation, company, image}) => {
  return (
    <motion.div 
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
    >
      <p className='text-white text-[48px] font-black'>"</p>
      <div
        className='mt-1'
      >
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div
          className='mt-7 flex justify-between items-center gap-1'
        >
          <div
            className='flex flex-1 flex-col'
          >
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span>{name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`feedback-${name}`} className='w-10 h-10 rounded-full object-cover' />
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  const { language } = useLanguage();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    if (language == "es") setTestimonials(testimonials_es);
    else setTestimonials(testimonials_en);
  }, []);

  useEffect(() => {
    if (language == "es") setTestimonials(testimonials_es);
    else setTestimonials(testimonials_en);
  }, [language]);

  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div
          variants={textVariant()}
        >
          <p className={`${styles.sectionSubText}`}>
           {language == "es" ? "Lo que otros dicen" : "What others say"}
          </p>
          <h2 className={`${styles.sectionHeadText}`}>{language == "es" ? "Testimonios." : "Testimonials."}</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}
      > 
        {
          testimonials.map((testimonial, index) => (
              <FeedbacksCard key={testimonial.name} index={index} {...testimonial} />
            )
          )
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "feedback" )