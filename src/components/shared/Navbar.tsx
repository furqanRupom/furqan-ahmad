'use client';

import { AlignRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitch from '../switch/themeSwitch';
import { images } from '@/config/images';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';

interface INavbarProps { }

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    const [isDark, setIsDark] = React.useState<boolean>(false);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };
    const session = useSession();

    return (
        <nav className='fixed top-0 w-full z-50 '>
            <motion.div
                className='max-w-7xl mx-auto p-4 lg:p-2 lg:rounded-3xl flex justify-between lg:my-5 bg-white dark:bg-gray-800 dark:bg-opacity-30 bg-opacity-70 shadow '
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* logo start */}
                <motion.div
                    className='flex items-center gap-5 text-lg sm:text-xl md:text-2xl lg:text-3xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* <h3 className='text-lg sm:text-xl bg-red-400 dark:bg-white dark:text-red-400 text-white rounded-full p-2 sm:p-3'>
                        Fa <span>B</span>
                    </h3> */}
                    <Image className='bg-red-400 rounded-full p-1' src={images.whitelogo} width={80} height={80} alt="logo" />

                </motion.div>
                {/* logo end */}

                {/* menu bar start */}
                <div className='flex items-center gap-3'>


                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        className='bg-red-400 text-white  dark:bg-white dark:text-red-400 p-2 sm:p-3 rounded-full cursor-pointer'
                        onClick={toggleDarkMode}
                    >
                        <ThemeSwitch />
                    </motion.div>

                    <div className='flex items-center md:space-x-3 md:bg-white dark:md:bg-red-400 rounded-3xl'>
                        <h3 className='font-semibold pl-3 hidden md:block'>Menu</h3>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-white bg-red-400 p-2 sm:p-3 rounded-full hover:bg-red-400-500 dark:bg-white dark:text-red-400'
                            whileTap={{ scale: 0.9 }}
                        >
                            <AlignRight />
                        </motion.button>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className='absolute right-0 xl:right-28 top-24 mr-2  shadow-md w-64 rounded-xl bg-clip-border bg-white dark:bg-gray-800 backdrop-blur-2xl '
                            >
                                <nav className='flex flex-col gap-1 p-2 font-sans text-base font-normal text-gray-700 dark:text-gray-400'>
                                    <Link href="/" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            Home
                                        </motion.div>
                                    </Link>
                                    {
                                        session?.data && <Link href="/dashboard" className='text-initial'>
                                            <motion.div
                                                role="button"
                                                className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.99 }}
                                            >
                                                dashboard
                                            </motion.div>
                                        </Link>
                                    }
                                    <Link href="#about-me" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            About
                                        </motion.div>
                                    </Link>
                                    <Link href="#services" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            Services
                                        </motion.div>
                                    </Link>
                                    <Link href="#projects" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            Projects
                                        </motion.div>
                                    </Link>
                                    <Link href="#skills" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            Skills
                                        </motion.div>
                                    </Link>   <Link href="#edu&ex" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            Education & Experience
                                        </motion.div>
                                    </Link>

                                    <Link href="#blogs" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            Blogs
                                        </motion.div>
                                    </Link>




                                    <Link href="/login" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            Login
                                        </motion.div>
                                    </Link>


                                    <Link href="#contact-me" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            Contact
                                        </motion.div>
                                    </Link>


                                    {
                                        !session && <button onClick={() => signOut({
                                            callbackUrl: "/login"
                                        })} className='text-initial'>
                                            <motion.div
                                                role="button"
                                                className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.99 }}
                                            >
                                                Logout
                                            </motion.div>
                                        </button>
                                    }
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* menu bar end */}
            </motion.div>
        </nav>
    );
};

export default Navbar;
