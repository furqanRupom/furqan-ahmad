import React, { useState, useRef, useEffect } from 'react';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
    const loadingScreenRef = useRef(null);

 

    return (
        <div className="relative flex h-screen bg-blue-50">
          

            {/* Sidebar */}
            <aside
                className={`fixed left-0 right-0 z-10 flex-col flex-shrink-0 h-full overflow-hidden transition-all bg-transparent bottom-10 xl:h-screen top-16 xl:static xl:z-auto ${isSidebarOpen ? 'flex xl:w-64' : 'hidden xl:flex xl:w-16'
                    }`}
            >
                {/* Sidebar header */}
                <div className="flex-shrink-0 hidden px-2 max-h-14 xl:items-center xl:justify-start xl:space-x-3 xl:flex xl:max-h-14 xl:h-full xl:px-4">
                    {/* Sidebar Button */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 text-blue-600 rounded-full hover:bg-blue-200"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    {/* Logo */}
                    <a
                        href="#"
                        className={`flex-shrink-0 text-2xl font-bold tracking-widest text-blue-800 uppercase ${!isSidebarOpen && 'xl:hidden'
                            }`}
                    >
                        K-WD
                    </a>
                </div>
                {/* Sidebar Content */}
                <div className="fixed left-0 flex flex-col flex-1 max-h-screen px-2 overflow-hidden right-3 top-16 bottom-10 xl:static xl:pt-2 xl:pl-4 xl:mb-4">
                    <div
                        className={`flex-1 max-h-full p-2 overflow-y-auto bg-white rounded-md shadow-2xl lg:shadow-md ${isSidebarOpen ? 'min-w-full xl:w-14' : ''
                            }`}
                    >
                        <nav>
                            <ul className="space-y-2">
                                <li>
                                    <button className="flex items-center space-x-2">
                                        <span>
                                            <svg
                                                className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                />
                                            </svg>
                                        </span>
                                        <span className={!isSidebarOpen ? 'xl:hidden' : ''}> Dashboard </span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>

            <div className="relative flex flex-col flex-1 h-full max-h-full overflow-y-scroll">
                {/* Navbar */}
                <header className="sticky top-0 flex items-center flex-shrink-0 w-full h-full bg-opacity-100 bg-blue-50 max-h-14">
                    {/* Menu Button */}
                    <div className="flex items-center flex-shrink-0 xl:hidden">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 text-blue-600 rounded-full hover:bg-blue-200"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-between flex-1">
                        {/* Logo */}
                        <a
                            href="#"
                            className={`flex-shrink-0 text-2xl font-bold tracking-widest text-blue-800 uppercase ${isSidebarOpen ? 'xl:hidden ml-2' : 'block ml-2'
                                }`}
                        >
                            K-WD
                        </a>

                        <nav className="relative flex items-center justify-end flex-1 ml-3 lg:justify-start">
                            {/* Search Button */}
                            <div className="relative" onBlur={() => setIsSidebarOpen(false)}>
                                <button
                             
                                    className="inline-block p-2 bg-blue-100 rounded-full hover:bg-blue-200"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                                {/* Search box */}
                                <div
                                    className={`fixed left-0 ml-2 right-6 lg:max-w-md lg:-ml-1 lg:absolute `}
                                >
                                    <div className="p-4 mt-4 bg-white shadow-lg rounded-t-md">
                                        <div className="flex items-center">
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                className="w-full px-4 py-2 bg-blue-100 rounded-l-md focus:outline-none"
                                              
                                            />
                                            <button className="p-2 text-white bg-blue-500 rounded-r-md focus:outline-none hover:bg-blue-600 focus:bg-blue-700">
                                                <svg
                                                    className="w-6 h-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Search Result */}
                                    <div
                                        className={`p-4 overflow-y-auto bg-white shadow-lg rounded-b-md h-72 `}
                                    >
                                        <ul>
                                            {Array.from({ length: 10 }).map((_, i) => (
                                                <li key={i}>
                                                    <a href="#" className="block px-4 py-2 rounded-md hover:bg-blue-100">
                                                        Result
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Left Links */}
                            <ul className="items-center justify-center hidden ml-3 space-x-2 lg:flex">
                                {/* Services Menu */}
                                <li className="relative">
                                    <button
                                     
                                        className="inline-flex items-center px-4 py-2 space-x-2 rounded-md hover:bg-blue-100"
                                    >
                                        <span>Services</span>
                                        <span>
                                            <svg
                                                className="w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                    {/* Services Dropdown */}
                                    <div
                                        className={`absolute left-0 right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl `}
                                    >
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-blue-600 rounded-md hover:bg-blue-100"
                                        >
                                            Service 1
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-blue-600 rounded-md hover:bg-blue-100"
                                        >
                                            Service 2
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-blue-600 rounded-md hover:bg-blue-100"
                                        >
                                            Service 3
                                        </a>
                                    </div>
                                </li>
                                {/* Portfolio */}
                                <li>
                                    <a
                                        href="#"
                                        className="px-4 py-2 rounded-md hover:bg-blue-100"
                                    >
                                        Portfolio
                                    </a>
                                </li>
                                {/* Contact */}
                                <li>
                                    <a
                                        href="#"
                                        className="px-4 py-2 rounded-md hover:bg-blue-100"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Right Section */}
                        <div className="relative flex items-center space-x-2">
                            <button
                                onClick={() => setIsSettingsPanelOpen(!isSettingsPanelOpen)}
                                className="p-2 bg-blue-100 rounded-full hover:bg-blue-200"
                            >
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8h18M3 16h18"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
                {/* Main Content */}
                <main className="flex flex-col flex-1 h-full p-4">Main content</main>
            </div>

            {/* Settings Panel */}
            <aside
                className={`fixed top-0 bottom-0 right-0 z-10 flex-col w-full max-w-xs overflow-hidden transition-all duration-300 transform bg-white shadow-2xl ${isSettingsPanelOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-blue-100">
                    <h2 className="text-lg font-semibold">Settings</h2>
                    <button
                        onClick={() => setIsSettingsPanelOpen(false)}
                        className="p-2 rounded-full hover:bg-blue-200"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                {/* Content */}
                <div className="flex-1 p-4 overflow-y-auto">Settings content</div>
            </aside>
        </div>
    );
};

export default App;
