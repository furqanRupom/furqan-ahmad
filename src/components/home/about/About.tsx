"use client";

import { images } from '@/config/images';
import Image from 'next/image';
import * as React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '@/animation/login/backgroundAnimation';
import Button from '@/ui/Button/Button';
import ScrollTriggerComponent from '@/animation/scrollTrigger/ScrollTrigger';
import Title from '@/components/Title/Title';

interface IAboutProps { }

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (

    <section id="about-me" className=' pt-12 lg:pt-32 pb-8   px-8'>
      <Title title='About Me' />

      <motion.div
        className='pt-16 flex items-center space-x-7 w-full'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image className='rounded-[100%] object-cover h-12 w-12 ring ring-red-400' src="https://i.ibb.co/w6W9PRJ/fab2.png" width={60} height={40} alt="about me" />
        <h3 className='text-3xl font-bold'>I Love</h3>
      </motion.div>

      <motion.div
        className='grid lg:grid-cols-2 lg:gap-x-12'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className='lg:max-w-xl grid sm:grid-cols-2 mt-8 gap-5'>
          {[
            { image: images.podcast, text: "Listening to Podcast", color: "bg-red-500" },
            { image: images.programming, text: "Programming", color: "bg-red-500" },
            { image: images.sleeping, text: "Sleeping", color: "bg-orange-500" },
            { image: images.moneybag, text: "Money", color: "bg-green-500" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${item.color} bg-opacity-15 backdrop-blur-lg p-3 items-center lg:text-xl font-semibold rounded-3xl flex space-x-3`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <Image src={item.image} width={40} height={40} alt={item.text} />
              <h3>{item.text}</h3>
            </motion.div>
          ))}
        </div>

        <div className='grid grid-cols-2 items-center gap-5 lg:gap-x-5 mt-8'>
          {[
            { number: "2+", label: "Years", subLabel: "Experience" },
            { number: "20+", label: "Projects", subLabel: "Completed" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className='lg:text-2xl p-5 text-center relative bg-gray-200 backdrop-blur-lg dark:bg-opacity-5 rounded-2xl'
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index + 4) * 0.2 }}
            >
              <AnimatedBackground>
                <div className="absolute w-20 h-20 overflow-hidden rounded-3xl bg-red-400 blur-xl -z-10 left-7  sm:top-[20%] sm:left-[40%]"></div>
              </AnimatedBackground>

              <div className='font-bold text-5xl relative'>
                {item.number}

              </div>
              <h4>{item.label}</h4>
              <h5>{item.subLabel}</h5>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className='mt-16 text-gray-800 dark:text-gray-500 bg-opacity-5 bg-gray-500 p-5 rounded-xl lg:text-lg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className='leading-relaxed'>
          I am a passionate and experienced full stack developer with a strong foundation in a variety of technologies, including PostgreSQL, MongoDB, Prisma, Mongoose, React, JavaScript, TypeScript, Redux, CSS, HTML, TailwindCSS, Express, Node, Next.js, NextAuth, and Firebase. Throughout my career, I have successfully completed several projects utilizing these tools, allowing me to develop a deep understanding and proficiency in each.
        </p>
        <p className='py-5 leading-relaxed'>
          In backend development, I follow a modular pattern to design our architecture, ensuring maintainability and scalability in Express applications. I am adept at creating Entity-Relationship (ER) diagrams to effectively plan and organize our database structures, which enhances the overall efficiency of our projects.
        </p>
        <p className='leading-relaxed'>
          My approach is driven by a commitment to delivering high-quality, responsive, and user-friendly applications. I am always eager to learn new technologies and best practices to continuously improve my skills and contribute to the success of the projects I work on.
        </p>
      </motion.div>

      <div className='flex justify-center py-4'>
        <Button link='#contact-me'>
          Contact Me
        </Button>
      </div>
      <div className='border-b  dark:border-gray-600'></div>
    </section>
  );
};

export default About;
