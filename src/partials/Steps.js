import React from 'react';
import Fade from 'react-reveal/Fade';

import StepOne from "../components/svgr/steps-icons/StepOne";
import StepCard from "../components/StepCard";
import StepTwo from "../components/svgr/steps-icons/StepTwo";
import StepThree from "../components/svgr/steps-icons/StepThree";


const Steps = (props) => {
    const { id = null } = props;

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-20" id={id}>

            <Fade>
                <h1 className="text-gray-50 text-4xl text-center pt-16">
                    Steps To Join
                </h1>
            </Fade>

            <div data-aos="zoom-y-out" data-aos-delay="0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 mt-8 lg:-ml-8 z-50">

                    <div className="z-40">
                        <Fade>
                            <StepCard svg={<StepOne className="transform translate-x-0 lg:translate-x-1/3" />}
                                      title="Enter Your Phone Number"
                                      description="Enter your phone number at the Website and Click on “Join Today”"
                                      moreClass="lg:pl-8"
                            />
                        </Fade>
                    </div>

                    <div className="z-40">
                        <Fade>
                            <StepCard svg={<StepTwo className="transform -translate-x-1/7 lg:translate-x-1/3 relative" />}
                                      title="Signup and Subscribe"
                                      description="Once you filled your Billing information and Region, Click on “Subscribe”"
                                      reversed={true}
                            />
                        </Fade>
                    </div>

                    <div className="z-40">
                        <Fade>
                            <StepCard svg={<StepThree className="transform translate-x-1/7 lg:translate-x-1/3 relative" />}
                                      title="Prepare to Cook!"
                                      description="You will be redirected to your dashboard and will now receive Alerts!"
                            />
                        </Fade>
                    </div>
                </div>

                <svg
                    className="hidden lg:block absolute inset-x-0 mx-auto top-4/8 transform -translate-x-3/4 z-20"
                    width="222" height="4" viewBox="0 0 222 4" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path opacity="0.19322" d="M2 2C2 2 268.215 2 217.945 1.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 10"/>
                </svg>

                <svg
                    className="hidden lg:block absolute inset-x-0 mx-auto top-4/8 left-16 transform translate-x-full z-20"
                    width="222" height="4" viewBox="0 0 222 4" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path opacity="0.19322" d="M2 2C2 2 268.215 2 217.945 1.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 10"/>
                </svg>
            </div>
        </div>
    );
}

export default Steps;
