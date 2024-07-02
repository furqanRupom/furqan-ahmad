"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface IScrollTriggerComponentProps {
    children: React.ReactNode;
}

const ScrollTriggerComponent: React.FC<IScrollTriggerComponentProps> = ({ children }) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: container.current,
                start: "top top", // start when the top of the trigger element hits the top of the viewport
                end: "+=100%", // adjust this value based on your layout
                pin: true, // pin the trigger element
                pinSpacing: true, // retain spacing caused by pinning
                toggleClass: { targets: container.current, className: "sticky" }, // optional: add a sticky class
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="box">
            {children}
        </div>
    );
};

export default ScrollTriggerComponent;
