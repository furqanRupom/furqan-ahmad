"use client"
import { useProjects } from '@/hooks/data/useProjects';
import * as React from 'react';
import BreadCumbDashboard from '@/ui/BredCumbDashboard/BreadCumbDashboard';
import { useBlogs } from '@/hooks/data/useBlogs';
import Link from 'next/link';

interface IProjectsProps { }

const Blogs: React.FunctionComponent<IProjectsProps> = (props) => {
  const { data, refetch } = useBlogs();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const blogs = data?.data;
  

  return (
    <div className="px-8">
      <BreadCumbDashboard items={['home', 'Blogs']} />

      <div className='flex justify-between  pt-10'>
        <input
          className='dark:bg-gray-800 bg-gray-200 w-[25%] p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400'
          placeholder='Search Here'
          type="text"
        />
        <Link href="/dashboard/blogs/add-blog"
          className='py-3 px-5 rounded-2xl hover:bg-red-500 bg-red-400 font-bold capitalize text-white'
        >
          Add New Blog
        </Link>
      </div>

      <div className="mt-6 overflow-x-auto">
        {blogs && blogs.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-3xl">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
       
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Blog Posted</th>
           
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {blogs.map((blog: any) => (
                <tr key={blog.id}>
                
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{blog.author.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{blog.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{blog.createdAt}</td>
  
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-300">
            No Blogs available.
          </div>
        )}
      </div>

    </div>
  );
};

export default Blogs;
