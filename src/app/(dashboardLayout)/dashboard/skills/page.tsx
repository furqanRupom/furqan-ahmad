"use client"
import * as React from 'react';
import BreadCumbDashboard from '@/ui/BredCumbDashboard/BreadCumbDashboard';
import SkillsModal from './components/SkillsModal';
import { useSkills } from '@/hooks/data/useSkills';

interface IProjectsProps { }

const SkillPage: React.FunctionComponent<IProjectsProps> = (props) => {
  const { data, refetch } = useSkills();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const skills = data?.data;

  return (
    <div className="px-8">
      <BreadCumbDashboard items={['home', 'Skills']} />

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
          Add New Skills
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        {skills && skills.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-3xl">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Images</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
               
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {skills.map((skill: any) => (
                <tr key={skill.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                    <ul>

                      <li className="mb-2">
                        <img src={skill.icon} alt={`Skill ${skill.name} `} className="h-12 w-12 object-cover rounded-md" />
                      </li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{skill.name}</td>
   
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-300">
            No Skills available.
          </div>
        )}
      </div>

      {isOpen && <SkillsModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default SkillPage;
