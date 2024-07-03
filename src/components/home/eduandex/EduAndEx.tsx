"use client";

import Title from '@/components/Title/Title';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EducationExperience: React.FC = () => {
    const eduRef = useRef(null);
    const expRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(eduRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: eduRef.current, start: "top 80%", end: "bottom 60%", scrub: 1 } }
        );
        gsap.fromTo(expRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: expRef.current, start: "top 80%", end: "bottom 60%", scrub: 1 } }
        );
    }, []);

    return (
        <section id="edu&ex" className="pt-32 px-8">
            <div className="container mx-auto px-4 py-8">
                <Title title='Education & Experience' />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                    <div ref={eduRef}>
                        <h2 className="text-2xl font-semibold mb-4">My Education</h2>
                        <div className="bg-gray-400 bg-opacity-10 border-b border-gray-200 dark:bg-opacity-20 dark:border-gray-600 dark:bg-gray-800 p-6 mb-6">
                            <h3 className='text-2xl font-bold text-red-400'>2020-2024</h3>
                            <h3 className="text-xl font-semibold">Feni Polytechnic Institute</h3>
                            <p className="text-sm">Diploma in Computer Technology (4 years)</p>
                        </div>
                        <div className="bg-gray-400 bg-opacity-10 border-b border-gray-200 dark:bg-opacity-20 dark:border-gray-600 dark:bg-gray-800 p-6 mb-6">
                            <h3 className='text-2xl font-bold text-red-400'>2023-2024</h3>
                            <h3 className="text-xl font-semibold">Programming Hero</h3>
                            <p className="text-sm">Completed Web Development Course</p>
                        </div>
                    </div>
                    <div ref={expRef}>
                        <h2 className="text-2xl font-semibold mb-4">My Experience</h2>
                        <div className="bg-gray-400 bg-opacity-10 border-b border-gray-200 dark:bg-opacity-20 dark:border-gray-600 dark:bg-gray-800 p-6 mb-6">
                            <h3 className='text-2xl font-bold text-red-400'>2023-2024</h3>
                            <h3 className="text-xl font-semibold">TrafficVai</h3>
                            <p className="text-sm">2-month work experience</p>
                        </div>
                        <div className="bg-gray-400 bg-opacity-10 border-b border-gray-200 dark:bg-opacity-20 dark:border-gray-600 dark:bg-gray-800 p-6 mb-6">
                            <h3 className='text-2xl font-bold text-red-400'>2022-2024</h3>
                            <h3 className="text-xl font-semibold">Self Learner</h3>
                            <p className="text-sm">Learning web development for 2 years</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationExperience;
