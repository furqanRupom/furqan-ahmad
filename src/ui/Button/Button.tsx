import * as React from 'react';

interface IButtonProps {
    link?:string;
    children:React.ReactNode
}

const Button: React.FunctionComponent<IButtonProps> = ({link,children}) => {
  return <>
      <a href={link} className='flex items-center  px-5 py-2 lg:px-7 lg:py-3 bg-opacity-15 bg-red-400 text-red-400 rounded-3xl hover:bg-red-400 hover:text-white duration-100 border-red-400 border'>
          <h3>{children}</h3>
      </a>
  </>;
};

export default Button;
