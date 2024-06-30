"use client";
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const statsData = [
    { title: "Skills Gained", value: '15', percentage: '+20%', color: 'bg-green-400', textColor: 'text-green-500' },
    { title: "Projects Completed", value: '8', percentage: '+10%', color: 'bg-blue-400', textColor: 'text-blue-500' },
    { title: "Blogs Posted", value: '5', percentage: '+25%', color: 'bg-red-400', textColor: 'text-red-500' },
    { title: 'Certifications', value: '3', percentage: '+50%', color: 'bg-yellow-400', textColor: 'text-yellow-500' },
];

const chartData = [
    { name: 'Jan', skills: 2, projects: 1, blogs: 1 },
    { name: 'Feb', skills: 3, projects: 1, blogs: 1 },
    { name: 'Mar', skills: 2, projects: 2, blogs: 1 },
    { name: 'Apr', skills: 3, projects: 1, blogs: 0 },
    { name: 'May', skills: 1, projects: 2, blogs: 1 },
    { name: 'Jun', skills: 4, projects: 1, blogs: 1 },
    { name: 'Jul', skills: 3, projects: 2, blogs: 0 },
];

const HomePage = () => {
    return (
        <div className="space-y-6">
            <div className="mt-12">
                <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                    {statsData.map((data, index) => (
                        <div key={index} className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className={`bg-clip-border mx-4 rounded-xl overflow-hidden ${data.color} shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                        clipRule="evenodd"
                                    />
                                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                                </svg>
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                                    {data.title}
                                </p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                                    {data.value}
                                </h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    <strong className={data.textColor}>{data.percentage}</strong>&nbsp;than last month
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={chartData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                          
                            <Legend />
                            <Line type="monotone" dataKey="skills" strokeWidth={2} stroke="#8884d8" />
                            <Line type="monotone" dataKey="projects" strokeWidth={2} stroke="#82ca9d" />
                            <Line type="monotone" dataKey="blogs" strokeWidth={2} stroke="#ffc658" />
                        </LineChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={chartData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                         
                            <Legend />
                            <Bar dataKey="skills" fill="#8884d8" />
                            <Bar dataKey="projects" fill="#82ca9d" />
                            <Bar dataKey="blogs" fill="#ffc658" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
