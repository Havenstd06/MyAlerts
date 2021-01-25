import React from 'react';

const TestimonialItem = (props) => {
    const { moreClass = "", text, author, } = props;

    return (
        <div className={"relative focus:outline-none " + moreClass}>
            <div>
                <div className="max-w-full md:max-w-2xl mx-auto text-center text-2xl lg:text-3xl leading-9 font-medium text-indigo-400">
                    <p>
                        &ldquo;{text}&rdquo;
                    </p>
                </div>
                <footer className="mt-8">
                    <div className="md:flex md:items-center md:justify-center">
                        <div
                            className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                            <div className="font-inter text-base font-thin uppercase tracking-widest text-gray-50">
                                {author}
                            </div>

                            <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                                 fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 0h3L9 20H6l5-20z"/>
                            </svg>

                            <div className="text-base font-medium text-gray-300">
                                Customer
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default TestimonialItem;