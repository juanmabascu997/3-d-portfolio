import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, image, links, index, tags, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75 )}>
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
              onClick={()=> window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        
        <div
          className="mt-5"
        >
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div
          className="mt-4 flex flex-wrap gap-2"
        >
          {
            tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3lx leading-[30px]"
        >
          The following projects are the ones I've been working on lately. I
          highlight that in some of them I do not do the work alone, but rather
          work as a team. The projects that I have worked on are those that I
          have carried out in the area of web and mobile application
          development, and all of them have contributed to my professional
          growth. I highlight those in which I have participated, but I cannot
          share repositories in this regard, among which is the implementation,
          improvement, and maintenance of the telemedicine project in Acudir
          Emergencias Médicas, being among the most challenging on a personal
          and professional level.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {
          projects.map((project, index) =>(
            <ProjectCard 
              key={`project-${index}`}
              {...project}
              index={index}
            />
          ))
        }
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

// Los siguientes proyectos son los que he trabajado últimamente. Destaco que en algunos de ellos no
// realice el trabajo solo, sino trabajando en equipo.
// Los proyectos que he trabajado son los que he realizado en el área de desarrollo de aplicaciones web y móvil,
// y todos contribuyeron a mi crecimiento profesional.
// Destaco aquellos en los que he participado, pero no puedo compartir repositorios al respecto, entre los cuales
// está la implementación, mejora, y mantenimiento del proyecto de telemedicina en Acudir Emergencias Médicas, encontrándose entre
// los más desafiantes a nivel personal y profesional.
