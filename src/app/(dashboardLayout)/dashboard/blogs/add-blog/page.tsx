"use client";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';



const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const BlogEditor = () => {
    const { register, handleSubmit, control } = useForm();
    const {data} = useSession();
    const email = data?.user?.email;
    const router = useRouter();
         const onSubmit = async (data:any) => {
          
            try {
                const createBlogs = await axios.post('/api/blogs',{...data,email});
                const response = await createBlogs.data;
                if(response.success){
                    toast.success('Blog successfully posted !');
                    router.push('/dashboard/blogs')
                }
            
            } catch (error:any) {
                console.log(error)
                 toast.error(error.message);
            }
         }
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold text-center mb-4">Post New Blog</h1>
      
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-4xl mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        {...register('title', { required: true })}
                        className="shadow appearance-none border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <Controller
                        name="content"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <ReactQuill {...field} style={{ height: '200px', maxHeight: '500px',borderRadius:'1rem',border:"transparent" }} />}
                    />
                </div>
                <div className="flex items-center justify-between mt-14">
                    <button
                        type="submit"
                        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                    >
                        Create Blog
                    </button>
                </div>
              
            </form>
        </div>
    );
};

export default BlogEditor;
