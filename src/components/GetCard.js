import React from 'react';

const FeatureCard = (props) => {
    const { svg, title } = props;

    return (
        <div className="mx-2">
            <div className="w-full py-3 px-6 flex items-center justify-between shadow-2xl shadow-inner border border-graybell rounded-3xl bg-gradient-to-tl from-graybell via-graybell-light to-graybell bg-opacity-60">
                <div className="w-2/5">
                    {svg}
                </div>
                <div className="w-3/5">
                    <h4 className="text-gray-50 text-xl">
                        {title}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;