import React from "react";
import Logo from "./svgr/Logo";
import Transition from "../utils/Transition";

function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
            <div>
                <div className="max-w-7xl mx-auto px-8 sm:px-6 mb-12 md:mb-0">
                    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center"
                         aria-label="Global">
                        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <a href="#" data-aos="zoom-y-out" data-aos-delay="200">
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
                        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 md:space-x-10" data-aos="zoom-y-out" data-aos-delay="500">
                            <a href="#" className="font-medium text-indigo-300 hover:text-indigo-500 transition duration-200 ease-out">
                                Home
                            </a>

                            <a href="#" className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out">
                                Features
                            </a>

                            <a href="#" className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out">
                                Steps
                            </a>

                            <a href="#" className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out">
                                Alerts
                            </a>

                            <a href="#" className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out">
                                FAQ
                            </a>

                            <a href="#" className="font-medium text-gray-50 hover:text-gray-400 transition duration-200 ease-out">
                                Testimonial
                            </a>
                        </div>
                    </nav>
                </div>


                  {/*Mobile menu, show/hide based on menu open state.*/}

                  {/*Entering: "duration-150 ease-out"*/}
                  {/*  From: "opacity-0 scale-95"*/}
                  {/*  To: "opacity-100 scale-100"*/}
                  {/*Leaving: "duration-100 ease-in"*/}
                  {/*  From: "opacity-100 scale-100"*/}
                  {/*  To: "opacity-0 scale-95"*/}

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
                    <div className="md:hidden">
                        <div className="fixed inset-0 flex z-50">
                            <div className="fixed inset-0">
                                <div className="absolute inset-0 bg-indigo-300 bg-opacity-90 w-full">
                                    <div className="flex items-center justify-between flex-col py-12 px-4 h-screen">
                                        <img src="https://i.imgur.com/EkkJ6mb.png" alt="MyAlerts" />
                                        <div className="mb-8 mt-3">
                                            <div className="flex flex-col items-center space-y-8 mt-8">
                                                <span className="text-4xl text-indigo-600 hover:text-indigo-700 transition duration-200 ease-out">
                                                    Home
                                                </span>

                                                <span className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out">
                                                    Features
                                                </span>

                                                <span className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out">
                                                    Steps
                                                </span>

                                                <span className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out">
                                                    Alerts
                                                </span>

                                                <span className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out">
                                                    FAQ
                                                </span>

                                                <span className="text-4xl text-gray-50 hover:text-gray-200 transition duration-200 ease-out">
                                                    Testimonial
                                                </span>
                                            </div>
                                        </div>
                                        <img src="https://i.imgur.com/Qg2Qwin.png" className="ml-6" onClick={() => setNavbarOpen(!navbarOpen)} alt="Close"/>
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