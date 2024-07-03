import Image from 'next/image';
import * as React from 'react';
import redLogo from "../../../assets/images/logo/white.png";
import Link from 'next/link';
import Button from '@/ui/Button/Button';

interface IFooterProps { }

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="mt-20 dark:bg-gray-950 dark:bg-opacity-20 xl:mt-32 mx-auto w-full relative text-center bg-gray-600 bg-opacity-5 ">
      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
          Ready to boost your productivity?
          <br />
          <span> Start your journey with me today.</span>
        </h2>
        <div className="w-fit mx-auto py-5">
          <Button>
            Hire Me
          </Button>
        </div>
        <div className="mt-4">
          <nav className="flex flex-wrap justify-center text-lg font-medium space-x-2 md:space-x-4 lg:space-x-6">
            <Link href="#contact-me">
              <h3 className="px-2 py-1 md:px-5 md:py-2">Contact</h3>
            </Link>
            <Link href="#blogs">
              <h3 className="px-2 py-1 md:px-5 md:py-2">Blogs</h3>
            </Link>
            <Link href="#projects">
              <h3 className="px-2 py-1 md:px-5 md:py-2">Projects</h3>
            </Link>
            <Link href="#skills">
              <h3 className="px-2 py-1 md:px-5 md:py-2">Skills</h3>
            </Link>
            <Link href="#about-me">
              <h3 className="px-2 py-1 md:px-5 md:py-2">About</h3>
            </Link>
          </nav>
          <p className="mt-7 text-base">
            &copy; {new Date().getFullYear()} All rights reserved by Furqan Ahmad. Designed and built with ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
