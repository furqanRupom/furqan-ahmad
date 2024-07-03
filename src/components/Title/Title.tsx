"use client";
import * as React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";
import './Title.css';

gsap.registerPlugin(ScrollTrigger);

interface ITitleProps {
    title: string;
}

const Title: React.FunctionComponent<ITitleProps> = ({ title }) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const backgroundTextRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (titleRef.current && backgroundTextRef.current) {
            gsap.fromTo(
                backgroundTextRef.current,
                { x: -10, opacity: 1 },
                {
                    x: 0,
                    opacity: 0.2,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    }
                }
            );
        }
    }, []);

    return (
        <>
            <motion.h3
                ref={titleRef}
                className="text-center pt-12 font-bold text-3xl lg:text-4xl mx-auto bg-opacity-5 rounded-3xl relative "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >

                <div className='w-full bg-red-400 -z-10 bg-opacity-5'></div>
                <span
                    ref={backgroundTextRef}
                    className="absolute top-8  opacity-5 text-transparent stroke-text  -z-20"
                >
                    {title}
                </span>
                <span className="z-20 ">{title}</span>
            </motion.h3>
        </>
    );
};

export default Title;
