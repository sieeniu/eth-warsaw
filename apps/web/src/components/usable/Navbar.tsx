import React, { useState } from 'react';
import { IDKitVerification } from '@/components/usable/Verify';

const Navbar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <header className="py-4 bg-black sm:py-6">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="shrink-0">
                        <a href="#" title="" className="flex">
                            <img
                                className="w-auto h-12"
                                src="/quantum_glm.png"
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <p className="text-white ml-2 leading-none">
                        Quantum
                        <br />
                        <span className="block text-center">GLM</span>
                    </p>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="text-white"
                            onClick={() => setExpanded(!expanded)}
                            aria-expanded={expanded}
                        >
                            {expanded ? (
                                <svg
                                    className="w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    <nav className="hidden ml-20 mr-auto lg:flex lg:items-center lg:justify-start lg:space-x-12">
                        <a
                            href="/tasks"
                            className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                        >
                            Zadania
                        </a>
                        <a
                            href="#"
                            className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                        >
                            Support
                        </a>
                    </nav>

                    <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-8">
                        <div className="relative inline-flex items-center justify-center group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                            <a
                                href="#"
                                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                                role="button"
                            >
                                <IDKitVerification/>
                            </a>
                        </div>
                    </div>
                </div>

                {expanded && (
                    <nav>
                        <div className="flex flex-col pt-8 pb-4 space-y-6">
                            <a
                                href="#"
                                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                            >
                                Products
                            </a>
                            <a
                                href="#"
                                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                            >
                                Support
                            </a>

                            <div className="relative inline-flex items-center justify-center group">
                                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                                    role="button"
                                >
                                    <IDKitVerification/>
                                </a>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;