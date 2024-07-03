"use client";
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Function to handle scrolling to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Function to check if the button should be visible and update the scroll progress
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100;

        setIsVisible(scrollTop > 300); // Show button after scrolling down 300px
        setScrollProgress(scrolled); // Update scroll progress based on scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <div className='z-50'
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '3rem',
                    right: '2rem',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    cursor: 'pointer',
                  
                    transition: 'background 0.3s ease-in-out',
                    background: `conic-gradient(#f87171 ${scrollProgress}%, transparent ${scrollProgress}%)`
                }}
            >
                <div className='dark:bg-gray-900 bg-white'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      
                        borderRadius: '50%',
                        width: '2rem',
                        height: '2rem'
                    }}
                >
                    <ArrowUp className='text-red-400 font-bold dark:text-white' />
                </div>
            </div>
        )
    );
};

export default ScrollToTopButton;
