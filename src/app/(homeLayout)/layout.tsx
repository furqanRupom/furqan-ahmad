import ScrollToTopButton from '@/components/ScrollButton/ScrollTop';
import Footer from '@/components/home/footer/Footer';
import Navbar from '@/components/shared/Navbar';
import * as React from 'react';

interface IHomeLayoutProps {
    children:React.ReactNode
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({children}) => {
  return <section >
  <Navbar />
  <ScrollToTopButton />
  {children}
  <Footer />
  </section>;
};

export default HomeLayout;
