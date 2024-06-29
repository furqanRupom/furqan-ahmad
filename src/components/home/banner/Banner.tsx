"use client"
import { ArrowDownToLine } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import { motion } from 'framer-motion';
import { icons } from '@/config/icons';

interface IBannerProps { }

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
    return (
        <motion.section
            className='min-h-screen bg-center lg:bg-top'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                backgroundImage: 'url(https://i.ibb.co/Xsf2Cbm/small-circular-lines-1.png)',
                backgroundSize: 'cover',
            }}
        >
            <div className='max-w-5xl mx-auto text-center px-4'>
                <div className='flex flex-col items-center justify-center'>
                    <motion.div
                        className='flex flex-col lg:flex-row items-center justify-center'
                 
                    >
                        <Image
                            src='https://i.ibb.co/CB6CPZP/images-2-removebg-preview.png'
                            alt='logo'
                            width={120}
                            height={120}
                        />
                        <div className='text-2xl sm:text-4xl lg:text-6xl font-bold flex items-center space-x-3 mt-5 lg:mt-16'>
                            <h3>Hi! I&apos;m</h3>
                            <h5 className='text-red-400'>Furqan Ahmad</h5>
                        </div>
                    </motion.div>

                    <div className='py-6'>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className='text-lg lg:text-3xl'>
                                A <span className='font-bold'>Full Stack Developer | Back End Developer</span>
                            </h3>
                            <h5 className='lg:text-3xl pt-2 lg:pt-5'>
                                With{' '}
                                <span className='bg-white text-lg lg:text-xl dark:bg-gray-800 dark:text-white text-gray-700 px-2 py-1 tracking-wider border border-gray-700 rounded-full font-semibold'>
                                    2+ Years
                                </span>{' '}
                                Experience
                            </h5>
                        </motion.div>

                        <motion.div
                            className='flex items-center justify-center  mt-8  space-x-5'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button className='flex items-center px-7 py-3  bg-white text-red-400 p-3 rounded-3xl hover:bg-red-400 hover:text-white duration-100 border-red-400 border'>
                                <ArrowDownToLine className='mr-2' />
                                <h3>Resume</h3>
                            </button>

                            <button className='flex items-center px-7 py-3  bg-opacity-15 bg-red-400 text-red-400 rounded-3xl hover:bg-red-400 hover:text-white duration-100 border-red-400 border'>
                                <h3>Hire Me</h3>
                            </button>
                        </motion.div>

                        <div className='relative mt-12'>
                            <motion.div
                                className='absolute inset-0'
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

                            <div className='absolute top-12 lg:top-20 w-full'>
                                {/* first two icons */}
                                <div className='flex justify-between w-full max-w-lg mx-auto'>
                                    <motion.div
                                        className='bg-white flex border border-red-400 w-fit items-center p-2 rounded-full gap-3'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <Image src={icons.nextjs} width={40} height={40} className='w-8 h-8' alt='logo' />
                                        <h3 className='text-gray-900 text-xs sm:text-base lg:text-xl font-bold'>Next JS</h3>
                                    </motion.div>

                                    <motion.div
                                        className='bg-white flex border border-red-400 w-fit items-center p-2 rounded-full gap-3'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <Image src={icons.react} width={40} height={40} className='w-8 h-8' alt='logo' />
                                        <h3 className='text-gray-900 text-xs sm:text-base lg:text-xl font-bold'>React</h3>
                                    </motion.div>
                                </div>

                                {/* middle two icons */}
                                <div className='flex justify-between w-full mt-6 md:mt-16 '>
                                    <motion.div
                                        className='bg-white flex border border-red-400 w-fit items-center p-2 rounded-full gap-3'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <Image src={icons.postgres} width={40} height={40} className='w-8 h-8' alt='logo' />
                                        <h3 className='text-gray-900 text-xs sm:text-base lg:text-xl font-bold'>PostgresSQL</h3>
                                    </motion.div>

                                    <motion.div
                                        className='bg-white flex border border-red-400 w-fit items-center p-2 rounded-full gap-3'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <Image src={icons.reactquery} width={40} height={40} className='w-8 h-8' alt='logo' />
                                        <h3 className='text-gray-900 text-xs sm:text-base lg:text-xl font-bold'>React Query</h3>
                                    </motion.div>
                                </div>

                                {/* last two icons */}
                                <div className='flex justify-between w-full mt-6 md:mt-16 lg:max-w-4xl'>
                                    <motion.div
                                        className='bg-white flex border border-red-400 w-fit items-center p-2 rounded-full gap-3'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        <Image  src={icons.tailwindcss} width={40} height={40} className='w-8 h-8' alt='logo' />
                                        <h3 className='text-gray-900 text-xs sm:text-base lg:text-xl font-bold'>TailwindCSS</h3>
                                    </motion.div>

                                    <motion.div
                                        className='bg-white flex border border-red-400 w-fit items-center p-2 rounded-full gap-3'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <Image src={icons.mongodb} width={40} height={40} className='w-8 h-8' alt='logo' />
                                        <h3 className='text-gray-900 text-xs sm:text-base lg:text-xl font-bold'>MongoDB</h3>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Banner;
