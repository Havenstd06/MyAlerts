import React from "react";
import Transition from "../utils/Transition";

const Question = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="shadow-2xl shadow-inner border border-graybell rounded-3xl bg-gradient-to-tl from-graybell via-graybell-light to-graybell bg-opacity-60 px-8">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium text-gray-50">
                    {title}
                </p>
                <div className="flex items-center justify-center">
                    <svg
                        className={`w-4 text-gray-600 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180' : ''
                        }`}
                        width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.062 16C25.2929 16.0065 24.5501 15.7206 23.984 15.2L14.984 6.706L5.99999 15.19C4.8276 16.2704 3.02238 16.2704 1.84999 15.19C1.30136 14.6855 0.989149 13.9743 0.989149 13.229C0.989149 12.4837 1.30136 11.7725 1.84999 11.268L12.92 0.814005C14.0888 -0.271639 15.8972 -0.271639 17.066 0.814005L28.132 11.268C28.6817 11.7718 28.9948 12.4833 28.9948 13.229C28.9948 13.9747 28.6817 14.6862 28.132 15.19C27.5701 15.7134 26.8299 16.003 26.062 16Z" fill="#98A3FD"/>
                    </svg>
                </div>
            </button>
            <Transition
                show={isOpen}
                appear={true}
                enter="duration-150 ease-out"
                enterStart="opacity-0 scale-95"
                enterEnd="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-95"
            >
                <div className="p-4 pt-0 max-w-3xl">
                        <p className="text-indigo-400">{children}</p>
                </div>
            </Transition>
        </div>
    );
};

export default Question;