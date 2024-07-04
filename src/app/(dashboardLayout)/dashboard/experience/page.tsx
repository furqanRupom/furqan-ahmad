"use client"
import { useExperience } from '@/hooks/data/useExperience';
import * as React from 'react';
import BreadCumbDashboard from '@/ui/BredCumbDashboard/BreadCumbDashboard';
import ExperienceModal from './components/ExperienceModal';


interface IExperienceProps { }

const Experience: React.FunctionComponent<IExperienceProps> = (props) => {
  const { data, refetch } = useExperience();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const experience = data?.data;

  return (
    <div className="px-8">
      <BreadCumbDashboard items={['home', 'Experience']} />

      <div className='flex justify-between pt-10'>
        <input
          className='dark:bg-gray-800 bg-gray-200 w-[25%] p-2 focus:outline-none dark:focus:outline-none outline-none rounded-xl border border-gray-400'
          placeholder='Search Here'
          type="text"
        />
        <button
          onClick={() => setIsOpen(true)}
          className='py-3 px-5 rounded-2xl hover:bg-red-500 bg-red-400 font-bold capitalize text-white'
        >
          Add New Experience
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        {experience && experience.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-3xl">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">End Date</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {experience.map((exp: any) => (
                <tr key={exp.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{exp.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{exp.companyName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{new Date(exp.startDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{new Date(exp.endDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-300">
            No Experience available.
          </div>
        )}
      </div>

      {isOpen && <ExperienceModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Experience;
