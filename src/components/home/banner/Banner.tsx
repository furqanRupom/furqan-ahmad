"use client";

import { ArrowDownToLine } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { icons } from '@/config/icons';

interface IBannerProps { }

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.section
            ref={ref}
            style={{ backgroundImage: 'url(https://i.ibb.co/Xsf2Cbm/small-circular-lines-1.png)', backgroundSize: 'cover' }}
            className=' min-h-screen bg-center md:bg-top'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}

        >

            <div className='absolute bg-indigo-400 dark:bg-opacity-10 bg-opacity-20 top-32 w-1/3 rounded-full h-1/3 blur-3xl -z-40'></div>
            <div className='absolute bg-indigo-400 dark:bg-opacity-10 bg-opacity-20 right-0 top-36 w-1/3 rounded-full h-1/3 blur-3xl -z-40 '></div>
            <div className='mx-auto text-center px-4 '>
                <motion.div
                    className='flex flex-col lg:flex-row items-center lg:justify-center'

                >
                    <Image
                        src='https://i.ibb.co/CB6CPZP/images-2-removebg-preview.png'
                        alt='logo'
                        width={120}
                        height={120}
                    />
                    <div className='text-3xl sm:text-4xl lg:text-6xl font-bold flex flex-col sm:flex-row items-center space-x-3 mt-5 lg:mt-16'>
                        <h3>Hi! I&apos;m</h3>
                        <motion.h5
                            className='text-red-400'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Furqan Ahmad
                        </motion.h5>
                    </div>
                </motion.div>

                <div className='py-4'>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className='text-lg lg:text-3xl'>
                            A <span className='font-bold'>Full Stack Developer | Back End Developer</span>
                        </h3>
                        <h5 className='lg:text-3xl pt-4 lg:pt-5 font-normal'>
                            With{' '}
                            <span className='bg-white text-lg lg:text-xl dark:bg-gray-800 dark:text-white text-gray-700 px-2 py-1 tracking-wider border border-gray-700 rounded-full font-semibold'>
                                2+ Years
                            </span>{' '}
                            Experience
                        </h5>
                    </motion.div>

                    <motion.div
                        className='flex items-center justify-center mt-8 space-x-5'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button className='flex items-center  px-5 py-2 lg:px-7 lg:py-3 bg-white text-red-400 rounded-3xl hover:bg-red-400 hover:text-white duration-100 border-red-400 border'>
                            <ArrowDownToLine className='mr-2' />
                            <h3>Resume</h3>
                        </button>

                        <button className='flex items-center  px-5 py-2 lg:px-7 lg:py-3 bg-opacity-15 bg-red-400 text-red-400 rounded-3xl hover:bg-red-400 hover:text-white duration-100 border-red-400 border'>
                            <h3>Hire Me</h3>
                        </button>
                    </motion.div>

                    <div className='relative mt-12'>
                        <motion.div
                            className=''
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                className='mx-auto object-cover'
                                src='https://i.ibb.co/xGMgnQY/Untitled-1.png'
                                width={400}
                                height={400}
                                alt='logo'
                            />
                        </motion.div>
                        <div className='absolute top-24 lg:top-20 w-full px-4'>
                            {/* first two icons */}
                            <div className='flex justify-between w-full max-w-sm sm:max-w-lg mx-auto'>
                                <IconCard src={icons.nextjs} alt='Next JS logo' label='Next JS' delay={0.1} />
                                <IconCard src={icons.react} alt='React logo' label='React' delay={0.2} />
                            </div>

                            {/* middle two icons */}
                            <div className='flex justify-between w-full mt-12 sm:mt-16 max-w-md sm:max-w-2xl mx-auto'>
                                <IconCard src={icons.postgres} alt='PostgresSQL logo' label='PostgresSQL' delay={0.3} />
                                <IconCard src={icons.redux} alt='Redux logo' label='Redux' delay={0.4} />
                            </div>

                            {/* last two icons */}
                            <div className='flex justify-between w-full mt-12 sm:mt-16 max-w-sm sm:max-w-xl mx-auto'>
                                <IconCard src={icons.tailwindcss} alt='TailwindCSS logo' label='TailwindCSS' delay={0.5} />
                                <IconCard src={icons.mongodb} alt='MongoDB logo' label='MongoDB' delay={0.6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b -mt-4 dark:border-gray-600'></div>
        </motion.section>
    );
};

export default Banner;

const IconCard = ({ src, alt, label, delay }: { src: StaticImageData; alt: string; label: string; delay: any }) => (
    <motion.div
        className='bg-white flex border border-red-400 items-center p-2 rounded-full gap-3 transition-all duration-300 hover:shadow-lg'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
    >
        <Image src={src} width={40} height={40} className='lg:w-8 lg:h-8 w-5 h-5' alt={alt} />
        <h3 className='text-gray-900 text-xs md:text-base lg:text-xl font-bold'>{label}</h3>
    </motion.div>
);
