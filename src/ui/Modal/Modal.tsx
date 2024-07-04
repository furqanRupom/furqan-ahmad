"use client";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { CircleX } from "lucide-react";

interface ModalProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
    title: string;
    fullWidth?:boolean;
}

const modalVariants = {
    hidden: { y: "-50vh", opacity: 0 },
    visible: {
        y: "0",
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5 },
    },
};

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children, title,fullWidth }) => {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gray-950 backdrop-blur-md bg-opacity-50  "
        >
            <motion.div
                className={`bg-opacity-5 dark:bg-slate-800 backdrop-blur-2xl rounded-lg shadow-lg p-6 ${fullWidth ? 'max-w-4xl' : ''}`}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            >
                <div className="flex justify-between items-center">
                    <h3 className="text-3xl uppercase">{title}</h3>
                    <button
                        onClick={() => setShowModal(false)}
                        className=" text-red-400 rounded-3xl p-1 dark:text-white"
                    >
                        <CircleX size={30} />
                    </button>
                </div>
                {children}
              
            </motion.div>
        </motion.div>
    );
};

export default Modal;
