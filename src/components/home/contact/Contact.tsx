"use client";

import Button from '@/ui/Button/Button';
import { House, Mail, Phone } from 'lucide-react';
import React from 'react';

const ContactMe: React.FC = () => {


    return (
        <section id="contact-me" className=" pt-32  dark:bg-gray-900 text-gray-900 dark:text-white py-16  transition-colors duration-300 grid  grid-cols-1 lg:grid-cols-2 items-center">
            <div className="contact-container max-w-4xl w-full mx-auto p-8 bg-white rounded-lg shadow-lg dark:bg-gray-950 dark:bg-opacity-20">
                <h2 className="text-4xl font-bold text-red-400 dark:text-red-400 mb-8 text-center">Let's work together!</h2>
                <p className="text-center mb-8">I design and code beautifully simple things and I love what I do. Just simple like that!</p>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className="bg-gray-200 dark:bg-gray-900 focus:outline-red-400  p-4 rounded-md" type="text" placeholder="First name" />
                        <input className="bg-gray-200 dark:bg-gray-900 focus:outline-red-400  p-4 rounded-md" type="text" placeholder="Last name" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className="bg-gray-200 dark:bg-gray-900 focus:outline-red-400  p-4 rounded-md" type="email" placeholder="Email address" />
                        <input className="bg-gray-200 dark:bg-gray-900 focus:outline-red-400  p-4 rounded-md" type="text" placeholder="Phone number" />
                    </div>
                    <div>
                        <select className="bg-gray-200 dark:bg-gray-900 focus:outline-red-400  p-4 rounded-md w-full">
                            <option>Choose Service</option>
                        </select>
                    </div>
                    <div>
                        <textarea className="bg-gray-200 dark:bg-gray-900 focus:outline-red-400  p-4 rounded-md w-full" rows={4} placeholder="Message"></textarea>
                    </div>
                    <div className="text-center w-fit">
                        <Button>Send Message</Button>
                    </div>
                </form>
             
            </div>

            <div className="mt-8 flex flex-col space-y-12 mx-auto  justify-center text-center md:text-left">
                <div className="mb-4 md:mb-0 flex items-center space-x-3 flex-col lg:flex-row">
                        <h3><Phone size={40} className='text-red-400' /></h3>
                    <div >
                        <h4 className="text-red-400  font-bold">Phone</h4>
                        <p className='text-2xl'>(+880) 1910882855</p>
                    </div>
                </div>
                <div className="mb-4 md:mb-0 flex items-center space-x-3 flex-col lg:flex-row">
                    <Mail size={40} className='text-red-400' />
                  <div>
                        <h4 className="text-red-400  font-bold">Email</h4>
                        <p className='text-2xl'>furqanrupom978@gmail.com</p>
                  </div>
                </div>
                <div className='flex items-center space-x-3 flex-col lg:flex-row'>
                    <House size={40} className='text-red-400' />
                    <div>
                        <h4 className="text-red-400  font-bold">Address</h4>
                        <p className='text-2xl'>Rampur<br /> feni, Bangladesh</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
