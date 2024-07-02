"use client";
import Modal from "@/ui/Modal/Modal";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ScrollTriggerComponent from "@/animation/scrollTrigger/ScrollTrigger";


const Project: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (

            <div className=" px-8">
                <ProjectCard setShowModal={setShowModal} />

                {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
            </div>
    );
};

export default Project;

