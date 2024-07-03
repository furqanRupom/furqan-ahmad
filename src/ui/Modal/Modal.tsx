"use client";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface ModalProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}



const modalVariants = {
    hidden: { y: "-50vh", opacity: 0 },
    visible: {
        y: "0",
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5 },
    },
};

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-md bg-opacity-50 flex justify-center items-center"

        >
            <motion.div
                className="bg-gray-500 bg-opacity-5 dark:bg-slate-800 backdrop-blur-2xl rounded-lg shadow-lg p-6 "
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            >
                <h1 className="text-xl font-bold mb-4">Animated Modal</h1>
                <p>This modal is smoothly animated with Framer Motion and styled with TailwindCSS.</p>


                <div className="flex justify-end">
                    <button
                        onClick={() => setShowModal(false)}
                        className="mt-4 bg-red-400 text-white px-4 py-2 rounded"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Modal;
