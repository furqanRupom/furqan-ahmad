import Navbar from '@/components/shared/Navbar';
import * as React from 'react';

interface IHomeLayoutProps {
    children:React.ReactNode
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({children}) => {
  return <>

  <Navbar />
  {children}
  </>;
};

export default HomeLayout;
