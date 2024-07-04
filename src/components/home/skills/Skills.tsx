"use client";
import Title from '@/components/Title/Title';
import { icons } from '@/config/icons';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useSkills } from '@/hooks/data/useSkills';

gsap.registerPlugin(ScrollTrigger);

const skillsStatics = [
    {
        name: "React",
        imageUrl: icons.react
    },
    {
        name: "Redux",
        imageUrl: icons.redux
    },
    {
        name: "PostgresSQL",
        imageUrl: icons.postgres
    },
    {
        name: "MongoDB",
        imageUrl: icons.mongodb
    },
    {
        name: "TailwindCSS",
        imageUrl: icons.tailwindcss
    },
    {
        name: "VSCode",
        imageUrl: icons.vscode
    },
];

const Skills: React.FunctionComponent = () => {
    const skillsRef = useRef([]);
    const {data} = useSkills();
    // @ts-ignore
    const skills = data?.data;
    console.log(skills)

    useEffect(() => {
        skillsRef.current.forEach((el, index) => {
         
            gsap.fromTo(el,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: el,
                    //@ts-ignore
                     start: "top 100%", end: "bottom 50%", scrub: 1, delay: index * 0.2 } }
            );
        });
    }, []);

    return (
        <section id="skills" className='pt-32 px-8 bg-opacity-10'>
            <Title title='My Skills' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 rounded-3xl py-20'>
                {skills?.map((skill:any, index:any) => (
                // @ts-ignore
                    <div key={skill.icon} ref={el => skillsRef.current[index] = el}>
                        <div className='dark:bg-gray-950 bg-gray-400 bg-opacity-5 dark:bg-opacity-20 p-10 backdrop-blur-sm rounded-3xl'>
                            <Image className='mx-auto' src={skill.icon} width={60} height={60} alt='logo' />
                        </div>
                        <h3 className='text-center py-5 text-xl font-semibold'>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
