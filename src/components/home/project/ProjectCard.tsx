import * as React from 'react';

interface IProjectCardProps {
    setShowModal :React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({setShowModal}) => {
  return <section className='w-full min-h-[350px] bg-gray-400 backdrop-blur-lg dark:bg-gray-500 bg-opacity-5  dark:bg-opacity-5 rounded-3xl '>
  <div></div>
   <div></div>

      <button
          onClick={() => setShowModal(true)}
          className="flex items-center  px-5 py-2 lg:px-7 lg:py-3 bg-opacity-15 bg-red-400 text-red-400 rounded-3xl hover:bg-red-400 hover:text-white duration-100 border-red-400 border"
      >
          Project Details
      </button>
  </section>;
};

export default ProjectCard;
