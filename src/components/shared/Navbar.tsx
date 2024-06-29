'use client';

import { AlignRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitch from '../switch/themeSwitch';

interface INavbarProps { }

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    const [isDark, setIsDark] = React.useState<boolean>(false);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return (
        <nav className='fixed top-0 w-full '>
            <motion.div
                className='max-w-7xl mx-auto p-4 lg:p-2 lg:rounded-3xl flex justify-between lg:my-5 bg-red-50 dark:bg-red-50 dark:bg-opacity-5 shadow'
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* logo start */}
                <motion.div
                    className='flex items-center gap-5 text-lg sm:text-xl md:text-2xl lg:text-3xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className='text-lg sm:text-xl bg-red-400 dark:bg-white dark:text-red-400 text-white rounded-full p-2 sm:p-3'>
                        Fa <span>B</span>
                    </h3>
                    <h3>
                        Furqan <span className='text-red-400 font-semibold'>Ahmad</span>
                    </h3>
                </motion.div>
                {/* logo end */}

                {/* menu bar start */}
                <div className='flex items-center gap-3'>
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        className='bg-red-400 text-white cursor-pointer dark:bg-white dark:text-red-400 p-2 sm:p-3 rounded-full'
                        onClick={toggleDarkMode}
                    >
                        <ThemeSwitch />
                    </motion.div>

                    <div className='flex items-center md:space-x-3 md:bg-white dark:md:bg-red-400 rounded-3xl'>
                        <h3 className='font-semibold pl-3 hidden md:block'>Menu</h3>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-white bg-red-400 p-2 sm:p-3 rounded-full hover:bg-red-500 dark:bg-white dark:text-red-400'
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
                                className='absolute right-0 top-24 mr-5 lg:mr-32 shadow-md w-64 rounded-xl bg-clip-border bg-white dark:bg-gray-800'
                            >
                                <nav className='flex flex-col gap-1 p-2 font-sans text-base font-normal text-gray-700 dark:text-gray-400'>
                                    <Link href="/" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Home
                                        </motion.div>
                                    </Link>
                                    <Link href="/about" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            About
                                        </motion.div>
                                    </Link>
                                    <Link href="/contact" className='text-initial'>
                                        <motion.div
                                            role="button"
                                            className='flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-gray-100 active:text-gray-900 dark:hover:bg-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Contact
                                        </motion.div>
                                    </Link>
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
