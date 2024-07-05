"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Title from '@/components/Title/Title';
import Button from '@/ui/Button/Button';
import { useBlogs } from '@/hooks/data/useBlogs';
import moment from "moment"
import ReactHtmlParser from 'html-react-parser';
import HTMLReactParser from 'html-react-parser/lib/index';
import { useQuery } from '@tanstack/react-query';
import getBlogsData from '@/actions/server/blogsAction';

interface IBlog {
    title: string;
    content: string;
    author: string;
    link: string;
}

interface IBlogsPageProps { }

const BlogsSection: React.FunctionComponent<IBlogsPageProps> = (props) => {
    const blogsRef = useRef<HTMLDivElement>(null);

    // Mock data for blog items
    const mockBlogs: IBlog[] = [
        {
            title: 'Getting Started with React Hooks',
            content:
                'Learn how to use React Hooks to simplify state management and side effects in your applications.',
            author: 'Furqan ahmad',
            link: '#',
        },
        {
            title: 'Mastering TailwindCSS for Responsive Design',
            content:
                'Discover advanced techniques for using TailwindCSS to create beautiful and responsive layouts.',
            author: 'Furqan ahmad',
            link: '#',
        },
        {
            title: 'Using Prisma with PostgreSQL for Database Management',
            content:
                'Explore how Prisma can streamline database management tasks when using PostgreSQL in your projects.',
            author: 'Furqan ahmad',
            link: '#',
        },
    ];
   
    const {data:blogsData,refetch}  = useQuery({
        queryKey:['blogs'],
        queryFn:async () => await getBlogsData() 
    })

    console.log(blogsData)
    useEffect(() => {
        const section = blogsRef.current;

        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <section id="blogs" ref={blogsRef} className="pt-16 px-8">
           <Title title='My Recent Blogs' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
                {blogsData?.map((blog:any, index:any) => (
                    <div key={index} className=" rounded-lg dark:bg-gray-950 dark:bg-opacity-20  shadow-lg p-4 flex flex-col">
                        <div className="flex items-start">
                            <img 
                                src="https://i.ibb.co/nkcHYb3/fab2.png"
                                alt="Avatar"
                                className="h-12 w-12 rounded-xl object-cover mr-4 border border-red-400"
                            />
                            <div>
                                <h3 className="text-lg font-bold dark:text-white text-gray-900">{blog.title}</h3>
                               <div className='inline-flex space-x-3'>
                                    <p className="text-sm dark:text-gray-400  text-gray-700">{blog.author.name}</p>
                                    <p className="text-sm   dark:text-gray-400 text-gray-700">{moment(blog.createdAt).format('lll')}</p>
                               </div>
                            </div>
                        </div>
                        <p className="dark:text-gray-400  my-4">{HTMLReactParser(blog.content)}</p>
                       <div className='w-fit mt-auto'>
                            <button className='flex items-center  px-3 py-2 text-sm  bg-opacity-15 bg-red-400 text-red-400 rounded-xl cursor-pointer hover:bg-red-400 hover:text-white duration-100 border-red-400 border'>
                                Read more
                            </button>
                       </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogsSection;
