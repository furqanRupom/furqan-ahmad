import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { icons } from "@/config/icons";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import Button from "@/ui/Button/Button";
import Link from "next/link";

interface Tag {
    name: string;
    color: string;
}

interface Project {
    index: number;
    name: string;
    description: string;
    projectImage: string[];
    liveLink:string;
    github:string
}

export const ProjectCard: React.FC<Project> = ({
    index,
    name,
    description,
    projectImage,
  liveLink,
  github
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="flex justify-center">
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg transition-shadow hover:shadow-2xl"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={projectImage[0]}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <Link href={github}
                            
                            className=" w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-gray-900 transition-colors"
                        >
                            {/* @ts-ignore */}
                            <Image src={icons.github} alt="source code" className="w-1/2 h-1/2 object-contain" />
                        </Link>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
                </div>
                <Link href={liveLink} className="mt-4 flex justify-end">
               
                    <button className="flex items-center  px-5 py-1 bg-opacity-15 bg-red-400 text-red-400 rounded-xl cursor-pointer hover:bg-red-400 hover:text-white duration-100 border-red-400 border">
                    Live Demo
                  </button>
                </Link>
            </Tilt>
        </motion.div>
    );
};
