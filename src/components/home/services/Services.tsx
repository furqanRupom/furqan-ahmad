"use client";
import Title from "@/components/Title/Title";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: 1,
        title: "Front End Development",
        description: "Expertise in creating responsive, interactive, and visually appealing web interfaces using React, Next.js, and TailwindCSS."
    },
    {
        id: 2,
        title: "Back End Development",
        description: "Specialized in building robust and scalable server-side applications using Node.js, Express, PostgreSQL, Prisma, MongoDB, and Mongoose."
    },
    {
        id: 3,
        title: "Full Stack Development",
        description: "Proficient in integrating front end and back end technologies to deliver comprehensive solutions using TypeScript, Node.js, Express, React, Next.js, and TailwindCSS."
    },
];

const ServiceItem = ({ service, index }:{service:any,index:number}) => {
    const itemRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(itemRef.current, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: itemRef.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: true
            }
        });
    }, []);

    return (
        <motion.div
            ref={itemRef}
            className="grid grid-cols-1 lg:grid-cols-[1fr,2fr,0.1fr] p-6 mb-4 transition-colors dark:bg-gray-800 bg-gray-400 backdrop-blur bg-opacity-5 dark:bg-opacity-20 border-b dark:border-gray-700 border-gray-200"
        >
            <div className="flex flex-col md:flex-row items-center">
                <span className="text-red-400 font-bold text-lg md:text-xl mr-4">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <h3 className="text-2xl dark:text-gray-200">{service.title}</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                <p className="text-center max-w-xl sm:text-left mb-4 dark:text-gray-300">
                    {service.description}
                </p>
                <ArrowRight size={40} className="text-red-400 ml-auto" />
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="pt-32 px-8">
            <Title title="My Quality Services" />
            <p className="mb-8 text-lg dark:text-gray-300 text-gray-600 text-center py-1">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
            </p>
            <div className="space-y-5 my-20">
                {services.map((service, index) => (
                    <ServiceItem key={service.id} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;
