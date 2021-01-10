import React, {useEffect, useState} from 'react';

const FeatureCard = (props) => {
    const { moreClass = "", svg, title, description, reversed = false } = props;

    return (
        <div className={"col-span-3 lg:col-span-1 " + moreClass}>
            <div className="flex items-center w-full">
                <div className={(reversed ? "order-2 lg:order-1" : "")}>
                    {svg}
                </div>
                <div className={"py-6 h-52 lg:h-50 w-full lg:w-64 flex justify-center shadow-2xl shadow-inner border border-graybell rounded-3xl bg-gradient-to-tl from-graybell via-graybell-light to-graybell bg-opacity-60" + (reversed ? "order-1 lg:order-2" : "") }>
                    <div className="w-9/12 flex flex-col items-center justify-center text-center">
                        <h4 className="text-gray-50 text-2xl md:text-3xl lg:text-2xl">
                            {title}
                        </h4>

                        <p className="text-indigo-400 mt-3 text-sm md:text-base lg:text-sm">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;