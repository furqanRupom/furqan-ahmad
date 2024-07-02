"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, Settings, Home, Book, Star, PanelsTopLeft, FlaskConical } from 'lucide-react';
import Image from 'next/image';
import { images } from '@/config/images';
import Link from 'next/link';

interface IDashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside className={`bg-slate-50 dark:bg-slate-900 shadow-lg ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
                    <Link className={` ${!isSidebarOpen && 'hidden'}`} href='/'>
                        <Image src={images.redlogo} width={50} height={50} alt='logo' />
                    </Link>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <Menu size={32} className="text-red-400" />
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="mb-4 flex flex-col gap-4">
                        <li>
                            <Link href="/dashboard">
                                <button
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-trf-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                    type="button"
                                >
                                    <Home className="w-5 h-5 text-inherit" />
                                    <span className={`block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize ${!isSidebarOpen && 'hidden'}`}>
                                        Dashboard
                                    </span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/projects">
                                <button
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-trf-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                    type="button"
                                >
                                    <PanelsTopLeft className="w-5 h-5 text-inherit" />
                                    <span className={`block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize ${!isSidebarOpen && 'hidden'}`}>
                                        Projects
                                    </span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/skills">
                                <button
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-trf-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                    type="button"
                                >
                                    <Star className="w-5 h-5 text-inherit" />
                                    <span className={`block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize ${!isSidebarOpen && 'hidden'}`}>
                                        Skills
                                    </span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/blogs">
                                <button
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-trf-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                    type="button"
                                >
                                    <Book className="w-5 h-5 text-inherit" />
                                    <span className={`block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize ${!isSidebarOpen && 'hidden'}`}>
                                        Blogs
                                    </span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/experience">
                                <button
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-trf-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                    type="button"
                                >
                                    <FlaskConical className="w-5 h-5 text-inherit" />
                                    <span className={`block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize ${!isSidebarOpen && 'hidden'}`}>
                                        Experience
                                    </span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-lg">
                    <div className="flex items-center">
                        <button className="p-2 text-red-400 dark:text-red-300">
                            <Search size={24} />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="ml-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-red-100 dark:bg-red-400 rounded-full hover:bg-red-200 dark:hover:bg-red-500"
                        >
                            <Settings size={24} />
                        </motion.button>
                    </div>
                </header>

                {/* Main */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
