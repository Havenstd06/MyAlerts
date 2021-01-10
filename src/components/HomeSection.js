import React from "react";
import HeaderPhone from "./HeaderPhone";

function HomeSection() {
    return (
        <div className="text-gray-700">
            <div className="md:max-w-7xl flex flex-col items-center px-4 py-16 mx-auto lg:px-20 lg:py-16 md:flex-row">
                <div className="flex flex-col items-center w-full pt-0 mt-16 text-left lg:flex-grow md:w-1/2 lg:mr-16 lg:pr-16 md:pr-14 md:items-start md:text-left md:mt-8 lg:text-center order-2 md:order-1">
                    <h1 className="text-4xl tracking-wider text-center text-lightbell lg:text-left lg:text-6xl" data-aos="zoom-y-out" data-aos-delay="200">
                        Don't Miss
                    </h1>
                    <h1 className="text-4xl tracking-wider text-center text-gray-50 lg:text-left lg:text-6xl" data-aos="zoom-y-out" data-aos-delay="400">
                        Releases
                    </h1>
                    <h1 className="mb-8 text-4xl tracking-wider text-center text-lightbell lg:text-left lg:text-6xl" data-aos="zoom-y-out" data-aos-delay="600">
                        With MyAlerts
                    </h1>
                    <div className="flex md:flex-row flex-col items-center md:items-start justify-center md:justify-start w-full">
                        <input
                            className="flex-grow w-3/5 py-1 mb-4 mx-4 text-sm text-gray-200 bg-transparent border-b-2 border-gray-50 focus:outline-none sm:mb-0"
                            placeholder="Your Phone Number"
                            type="telephone"
                            data-aos="zoom-y-out"
                            data-aos-delay="700"
                        />

                        <a
                            href="#"
                           className="w-2/5 ml-4 inline-flex justify-center items-center px-2 py-2.5 border border-transparent rounded-full shadow-sm text-white bg-lightbell-light hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                            data-aos="zoom-y-out" data-aos-delay="800"
                        >
                            Join Today
                        </a>
                    </div>
                </div>
                <div className="w-full lg:max-w-lg lg:w-full md:w-1/2 order-1 md:order-2">
                    {/*<HeaderPhone />*/}
                    <img className="object-cover object-center rounded-lg mx-auto" alt="Phone"
                         src="https://i.imgur.com/3u0i6ty.png"
                         data-aos="zoom-y-out" data-aos-delay="900"
                    />
                </div>
            </div>
            <h1 className="hidden sm:block text-center text-gray-600 uppercase tracking-widest font-inter text-xs mb-4">
                Scroll to learn more
            </h1>
        </div>
    )
}

export default HomeSection;
