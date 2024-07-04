"use client"
import { useProjects } from '@/hooks/data/useProjects';
import * as React from 'react';
import BreadCumbDashboard from '@/ui/BredCumbDashboard/BreadCumbDashboard';

interface IProjectsProps { }

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  const { data, refetch } = useProjects();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const projects = data?.data;

  return (
    <div className="px-8">
      <BreadCumbDashboard items={['home', 'Project']} />

      <div className='flex justify-between  pt-10'>
        <input
          className='dark:bg-gray-800 bg-gray-200 w-[25%] p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400'
          placeholder='Search Here'
          type="text"
        />
        <button
          onClick={() => setIsOpen(true)}
          className='py-3 px-5 rounded-2xl hover:bg-red-500 bg-red-400 font-bold capitalize text-white'
        >
          Add New Blog
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        {projects && projects.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-3xl">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Images</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">GitHub</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Live Link</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {projects.map((project: any) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                    <ul>

                      <li className="mb-2">
                        <img src={project.projectImage[0]} alt={`Project ${project.name} `} className="h-12 w-12 object-cover rounded-md" />
                      </li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{project.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{project.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    <a href={project.github} className="text-blue-500 hover:underline">GitHub</a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    <a href={project.liveLink} className="text-blue-500 hover:underline">Live Link</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-300">
            No projects available.
          </div>
        )}
      </div>

    </div>
  );
};

export default Projects;
