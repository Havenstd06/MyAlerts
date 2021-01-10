import React, {useEffect, useState} from 'react';

const FeatureCard = (props) => {
    const { image, title, description, titleBr = false, descBr = false } = props;

    return (
        <div className="col-span-1">
            <div className="py-6 h-75 w-full flex justify-center shadow-lg border border-graybell rounded-2xl bg-gradient-to-tl from-graybell via-graybell-light to-graybell bg-opacity-60">
                <div className="w-10/12 flex flex-col items-center text-center">
                    <img src={image} alt="icon" />

                    <h4 className={"text-gray-50 text-xl mt-4" + (titleBr ? " w-3/5" : "")}>
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