import React from 'react';

const Footer = (props) => {
    const { id = null } = props;

    return (
        <footer className="text-gray-700 bg-indigo-400" id={id}>
            <div className="container flex flex-col flex-wrap justify-between px-5 py-6 mx-auto lg:px-20 sm:flex-row">
                <span className="inline-flex items-center justify-center mt-2 sm:mt-0 sm:justify-start">
                    {/*Twitter*/}
                    {/*<a href="#" className="text-bluebell transition duration-200 ease-out hover:text-graybell">*/}
                    {/*    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                    {/*         className="w-6 h-6" viewBox="0 0 24 24">*/}
                    {/*        <path*/}
                    {/*            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">*/}
                    {/*        </path>*/}
                    {/*    </svg>*/}
                    {/*</a>*/}

                    {/*Instagram*/}
                    <a href="#" className="text-bluebell transition duration-200 ease-out hover:text-graybell">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/my.alerts/?igshid=a4y5jvcf9dx0" className="ml-4 text-bluebell text-sm font-inter font-medium tracking-wider transition duration-200 ease-out hover:text-graybell">
                        @MY.ALERTS
                    </a>
                </span>
                <span className="inline-flex items-center justify-center mt-2 sm:mt-0 sm:justify-start">
                    <h2 className="uppercase text-bluebell text-sm font-inter font-medium tracking-wider transition duration-200 ease-out hover:text-graybell">
                        &copy;{new Date().getFullYear()} Alerts IO LLC
                    </h2>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
