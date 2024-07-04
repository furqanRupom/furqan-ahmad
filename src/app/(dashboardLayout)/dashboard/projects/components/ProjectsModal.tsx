"use client"
import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Modal from '@/ui/Modal/Modal';
import axios from 'axios';
import { SquareX } from 'lucide-react';
import { toast } from 'sonner';
import { useProjects } from '@/hooks/data/useProjects';

const schema = z.object({
    name: z.string().nonempty('Project name is required'),
    github: z.string().url('Must be a valid URL'),
    liveLink: z.string().url('Must be a valid URL'),
    description: z.string().nonempty('Description is required'),
    skills: z.array(z.object({
        name: z.string().nonempty('Skill name is required'),
        icon: z.string().optional(),
    })).nonempty('At least one skill is required'),
    projectImage: z.array(z.string().url('Must be a valid URL')).nonempty('At least one image URL is required'),
});

interface IProjectsModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsModal: React.FunctionComponent<IProjectsModalProps> = ({ isOpen, setIsOpen }) => {
    const {refetch} = useProjects();
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
        control,
        name: 'skills',
    });

    const { fields: imageFields, append: appendImage, remove: removeImage } = useFieldArray({
        control,
        name: 'projectImage',
    });

    const onSubmit = async (data: any) => {
        try {
            const createProjects = await axios.post('/api/projects', data);
            const response = createProjects.data;
            if(response.success){
                toast.success('New Projects Successfully Added');
                refetch();
                setIsOpen(false);
            }
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal showModal={isOpen} setShowModal={setIsOpen} title='Add New Project' fullWidth={true}>
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 rounded w-full">
                <div>
                    <label className="block mb-1 dark:text-gray-200 text-gray-800">Project Name</label>
                    <input
                        {...register('name')}
                        className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                    />
                    
                </div>

                <div>
                    <label className="block mb-1 dark:text-gray-200 text-gray-800">Description</label>
                    <textarea
                        {...register('description')}
                        className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                    />
                    
                </div>

                <div className='grid lg:grid-cols-2 gap-5'>
                    <div>
                        <label className="block mb-1 dark:text-gray-200 text-gray-800">GitHub Link</label>
                        <input
                            {...register('github')}
                            className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                        />
                        
                    </div>
                    <div>
                        <label className="block mb-1 dark:text-gray-200 text-gray-800">Live Link</label>
                        <input
                            {...register('liveLink')}
                            className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                        />
                        
                    </div>
                </div>

              <div className='grid lg:grid-cols-2 gap-5'>
                    <div>
                        <label className="block mb-1 dark:text-gray-200 text-gray-800">Skills</label>
                        {skillFields.map((field, index) => (
                            <div key={field.id} className="flex items-center mb-2 space-x-2">
                                <input
                                    {...register(`skills.${index}.name`)}
                                    placeholder="Skill Name"
                                    className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                                />
                                <input
                                    {...register(`skills.${index}.icon`)}
                                    placeholder="Skill Icon (optional)"
                                    className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeSkill(index)}
                                    className="p-1 text-red-400 rounded"
                                >
                                <SquareX size={35} />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => appendSkill({ name: '', icon: '' })}
                            className="p-2 mt-2 border border-red-400 bg-red-400 bg-opacity-5 dark:bg-opacity-5 rounded"
                        >
                            Add Skill
                        </button>
                    </div>

                    <div>
                        <label className="block mb-1 dark:text-gray-200 text-gray-800">Project Images</label>
                        {imageFields.map((field, index) => (
                            <div key={field.id} className="flex items-center mb-2 space-x-2">
                                <input
                                    {...register(`projectImage.${index}`)}
                                    placeholder="Image URL"
                                    className="dark:bg-gray-800 bg-gray-200 w-full p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400"
                                />

                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="p-1 text-red-400 rounded"
                                >
                                    <SquareX size={35} />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => appendImage('')}
                            className="p-2 mt-2 border border-red-400 bg-red-400 bg-opacity-5 dark:bg-opacity-5 rounded"
                        >
                            Add Image
                        </button>
                    </div>
              </div>

                <button type="submit" className="w-full p-2 text-white mt-12 bg-red-500 rounded">
                    Create Project
                </button>
            </form>
        </Modal>
    );
};

export default ProjectsModal;
