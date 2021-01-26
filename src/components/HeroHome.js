import React from "react";
import SvgHeroPhone from "./svgr/HeroPhone";

function HeroHome() {
    return (
        <div className="text-gray-700">
            <div className="md:max-w-7xl flex flex-col items-center px-4 pb-6 mx-auto lg:px-20 lg:py-16 md:flex-row">
                <div className="flex flex-col items-center w-full pt-0 mt-7 sm:mt-16 text-left lg:flex-grow md:w-1/2 lg:mr-16 lg:pr-16 md:pr-14 md:items-start md:text-left md:mt-8 lg:text-center order-2 md:order-1">
                    <h1 className="tracking-wider text-center text-lightbell md:text-left text-5xl lg:text-6xl" data-aos="zoom-y-out" data-aos-delay="1500">
                        Don't Miss
                    </h1>
                    <h1 className="tracking-wider text-center text-gray-50 md:text-left text-5xl lg:text-6xl" data-aos="zoom-y-out" data-aos-delay="1700">
                        Releases
                    </h1>
                    <h1 className="mb-8 tracking-wider text-center text-lightbell md:text-left text-5xl lg:text-6xl" data-aos="zoom-y-out" data-aos-delay="1900">
                        With MyAlerts
                    </h1>
                    <div className="flex xl:flex-row flex-col items-center xl:items-start justify-center xl:justify-start w-5/6 md:w-3/4 xl:w-full">
                        <input
                            className="px-4 w-full xl:w-3/5 flex-grow text-center md:text-left py-1 mb-4 mr-2 text-base text-gray-200 bg-transparent border-b-2 border-gray-50 focus:outline-none sm:mb-0"
                            placeholder="Your Phone Number"
                            type="tel"
                            data-aos="zoom-y-out"
                            data-aos-delay="2100"
                        />

                        <a
                            href="https://myalerts.io/subscribe"
                            className="w-full xl:w-2/5 xl:ml-4 mt-4 xl:mt-0 inline-flex justify-center items-center px-3 py-3.5 border border-transparent rounded-full shadow-sm text-white bg-lightbell-light hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                            data-aos="zoom-y-out" data-aos-delay="2300"
                        >
                            Join Today
                        </a>
                    </div>
                </div>
                <div
                    className="lg:max-w-lg order-1 md:order-2 md:mt-8"
                    data-aos="zoom-y-out" data-aos-delay="2400">
                    <SvgHeroPhone className="w-full h-full" />
                </div>
            </div>
            <h1 className="hidden sm:block text-center text-gray-600 uppercase tracking-widest font-inter text-xs mb-4">
                Scroll to learn more
            </h1>
        </div>
    )
}

export default HeroHome;
