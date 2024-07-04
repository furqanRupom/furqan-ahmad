"use client";
import * as React from 'react';

interface IBreadcrumbDashboardProps {
    items: string[];
}

const BreadcrumbDashboard: React.FunctionComponent<IBreadcrumbDashboardProps> = ({ items }) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items?.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        {index !== items.length - 1 ? (
                            <>
                                <a href="#" className="text-gray-700 hover:text-gray-900 text-lg font-medium">
                                    {item}
                                </a>
                                <svg
                                    className="w-4 h-4 text-gray-400 mx-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </>
                        ) : (
                            <span className="text-gray-500 text-lg font-medium">{item}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default BreadcrumbDashboard;

