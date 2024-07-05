"use client";
import Title from '@/components/Title/Title';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useQuery } from '@tanstack/react-query';
import getSkillsData from '@/actions/server/SkillsAction';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FunctionComponent = () => {
    const skillsRef = useRef([]);
    // @ts-ignore
    const { data: getSkill, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => await getSkillsData()
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 1,
            },
        }),
        hover: { scale: 1.05 },
    };

    useEffect(() => {
        skillsRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        //@ts-ignore
                        start: "top 100%", end: "bottom 50%", scrub: 1, delay: index * 0.2
                    }
                }
            );
        });
    }, []);

    return (
        <section id="skills" className='relative pt-32 px-8'>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-slate-200 dark:from-gray-800 dark:to-slate-950 transform -skew-y-12 scale-150 opacity-30 -z-10 dark:-z-10"></div>
            <Title title='My Skills' />
            <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 rounded-3xl py-20'>
                {getSkill?.map((skill: any, index: any) => (
                    <motion.div
                        key={skill.icon}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        variants={variants}
                        className="relative z-10"
                    >
                        <div className='dark:bg-gray-950 bg-gray-400 bg-opacity-5 dark:bg-opacity-20 p-10 backdrop-blur-sm rounded-3xl transition-all duration-300'>
                            <Image className='mx-auto' src={skill.icon} width={60} height={60} alt='logo' />
                        </div>
                        <h3 className='text-center py-5 text-xl font-semibold'>{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
