"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { toast } from 'sonner';
import { useExperience } from '@/hooks/data/useExperience';
import Modal from '@/ui/Modal/Modal';

const schema = z.object({
    title: z.string().optional(),
    companyName:z.string(),
    startDate: z.coerce.date({
        required_error: "Start date is required",
        invalid_type_error: "Start date must be a valid date",
    }),
    endDate: z.coerce.date({
        required_error: "End date is required",
        invalid_type_error: "End date must be a valid date",
    }),
});

interface IExperienceModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExperienceModal: React.FunctionComponent<IExperienceModalProps> = ({ isOpen, setIsOpen }) => {
    const { refetch } = useExperience();
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: any) => {
        try {
            const createExperience = await axios.post('/api/experience', data);
            const response = createExperience.data;
            if (response.success) {
                toast.success('New Experience Successfully Added');
                refetch();
                setIsOpen(false);
            }
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal showModal={isOpen} setShowModal={setIsOpen} title='Add New Experience' fullWidth={false}>
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 rounded w-full">
                <div>
                    <label className="block mb-1 dark:text-gray-200 text-gray-800">Title</label>
                    <input
                        {...register('title')}
                        className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                    />
                </div>
                <div>
                    <label className="block mb-1 dark:text-gray-200 text-gray-800">Company Name</label>
                    <input
                        {...register('companyName')}
                        className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 dark:text-gray-200 text-gray-800">Start Date</label>
                    <input
                        type="date"
                        {...register('startDate')}
                        className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                    />
                 
                </div>

                <div>
                    <label className="block mb-1 dark:text-gray-200 text-gray-800">End Date</label>
                    <input
                        type="date"
                        {...register('endDate')}
                        className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                    />
               
                </div>

                <button type="submit" className="w-full p-2 text-white mt-12 bg-red-500 rounded">
                    Add Experience
                </button>
            </form>
        </Modal>
    );
};

export default ExperienceModal;
