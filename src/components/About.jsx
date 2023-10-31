import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services as services_en } from '../constants/index'
import { services as services_es } from '../constants/index_es'

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useLanguage } from "../hoc/LanguageContext";

const ServiceCard = ({ service, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("rigth", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        src={service.icon}
        alt={service.title}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { language } = useLanguage();
  const [services, setServices] = useState([]);

  useEffect(() => {
    if(language == 'es')
    setServices(services_es)
    else
    setServices(services_en)
  }, []);

  useEffect(() => {
    if(language == 'es')
    setServices(services_es)
    else
    setServices(services_en)
  }, [language]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>{language == 'en' ? 'Overview.' : 'Quien soy'}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {
          language == 'es' ? 
          " Soy un desarrollador web. Personalmente me gusta dar vida a ideas y proyectos. Deja que la creatividad sea visual. Actualmente mis conocimientos me permiten desarrollar y trabajar en las siguientes tecnologías: HTML, CSS, JavaScript, Typecript y C#." : 
          " I am a web developer. I personally like to bring ideas and projects to life. Let creativity be visual. Currently, my knowledge allows me to develop and work in the following technologies: HTML, CSS, JavaScript, Typescript and C#."
        }
       
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
