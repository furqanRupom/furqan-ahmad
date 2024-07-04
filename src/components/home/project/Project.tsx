"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { ProjectCard } from "./ProjectCard";
import Title from "@/components/Title/Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProjects } from "@/hooks/data/useProjects";

gsap.registerPlugin(ScrollTrigger);

const Works: React.FC = () => {
    const sectionRef = useRef(null);
    const {data} = useProjects();
    const projects = data?.data

   

    useEffect(() => {
        const section = sectionRef.current;

        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <section className="pt-32 px-8" id="projects" ref={sectionRef}>
            <Title title="My Recent Projects" />

            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {projects?.slice(1).map((project:any, index:any) => (
                    <ProjectCard live_link="" key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Works;
