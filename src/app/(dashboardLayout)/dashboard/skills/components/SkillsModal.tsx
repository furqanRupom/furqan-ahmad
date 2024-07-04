"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Modal from '@/ui/Modal/Modal';
import axios from 'axios';
import { toast } from 'sonner';
import { useSkills } from '@/hooks/data/useSkills';

const schema = z.object({
    name: z.string().nonempty('Skill name is required'),
    icon: z.string().optional(),
});

interface IProjectsModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SkillsModal: React.FunctionComponent<IProjectsModalProps> = ({ isOpen, setIsOpen }) => {
    const { refetch } = useSkills();
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });


    const onSubmit = async (data: any) => {
        try {
            const createSkills = await axios.post('/api/skills', data);
            const response = createSkills.data;
            if (response.success) {
                toast.success('New Skills Successfully Added');
                refetch();
                setIsOpen(false);
            }
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal showModal={isOpen} setShowModal={setIsOpen} title='Add New Skill' fullWidth={false}>
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 rounded w-full">
                <div>
                    <label className="block mb-1 dark:text-gray-200 text-gray-800">Skill Name</label>
                    <input
                        {...register('name')}
                        className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                    />
                    
                </div>

                <div>
                    <label className="block mb-1 dark:text-gray-200 text-gray-800">Skill Icon</label>
                    <input
                        {...register('icon')}
                        className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                    />
                </div>

                <button type="submit" className="w-full p-2 text-white mt-12 bg-red-500 rounded">
                    Add Skill
                </button>
            </form>
        </Modal>
    );
};

export default SkillsModal;
