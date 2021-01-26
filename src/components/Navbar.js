import React from "react";

import AnchorLink from 'react-anchor-link-smooth-scroll'

import Logo from "./svgr/Logo";
import Transition from "../utils/Transition";
import Logo2 from "./svgr/Logo2";
import CloseIcon from "./svgr/CloseIcon";

function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
            <div>
                <div className="max-w-7xl mx-auto px-8 sm:px-6 mb-12 md:mb-0">
                    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center"
                         aria-label="Global">
                        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <a href="https://myalerts.io" data-aos="zoom-y-out" data-aos-delay="1500">
                                    <span className="sr-only">MyAlerts</span>
                                    <Logo />
                                </a>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <button type="button"
                                            className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none"
                                            id="main-menu" aria-haspopup="true"
                                            onClick={() => setNavbarOpen(!navbarOpen)}
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="27" width="20.25" height="4.5" rx="2.25" fill="white"/>
                                            <rect y="13.5" width="40.5" height="4.5" rx="2.25" fill="white"/>
                                            <rect width="40.5" height="4.5" rx="2.25" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 space-x-6 lg:space-x-10"
                             data-aos="zoom-y-out"
                             data-aos-delay="1800">

                            <AnchorLink href="#home"
                                        offset='100'
                                        className="font-medium text-indigo-300 hover:text-indigo-500 transition duration-200 ease-out cursor-pointer"
                            >
                                Home
                            </AnchorLink>

                            <AnchorLink href="#features"
                                        offset='-25'
                                        className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out cursor-pointer"
                            >
                                Features
                            </AnchorLink>

                            <AnchorLink href="#steps"
                                        offset='-25'
                                        className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out cursor-pointer"
                            >
                                Steps
                            </AnchorLink>

                            <AnchorLink href="#get"
                                        offset='-25'
                                        className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out cursor-pointer"
                            >
                                Alerts
                            </AnchorLink>

                            <AnchorLink href="#faq"
                                        offset='-25'
                                        className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out cursor-pointer"
                            >
                                FAQ
                            </AnchorLink>

                            <AnchorLink href="#testimonial"
                                        offset='-25'
                                        className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out cursor-pointer"
                            >
                                Testimonials
                            </AnchorLink>

                            <a href="http://myalerts.io/dashboard"
                               className="w-full inline-flex justify-center items-center px-8 py-2.5 border border-transparent rounded-full shadow-sm font-medium text-gray-50 hover:text-gray-100 bg-lightbell-light hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out">
                                Dashboard
                            </a>
                        </div>
                    </nav>
                </div>

                <Transition
                    show={navbarOpen}
                    appear={true}
                    enter="duration-150 ease-out"
                    enterStart="opacity-0 scale-95"
                    enterEnd="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveStart="opacity-100 scale-100"
                    leaveEnd="opacity-0 scale-95"
                >
                    <div className="md:hidden overflow-hidden">
                        <div className="fixed inset-0 flex z-50 overflow-hidden">
                            <div className="fixed inset-0 overflow-hidden">
                                <div className="absolute inset-0 bg-indigo-300 bg-opacity-90 w-full">
                                    <div className="flex items-center justify-between flex-col py-10 px-4 h-screen overflow-scroll">
                                        <Logo2 />

                                        <div className="mb-6 mt-1">
                                            <div className="flex flex-col items-center space-y-6 mt-6">

                                                <AnchorLink href="#home"
                                                            offset='100'
                                                            className="text-4xl text-indigo-600 hover:text-indigo-700 transition duration-200 ease-out"
                                                            onClick={() => setNavbarOpen(!navbarOpen)}
                                                >
                                                    Home
                                                </AnchorLink>

                                                <AnchorLink href="#features"
                                                            offset='-25'
                                                            className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out"
                                                            onClick={() => setNavbarOpen(!navbarOpen)}
                                                >
                                                    Features
                                                </AnchorLink>

                                                <AnchorLink href="#steps"
                                                            offset='-25'
                                                            className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out"
                                                            onClick={() => setNavbarOpen(!navbarOpen)}
                                                >
                                                    Steps
                                                </AnchorLink>

                                                <AnchorLink href="#get"
                                                            offset='-25'
                                                            className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out"
                                                            onClick={() => setNavbarOpen(!navbarOpen)}
                                                >
                                                    Alerts
                                                </AnchorLink>

                                                <AnchorLink href="#faq"
                                                            offset='-25'
                                                            className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out"
                                                            onClick={() => setNavbarOpen(!navbarOpen)}
                                                >
                                                    FAQ
                                                </AnchorLink>

                                                <AnchorLink href="#testimonial"
                                                            offset='-25'
                                                            className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out"
                                                            onClick={() => setNavbarOpen(!navbarOpen)}
                                                >
                                                    Testimonials
                                                </AnchorLink>

                                                <a href="http://myalerts.io/dashboard"
                                                   className="w-full inline-flex justify-center items-center px-8 py-2.5 border border-transparent rounded-full shadow-sm text-2xl font-medium text-gray-50 hover:text-gray-100 bg-lightbell-light hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out">
                                                    Dashboard
                                                </a>
                                            </div>
                                        </div>
                                        <CloseIcon
                                            className=""
                                            onClick={() => setNavbarOpen(!navbarOpen)}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
    )
}

export default Navbar;