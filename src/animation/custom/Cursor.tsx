// CustomCursor.tsx
"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        const links = document.querySelectorAll('a, button');

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
        });

        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 1.5, opacity: 0.7, duration: 0.3 });
                gsap.to(follower, { scale: 2, opacity: 0.3, duration: 0.3 });
                link.classList.add('hide-default-cursor');
            });

            link.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
                gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3 });
                link.classList.remove('hide-default-cursor');
            });
        });

        return () => {
            document.removeEventListener('mousemove', () => { });
            links.forEach(link => {
                link.removeEventListener('mouseenter', () => { });
                link.removeEventListener('mouseleave', () => { });
            });
        };
    }, []);

    return (
        <>
            <div className="cursor fixed top-0 left-0 w-2 h-2 bg-red-50 rounded-full mix-blend-difference pointer-events-none cursor-none z-50"></div>
            <div className="cursor-follower fixed top-0 left-0 w-6 h-6 bg-red-400 rounded-full mix-blend-difference pointer-events-none cursor-none z-50"></div>
        </>
    );
};

export default CustomCursor;
