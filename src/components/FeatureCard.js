import React, {useEffect, useState} from 'react';

const FeatureCard = (props) => {
    const { svg, title, description, titleBr = false, descBr = false } = props;

    return (
        <div className="col-span-3 md:col-span-2 lg:col-span-1">
            <div className="py-6 h-72 md:h-75 w-full flex justify-center shadow-2xl shadow-inner border border-graybell rounded-2xl bg-gradient-to-tl from-graybell via-graybell-light to-graybell bg-opacity-60">
                <div className="w-10/12 flex flex-col items-center text-center">
                    <div className="md:h-16 mb-9">
                        {svg}
                    </div>

                    <h4 className={"text-gray-50 text-xl " + (titleBr ? " md:w-3/5" : "")}>
                        {title}
                    </h4>

                    <p className={"text-indigo-400 mt-3 text-sm" + (descBr ? " w-6/7" : "")}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;