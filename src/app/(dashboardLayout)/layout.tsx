"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, Settings, Home } from 'lucide-react'; // Import Lucide icons

interface IDashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`bg-slate-900 shadow-lg ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <h1 className={`text-xl font-bold text-blue-800 ${!isSidebarOpen && 'hidden'}`}>Fab</h1>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <Menu size={24} className="text-red-400" />
                    </button>
                </div>
                <nav className="p-4 ">
                    <ul className="mb-4 flex flex-col gap-4 ">
                        <li>
                            <a  href="#">
                                <button
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-trf-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                    type="button"
                                >
                                    <Home className="w-5 h-5 text-inherit" />
                                    <span className={`block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize ${!isSidebarOpen && 'hidden'}`}>
                                        Dashboard
                                    </span>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="" href="#">
                                <button
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-trf-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                    type="button"
                                >
                                    <Search className="w-5 h-5 text-inherit" />
                                    <span className={`block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize ${!isSidebarOpen && 'hidden'}`}>
                                        Profile
                                    </span>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="" href="#">
                                <button
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-trf-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                    type="button"
                                >
                                    <Settings className="w-5 h-5 text-inherit" />
                                    <span className={`block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize ${!isSidebarOpen && 'hidden'}`}>
                                        Tables
                                    </span>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="" href="#">
                                <button
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-trf-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                    type="button"
                                >
                                    <Search className="w-5 h-5 text-inherit" />
                                    <span className={`block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize ${!isSidebarOpen && 'hidden'}`}>
                                        Notifications
                                    </span>
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-between p-4 bg-white shadow-lg">
                    <div className="flex items-center">
                        <button className="p-2 text-blue-800">
                            <Search size={24} />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="ml-2 p-2 bg-gray-100 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-blue-100 rounded-full hover:bg-blue-200"
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
